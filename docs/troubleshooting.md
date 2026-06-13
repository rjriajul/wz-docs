# Troubleshooting

Common issues and how to fix them.

---

## Bot won't start

### Check the logs

```bash
cd WZML-X
docker compose logs --tail 50
```

### Common causes

**Missing required config:**
```
ERROR - BOT_TOKEN is required!
```

Make sure all 5 required values are set: `BOT_TOKEN`, `OWNER_ID`, `TELEGRAM_API`, `TELEGRAM_HASH`, `DATABASE_URL`.

**Wrong config format:**
This is a Python file, not `.env`. Check your syntax:
- Strings need quotes: `BOT_TOKEN = "123:abc"`
- Numbers don't: `OWNER_ID = 123456789`
- Booleans capitalize no quotes: `True` not `"True"`

**MongoDB can't connect:**
```
ERROR - Can't connect to MongoDB
```

Check:
1. Your `DATABASE_URL` is correct
2. Network Access allows `0.0.0.0/0`
3. Username and password are correct in the URL

**Port already in use:**
```
Error starting userland proxy: listen tcp4 0.0.0.0:80: bind: address already in use
```

Something else is using port 80. Stop the other service or change ports.

---

## Bot runs but doesn't respond

### Check if the bot is online

```bash
docker compose ps
```

Both `app` and `tunnel` should show `Up`.

### Check the logs

```bash
docker compose logs app --tail 20
```

### Bot started but no response to commands?

The bot uses Cloudflare tunnel. Sometimes the tunnel fails:

```bash
docker compose logs tunnel
```

If you see errors, restart:

```bash
docker compose restart
```

---

## "No such command" or bot doesn't recognize commands

The bot sets commands automatically if `SET_COMMANDS = True` (default).

If commands aren't showing up:
1. Restart the bot: `/restart`
2. Or manually set commands: send `/botset` and look for Set Commands option

---

## Downloads stuck at 0%

### Torrents

1. Check if the torrent has seeders
2. qBittorrent settings may need tuning in `/botset` → Qbit Settings

### Direct links

1. The link might require authentication (use `-au` and `-ap`)
2. The site might block automated downloads
3. Try with premium services (Real-Debrid, Debrid-Link)

### YouTube / Social media

1. YouTube might be rate-limiting. Wait and try again.
2. Some sites require cookies. Upload `cookies.txt` via `/botset` → Private Files

---

## Google Drive errors

### Quota exceeded

```
User rate limit exceeded
```

Solutions:
1. Enable Service Accounts: `USE_SERVICE_ACCOUNTS = True`
2. Generate service accounts: `python3 gen_sa_accounts.py`
3. Upload `accounts.zip` via `/botset` → Private Files

### "token.pickle not found"

```
ERROR - token.pickle not found
```

Generate it:
```bash
python3 generate_drive_token.py
```

Then upload the `token.pickle` file via `/botset` → Private Files.

### File already exists

If `STOP_DUPLICATE = True`, the bot won't re-upload existing files. Either:
- Disable it: `STOP_DUPLICATE = False`
- Or delete the old file first

---

## Uploads fail

### Telegram upload limit

Telegram limits:
- **Normal bot**: 50MB files
- **Premium bot**: 2GB files (bot needs active Premium)
- **User account**: 2GB files

If your file is larger, it gets split. Set `LEECH_SPLIT_SIZE` to control the split size.

### "File too large for Telegram"

The file exceeds the upload limit AND splitting is disabled. Either:
- Enable splitting (check `LEECH_SPLIT_SIZE` is set)
- Upload to cloud instead (use `/mirror` instead of `/leech`)

---

## Web UI not loading

### Check the tunnel

```bash
docker compose logs tunnel
```

Look for `https://*.trycloudflare.com`. If it's not there, restart:

```bash
docker compose restart tunnel
```

### Pincode not working

If `WEB_PINCODE = True`, you need a pincode to access the web UI:
1. Send any command with `-s` to the bot
2. The bot replies with a pincode
3. Enter it on the web page

---

## RSS feeds not working

### Check the feed URL

Make sure the URL is valid. Test it in a browser first.

### No new items being downloaded

1. Check filters: `-inf` and `-exf` might be too strict
2. Check `RSS_DELAY` — default is 600 seconds (10 minutes). It might take time.

### "Invalid RSS URL"

Some RSS feeds require cookies. Upload `cookies.txt` via `/botset` → Private Files.

---

## Bot is slow

### Check server resources

```bash
docker compose exec app htop
```

Or:

```bash
docker compose exec app free -h
docker compose exec app df -h
```

### Tune the queue

```python
QUEUE_ALL = 2
QUEUE_DOWNLOAD = 2
QUEUE_UPLOAD = 1
```

Lower numbers = less strain on the server.

### Tune qBittorrent

In `/botset` → Qbit Settings, adjust `AsyncIOThreadsCount`:
- 4-8 threads for 2-4 CPU cores
- 8-16 threads for 4-8 CPU cores

---

## Bot crashes / restarts repeatedly

### Check for OOM (Out of Memory)

```bash
docker compose logs app | grep -i "killed\|oom\|memory"
```

If the bot is killed due to memory, increase server RAM or limit concurrent tasks.

### Get the log file

```bash
/log
```

This sends you the bot's log. It contains detailed error information.

### Common crash causes
1. **Disk full** — Clear old downloads: `docker compose exec app rm -rf downloads/*`
2. **Memory full** — Lower `QUEUE_ALL` limits
3. **Config error** — Check `config.py` for syntax errors

---

## Can't connect to MongoDB

1. Check the URL format: `mongodb+srv://user:password@cluster.mongodb.net/...`
2. Make sure Network Access allows `0.0.0.0/0`
3. Make sure Database Access user has read/write permissions
4. Test the connection from your server:

```bash
docker compose exec app python3 -c "from pymongo import MongoClient; MongoClient('YOUR_URL').server_info()"
```

---

## Permission errors (token.pickle, accounts, etc.)

Most file operations happen inside the Docker container. Upload files via `/botset` → Private Files instead of copying manually.

If you must copy manually:

```bash
docker cp token.pickle WZML-X-app-1:/usr/src/app/token.pickle
```

---

## Restart the bot

```bash
/restart
```

Or from the server:

```bash
docker compose restart
```

For a full rebuild:

```bash
docker compose down && docker compose up -d
```

---

## Still stuck?

Join the support group: [https://t.me/WZML_Support](https://t.me/WZML_Support)

Provide:
1. The error message
2. Bot logs (`/log`)
3. What you were trying to do
