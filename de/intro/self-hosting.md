---
outline: deep
---

# Selber hosten

voces.ch ist zu 100 % Open Source! Wir glauben, dass Infrastruktur für digitalen Aktivismus frei zugänglich sein sollte. Wenn du die Plattform für deine eigenen Projekte auf deinen eigenen Servern betreiben möchtest, kannst du das jederzeit tun.

## Selber hosten mit docker compose

voces.ch betreibt ein offizielles Repository, mit welchem du ganz einfach deine Instanz über `docker compose up -d` starten kannst.

> 👉 Hier gehts zum Repo: [github.com/voces-ch/voces-docker](https://github.com/voces-ch/voces-docker)

## 🚀 Schnellstartanleitung

### 1. Voraussetzungen

Bevor du beginnst, stelle sicher, dass auf deinem Server oder lokalen Rechner Folgendes installiert ist:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 2. Repository klonen

Klone das obige Repository auf deinen Server und wechsle in das Verzeichnis:

```bash
git clone [https://github.com/voces-ch/voces-docker.git](https://github.com/voces-ch/voces-docker.git)
cd voces-docker
```

### 3. Konfiguriere deine Umgebung

voces.ch verwendet eine `.env`-Datei, um deine Konfiguration (wie Datenbankpasswörter und API-Schlüssel) sicher zu speichern.

Kopiere die bereitgestellte Beispieldatei, um deine eigene zu erstellen:

```bash
cp .env.example .env
```

Öffne die `.env`-Datei in deinem bevorzugte Texteditor (z. B. `nano .env` oder `vim .env`) und aktualisiere die erforderlichen Variablen:

- **`APP_URL`**: Ändere dies in die Domain, unter der du die App hosten wirst (z. B. `https://app.deinedomain.ch`).
- **`DB_PASSWORD`**: Ändere `secret_database_password` in ein starkes, sicheres Passwort.
- **`TRUSTED_PROXIES`**: Wenn du einen Reverse-Proxy (wie CloudPanel, Nginx Proxy Manager oder Caddy) für die HTTPS-Verarbeitung verwendest, lasse dies auf `*` stehen.

### 4. Generiere deinen Anwendungsschlüssel

Laravel benötigt einen eindeutigen kryptografischen Schlüssel, um Benutzer\*sitzungen und verschlüsselte Daten zu sichern. Falls auf deinem Host-Rechner kein PHP installiert ist, verwende diesen Docker-Befehl, um einen Schlüssel sicher zu generieren:

```bash
docker compose run --rm app php artisan key:generate --show
```

_Warte einen Moment, bis der temporäre Container hochgefahren ist. Es wird eine Zeichenfolge ausgegeben, die etwa so aussieht: `base64:XyZ...`_

**Kopiere diese Zeichenfolge, öffnen deine `.env`-Datei erneut und füge sie neben `APP_KEY=` ein.**

### 5. Starten die Anwendung!

Nachdem du deine `.env`-Datei konfiguriert hast, kannst du loslegen:

```bash
docker compose up -d
```

Docker lädt das neueste voces.ch-Image herunter, starte deine Datenbank und den Cache und führt die Datenbankmigrationen automatisch im Hintergrund aus.

Deine Anwendung ist nun unter Port **8080** live!

_(Hinweis: Wenn du einen Reverse-Proxy verwendest, leite den Datenverkehr deiner Domain einfach an `http://127.0.0.1:8080` weiter.)_

## 🔄 Aktualisierung auf eine neue Version

Wenn eine neue Version von voces.ch veröffentlicht wird, dauert die Aktualisierung deine Instanz meistens weniger als 30 Sekunden und erfordert kaum Ausfallzeit.

Führe einfach diese beiden Befehle in deinem `voces-docker`-Verzeichnis aus:

```bash
# Laden Sie das neueste vorgefertigte Image herunter
docker compose pull

# Starten Sie die Container mit dem neuen Code neu (führt Datenbankmigrationen automatisch durch)
docker compose up -d
```

## 🛠 Fehlerbehebung & hilfreiche Befehle

**Wie kann ich die Anwendungsprotokolle einsehen?**
Wenn etwas schiefgeht, kannst du die Live-Ausgabe der Laravel-Anwendung einsehen, indem du folgenden Befehl ausführst:

```bash
docker compose logs -f app
```

**Ich habe etwas in meiner `.env`-Datei geändert, aber es wird nicht aktualisiert!**
Wenn du deine `.env`-Datei aktualisierst, musst du Docker anweisen, den Container neu zu erstellen, damit er die neuen Variablen übernehmen kann:

```bash
docker compose up -d
```

**Wie greife ich auf den Container zu, um Artisan-Befehle manuell auszuführen?**
Falls du jemals einen Befehl manuell innerhalb des Anwendungscontainers ausführen musst:

```bash
docker compose exec app php artisan route:list
```
