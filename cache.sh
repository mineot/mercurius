#!/bin/bash
php artisan config:cache
php artisan view:cache
php artisan route:cache
php artisan event:cache
php artisan optimize
