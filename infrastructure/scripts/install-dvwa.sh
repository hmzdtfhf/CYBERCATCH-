#!/usr/bin/env bash
set -Eeuo pipefail
test -f /etc/dvwa-lab.env || { echo 'Create root-only /etc/dvwa-lab.env first.' >&2; exit 1; }
source /etc/dvwa-lab.env
git clone --depth 1 https://github.com/digininja/DVWA.git /var/www/dvwa
chown -R root:www-data /var/www/dvwa
find /var/www/dvwa -type d -exec chmod 0750 {} \;
find /var/www/dvwa -type f -exec chmod 0640 {} \;
install -d -m 0770 -o www-data -g www-data /var/www/dvwa/hackable/uploads
mysql -e "CREATE DATABASE IF NOT EXISTS dvwa; CREATE USER IF NOT EXISTS 'dvwa'@'localhost' IDENTIFIED BY '${DVWA_DB_PASSWORD}'; GRANT ALL PRIVILEGES ON dvwa.* TO 'dvwa'@'localhost'; FLUSH PRIVILEGES;"
