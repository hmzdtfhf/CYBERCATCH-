#!/usr/bin/env bash
set -Eeuo pipefail
read -r -p 'Reset isolated DVWA database? Type RESET: ' value
test "$value" = RESET || exit 1
mysql -e 'DROP DATABASE IF EXISTS dvwa; CREATE DATABASE dvwa;'
