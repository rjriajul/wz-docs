# Bot Settings (`/botset`)

This page explains **every single setting** in `/botset`. Each one is numbered so you can easily find it.

> **Who can use this:** Only the bot owner and sudo users.

---

## The 7 Buttons in `/botset`

When you send `/botset` to the bot, you see 7 buttons:

| Button | What you can do there |
|---|---|
| **Config Variables** | Change any setting from `config.py` |
| **On/Off Settings** | Turn features on or off with one tap |
| **Private Files** | Upload or delete sensitive files (rclone.conf, token.pickle, etc.) |
| **Qbit Settings** | Change qBittorrent options |
| **Aria2c Settings** | Change Aria2 download options |
| **Sabnzbd Settings** | Change Usenet/SABnzbd options |
| **JDownloader Sync** | Save JDownloader's config to the bot |

---

## Section 1 — Config Variables

This is the complete list of every variable from `config.py`. They are listed in the **exact same order** as in the `config_sample.py` file. Each one has a serial number.

> **In `/botset`:** Click **Config Variables** → you see pages of buttons labeled with variable names. Click any to edit it.

---

### 1.1 — Required (bot WILL NOT start without these)

#### 1. `BOT_TOKEN`

**What:** Your bot's ID. Telegram uses this to know which bot is yours.

