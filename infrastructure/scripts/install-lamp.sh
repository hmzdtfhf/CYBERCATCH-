#!/usr/bin/env bash
set -Eeuo pipefail
apt-get update
apt-get install -y apache2 mysql-server git curl php php-mysql php-gd php-xml php-mbstring
a2enmod rewrite
systemctl enable --now apache2 mysql
mysqladmin ping
