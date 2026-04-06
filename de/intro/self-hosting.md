# Selber hosten

voces.ch ist zu 100 % Open Source! Wir glauben, dass Infrastruktur für digitalen Aktivismus frei zugänglich sein sollte. Wenn du die Plattform für deine eigenen Projekte auf deinen eigenen Servern betreiben möchtest, kannst du das jederzeit tun.

Wir nutzen [Lando](https://lando.dev/) als lokales Entwicklungsumfeld, da es die gesamte Infrastruktur (Webserver, Datenbank, PHP, Node) in wenigen Minuten über Docker bereitstellt. Für das Backend benutzen wir [laravel](https://laravel.com/) & [filament](http://filamentphp.com/), das Widget nutzt [vue.js](https://vuejs.org/).

## Voraussetzungen

Bevor du loslegst, stelle sicher, dass folgende Tools auf deinem System installiert sind:

- **Git**
- **Docker** (z.B. Docker Desktop)
- **Lando**

## 1. Repository klonen

Klone als Erstes das offizielle voces.ch Repository von GitHub auf deinen lokalen Rechner und wechsle in das Verzeichnis:

```bash
bash git clone https://github.com/voces-ch/voces.ch.git
cd voces.ch
```

## 2. Umgebungsvariablen (.env) konfigurieren

Laravel und unser Widget benötigen einige Umgebungsvariablen, um korrekt zu funktionieren. Kopiere die mitgelieferte Beispiel-Datei:

`cp .env.example .env `

Öffne nun die `.env`-Datei in deinem Editor. Für die lokale Lando-Umgebung musst du insbesondere die folgenden Werte überprüfen oder anpassen:

```env
# 1. App Konfiguration
APP_NAME="voces.ch Local"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://voces.lndo.site # Die Standard-URL für Lando

# 2. Datenbank (Lando Standardwerte)
DB_CONNECTION=mysql
DB_HOST=database
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=laravel

# 3. Widget & Vite Konfiguration (Für das Frontend)

VITE_API_URL="${APP_URL}/api/v1"
WIDGET_VERSION=v1
```

## 3. Lando starten & Abhängigkeiten installieren

Jetzt lassen wir Lando die Magie erledigen. Starte die Container und installiere alle Backend-Abhängigkeiten (dies kann beim ersten Mal ein paar Minuten dauern):

```bash
lando start
```

```bash
lando composer install
```

Sobald das abgeschlossen ist, generieren wir den Application Key für Laravel:

```bash
lando php artisan key:generate
```

## 4. Datenbank aufsetzen

Erstelle die Tabellen in deiner Datenbank. Wenn du möchtest, kannst du auch direkt Testdaten (Seeder) laden:

```bash
lando php artisan migrate --seed
```

## 5. Frontend kompilieren

Zu guter Letzt müssen wir die Assets für das Backend (Filament) und unser einbettbares Widget (Vue/Vite) bauen:

```bash
lando npm install && npm run build
```

_(Für die aktive Entwicklung am Widget kannst du stattdessen `lando npm run dev` nutzen, um Hot-Reloading zu aktivieren)._

🎉 **Das war's!** Deine lokale Instanz von voces.ch sollte nun unter `http://voces.lndo.site` erreichbar sein.
