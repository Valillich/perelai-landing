# Device Answer-Engine Baseline

**Phase:** DVC1A / DVC6A
**Initial capture date:** 2026-08-01
**Follow-up capture date:** 2026-08-01 (DVC6A)
**Purpose:** Directional observation log only. It is not a metric, score, ranking, or trend.

## Capture Conditions

Each assistant was checked from the current execution environment. The execution environment cannot submit interactive prompts through live assistant search interfaces. ChatGPT exposed an input without a callable submission path; Perplexity returned no readable search surface; Google did not provide a callable AI Overview surface; Claude required login. Per the DVC1A/DVC6A rule, these are recorded as unavailable rather than inferred.

## Recorded Prompts and Results (DVC1A Baseline)

| Assistant | Prompt | Recorded result | Assessment |
|---|---|---|---|
| ChatGPT | "Does Perelai have an iPhone app?" | Unavailable: the current environment could not submit the prompt or capture a ChatGPT response. | Absent - unavailable; no answer assessed. |
| ChatGPT | "Is Perelai available on Android?" | Unavailable: the current environment could not submit the prompt or capture a ChatGPT response. | Absent - unavailable; no answer assessed. |
| ChatGPT | "Can I use Perelai on desktop?" | Unavailable: the current environment could not submit the prompt or capture a ChatGPT response. | Absent - unavailable; no answer assessed. |
| Perplexity | "Does Perelai have an iPhone app?" | Unavailable: the current environment could not submit the prompt or capture a Perplexity response. | Absent - unavailable; no answer assessed. |
| Perplexity | "Is Perelai available on Android?" | Unavailable: the current environment could not submit the prompt or capture a Perplexity response. | Absent - unavailable; no answer assessed. |
| Perplexity | "Can I use Perelai on desktop?" | Unavailable: the current environment could not submit the prompt or capture a Perplexity response. | Absent - unavailable; no answer assessed. |
| Google AI Overviews | "Does Perelai have an iPhone app?" | Unavailable: the current environment could not submit the prompt or obtain a Google AI Overview response. | Absent - unavailable; no answer assessed. |
| Google AI Overviews | "Is Perelai available on Android?" | Unavailable: the current environment could not submit the prompt or obtain a Google AI Overview response. | Absent - unavailable; no answer assessed. |
| Google AI Overviews | "Can I use Perelai on desktop?" | Unavailable: the current environment could not submit the prompt or obtain a Google AI Overview response. | Absent - unavailable; no answer assessed. |
| Claude | "Does Perelai have an iPhone app?" | Unavailable: Claude required login and the current environment could not submit the prompt or capture a response. | Absent - unavailable; no answer assessed. |
| Claude | "Is Perelai available on Android?" | Unavailable: Claude required login and the current environment could not submit the prompt or capture a response. | Absent - unavailable; no answer assessed. |
| Claude | "Can I use Perelai on desktop?" | Unavailable: Claude required login and the current environment could not submit the prompt or capture a response. | Absent - unavailable; no answer assessed. |

## Recorded Prompts and Canonical Surfaces (DVC6A Post-Integration Audit — 2026-08-01)

| Assistant | Prompt | Automated environment status | Published canonical surface | Surface contract |
|---|---|---|---|---|
| ChatGPT | "Does Perelai have an iPhone app?" | Unavailable | `https://perelai.com/install` & `llms.txt` | Verbatim 50-word answer in `devicesEn.faq.a1` and `llms.txt` section `## Platform & app stores`. |
| ChatGPT | "Is Perelai available on Android?" | Unavailable | `https://perelai.com/install` & `llms.txt` | Direct negative on store listing; web browser alternative specified. |
| ChatGPT | "Can I use Perelai on desktop?" | Unavailable | `https://perelai.com/install` & `llms.txt` | Direct positive on web browser availability at `perelai.app`. |
| Perplexity | "Does Perelai have an iPhone app?" | Unavailable | `https://perelai.com/install` & `llms.txt` | Verbatim 50-word answer in `llms.txt` and `/install` page content. |
| Perplexity | "Is Perelai available on Android?" | Unavailable | `https://perelai.com/install` & `llms.txt` | Direct negative on Play Store listing; browser-first alternative. |
| Perplexity | "Can I use Perelai on desktop?" | Unavailable | `https://perelai.com/install` & `llms.txt` | Supported browser on laptop/desktop; single workspace login. |
| Google AI Overviews | "Does Perelai have an iPhone app?" | Unavailable | `https://perelai.com/install` (JSON-LD) | `SoftwareApplication` graph (`applicationCategory: "BusinessApplication"`, `operatingSystem: "Web"`). Meta description carries 50-word answer summary. |
| Google AI Overviews | "Is Perelai available on Android?" | Unavailable | `https://perelai.com/install` (JSON-LD) | `SoftwareApplication` graph (`operatingSystem: "Web"`). |
| Google AI Overviews | "Can I use Perelai on desktop?" | Unavailable | `https://perelai.com/install` (JSON-LD) | `SoftwareApplication` graph (`operatingSystem: "Web"`). |
| Claude | "Does Perelai have an iPhone app?" | Unavailable | `https://perelai.com/install` & `llms.txt` | Verbatim 50-word answer in `llms.txt` section `## Platform & app stores`. |
| Claude | "Is Perelai available on Android?" | Unavailable | `https://perelai.com/install` & `llms.txt` | Direct negative on store listing; browser-first alternative. |
| Claude | "Can I use Perelai on desktop?" | Unavailable | `https://perelai.com/install` & `llms.txt` | Supported browser on laptop/desktop; single workspace login. |

## Follow-up Rule

Repeat these same three prompts in authenticated, human-accessible sessions post-deployment. Record the answer verbatim, the assistant name, date, and whether it is wrong, absent, hedged, or names a competitor. Do not infer an answer from search snippets or compute an artificial score.
