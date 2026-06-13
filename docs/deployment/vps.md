# VPS / Dedicated Server

::: info Prerequisites
Make sure you have the [prerequisites](./) ready before starting (BotFather token, api_id, api_hash, user ID, MongoDB URL).
:::

### Step 1: Install Docker on your server

```bash
curl -fsSL https://get.docker.com | sh
```

Verify: `docker --version`

### Step 2: Clone and configure

```bash
git clone -b wzv3 https://github.com/SilentDemonSD/WZML-X.git
cd WZML-X
cp config_sample.py config.py
```

Fill in at minimum these 5 values:

```python
BOT_TOKEN = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
OWNER_ID = 123456789
TELEGRAM_API = 12345
TELEGRAM_HASH = "abc123def456..."
DATABASE_URL = "mongodb+srv://admin:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
```

### Step 3: Start the bot

```bash
docker buildx compose up -d
```

Wait 1-2 minutes. Check it's running:

```bash
docker compose ps          # both app and tunnel should show "Up"
docker compose logs app --tail 10
```

Get your web UI URL:

```bash
docker compose logs tunnel
```

Look for `https://abc123.trycloudflare.com` — that's your web UI.

### Step 4: Talk to your bot

Open Telegram, find your bot, send `/start`, then `/help`, then try a mirror.

### Updating

```bash
docker compose down
docker compose pull
docker compose up -d
```

### Stopping

```bash
docker compose down
docker image prune -a    # optional: clean up old images
```

### (Optional) Run with VPN

1. Uncomment the `gluetun` section in `docker-compose.yml`
2. Fill in your VPN provider details
3. Uncomment `network_mode: "service:gluetun"` on the `app` service
4. Run `docker buildx compose up -d`

### (Optional) Run multiple bots

1. Create `config2.py` with different credentials
2. Uncomment `app2` and `tunnel2` in `docker-compose.yml`
3. Run `docker buildx compose up -d`
