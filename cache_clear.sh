#!/bin/bash
php artisan cache:clear
php artisan cache:forget key
php artisan route:clear
php artisan config:clear
php artisan view:clear
php artisan optimize:clear
