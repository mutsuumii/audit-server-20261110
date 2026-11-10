# Code injection via eval()
# CWE-95 | Severity: CRITICAL
# File: ui/src/tests/oidc.test.ts line 23

**Risk:** eval() with dynamic input runs arbitrary JavaScript.

**Fix:** Use JSON.parse() for data. Pass function references, not strings, to setTimeout.
