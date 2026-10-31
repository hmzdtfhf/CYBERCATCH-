# Installation

Run `install-lamp.sh`, then place a root-owned `/etc/dvwa-lab.env` containing `DVWA_DB_PASSWORD` (mode 0600), followed by `install-dvwa.sh`, `configure-dvwa.sh`, and `verify-lab.sh`. Access DVWA only through the private authenticated access path. Scripts fail on errors and do not use the MySQL root account for DVWA.
