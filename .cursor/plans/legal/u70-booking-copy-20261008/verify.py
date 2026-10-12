#!/usr/bin/env python3
"""Validate the owner-approved U70 packet; never edits its immutable text or version."""
import argparse
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
LOCALES = {'ru', 'uk', 'en', 'pl', 'es', 'fr', 'de', 'pt', 'tr'}


def sha(data):
    return hashlib.sha256(data).hexdigest()


def check(condition, message):
    if not condition:
        raise SystemExit('FAIL: ' + message)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--app', type=Path)
    args = parser.parse_args()
    record = json.loads((ROOT / 'approval-record.json').read_bytes())
    raw = (ROOT / 'copy.canonical.json').read_bytes()
    data = json.loads(raw)
    canonical = json.dumps(data, ensure_ascii=False, sort_keys=True, separators=(',', ':')).encode('utf-8')
    check(raw == canonical, 'Canonical bytes or Unicode/whitespace serialization drift')
    check(sha(raw) == record['sha256'], 'Canonical digest drift')
    check(json.loads((ROOT / 'copy.json').read_bytes()) == data, 'Readable JSON differs')
    check(record['status'] == 'APPROVED', 'Owner approval record missing')
    check(record['version'] == 'booking-copy-2026-10-08.1', 'Immutable version changed')
    check(record['approvalRef'] == 'owner-u70-booking-copy-r1-20261008', 'Owner approval reference changed')
    check(record['runtimeApprovalGranted'] is True, 'Approved runtime copy must be explicitly authorized')
    check(record['sha256'] == 'a539d29a06c6d23c0d7e22f71c9e2375fa138a9506313ebe535ae55788b17439', 'Immutable approval hash changed')
    check(set(data) == LOCALES, 'Locale set differs')
    keys = set(data['en'])
    check(len(keys) == record['keysPerLocale'] == 44, 'Unexpected copy scope')
    additions = json.loads((ROOT / 'candidate-additions.json').read_bytes())
    for locale, strings in data.items():
        check(set(strings) == keys, 'Key set differs for ' + locale)
        for key, value in strings.items():
            check(isinstance(value, str) and bool(value.strip()), 'Empty/non-string ' + locale + '/' + key)
            check(sorted(re.findall(r'{{\s*(\w+)\s*}}', value)) == sorted(re.findall(r'{{\s*(\w+)\s*}}', data['en'][key])), 'Placeholder drift ' + locale + '/' + key)
            check('[TBD' not in value, 'TBD in copy ' + locale + '/' + key)
            if key in record['candidateOnlyKeys']:
                check(value == additions[locale]['public_booking'][key.split('.', 1)[1]], 'Candidate overlay differs')
    shots = json.loads((ROOT / 'screenshots/index.json').read_bytes())
    matrix = [item for item in shots if item['kind'] == 'three-state-matrix']
    expected = {(locale, state, size) for locale in LOCALES for state in ['initial', 'updated', 'accepted'] for size in ['mobile', 'desktop']}
    actual = {(item['capture']['locale'], item['capture']['state'], item['capture']['size']) for item in matrix}
    check(len(matrix) == 54 and actual == expected, 'Incomplete three-state screenshot matrix')
    check(len(shots) == record['screenshotCount'], 'Screenshot count differs')
    for item in shots:
        image = (ROOT / item['file']).read_bytes()
        check(image[:2] == b'\xff\xd8' and image[-2:] == b'\xff\xd9', 'Not a complete JPEG: ' + item['file'])
        check(sha(image) == item['sha256'], 'Screenshot drift: ' + item['file'])
    if args.app:
        for locale in LOCALES:
            path = args.app / f'apps/web/public/locales/{locale}/common.json'
            raw_locale = path.read_bytes()
            check(sha(raw_locale) == record['installedLocaleSha256'][locale], 'Installed locale snapshot drift: ' + locale)
            source = json.loads(raw_locale)
            for key, value in data[locale].items():
                namespace, local_key = key.split('.', 1)
                check(source[namespace].get(local_key) == value, 'Runtime source string differs: ' + locale + '/' + key)
        for item in json.loads((ROOT / 'unchanged-business-templates.json').read_bytes()):
            check(sha((args.app / item['source']).read_bytes()) == item['sourceSha256'], 'Business template changed: ' + item['version'])
    for item in json.loads((ROOT / 'artifacts.json').read_bytes())['files']:
        path = (ROOT / item['file']).resolve()
        check(path.is_relative_to(ROOT.parent), 'Artifact path escapes legal packet area')
        check(sha(path.read_bytes()) == item['sha256'], 'Packet artifact drift: ' + item['file'])
    print(f"PASS: 9 locales × 44 keys; placeholders/source/canonical SHA-256; 54 matrix + {len(shots)-54} additional JPEGs; packet artifacts")
    print('APPROVED — booking-copy-2026-10-08.1; production rollout remains separate')


if __name__ == '__main__':
    main()
