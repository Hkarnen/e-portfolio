## Basic parameters
variable "aws_region" { default = "ap-southeast-2" } # Sydney
variable "instance_type" { default = "t3.micro" }    # free‑tier size

## Supplied at apply time
variable "key_pair_name" { description = "Existing EC2 key pair" }
variable "repo_url" { description = "HTTPS Git repo to clone" }
variable "my_ip_cidr" { description = "Workstation IP/CIDR for SSH" }
