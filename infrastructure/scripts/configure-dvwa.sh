#!/usr/bin/env bash
set -Eeuo pipefail
source /etc/dvwa-lab.env
install -m 0640 -o root -g www-data /var/www/dvwa/config/config.inc.php.dist /var/www/dvwa/config/config.inc.php
systemctl reload apache2
