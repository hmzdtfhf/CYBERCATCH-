#!/usr/bin/env bash
set -Eeuo pipefail
systemctl is-active apache2 mysql
test -r /var/www/dvwa/config/config.inc.php
mysqladmin ping
echo 'Verification complete; use only an authenticated private path.'
