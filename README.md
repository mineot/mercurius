# Mercurius

**Mercurius** is a modern and simplified content management solution that blends ease of use with flexibility and superior performance. Designed to be intuitive, lightweight, and fully customizable, Mercurius is ideal for projects that require an agile and efficient platform.

## Install

```bash
# Clone the project from github
git clone https://github.com/mineot/mercurius.git

# Enter the project directory
cd mercurius

# Install dependencies
composer install

# Build
npm install && npm run build

# Generate env file
mv .env.example .env

# Generate project key
php artisan generate:key

# Routes and Cache
php artisan route:cache

# Run migrations and Seeds
php artisan migrate:fresh --seed
```

### Edit .env file

Mandatory parameters

```markdown
APP_NAME=<Set your app name>
APP_DEBUG=false
APP_URL=<Set your app url>
DB_DATABASE=<Set your database name>.sqlite
```

## Update

```bash
# Enter the project directory
cd mercurius

# Pull the latest changes
git pull --rebase

# Rebuild the project
rm -rf node_modules public/build && npm install && npm run build

# Update dependencies
php composer update

# Routes and Cache
php artisan route:clear
php artisan route:cache
php artisan cache:clear

# Run migrations
php artisan migrate
```
