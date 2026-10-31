data "aws_iam_policy_document" "assume" { statement { actions=["sts:AssumeRole"] principals { type="Service" identifiers=["ec2.amazonaws.com"] } } }
resource "aws_iam_role" "lab" { name="isolated-dvwa-lab-role" assume_role_policy=data.aws_iam_policy_document.assume.json }
resource "aws_iam_role_policy_attachment" "ssm" { role=aws_iam_role.lab.name policy_arn="arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore" }
resource "aws_iam_instance_profile" "lab" { name="isolated-dvwa-lab-profile" role=aws_iam_role.lab.name }
