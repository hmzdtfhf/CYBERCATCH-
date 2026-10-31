# Architecture and safety boundaries

The React dashboard calls only the Express management API. That API uses the AWS SDK credential chain/IAM role and accepts start/stop only for configured `LAB_INSTANCE_IDS`. It never returns AWS credentials. The EC2 machine is placed in a private subnet; its security group permits HTTPS only from the configured administrator CIDR and disables SSH by default. Session Manager is the preferred administration path.

DVWA is intentionally vulnerable and must not receive a public IP, public HTTP security-group rule, or shared management authentication. Terraform state and secret environment files are ignored by Git.

## Teardown checklist

1. Export any legitimate evidence and destroy the isolated DVWA database.
2. Stop or terminate the EC2 instance after confirming the target.
3. Delete unattached EBS volumes, unused Elastic IPs and unnecessary snapshots.
4. Inspect Cost Explorer and run `terraform destroy` only after reviewing the plan.

Stopping preserves the instance's EBS-backed data and may continue storage charges; termination is irreversible for non-backed data.
