#!/bin/bash
./cache_clear.sh
php artisan config:cache
php artisan view:cache
php artisan route:cache
php artisan event:cache

