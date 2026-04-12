# Auto-hebergement

voces.ch est 100 % open source. Si vous souhaitez executer la plateforme sur vos propres serveurs, vous pouvez le faire a tout moment.

Nous utilisons [Lando](https://lando.dev/) comme environnement de developpement local, car il lance rapidement toute l'infrastructure (serveur web, base de donnees, PHP, Node) via Docker. Le backend utilise [Laravel](https://laravel.com/) et [Filament](https://filamentphp.com/), et le widget utilise [Vue.js](https://vuejs.org/).

## Prerequis

Avant de commencer, verifiez que ces outils sont installes:

- **Git**
- **Docker** (par exemple Docker Desktop)
- **Lando**

## 1. Cloner le depot

```bash
git clone https://github.com/voces-ch/voces.ch.git
cd voces.ch
```

## 2. Configurer les variables d'environnement (.env)

```bash
cp .env.example .env
```

Ouvrez `.env` et verifiez ou adaptez ces valeurs:

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

## 3. Demarrer Lando et installer les dependances

```bash
lando start
lando composer install
```

Puis generez la cle applicative Laravel:

```bash
lando php artisan key:generate
```

## 4. Initialiser la base de donnees

```bash
lando php artisan migrate --seed
```

## 5. Compiler les assets frontend

```bash
lando npm install && npm run build
```

Pour le developpement actif du widget, utilisez `lando npm run dev`.

Votre instance locale devrait etre disponible sur `http://voces.lndo.site`.
