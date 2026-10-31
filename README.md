# Web Application Penetration Testing on AWS using DVWA

A security-first portfolio lab: React management dashboard, hardened Express API, private AWS infrastructure definition, and reproducible DVWA materials. It deliberately defaults to demo mode and **never** deploys or exposes DVWA publicly.

## Quick start

```powershell
npm install
Copy-Item backend/.env.example backend/.env
Copy-Item frontend/.env.example frontend/.env
npm run dev
```

Open `http://localhost:5173`. The API listens on port 4000. Run `npm run build` and `npm test` before delivery.

## Architecture

```text
Browser dashboard → authenticated Express API → AWS SDK (IAM role) → private EC2
                                                       └→ Ubuntu / Apache / PHP / MySQL / DVWA
```

The dashboard does not receive AWS keys. DVWA must be reachable only via a private subnet, VPN, or authenticated tunnel. Use independent dashboard and DVWA credentials.

## AWS deployment

Review `infrastructure/terraform`, set a real private `subnet_id`, VPC ID and verified administrator `/32` CIDR, then run:

```bash
cd infrastructure/terraform
terraform init
terraform fmt -check
terraform validate
terraform plan -var='vpc_id=vpc-...' -var='subnet_id=subnet-...' -var='admin_cidr=x.x.x.x/32'
```

Do not run `terraform apply` without reviewing the plan and accepting AWS costs. Ubuntu and service scripts are in `infrastructure/scripts`; create `/etc/dvwa-lab.env` with a protected `DVWA_DB_PASSWORD` on the private instance. Never commit it.

## Testing and safety

The command terminal is deterministic client-side education: it has no `eval`, child process, network shell, or backend execution path. Documentation distinguishes examples from findings. AWS mode becomes live only when `AWS_DEMO_MODE=false`, an IAM role/credential chain exists, and `LAB_INSTANCE_IDS` is configured.

Stopping an instance can leave EBS, snapshot, Elastic IP, and other charges. Review resources and run `terraform destroy` only after a confirmed teardown plan.

See [documentation](/C:/Users/mohammed%20ashif/OneDrive/Pictures/cybersecurity/documentation/architecture.md) for operational details.
