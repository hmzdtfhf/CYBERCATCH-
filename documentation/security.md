# Security controls

- No public DVWA HTTP rule or unrestricted SSH.
- IAM role grants only Systems Manager managed-instance functionality.
- API has Helmet, a CORS allowlist, rate limiting, centralized errors, allowlisted instances, token authentication and JSON audit logs.
- Production deployments must replace the demo token with managed identity/session authentication and protected secrets.
