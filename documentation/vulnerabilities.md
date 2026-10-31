# Vulnerability study guide

## SQL Injection — OWASP A03:2021

Root cause: constructing SQL with untrusted text. Impact can include unauthorized reads or changes. In an owner-controlled DVWA instance, compare the lesson at each difficulty and record only observed behavior. Remediate using prepared statements, typed validation, and a least-privilege database account.

## Cross-Site Scripting — OWASP A03:2021

Root cause: rendering untrusted data as HTML or script. Compare reflected, stored, and DOM flows in the DVWA lesson privately. Use safe templating, context-aware encoding, and CSP; input validation alone is not sufficient.

## Command Injection — OWASP A03:2021

Root cause: passing untrusted data to a shell. Use the built-in simulator for harmless conceptual comparison, or the privately owned DVWA lesson. Avoid shell execution; apply an allowlist and fixed executable plus argument-array APIs.

DVWA's Low, Medium, High and Impossible levels vary per lesson. Verify the installed DVWA source when documenting exact controls; Impossible is designed to demonstrate secure patterns rather than a universal defense set.
