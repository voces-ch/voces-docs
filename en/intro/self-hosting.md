---
outline: deep
---

# Self-hosting

voces.ch is 100% open source! We believe that infrastructure for digital activism should be freely accessible. If you want to run the platform for your own projects on your own servers, you can do so at any time.

## Self-hosting with Docker Compose

voces.ch maintains an official repository that lets you easily start your instance using `docker compose up -d`.

> 👉 Click here for the repo: [github.com/voces-ch/voces-docker](https://github.com/voces-ch/voces-docker)

## 🚀 Quick Start Guide

### 1. Prerequisites

Before you begin, ensure you have the following installed on your server or local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 2. Clone the Repository

Clone this repository to your server and navigate into the directory:

```bash
git clone [https://github.com/voces-ch/voces-docker.git](https://github.com/voces-ch/voces-docker.git)
cd voces-docker
```

### 3. Configure Your Environment

voces.ch uses an `.env` file to securely store your configuration (like database passwords and API keys).

Copy the provided example file to create your own:

```bash
cp .env.example .env
```

Open the `.env` file in your favorite text editor (like `nano .env` or `vim .env`) and update the necessary variables:

- **`APP_URL`**: Change this to the domain where you will host the app (e.g., `https://app.yourdomain.com`).
- **`DB_PASSWORD`**: Change `secret_database_password` to a strong, secure password.
- **`TRUSTED_PROXIES`**: If you are using a reverse proxy (like CloudPanel, Nginx Proxy Manager, or OrbStack) to handle HTTPS, leave this as `*`. If you are exposing the container directly to the web on a bare-metal server, leave it blank.

### 4. Generate Your Application Key

Laravel requires a unique cryptographic key to secure user sessions and encrypted data. Because you don't have PHP installed on your host machine, use this Docker command to generate one securely:

```bash
docker compose run --rm app php artisan key:generate --show
```

_Wait a moment for the temporary container to boot up. It will output a string that looks like `base64:XyZ...`_

**Copy that string, open your `.env` file again, and paste it next to `APP_KEY=`.**

### 5. Start the Application!

With your `.env` file configured, you are ready to launch:

```bash
docker compose up -d
```

Docker will download the latest voces.ch image, spin up your database and cache, and automatically run the database migrations in the background.

Your application is now live on port **8080**!

_(Note: If you are using a reverse proxy, simply route your domain's traffic to `http://127.0.0.1:8080`)_

## 🔄 Updating to a New Version

When a new version of voces.ch is released, updating your instance takes less than 30 seconds and requires exactly zero downtime.

Just run these two commands from inside your `voces-docker` directory:

```bash
# Download the newest pre-built image
docker compose pull

# Restart the containers with the new code (runs database migrations automatically)
docker compose up -d
```

## 🛠 Troubleshooting & Helpful Commands

**How do I view the application logs?**
If something goes wrong, you can view the live output of the Laravel application by running:

```bash
docker compose logs -f app
```

**I changed something in my `.env` file, but it's not updating!**
If you update your `.env` file, you need to tell Docker to recreate the container so it can absorb the new variables:

```bash
docker compose up -d
```

**How do I access the container to run artisan commands manually?**
If you ever need to manually run a command inside the application container:

```bash
docker compose exec app php artisan route:list
```
