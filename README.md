# Security audit: gotify/server

Date: 2026-11-10 | Auditor: [mutsuumii](https://github.com/mutsuumii)

## Summary

Found 3 issue(s): 3 critical.

## Findings

### 1. [CRITICAL] Code injection via eval()

**CWE-95** | `ui/src/tests/oidc.test.ts` line 23

eval() with dynamic input runs arbitrary JavaScript.

```
const href = await page.$eval('#oidc-login', (a) => (a as HTMLAnchorElement).href);
```

**Fix:** Use JSON.parse() for data. Pass function references, not strings, to setTimeout.
---

### 2. [CRITICAL] Code injection via eval()

**CWE-95** | `ui/src/tests/plugin.test.ts` line 41

eval() with dynamic input runs arbitrary JavaScript.

```
(await page.$eval(switchSelctor(id), (el) => el.getAttribute('data-enabled'))) === 'true';
```

**Fix:** Use JSON.parse() for data. Pass function references, not strings, to setTimeout.
---

### 3. [CRITICAL] Code injection via eval()

**CWE-95** | `ui/src/tests/plugin.test.ts` line 174

eval() with dynamic input runs arbitrary JavaScript.

```
const hook = await page.$eval('.displayer a', (el) => el.getAttribute('href'));
```

**Fix:** Use JSON.parse() for data. Pass function references, not strings, to setTimeout.
---
