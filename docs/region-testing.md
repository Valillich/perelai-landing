# Testing region detection

## Why a VPN does not change the currency

`lib/region.ts` never looks at the visitor's IP address. Detection runs entirely in the browser,
in this order (plan §LP5):

1. explicit `perelai-market` override (see below)
2. `Intl.DateTimeFormat().resolvedOptions().timeZone`
3. the region subtag of `navigator.language` (`en-GB` → `GB`)
4. the locale's primary market (`uk` → `UA`, `pl` → `PL`, `en` → `US`)
5. `US`

A VPN moves your exit node. It does not change your operating system's timezone or your browser's
language list, so none of the signals above move with it and the currency stays where it was. This
is deliberate: server-side geolocation would fork indexable content per region, which plan §LP5
forbids because it fragments ranking signals and risks cloaking. The server always renders the
locale's primary market, so the built HTML is byte-identical across regions; the client corrects it
after mount.

## Pinning a market for testing

Append `?market=<code>` to any page:

```
http://localhost:3000/for-independent-colorists?market=PL
```

The value is validated against the generated market list, stored in `localStorage['perelai-market']`,
and then applies to every page you visit afterwards — so you can pin once and browse normally.

| Value | Effect |
|---|---|
| `?market=PL` | pins Poland (PLN); also `US`, `UA`, `GB`, `CA`, `AU`, `DE`, `FR`, `ES`, `EU` |
| `?market=auto` | clears the pin and returns to automatic detection (`reset` and `clear` also work) |
| unsupported value | ignored; any existing pin is left alone |

The pin is client-only and applied after hydration, so it changes nothing about the prerendered HTML,
the canonical URL or the sitemap.

## Where to see the effect

| Surface | What changes |
|---|---|
| `MockFinanceKpis`, `MockVisitCard`, `MockCalendarMonth` on `/` and `/for-independent-colorists` | amounts reformat with the market currency |
| `RegionCurrencyHint` on `/pricing` | prints the detected market code and currency (hidden for `US`, whose currency is the reference one) |

## Testing without the override

To exercise the real detection path, change the signal detection actually reads:

- **timezone** — macOS: System Settings → General → Date & Time → Time Zone; or run Chrome with
  DevTools → ⋮ → More tools → Sensors → Location, which also overrides the timezone.
- **language** — Chrome: Settings → Languages, reorder so the target language is first, then restart
  the tab (`navigator.language` is read at page load).

Clear `localStorage['perelai-market']` first, or the pin will win.
