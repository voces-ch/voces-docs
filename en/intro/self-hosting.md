# Self-hosting

voces.ch is 100% open source. We believe infrastructure for digital activism should be openly accessible. If you want to run the platform on your own servers for your own projects, you can.

We use [Lando](https://lando.dev/) as the local development environment because it brings up the full stack (web server, database, PHP, Node) with Docker in minutes. The backend uses [Laravel](https://laravel.com/) and [Filament](https://filamentphp.com/), and the widget uses [Vue.js](https://vuejs.org/).

## Prerequisites

Before starting, make sure these tools are installed:

- **Git**
- **Docker** (for example Docker Desktop)
- **Lando**

## 1. Clone the repository

Clone the official voces.ch repository and enter the project directory:

```bash
git clone https://github.com/voces-ch/voces.ch.git
cd voces.ch
```

## 2. Configure environment variables (.env)

Laravel and the widget need environment variables. Copy the example file:

```bash
cp .env.example .env
```

Open `.env` and verify or adjust at least these values for local Lando:

```env
# 1. App configuration
APP_NAME="voces.ch Local"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://voces.lndo.site

# 2. Database (Lando defaults)
DB_CONNECTION=mysql
DB_HOST=database
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=laravel

# 3. Widget and Vite configuration
VITE_API_URL="${APP_URL}/api/v1"
WIDGET_VERSION=v1
```

## 3. Start Lando and install dependencies

Start the containers and install backend dependencies:

```bash
lando start
lando composer install
```

Generate the Laravel app key:

```bash
lando php artisan key:generate
```

## 4. Set up the database

Create database tables and optionally seed demo data:

```bash
lando php artisan migrate --seed
```

## 5. Build frontend assets

Build assets for the backend and embeddable widget:

```bash
lando npm install && npm run build
```

For active widget development, use `lando npm run dev` for hot reload.

Your local voces.ch instance should now be available at `http://voces.lndo.site`.
