variable "aws_region" { type=string default="ap-south-1" }
variable "instance_type" { type=string default="t3.micro" }
variable "admin_cidr" { type=string validation { condition=can(cidrhost(var.admin_cidr,0)) && var.admin_cidr != "0.0.0.0/0" error_message="Use a restricted administrator CIDR." } }
variable "vpc_id" { type=string }
variable "subnet_id" { type=string description="Private subnet only." }
variable "enable_ssh" { type=bool default=false }
variable "key_name" { type=string default=null }
