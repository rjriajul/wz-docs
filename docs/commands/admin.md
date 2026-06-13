# Admin Commands

These commands are only for the bot owner and sudo users (admins).

**Owner** = the user who set `OWNER_ID` in config
**Sudo** = users added by the owner via `/addsudo`

---

## `/botset`

**What it does:** Opens the bot-wide settings panel. This is the main admin menu where you can change bot configuration on the fly.

**How to use:** Just send `/botset`. The bot will show buttons for all settings.

**What you can set:**
- All config variables (BOT_TOKEN, BASE_URL, etc.)
- Upload private files (token.pickle, rclone.conf, accounts.zip)
- Change bot settings without editing config.py
- Manage categories and drives

---

## `/authorize [chat_id]`

**What it does:** Lets a chat (group, channel, or user) use the bot.

```
/authorize -1001234567890        # Authorize a group chat
/authorize 123456789             # Authorize a specific user
```

---

## `/unauthorize [chat_id]`

**What it does:** Removes authorization from a chat or user.

```
/unauthorize -1001234567890
```

---

## `/users`

**What it does:** Lists all users and their personal settings. Shows who has configured thumbnails, default upload destinations, etc.

**How to use:** Just send `/users`.

---

## `/addsudo [user_id]`

**What it does:** Adds a sudo user (admin). Sudo users can use admin commands.

```
/addsudo 123456789               # Make user 123456789 an admin
```

**Who can use it:** Owner only.

---

## `/rmsudo [user_id]`

**What it does:** Removes a sudo user's admin access.

```
/rmsudo 123456789                # Remove admin from user 123456789
```

**Who can use it:** Owner only.

---

## `/blacklist [user_id]`

**What it does:** Bans a user from using the bot. They won't be able to send any commands.

```
/blacklist 123456789             # Ban this user
```

---

## `/rmblacklist [user_id]`

**What it does:** Removes a user from the blacklist (unbans them).

```
/rmblacklist 123456789           # Unban this user
```

---

## `/restart`

**What it does:** Restarts the bot. Useful after changing configuration.

**How to use:** Just send `/restart`. The bot will go offline, update itself (if upstream repo is configured), and come back online.

---

## `/log`

**What it does:** Sends you the bot's log file. Use this for debugging — if something breaks, share this log with support.

**How to use:** Just send `/log`.

---

## `/exportsession`

**What it does:** Generates a Pyrogram string session. This is needed if you want to use a user session (for user leech, private Telegram links, etc.).

**How to use:** Send `/exportsession` and follow the prompts (enter your phone number, OTP code, and 2FA password if you have one).

---

## `/broadcast [message]`

**What it does:** Sends a message to every user who has ever interacted with the bot. Useful for announcements.

**How to use:**
```
/broadcast Bot is now updated!🎉
```

**How to manage:** After sending, the bot gives you a Broadcast ID. Use `/deletebroadcast <id>` to remove the message from all users.

**Who can use it:** Owner only.

---

## `/plugins`

**What it does:** Opens the plugin manager menu. From here you can view loaded plugins, discover new ones, and get plugin info.

**How to use:** Just send `/plugins`. The bot will show buttons for managing plugins.

**How to add a plugin:** Drop a `.py` file into the `plugins/` folder, then use `/plugins` to load it.

**Who can use it:** Owner only.

---

## `/shell [cmd]`

**What it does:** Runs a shell command on the server. Like having SSH access through Telegram.

```
/shell ls -la                    # List files on the server
/shell df -h                     # Check disk space
/shell docker ps                 # Check running containers
```

**Who can use it:** Owner only.

**Warning:** This gives full server access. Be careful.

---

## `/exec [code]`

**What it does:** Executes Python code on the bot's server. Useful for quick tests or debugging.

```
/exec print("Hello")
/exec print(Config.BOT_TOKEN)
```

**Who can use it:** Owner only.

---

## `/aexec [code]`

**What it does:** Executes async Python code on the bot's server.

```
/aexec await some_async_function()
```

**Who can use it:** Owner only.

---

## `/speedtest`

**What it does:** Runs a speed test using speedtest.com and shows your server's internet speed.

**How to use:** Just send `/speedtest`. The test takes 30-60 seconds.

---

## `/addimage`

**What it does:** Adds an image to the bot's gallery. Reply to a photo or provide a link.

```
/addimage                        # Reply to a photo
/addimage https://example.com/photo.jpg
```

---

## `/images`

**What it does:** View and manage the image gallery. You can see all saved images, delete them, or set one as the default thumbnail.

**How to use:** Just send `/images`.

---

## `/count [link]`

**What it does:** Counts all files and folders inside a Google Drive folder.

```
/count https://drive.google.com/drive/folders/xxxx
```

---

## `/delete [link]`

**What it does:** Deletes files or folders from Google Drive.

```
/delete https://drive.google.com/drive/folders/xxxx
```

**Who can use it:** Owner and sudo only.

---

## `/clearlocals`

**What it does:** Clears the local variables from previous `/exec` or `/aexec` commands.

**Who can use it:** Owner only.

---

## `/restartsessions`

**What it does:** Restarts all user sessions (Pyrogram client sessions) without restarting the whole bot.

**How to use:** Send `/restartsessions` and confirm in the popup.

---

## Summary table

| Command | Who can use | What it does |
|---|---|---|
| `/botset` | Owner/Sudo | Open bot settings panel |
| `/authorize` | Owner/Sudo | Allow a chat/user to use the bot |
| `/unauthorize` | Owner/Sudo | Remove authorization |
| `/users` | Owner/Sudo | List all users |
| `/addsudo` | Owner only | Add an admin |
| `/rmsudo` | Owner only | Remove an admin |
| `/blacklist` | Owner/Sudo | Ban a user |
| `/rmblacklist` | Owner/Sudo | Unban a user |
| `/restart` | Owner/Sudo | Restart the bot |
| `/log` | Owner/Sudo | Get bot log file |
| `/exportsession` | Owner/Sudo | Generate Pyrogram session |
| `/shell` | Owner only | Run shell commands |
| `/exec` | Owner only | Run Python code |
| `/aexec` | Owner only | Run async Python code |
| `/speedtest` | Owner/Sudo | Test internet speed |
| `/addimage` | Owner/Sudo | Add image to gallery |
| `/images` | Owner/Sudo | Manage image gallery |
| `/count` | Owner/Sudo | Count files in GDrive |
| `/delete` | Owner/Sudo | Delete from GDrive |
| `/clearlocals` | Owner only | Clear exec locals |
| `/restartsessions` | Owner/Sudo | Restart user sessions |
