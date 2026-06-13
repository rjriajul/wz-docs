
# What is WZML-X?

Think of WZML-X as your **personal file-butler bot on Telegram**. You send it a link, and it will grab the file and put it wherever you want — Google Drive, your computer (via Rclone), or send it right back to you on Telegram.

## What can it do?

| You give it... | It gives you back... |
|---|---|
| A torrent magnet | The downloaded file/folder |
| A YouTube link | The video or audio |
| A direct download link | The file |
| A Mega.nz link | The file |
| A Telegram message link | The file |
| A Google Drive link | A copy of the file |

## How does it work?

```
You → Send link to bot → Bot downloads it → Bot uploads to destination → Done!
```

The bot runs on a **server** (VPS) using **Docker**. You talk to it through **Telegram commands**. It's always online, 24/7.

## What you need to get started

Before you begin, get these ready:

| Requirement | What it is | Where to get it |
|---|---|---|
| **A server (VPS)** | A computer that runs 24/7 | Any VPS provider (DigitalOcean, Hetzner, etc.) |
| **Docker installed** | The app that runs the bot | Docker's website |
| **Bot Token** | Your bot's ID card | [@BotFather](https://t.me/BotFather) on Telegram |
| **Telegram API credentials** | App ID and Hash | [my.telegram.org](https://my.telegram.org/apps) |
| **MongoDB URL** | A database to store settings | [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier works) |
| **Your Telegram User ID** | To identify you as the owner | [@userinfobot](https://t.me/userinfobot) |

> **Don't have a server?** You can use free tiers from Oracle Cloud, Google Cloud Run, or Railway. But a cheap VPS ($5/month) is easiest.

## Step-by-step setup checklist

| # | Step | Details |
|---|------|---------|
| 1 | Get a server | VPS (recommended), Heroku, or Colab |
| 2 | Install Docker | `curl -fsSL https://get.docker.com \| sh` |
| 3 | Create a bot | Use [@BotFather](https://t.me/BotFather) to get a `BOT_TOKEN` |
| 4 | Get API credentials | Visit [my.telegram.org](https://my.telegram.org/apps) for `TELEGRAM_API` and `TELEGRAM_HASH` |
| 5 | Get your User ID | Send `/start` to [@userinfobot](https://t.me/userinfobot) |
| 6 | Set up MongoDB | Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas) and get `DATABASE_URL` |
| 7 | Clone the repo | `git clone -b wzv3 https://github.com/SilentDemonSD/WZML-X` |
| 8 | Copy config | `cp config_sample.py config.py` and fill in the 5 required values |
| 9 | Start the bot | `docker compose up -d` |
| 10 | Configure it | Use `/bsetting` to upload private files and change settings |

**Not sure how to get any of these?** Each step is explained in the [Deployment](/deployment/) guide.

## Ready?

Jump to [Deployment](/deployment/) to get the bot running, or [Configuration](/configuration) to learn what each setting does.
