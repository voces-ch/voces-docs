# Self-hosting

voces.ch e 100% open source. Se vuoi eseguire la piattaforma sui tuoi server per i tuoi progetti, puoi farlo in qualsiasi momento.

Usiamo [Lando](https://lando.dev/) come ambiente locale perche avvia rapidamente l'infrastruttura completa (web server, database, PHP, Node) con Docker. Il backend usa [Laravel](https://laravel.com/) e [Filament](https://filamentphp.com/), mentre il widget usa [Vue.js](https://vuejs.org/).

## Prerequisiti

- **Git**
- **Docker** (es. Docker Desktop)
- **Lando**

## 1. Clona il repository

```bash
git clone https://github.com/voces-ch/voces.ch.git
cd voces.ch
```

## 2. Configura le variabili ambiente (.env)

```bash
cp .env.example .env
```

Apri `.env` e verifica/adatta i valori principali:

```env
APP_NAME="voces.ch Local"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://voces.lndo.site

DB_CONNECTION=mysql
DB_HOST=database
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=laravel

VITE_API_URL="${APP_URL}/api/v1"
WIDGET_VERSION=v1
```

## 3. Avvia Lando e installa dipendenze

```bash
lando start
lando composer install
```

Genera poi la chiave applicativa Laravel:

```bash
lando php artisan key:generate
```

## 4. Prepara il database

```bash
lando php artisan migrate --seed
```

## 5. Compila gli asset frontend

```bash
lando npm install && npm run build
```

Per lo sviluppo del widget usa `lando npm run dev`.

La tua istanza locale dovrebbe essere disponibile su `http://voces.lndo.site`.
