# Deployment

There are two main ways to run WZML-X. Pick the one that suits you.

- **[VPS / Dedicated Server](./vps)** (recommended) — full control, no restrictions
- **[Heroku](./heroku)** (via WZ-Deploy) — easier setup, some limitations

## Prerequisites (same for both)

Get these ready first — you'll need them no matter which option you choose.

### 1. Create a Telegram Bot

1. Open Telegram, search for [@BotFather](https://t.me/BotFather)
2. Send `/newbot`, pick a name and username
3. Save the **token** (looks like `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)

### 2. Get your Telegram API credentials

1. Go to [my.telegram.org/apps](https://my.telegram.org/apps) and log in
2. Copy your **App api_id** (number) and **App api_hash** (string)

### 3. Get your User ID

1. Talk to [@userinfobot](https://t.me/userinfobot) on Telegram
2. Send `/start` — it replies with your ID (a number like `123456789`)

### 4. Create a MongoDB database

1. Sign up at [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier is enough)
2. Create a **free M0 cluster**
3. **Database Access** → Add a user (save the username + password)
4. **Network Access** → Add IP `0.0.0.0/0`
5. **Databases** → **Connect** → **Connect your application**
   - Copy the connection string: `mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
   - Replace `<user>` and `<password>`

---

Pick your path:

- [I want to deploy on a VPS →](./vps)
- [I want to deploy on Heroku →](./heroku)
