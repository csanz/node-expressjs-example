#!/bin/bash

mongo bin/scripts/install_db.js
node bin/scripts/create_settings_file.js