**Where to get:** Talk to [@BotFather](https://t.me/BotFather) on Telegram:
1. Send `/newbot`
2. Pick a name and username
3. BotFather gives you a token
```
1234567890:ABCdefGHIjklmNOPqrstUVwxyz-1234567
```
4. Copy the whole thing

**Put this in config.py:**
```python
BOT_TOKEN = "1234567890:ABCdefGHIjklmNOPqrstUVwxyz-1234567"
```

**Default:** `""` (empty string).

**If empty:** Bot won't start. Can't connect to Telegram.

---

#### 2. `OWNER_ID`

**What:** Your Telegram user ID number. This tells the bot "this person is the boss (owner)."

**Where to get:** Open Telegram → search [@userinfobot](https://t.me/userinfobot) → send `/start` → it shows your ID (a number like `123456789`).

```python
OWNER_ID = 123456789   # Replace with your actual user ID
```

**Default:** `0`.

**If empty (0):** Bot won't start.

---

#### 3. `TELEGRAM_API`

**What:** An ID number for your app, from Telegram's website.

**Where to get:** Go to [my.telegram.org](https://my.telegram.org/apps) → log in with your phone → see "App api_id."

```python
TELEGRAM_API = 1234567   # Replace with your actual API ID
```

**Default:** `0`.

**If empty (0):** Bot won't start.

---

#### 4. `TELEGRAM_HASH`

**What:** A secret key for your app (goes with TELEGRAM_API).

**Where to get:** Same website as above. It says "App api_hash."

```python
TELEGRAM_HASH = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p"
```

**Default:** `""` (empty string).

**If empty:** Bot won't start.

---

#### 5. `DATABASE_URL`

**What:** The address of your MongoDB database. The bot stores all user data, settings, and tasks here.

**Where to get:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas) → create free account → create cluster
2. Click "Connect" → "Connect your application" → copy the connection string
```
mongodb+srv://username:password@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority
```
3. Replace `username` and `password` with your MongoDB login

```python
DATABASE_URL = "mongodb+srv://myuser:mypassword@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority"
```

**Default:** `""` (empty string).

**If empty:** The bot might start, but no data saves. `/userset` won't work.

---

### 1.2 — Optional Config (extra settings, in order)

#### 6. `DEFAULT_LANG`

**What:** The language the bot speaks.

```python
DEFAULT_LANG = "en"
```

Currently only `"en"` (English) is available.

---

#### 7. `TG_PROXY`

**What:** A proxy for Telegram. Use this if Telegram is blocked in your area.

**Don't need one?** Leave it empty:
```python
TG_PROXY = {}
```

**Need one?** Put the proxy details (username and password are optional):
```python
TG_PROXY = {"scheme": "socks5", "hostname": "192.168.1.1", "port": 1080, "username": "user", "password": "pass"}
```

---

#### 8. `USER_SESSION_STRING`

**What:** A session string that lets the bot use YOUR Telegram account for downloading files from Telegram.

**This is advanced.** If you don't know what this is, leave it empty.

```python
USER_SESSION_STRING = ""
```

**If empty:** Bot uses its own account (some features won't work).

---

#### 9. `CMD_SUFFIX`

**What:** A letter added to the end of every command.

**Why:** If you run two bots in the same group, `/mirror` would trigger both. With a suffix, one bot uses `/mirrorx` and the other uses `/mirrory`.

```python
CMD_SUFFIX = "x"
```
Now you type `/mirrorx` instead of `/mirror`.

**If empty:** Commands work normally, no suffix.

---

#### 10. `AUTHORIZED_CHATS`

**What:** A list of user IDs or chat IDs that are allowed to use the bot.

**Put:** IDs separated by spaces.
```python
AUTHORIZED_CHATS = "123456789 987654321"
```

**For groups with topics/threads:** Use `|` to separate thread IDs.
```python
AUTHORIZED_CHATS = "-100123456789|3"
```
This means "chat ID `-100123456789`, only thread `3`."

**If empty:** Only the owner and sudo users can use the bot.

---

#### 11. `SUDO_USERS`

**What:** User IDs with admin access (can use `/botset`, `/admin`, etc.).

```python
SUDO_USERS = "123456789 987654321"
```

**If empty:** Only you (the owner) has admin access.

---

#### 12. `STATUS_LIMIT`

**What:** How many task status messages show at once.

```python
STATUS_LIMIT = 10
```

**If `10`:** If 20 tasks are running, only the first 10 show in `/status`.

**If `0`:** Shows ALL tasks.

---

#### 13. `DEFAULT_UPLOAD`

**What:** Where files go by default (when you don't use `-up` in the command).

| Value | Destination |
|---|---|
| `"rc"` | Rclone cloud storage |
| `"gd"` | Google Drive |

```python
DEFAULT_UPLOAD = "rc"
```

---

#### 14. `STATUS_UPDATE_INTERVAL`

**What:** How often (in seconds) the status messages refresh.

```python
STATUS_UPDATE_INTERVAL = 15
```

**If `15`:** Refreshes every 15 seconds. Lower = more frequent updates (uses more resources).

---

#### 15. `FILELION_API`

**What:** Your FileLion.cc API key. Needed to upload files to FileLion.

```python
FILELION_API = "your-api-key"
```

**If empty:** FileLion uploads won't work.

---

#### 16. `STREAMWISH_API`

**What:** Your StreamWish API key. Needed to upload files to StreamWish.

```python
STREAMWISH_API = "your-api-key"
```

**If empty:** StreamWish uploads won't work.

---

#### 17. `EXCLUDED_EXTENSIONS`

**What:** File types the bot should SKIP during upload.

```python
EXCLUDED_EXTENSIONS = "exe msi bat tmp"
```
This skips `.exe`, `.msi`, `.bat`, `.tmp` files.

**If empty:** All file types are uploaded.

---

#### 18. `INC_TASK_NOTIFY`

**What:** Whether the bot tells you about unfinished tasks when it restarts.

```python
INC_TASK_NOTIFY = False
```

**If `True`:** Bot sends a message listing tasks that didn't finish.

**If `False`:** No notification.

---

#### 19. `YT_DLP_OPTIONS`

**What:** Default options for yt-dlp (the tool that downloads videos from YouTube and other sites).

**Format:** `key:value|key:value`

```python
YT_DLP_OPTIONS = "format:best|outtmpl:%(title)s.%(ext)s"
```

**If empty:** yt-dlp uses its own defaults.

---

#### 20. `USE_SERVICE_ACCOUNTS`

**What:** Whether to use Google Service Accounts. These are multiple "fake" Google Drive accounts that share the upload work to avoid daily limits.

```python
USE_SERVICE_ACCOUNTS = False
```

**If `True`:** You also need to upload `accounts.zip` through **Private Files**.

---

#### 21. `NAME_SWAP`

**What:** Automatically rename files by swapping old text with new text.

**Format:** `old:new|old2:new2`

```python
NAME_SWAP = "1080p:HD|x265:HEVC"
```
This replaces "1080p" with "HD" and "x265" with "HEVC" in filenames.

**If empty:** No renaming.

---

#### 22. `FFMPEG_CMDS`

**What:** Custom FFmpeg command presets for processing media files.

**Format:** A dictionary `{name: command}`.

```python
FFMPEG_CMDS = {"compress": "-crf 28", "screenshot": "-vf fps=1/60"}
```
Now users can use `/leech link -ff compress` or `/leech link -ff screenshot`.

**If empty:** No custom presets available.

---

#### 23. `UPLOAD_PATHS`

**What:** Custom upload folders for different file types.

```python
UPLOAD_PATHS = {".mp4": "Videos", ".mp3": "Music"}
```
`.mp4` files go to `Videos/`, `.mp3` files go to `Music/`.

**If empty:** All files go to the root folder.

---

#### 24. `WEB_ACCESS_PASSWORD`

**What:** A secret used to generate proxy passwords for the web UI. The bot logs the derived passwords at startup.

```python
WEB_ACCESS_PASSWORD = "mysecretkey"
```

**If empty:** The bot generates one automatically. You'll see it in the startup logs.

---

### 1.3 — Hyper TG Downloader

#### 25. `HELPER_TOKENS`

**What:** Extra bot tokens (from @BotFather) for handling tasks in parallel. Each extra bot can work on its own task.

```python
HELPER_TOKENS = "123:abc 456:def"
```

**If empty:** Only the main bot handles all tasks.

---

### 1.4 — Mega.nz

#### 26. `MEGA_EMAIL`

**What:** Your Mega.nz account email. A free Mega account gives you more download bandwidth.

```python
MEGA_EMAIL = "youremail@example.com"
```

---

#### 27. `MEGA_PASSWORD`

**What:** Your Mega.nz account password.

```python
MEGA_PASSWORD = "yourpassword"
```

**If both empty:** Mega downloads still work but with limited free bandwidth.

---

#### 28. `DISABLE_MEGA`

**What:** Turn OFF Mega.nz support completely.

```python
DISABLE_MEGA = False
```

**If `True`:** Bot ignores all Mega links.

---

### 1.5 — Disable Options (turn features OFF)

These can also be toggled in **On/Off Settings** (Section 2 below). Here they are as config.py variables.

#### 29. `DISABLE_TORRENTS`

```python
DISABLE_TORRENTS = False
```
**If `True`:** All torrent downloads are blocked.

---

#### 30. `DISABLE_LEECH`

```python
DISABLE_LEECH = False
```
**If `True`:** All Telegram uploads are blocked.

---

#### 31. `DISABLE_BULK`

```python
DISABLE_BULK = False
```
**If `True`:** Zip/unzip (bulk) operations are blocked.

---

#### 32. `DISABLE_MULTI`

```python
DISABLE_MULTI = False
```
**If `True`:** Multi-part split operations are blocked.

---

#### 33. `DISABLE_SEED`

```python
DISABLE_SEED = False
```
**If `True`:** Torrents won't seed after download finishes.

---

#### 34. `DISABLE_FF_MODE`

```python
DISABLE_FF_MODE = False
```
**If `True`:** FFmpeg processing (compress, screenshot, etc.) is blocked.

---

### 1.6 — Telegraph

#### 35. `AUTHOR_NAME`

**What:** The author name shown on Telegraph pages (the web pages the bot creates for search results).

```python
AUTHOR_NAME = "WZML-X"
```

---

#### 36. `AUTHOR_URL`

**What:** A clickable link on Telegraph pages. Put your Telegram channel URL here so people can click to join.

```python
AUTHOR_URL = "https://t.me/WZML_X"
```

---

### 1.7 — Task Limits (size caps per source type)

Most limits are in **GB**. Set to `0` for **no limit**.

| # | Variable | What it limits |
|---|---|---|
| 37 | `DIRECT_LIMIT` | Direct link downloads |
| 38 | `MEGA_LIMIT` | Mega.nz downloads |
| 39 | `TORRENT_LIMIT` | Torrent downloads |
| 40 | `GD_DL_LIMIT` | Google Drive downloads |
| 41 | `RC_DL_LIMIT` | Rclone downloads |
| 42 | `CLONE_LIMIT` | Google Drive clone (copy) |
| 43 | `JD_LIMIT` | JDownloader downloads |
| 44 | `NZB_LIMIT` | Usenet downloads |
| 45 | `YTDLP_LIMIT` | yt-dlp (YouTube, etc.) downloads |
| 46 | `PLAYLIST_LIMIT` | Max items from a playlist (count, not GB) |
| 47 | `LEECH_LIMIT` | Leech (Telegram upload) size |
| 48 | `EXTRACT_LIMIT` | Extracted (unzipped) file size |
| 49 | `ARCHIVE_LIMIT` | Archive (zip/rar) creation size |
| 50 | `STORAGE_LIMIT` | Min free disk space on server (GB). Stops new downloads if exceeded |

**Example:**
```python
DIRECT_LIMIT = 5   # Max 5 GB for direct links
TORRENT_LIMIT = 20 # Max 20 GB for torrents
STORAGE_LIMIT = 10 # Keep at least 10 GB free on server
```

---

### 1.8 — Image Display

#### 51. `USE_IMAGES`

**What:** Whether the bot shows random background images on its messages.

```python
USE_IMAGES = False
```

**If `True`:** Bot messages show nice backgrounds. You also need `IMG_SEARCH` set.

---

#### 52. `IMG_SEARCH`

**What:** Keywords to search for wallpaper images. The bot downloads these on startup.

```python
IMG_SEARCH = "anime, nature, space"
```

**If empty:** No images are auto-searched.

---

#### 53. `IMG_PAGE`

**What:** How many pages of images to search per keyword. Each page has about 70 images.

```python
IMG_PAGE = 1   # 70 images per keyword
```

---

#### 54. `IMG_SOURCES`

**What:** Which websites to fetch images from.

| Option | Site |
|---|---|
| `"wallpaperflare"` | wallpaperflare.com |
| `"peapix"` | peapix.com |
| `"wallhaven"` | wallhaven.cc |

```python
IMG_SOURCES = ["wallpaperflare"]
```

---

### 1.9 — Instagram Downloader

#### 55. `INSTADL_API`

**What:** API key for downloading Instagram videos.

```python
INSTADL_API = "your-api-key"
```

**If empty:** Instagram downloads won't work.

---

### 1.10 — NZB Search (Usenet)

#### 56. `HYDRA_IP`

**What:** IP address of your NZB Hydra server for searching Usenet.

```python
HYDRA_IP = "192.168.1.100"
```

---

#### 57. `HYDRA_API_KEY`

**What:** API key for your NZB Hydra server.

```python
HYDRA_API_KEY = "your-api-key"
```

**If both empty:** NZB search won't work.

---

### 1.11 — Media / IMDB Search

#### 58. `IMDB_TEMPLATE`

**What:** The HTML template used to display movie/TV show search results.

**Leave this as-is unless you know HTML.**

```python
IMDB_TEMPLATE = """<b>Title: </b> {title} [{year}]
<b>Also Known As:</b> {aka}
<b>Rating ⭐️:</b> <i>{rating}</i>
<b>Release Info: </b> <a href="{url_releaseinfo}">{release_date}</a>
<b>Genre: </b>{genres}
<b>IMDb URL:</b> {url}
<b>Language: </b>{languages}
<b>Country of Origin : </b> {countries}

<b>Story Line: </b><code>{plot}</code>

<a href="{url_cast}">Read More ...</a>"""
```

---

### 1.12 — Task Tools

#### 59. `FORCE_SUB_IDS`

**What:** Channel or group IDs that users MUST join before using the bot.

**Why:** To grow your Telegram channel. Users can't mirror/leech until they join.

```python
FORCE_SUB_IDS = "-100123456789 -100987654321"
```

**If empty:** No force subscription. Anyone can use the bot.

---

#### 60. `MEDIA_STORE`

**What:** Whether the bot stores info about uploaded media files so it can re-upload them faster later.

```python
MEDIA_STORE = True
```

**If `True`:** Media info is cached. Re-uploading is faster.

**If `False`:** No caching. Each upload processes from scratch.

---

#### 61. `DELETE_LINKS`

**What:** Whether the bot deletes the original link message as soon as the task starts.

```python
DELETE_LINKS = False
```

**If `True`:** Keeps chats clean by removing the link message immediately.

---

#### 62. `CLEAN_LOG_MSG`

**What:** Whether the bot automatically deletes old log messages.

```python
CLEAN_LOG_MSG = False
```

**If `True`:** Old log messages get cleaned up.

---

### 1.13 — Limiters

#### 63. `BOT_MAX_TASKS`

**What:** Maximum total tasks (including queued ones) the bot handles at once.

```python
BOT_MAX_TASKS = 0   # 0 = unlimited
BOT_MAX_TASKS = 10  # Max 10 tasks total
```

---

#### 64. `USER_MAX_TASKS`

**What:** Maximum concurrent tasks per user.

```python
USER_MAX_TASKS = 0   # 0 = unlimited
USER_MAX_TASKS = 2   # Max 2 tasks per user
```

---

#### 65. `USER_TIME_INTERVAL`

**What:** Cooldown (in seconds) between a user's tasks.

```python
USER_TIME_INTERVAL = 30  # 30 seconds between tasks
```

**If `0`:** No cooldown. Users can spam tasks.

---

#### 66. `VERIFY_TIMEOUT`

**What:** Time limit (in seconds) for users to complete verification.

```python
VERIFY_TIMEOUT = 0    # 0 = disabled
VERIFY_TIMEOUT = 300  # 5 minutes
```

**If `0`:** Verification is disabled.

---

#### 67. `LOGIN_PASS`

**What:** A password that lets users skip the verification system.

```python
LOGIN_PASS = "mypassword123"
```

**If empty:** No password bypass available.

---

### 1.14 — Bot Settings

#### 68. `BOT_PM`

**What:** Force all files/links to be sent to the bot owner's private messages.

```python
BOT_PM = False
```

**If `True`:** Files go to owner's PM instead of the group where the command was used.

---

#### 69. `SET_COMMANDS`

**What:** Whether the bot tells Telegram what commands it supports (the list you see when typing `/`).

```python
SET_COMMANDS = True
```

**If `False`:** You'll have to remember commands manually.

---

#### 70. `TIMEZONE`

**What:** Timezone for all timestamps.

```python
TIMEZONE = "Asia/Kolkata"
```

**Common values:**

| Location | Value |
|---|---|
| India | `Asia/Kolkata` |
| US East | `America/New_York` |
| US West | `America/Los_Angeles` |
| UK | `Europe/London` |
| Japan | `Asia/Tokyo` |

---

### 1.15 — Google Drive

#### 71. `GDRIVE_ID`

**What:** Your default Google Drive folder ID.

**How to find:** Open the folder in your browser. The URL looks like:
```
https://drive.google.com/drive/u/0/folders/1a2b3c4d5e6f7g8h9i0j
```
The folder ID is the long string at the end: `1a2b3c4d5e6f7g8h9i0j`

```python
GDRIVE_ID = "1a2b3c4d5e6f7g8h9i0j"
```

**If empty:** Google Drive uploads will fail unless users specify a custom destination.

---

#### 72. `GD_DESP`

**What:** Description text shown on files uploaded to Google Drive.

```python
GD_DESP = "Uploaded with WZ Bot"
```

---

#### 73. `IS_TEAM_DRIVE`

**What:** Set this to `True` if your GDRIVE_ID is a Team Drive (shared drive).

```python
IS_TEAM_DRIVE = False
```

**If `True`:** Bot handles it as a Team Drive (different API behavior).

---

#### 74. `STOP_DUPLICATE`

**What:** If a file with the same name already exists in Google Drive, the bot skips the upload instead of duplicating.

```python
STOP_DUPLICATE = False
```

**If `True`:** Bot checks for existing files and skips if found. Saves space.

---

#### 75. `INDEX_URL`

**What:** Your Google Drive Index URL. Lets the bot generate direct download links.

```python
INDEX_URL = "https://example-workers.example.workers.dev/0:/"
```

**If empty:** Bot won't show "Open in browser" links for Google Drive files.

---

### 1.16 — YouTube Tools

#### 76. `YT_DESP`

**What:** Description text for YouTube uploads.

```python
YT_DESP = "Uploaded to YouTube by WZML-X bot"
```

---

#### 77. `YT_TAGS`

**What:** Tags for YouTube videos (helps people find them).

```python
YT_TAGS = ["telegram", "bot", "youtube"]
```
You can also use a comma-separated string: `"telegram, bot, youtube"`.

---

#### 78. `YT_CATEGORY_ID`

**What:** YouTube video category.

| ID | Category |
|---|---|
| 22 | People & Blogs |
| 1 | Film & Animation |
| 10 | Music |
| 20 | Gaming |

```python
YT_CATEGORY_ID = 22
```

---

#### 79. `YT_PRIVACY_STATUS`

**What:** Privacy setting for YouTube uploads.

| Value | Who can see it |
|---|---|
| `"public"` | Everyone |
| `"unlisted"` | Only people with the link |
| `"private"` | Only you |

```python
YT_PRIVACY_STATUS = "unlisted"
```

---

### 1.17 — Rclone

#### 80. `RCLONE_PATH`

**What:** Default Rclone destination path.

```python
RCLONE_PATH = "main:folder/subfolder"
```
`main` = the remote name from rclone.conf. `folder/subfolder` = path inside that remote.

**If empty:** Rclone uploads need a path specified in the command.

---

#### 81. `RCLONE_FLAGS`

**What:** Extra flags for Rclone. Format: `key:value|key`

```python
RCLONE_FLAGS = "ignore-case:true|skip-links"
```

**If empty:** Rclone uses default flags.

---

#### 82. `RCLONE_SERVE_URL`

**What:** Public URL for Rclone serve web access. Lets users download files via browser.

```python
RCLONE_SERVE_URL = "http://123.123.123.123"
```

**If empty:** No Rclone serve web access.

---

#### 83. `SHOW_CLOUD_LINK`

**What:** Show a "Cloud Link" button on leeched files.

```python
SHOW_CLOUD_LINK = True
```

---

#### 84. `RCLONE_SERVE_PORT`

**What:** Port for Rclone serve.

```python
RCLONE_SERVE_PORT = 8081
```

**If `0`:** Uses default port 8081.

---

#### 85. `RCLONE_SERVE_USER`

**What:** Username for Rclone serve login.

```python
RCLONE_SERVE_USER = "admin"
```

---

#### 86. `RCLONE_SERVE_PASS`

**What:** Password for Rclone serve login.

```python
RCLONE_SERVE_PASS = "mypassword"
```

**If both empty:** No login required for Rclone serve.

---

### 1.18 — JDownloader

#### 87. `JD_EMAIL`

**What:** Your JDownloader account email. JDownloader unlocks premium download links.

```python
JD_EMAIL = "youremail@example.com"
```

---

#### 88. `JD_PASS`

**What:** Your JDownloader account password.

```python
JD_PASS = "yourpassword"
```

**If both empty:** JDownloader won't start.

---

### 1.19 — Sabnzbd (Usenet)

#### 89. `USENET_SERVERS`

**What:** A list of Usenet servers for downloading NZB files.

**Each server needs these fields:**
| Field | What it is |
|---|---|
| `name` | A label (you choose) |
| `host` | Server address from your Usenet provider |
| `port` | Port (usually 563 for SSL) |
| `timeout` | Connection timeout in seconds |
| `username` | Your provider username |
| `password` | Your provider password |
| `connections` | How many connections (check provider limit) |
| `ssl` | 0=no SSL, 1=SSL, 2=SSL required |
| `ssl_verify` | 0=don't verify, 1=verify, 2=verify required |
| `ssl_ciphers` | Custom SSL ciphers (leave empty for default) |
| `enable` | 1=enabled, 0=disabled |
| `required` | 0=optional, 1=required for download |
| `optional` | 0=not optional, 1=optional |
| `retention` | Days of articles this server keeps (0=unlimited) |
| `send_group` | 0=send individually, 1=send as group |
| `priority` | Server priority (0=normal, higher=more preferred) |

```python
USENET_SERVERS = [
    {
        "name": "main",
        "host": "news.yourprovider.com",
        "port": 563,
        "timeout": 60,
        "username": "your-username",
        "password": "your-password",
        "connections": 8,
        "ssl": 1,
        "ssl_verify": 2,
        "ssl_ciphers": "",
        "enable": 1,
        "required": 0,
        "optional": 0,
        "retention": 0,
        "send_group": 0,
        "priority": 0,
    }
]
```

**If empty (no host):** Usenet downloads won't work.

---

### 1.20 — Updates

#### 90. `UPSTREAM_REPO`

**What:** Your GitHub repo URL for auto-updates. The bot checks here for new versions.

```python
UPSTREAM_REPO = "https://github.com/your-username/mirror-leech-telegram-bot"
```

**If empty:** Auto-update is disabled.

---

#### 91. `UPSTREAM_BRANCH`

**What:** Which branch of your repo to track.

```python
UPSTREAM_BRANCH = "master"
```

---

#### 92. `UPDATE_PKGS`

**What:** Whether the bot updates Python packages on restart.

```python
UPDATE_PKGS = True
```

---

### 1.21 — Leech Settings (Telegram upload)

#### 93. `LEECH_SPLIT_SIZE`

**What:** Max file size per piece (in bytes) when splitting. Telegram limit is ~2GB (4GB for premium).

**Common values:**
- `2097152000` = 2 GB
- `1073741824` = 1 GB
- `536870912` = 512 MB

```python
LEECH_SPLIT_SIZE = 2097152000
```

**If `0`:** Uses the maximum Telegram allows.

---

#### 94. `AS_DOCUMENT`

**What:** Send all files as documents (raw files, no preview).

```python
AS_DOCUMENT = False
```

**If `False`:** Videos play inline, images show in chat.

**If `True`:** Everything is a raw file.

---

#### 95. `EQUAL_SPLITS`

**What:** Split files into equal-sized parts.

```python
EQUAL_SPLITS = False
```

**If `True`:** All parts are exactly the same size instead of having one smaller leftover part.

---

#### 96. `MEDIA_GROUP`

**What:** Group split parts as a single media album in Telegram.

```python
MEDIA_GROUP = False
```

**If `True`:** Split parts appear as one album instead of separate messages.

---

#### 97. `USER_TRANSMISSION`

**What:** Use the user account (from `USER_SESSION_STRING`) for Telegram downloads.

```python
USER_TRANSMISSION = True
```

---

#### 98. `HYBRID_LEECH`

**What:** Use both bot and user account together for faster uploads.

```python
HYBRID_LEECH = True
```

---

#### 99. `LEECH_PREFIX`

**What:** Text added BEFORE the filename.

```python
LEECH_PREFIX = "[WZML] "
```
`video.mp4` becomes `[WZML] video.mp4`.

**Default:** `""` (empty).

**If empty:** No prefix added.

---

#### 100. `LEECH_SUFFIX`

**What:** Text added AFTER the filename.

```python
LEECH_SUFFIX = " - by bot"
```
`video.mp4` becomes `video.mp4 - by bot`.

**Default:** `""` (empty).

**If empty:** No suffix added.

---

#### 101. `LEECH_FONT`

**What:** Text formatting for captions.

| Code | Effect |
|---|---|
| `"b"` | **Bold** |
| `"i"` | *Italic* |
| `"u"` | <u>Underline</u> |
| `"s"` | ~~Strikethrough~~ |
| `"code"` | `monospace` |
| `"spoiler"` | \|\|spoiler\|\| |

```python
LEECH_FONT = "b"
```

**If empty:** No formatting.

---

#### 102. `LEECH_CAPTION`

**What:** Custom caption text on every leeched file. Supports HTML.

```python
LEECH_CAPTION = "Downloaded by <b>WZML-X Bot</b>"
```

**If empty:** No caption.

---

#### 103. `THUMBNAIL_LAYOUT`

**What:** Thumbnail image size. Format: `WxH` in pixels.

```python
THUMBNAIL_LAYOUT = "1280x720"
```

**If empty:** Uses default dimensions.

---

### 1.22 — Log Channels

#### 104. `LEECH_DUMP_CHAT`

**What:** A chat/group ID where ALL leeched files are automatically sent.

```python
LEECH_DUMP_CHAT = ""
```

**Example with a value:**
```python
LEECH_DUMP_CHAT = "-100123456789"
```

**If empty:** Files appear wherever the command was run.

---

#### 105. `LINKS_LOG_ID`

**What:** Chat ID where the bot logs all links users send.

```python
LINKS_LOG_ID = ""
```

**Example with a value:**
```python
LINKS_LOG_ID = "-100123456789"
```

**If empty:** No link logging.

---

#### 106. `MIRROR_LOG_ID`

**What:** Chat ID(s) for task completion logs. Space-separated for multiple.

```python
MIRROR_LOG_ID = "-100123456789 -100987654321"
```

**If empty:** No mirror logging.

---

### 1.23 — qBittorrent & Aria2c

#### 107. `TORRENT_TIMEOUT`

**What:** How long (seconds) before a dead torrent is canceled.

```python
TORRENT_TIMEOUT = 3600  # 1 hour
```

**If `0`:** Dead torrents wait forever.

---

#### 108. `BASE_URL`

**What:** Your server's public URL for the web file-selection UI (choose which files to download from a torrent).

```python
BASE_URL = "http://123.123.123.123:8080"
```

**If empty:** No web UI. Torrents download all files.

---

#### 109. `WEB_PINCODE`

**What:** Whether the web UI asks for a pincode.

```python
WEB_PINCODE = True
```

**If `True`:** You enter a pincode to access the web UI.

**If `False`:** Anyone with the URL can access it.

---

### 1.24 — Queue System

#### 110. `QUEUE_ALL`

**What:** Max total tasks (download + upload) running at once.

```python
QUEUE_ALL = 0    # Unlimited
QUEUE_ALL = 5    # Max 5 tasks total
```

---

#### 111. `QUEUE_DOWNLOAD`

**What:** Max downloads running at once.

```python
QUEUE_DOWNLOAD = 0   # Unlimited
QUEUE_DOWNLOAD = 3   # Max 3 downloads
```

---

#### 112. `QUEUE_UPLOAD`

**What:** Max uploads running at once.

```python
QUEUE_UPLOAD = 0   # Unlimited
QUEUE_UPLOAD = 3   # Max 3 uploads
```

---

### 1.25 — RSS

#### 113. `RSS_DELAY`

**What:** How often (seconds) the bot checks RSS feeds.

```python
RSS_DELAY = 600   # Every 10 minutes
```

---

#### 114. `RSS_CHAT`

**What:** Chat ID where RSS notifications are sent.

```python
RSS_CHAT = ""
```

**Example with a value:**
```python
RSS_CHAT = "-100123456789"
```

**If empty:** Notifications go nowhere.

---

#### 115. `RSS_SIZE_LIMIT`

**What:** Max download size per RSS item (GB).

```python
RSS_SIZE_LIMIT = 0   # Unlimited
RSS_SIZE_LIMIT = 10  # Max 10 GB per item
```

---

### 1.26 — Torrent Search

#### 116. `SEARCH_API_LINK`

**What:** URL of a search API app. Lets users search multiple torrent sites from the bot.

```python
SEARCH_API_LINK = "https://your-search-api.com"
```

**If empty:** `/search` command won't work.

---

#### 117. `SEARCH_LIMIT`

**What:** Max search results per site.

```python
SEARCH_LIMIT = 0   # 0 = use API default limit
```

---

#### 118. `SEARCH_PLUGINS`

**What:** List of plugin URLs for qBittorrent search (lets the bot search different torrent sites).

**Default:** 17 plugins (PirateBay, 1337x, YTS, etc.)

```python
SEARCH_PLUGINS = [
    "https://raw.githubusercontent.com/.../piratebay.py",
    "https://raw.githubusercontent.com/.../leetx.py",
]
```

---

### 1.27 — Extra Variables (in `/botset` but not in `config_sample.py`)

These variables exist in the bot's database system. You can edit them in `/botset` even though they aren't in the sample config file.

#### 119. `COLORED_BTNS`

**What:** Whether buttons have colors or are plain gray.

```python
COLORED_BTNS = False
```

**If `True`:** Buttons show in green/red colors. Looks nicer.

---

#### 120. `INC_TASK_RESUME`

**What:** Whether the bot auto-resumes incomplete tasks on restart.

```python
INC_TASK_RESUME = False
```

**If `True`:** Bot tries to continue unfinished tasks after restart.

---

#### 121. `DEBRID_LINK_API`

**What:** API key for Debrid-Link.com (premium hoster support).

```python
DEBRID_LINK_API = "your-api-key"
```

---

#### 122. `GOFILE_API`

**What:** Gofile.io API token for uploads.

```python
GOFILE_API = "your-api-token"
```

---

#### 123. `GOFILE_FOLDER_ID`

**What:** Gofile.io folder ID for uploads.

```python
GOFILE_FOLDER_ID = "your-folder-id"
```

---

#### 124. `PIXELDRAIN_KEY`

**What:** PixelDrain API key.

```python
PIXELDRAIN_KEY = "your-api-key"
```

---

#### 125. `PROTECTED_API`

**What:** ProtectedFiles.cc API key.

```python
PROTECTED_API = "your-api-key"
```

---

#### 126. `BUZZHEAVIER_API`

**What:** BuzzHeavier API key.

```python
BUZZHEAVIER_API = "your-api-key"
```

---

#### 127. `DEVUPLOADS_KEY`

**What:** DevUploads API key.

```python
DEVUPLOADS_KEY = "your-api-key"
```

---

#### 128. `DEVUPLOADS_FOLDER`

**What:** DevUploads folder ID.

```python
DEVUPLOADS_FOLDER = "your-folder-id"
```

---

#### 129. `VIKINGFILE_HASH`

**What:** VikingFile.to hash.

```python
VIKINGFILE_HASH = "your-hash"
```

---

#### 130. `VIKINGFILE_FOLDER`

**What:** VikingFile.to folder ID.

```python
VIKINGFILE_FOLDER = "your-folder-id"
```

---

#### 131. `HYPER_THREADS`

**What:** Number of parallel download parts for the Hyper Downloader.

```python
HYPER_THREADS = 0   # 0 = auto (bot decides)
```

---

#### 132. `HYPER_PIPELINE`

**What:** Concurrent file requests per Hyper DL part.

```python
HYPER_PIPELINE = 32
```

---

#### 133. `HYPER_CHUNK`

**What:** Download chunk size in bytes.

```python
HYPER_CHUNK = 262144   # 256 KB
```

---

#### 134. `DOWNLOAD_DIR`

**What:** Where downloaded files are stored on the server. Usually set automatically by Docker.

```python
DOWNLOAD_DIR = "/usr/src/app/downloads"
```

**If you change this:** The bot must restart. Existing downloads won't move.

---

#### 135. `IMAGES`

**What:** A list of image URLs or file_ids used as background images on bot messages.

**How to manage:** Use the `/addimage` command in the bot.

**This is not edited directly in config.py.** Manage it through the bot's `/addimage` command.

---

### Line-by-line recap: config_sample.py order

| # | Variable | From section in config_sample.py |
|---|---|---|
| 1–5 | `BOT_TOKEN` through `DATABASE_URL` | REQUIRED CONFIG |
| 6–24 | `DEFAULT_LANG` through `WEB_ACCESS_PASSWORD` | OPTIONAL CONFIG |
| 25 | `HELPER_TOKENS` | Hyper Tg Downloader |
| 26–28 | `MEGA_EMAIL` through `DISABLE_MEGA` | MegaAPI |
| 29–34 | `DISABLE_TORRENTS` through `DISABLE_FF_MODE` | Disable Options |
| 35–36 | `AUTHOR_NAME`, `AUTHOR_URL` | Telegraph |
| 37–50 | `DIRECT_LIMIT` through `STORAGE_LIMIT` | Task Limits |
| 51–54 | `USE_IMAGES` through `IMG_SOURCES` | Image Search |
| 55 | `INSTADL_API` | Insta downloader |
| 56–57 | `HYDRA_IP`, `HYDRA_API_KEY` | NZB search |
| 58 | `IMDB_TEMPLATE` | Media Search |
| 59–62 | `FORCE_SUB_IDS` through `CLEAN_LOG_MSG` | Task Tools |
| 63–67 | `BOT_MAX_TASKS` through `LOGIN_PASS` | Limiters |
| 68–70 | `BOT_PM` through `TIMEZONE` | Bot Settings |
| 71–75 | `GDRIVE_ID` through `INDEX_URL` | GDrive Tools |
| 76–79 | `YT_DESP` through `YT_PRIVACY_STATUS` | YT Tools |
| 80–86 | `RCLONE_PATH` through `RCLONE_SERVE_PASS` | Rclone |
| 87–88 | `JD_EMAIL`, `JD_PASS` | JDownloader |
| 89 | `USENET_SERVERS` | Sabnzbd |
| 90–92 | `UPSTREAM_REPO` through `UPDATE_PKGS` | Update |
| 93–103 | `LEECH_SPLIT_SIZE` through `THUMBNAIL_LAYOUT` | Leech |
| 104–106 | `LEECH_DUMP_CHAT` through `MIRROR_LOG_ID` | Log Channels |
| 107–109 | `TORRENT_TIMEOUT` through `WEB_PINCODE` | qBittorrent/Aria2c |
| 110–112 | `QUEUE_ALL` through `QUEUE_UPLOAD` | Queueing system |
| 113–115 | `RSS_DELAY` through `RSS_SIZE_LIMIT` | RSS |
| 116–118 | `SEARCH_API_LINK` through `SEARCH_PLUGINS` | Torrent Search |
| 119–135 | `COLORED_BTNS` through `IMAGES` | Extra (not in sample) |

---

## Section 2 — On/Off Settings

These are the same as the DISABLE_* variables in Section 1 (numbers 29–34, 28). In `/botset`, they appear as easy toggle buttons.

| Toggle | What it turns OFF |
|---|---|
| **Torrents** | All torrent downloads |
| **Leech** | All Telegram uploads |
| **Bulk** | Zip/unzip operations |
| **Multi** | Multi-part splits |
| **Seed** | Torrent seeding after download |
| **FF Mode** | FFmpeg processing |
| **Mega** | Mega.nz downloads |

**How to use:** Tap the toggle. Green checkmark = ON (feature is off). Red = OFF (feature is on). Yes, it's backwards — ON means the DISABLE is active.

---

## Section 3 — Private Files

Upload or delete sensitive files that the bot needs.

**How to upload:**
1. Click **Private Files** → **Create New File**
2. Send the file as a document
3. Bot saves it

**How to delete:**
1. Click **Add/Delete File**
2. Send the filename as text (e.g., `rclone.conf`)

### Files you can manage

| File | Why you'd upload it |
|---|---|
| `config.py` | Your bot config (uploading reloads it) |
| `token.pickle` | Google Drive login |
| `rclone.conf` | Rclone cloud storage settings |
| `accounts.zip` | Google Service Accounts (zip of .json files) |
| `list_drives.txt` | Custom drives for `/list` command |
| `shortener.txt` | URL shortener API keys |
| `categories.txt` | Upload categories with different drive IDs |
| `cookies.txt` | Browser cookies for restricted sites |
| `.netrc` | Login credentials for aria2c |

### File formats

**`list_drives.txt`** — each line: `Name drive_id index_url`
```
Main 1a2b3c4d5e https://driveindex.com/1a2b/
Movies 2b3c4d5e6f
```

**`shortener.txt`** — each line: `domain api_key`
```
gplinks.in abc123def456
```

**`categories.txt`** — each line: `Name drive_id index_url`
```
Movies 1a2b3c4d5e https://driveindex.com/movies/
TV 2b3c4d5e6f
```

---

## Section 4 — Qbit Settings

qBittorrent options. Click any to edit.

| Common option | What it does |
|---|---|
| `max_ratio` | Stop seeding at this ratio (e.g., 2.0 = seed until 2x uploaded) |
| `max_seeding_time` | Stop seeding after N minutes (e.g., 1440 = 24 hours) |
| `max_active_downloads` | Max torrents downloading at once |
| `max_active_torrents` | Max torrents total (downloading + seeding) |
| `queueing_enabled` | Turn torrent queue on/off |

**Sync Qbittorrent button:** Reloads options from qBittorrent.

---

## Section 5 — Aria2c Settings

Aria2 options. Click any to edit.

| Common option | What it does |
|---|---|
| `max-connection-per-server` | Connections per server (default 16) |
| `split` | How many parts per download |
| `max-concurrent-downloads` | Downloads at once |
| `bt-stop-timeout` | Stop dead torrents (seconds) |
| `seed-ratio` | Stop seeding at this ratio |
| `seed-time` | Stop seeding after N minutes |

**Add new key button:** Add custom Aria2 options not already listed.

---

## Section 6 — Sabnzbd Settings

Two sub-sections:

**Misc Options:** General Sabnzbd settings (history retention, bandwidth limit, etc.).

**Servers:** Manage your Usenet server connections. Click a server to edit, or **Add New**.

| Server field | What it is | Required |
|---|---|---|
| `name` | Label you choose | Yes |
| `host` | Server address | Yes |
| `port` | Port (563 for SSL) | Yes |
| `username` | Your provider username | Yes |
| `password` | Your provider password | Yes |
| `connections` | Max connections | No (default 8) |
| `ssl` | 0=off, 1=on, 2=required | No |

---

## Section 7 — JDownloader Sync

**What it does:** Saves JDownloader's current config to the bot's database.

**When to use:** After you change JDownloader settings, sync to update the bot.

**Requirements:** `JD_EMAIL` and `JD_PASS` must be set.

---

## Important Notes

- **Restart needed** for these variables: `BOT_TOKEN`, `DATABASE_URL`, `OWNER_ID`, `TELEGRAM_HASH`, `TELEGRAM_API`, `TG_PROXY`, `AUTHORIZED_CHATS`, `CMD_SUFFIX`, `USER_SESSION_STRING`, `DOWNLOAD_DIR`. The bot will tell you.

- **Use `/botset` in a private chat** with the bot, not in a group.

- **Only owner and sudo users** can access `/botset`.

- **Made a mistake?** Click **Reset** to go back to the default value.
