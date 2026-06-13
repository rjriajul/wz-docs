# Basic Commands

These are the simplest commands — just send them and the bot replies.

---

## `/start`

**What it does:** Sends a welcome message to introduce you to the bot.

**How to use:** Just type `/start` in your chat with the bot.

**Who can use it:** Everyone.

---

## `/help`

**What it does:** Shows a full list of every command the bot understands with a short description.

**How to use:** Just type `/help`.

**Who can use it:** Everyone.

**Tip:** For detailed help on a specific command, send that command without any arguments. Example: send just `/mirror` to see all mirror options.

---

## `/ping`

**What it does:** Checks if the bot is alive and responding. It measures how fast the bot replies.

**How to use:** Just type `/ping`. The bot will reply with a response time.

**Example response:**
```
Pong! 0.34s
```

**Who can use it:** Owner and sudo users only.

---

## `/login [password]`

**What it does:** Logs in with a password to skip token verification. Requires `LOGIN_PASS` to be set in config.

**How to use:**
```
/login mysecretpassword
```

**Who can use it:** All authorized users when `LOGIN_PASS` is configured.
