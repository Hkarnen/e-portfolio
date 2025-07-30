#!/bin/bash
# cloud‑init script: runs once at first boot

# 1. update packages & install Docker + Git (Amazon Linux 2023)
yum update -y
yum install -y docker git
systemctl enable --now docker

# 2. Add ec2-user to docker group (so no sudo needed)
usermod -a -G docker ec2-user

# 3. clone the portfolio repo
APP_DIR="/opt/portfolio"
git clone "${repo_url}" "$APP_DIR"
cd "$APP_DIR"

# 4. build and run container (expects Dockerfile in repo root)
docker build -t portfolio .
docker run -d --restart always -p 80:3000 --name portfolio portfolio
