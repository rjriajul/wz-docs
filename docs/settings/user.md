# User Settings (`/userset`)

This page explains **every button** in `/userset`. Everything you change here only affects **you**, not other users.

> **How to open:** Send `/userset` to the bot. You'll see 6 category buttons.

---

## The 6 Categories in `/userset`

| # | Button | What's inside |
|---|---|---|
| 1 | General Settings | Upload mode, whose tokens to use |
| 2 | Mirror Settings | Rclone, GDrive, YouTube, Mega tools |
| 3 | Leech Settings | How files look on Telegram |
| 4 | Uphoster Settings | File hosting service API keys |
| 5 | FF Media Settings | FFmpeg commands and metadata |
| 6 | Mics Settings | Advanced settings like name swap, excluded extensions |

Click any category to see its options. Click **Back** to go back. Click **Close** to close the panel.

---

## 1. General Settings

Click **General Settings** in `/userset`. You see 3 settings:

### 1a. Default Upload Package

**What:** Toggles between GDRIVE API mode and RCLONE mode for uploads.

| It shows | It means files go to |
|---|---|
| **GDRIVE API** | Google Drive |
| **RCLONE** | Rclone cloud storage |

**How to change:** Click the **Swap to ...** button.

**Note:** Telegram is not a DEFAULT_UPLOAD option here. To send to Telegram, use `-up pm` in your command (or use `/leech` instead of `/mirror`).

---

### 1b. Default Usage Mode

**What:** Whether to use YOUR tokens/config or the bot OWNER's tokens/config.

| Mode | Uses |
|---|---|
| **OWNER's token/config** | The bot owner's GDrive token, Rclone config, etc. |
| **USER's token/config** | YOUR uploaded token.pickle, rclone.conf, etc. |

**How to change:** Click the **Swap to ...** button.

---

### 1c. YT Cookies Mode

**What:** Whether to use YOUR YouTube cookie file or the bot owner's.

| Mode | Uses |
|---|---|
| **Owner's Cookie** | The bot owner's cookie file for YouTube downloads |
| **User's Cookie** | YOUR uploaded cookie file |

**How to change:** Click the **Swap to ...** button.

---

## 2. Mirror Settings

Click **Mirror Settings** in `/userset`. You see these sub-categories:

### 2a. RClone Tools

Click **RClone Tools** to see 3 settings:

**Rclone Config:**
- Upload your own `rclone.conf` file to use YOUR cloud storage
- Click the button → send your `rclone.conf` file
- Then use it in commands: `/mirror link -up mrcc:remote:path`

**Default Rclone Path:**
- Set a default path like `remote:folder`
- Example: `mrcc:main:Videos`
- Click → type the path → send

**Rclone Flags:**
- Extra Rclone options
- Format: `key:value|key|key:value`
- Example: `--buffer-size:8M|--drive-starred-only`

---

### 2b. GDrive Tools

Click **GDrive Tools** to see 5 settings:

**Default Gdrive ID:**
- Your Google Drive folder ID
- Click → send a folder ID
- Use `mtp:` prefix to use your own token: `mtp:YOUR_DRIVE_ID`

**Default Index URL:**
- Your Google Drive Index URL
- Click → send the URL

**Token.pickle:**
- Upload your `token.pickle` file to use YOUR Google Drive
- Click → send the file

**Stop Duplicate:**
- Toggle: skip upload if file already exists
- Click the button to enable/disable

**User Drive Categories:**
- Create named categories for different GDrive folders
- Format: `{"Movies": "drive_id|index_link", "TV": "drive_id"}`
- Click → send a dictionary like the example

---

### 2c. YT Up Tools

Click **YT Up Tools** to see 4 settings:

**YT Description:**
- Custom description for YouTube uploads
- Click → type your description → send

**YT Tags:**
- Comma-separated tags
- Click → send like `tag1,tag2,tag3`

**YT Category ID:**
- YouTube category number (22 = People & Blogs)
- Click → send a number like `22`

**YT Privacy Status:**
- `public`, `private`, or `unlisted`
- Click → send one of those

---

### 2d. Mega Tools

Click **Mega Tools** to see 2 settings:

**Mega Email:**
- Your Mega.nz account email
- Click → send your email

**Mega Password:**
- Your Mega.nz account password
- Click → send your password

Once both are set, the bot uses YOUR Mega account for downloads.

---

### 2e. Drive Category Toggle

If the bot owner has enabled Drive Category Mode globally, you'll see a **Drive Cat: ON/OFF** button. Toggle it to enable/disable your personal drive categories.

---

## 3. Leech Settings

Click **Leech Settings** in `/userset`. This has 12 settings:

### 3a. Thumbnail

**What:** A custom preview picture for your uploaded files.

**How to set:**
1. Click **Thumbnail**
2. Send a photo, an image URL, a Telegram message link with a photo, or `none` to remove it

### 3b. Leech Split Size

**What:** Max file size per piece when splitting.

**How to set:**
1. Click **Leech Split Size**
2. Send a value like `2gb`, `500mb`, or bytes like `4000000000`

### 3c. Leech Destination

**What:** Where leeched files are sent.

**Format:** Use a prefix + destination:
- `b:@username` — leech by BOT to a chat
- `u:@username` — leech by USER session to a chat
- `h:@username` — HYBRID leech (bot + user)
- `b:pm` — send to your private messages via bot
- `id|topic_id` — leech to a specific thread/topic

**Click → type a destination → send.**

### 3d. Leech Prefix

**What:** Text added BEFORE the filename.
```
LEECH_PREFIX = "[MyChannel] "
```
`video.mp4` becomes `[MyChannel] video.mp4`.

Click → type the prefix → send.

### 3e. Leech Suffix

**What:** Text added AFTER the filename.
```
LEECH_SUFFIX = " - by bot"
```
`video.mp4` becomes `video.mp4 - by bot`.

Click → type the suffix → send.

### 3f. Leech Caption

**What:** A custom message attached to every leeched file. Supports HTML.

Click → type your caption → send.

### 3g. Send As Document / Send As Media

**What:** Toggle between Document mode (raw files, no preview) and Media mode (videos play inline).

Click the button to switch.

### 3h. Enable / Disable Equal Splits

**What:** When ON, all split parts are the exact same size. When OFF, the last part is whatever's left over.

Click the button to toggle.

### 3i. Enable / Disable Media Group

**What:** When ON, split parts appear as a single media album instead of separate messages.

Click the button to toggle.

### 3j. Leech by Bot / Leech by User

**What:** Which account does the uploading — the bot account or your user account.

Click to toggle. (Only works if you have a user session string set up.)

### 3k. Enable / Disable Hybrid Leech

**What:** When ON, both bot and user accounts upload at the same time for speed.

Click to toggle.

### 3l. Thumbnail Layout

**What:** The size/arrangement of thumbnails. Format: `WxH` like `3x3`, `2x4`, etc.

Click → type the layout → send.

---

## 4. Uphoster Settings

Click **Uphoster Settings** in `/userset`. This is for file hosting services.

First, click **Change Destination ⇋** to pick which service to use. Then click that service's button.

### 4a. Gofile Tools

**Gofile Token:** Your Gofile.io API token. Click → send token.

**Gofile Folder ID:** Your Gofile folder ID. Click → send ID. Leave empty to upload to root.

### 4b. BuzzHeavier Tools

**BuzzHeavier Token:** Your BuzzHeavier API token (Account ID). Click → send token.

**BuzzHeavier Folder ID:** Your folder ID. Click → send ID.

### 4c. PixelDrain Tools

**PixelDrain Key:** Your PixelDrain API key. Click → send key.

### 4d. DevUploads Tools

**DevUploads API Key:** Your DevUploads API key. Click → send key.

**DevUploads Folder ID:** Your folder ID. Click → send ID. Leave empty for root.

### 4e. VikingFile Tools

**VikingFile Hash:** Your VikingFile user hash. Click → send hash.

**VikingFile Folder:** Your folder name/path. Click → send. Leave empty for root.

---

## 5. FF Media Settings

Click **FF Media Settings** in `/userset`. This section has 5 settings for media processing:

### 5a. FFmpeg Cmds

**What:** Custom FFmpeg command presets. Each preset is a list of commands.

**Format:** `{"name": ["command1", "command2", ...]}`

**Example:**
```
{"subtitle": ["-i mltb.mkv -c copy -c:s srt mltb.mkv"], "convert": ["-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3"]}
```

- Use `mltb.*` as a placeholder for the actual filename
- Add `-del` to delete the original after processing
- Use with `-ff name` in your command, e.g., `/leech link -ff subtitle`

**Click → type the dictionary → send.**

### 5b. Global Metadata

**What:** Metadata applied to ALL media files.

**Format:** `key=value|key2=value2`

**Dynamic variables:**
| Variable | Becomes |
|---|---|
| `{filename}` | Original filename |
| `{basename}` | Filename without extension |
| `{audiolang}` | Auto-detected audio language |
| `{year}` | Year from filename |

**Example:**
```
title={basename}|artist={audiolang} Version|year={year}
```

**Click → type the metadata → send.**

### 5c. Audio Stream Metadata

**What:** Metadata applied to each audio track separately.

**Format:** `key=value|key2=value2`

**Example:**
```
language={audiolang}|title=Audio - {audiolang}
```

### 5d. Video Stream Metadata

**What:** Metadata applied to video streams.

**Format:** `key=value|key2=value2`

**Example:**
```
title={basename}|comment=HD Video
```

### 5e. Subtitle Stream Metadata

**What:** Metadata applied to each subtitle track separately.

**Dynamic variable:** `{sublang}` — auto-detected subtitle language

**Example:**
```
language={sublang}|title=Subtitles - {sublang}
```

---

## 6. Mics / Advanced Settings

Click **Mics Settings** in `/userset`. This has 5 settings:

### 6a. Excluded Extensions

**What:** File types to SKIP during upload. No dots needed.

**How to set:** Click → type extensions separated by spaces.

**Example:**
```
exe msi bat tmp
```
This skips `.exe`, `.msi`, `.bat`, `.tmp` files.

### 6b. Name Swap

**What:** Rename files by swapping old text with new text. Supports regex patterns.

**Basic format:** `old:new|old2:new2`

**Example:**
```
1080p:HD|x265:HEVC
```
Replaces "1080p" with "HD" and "x265" with "HEVC".

**Full guide:** Click the link in the bot for the complete NAME_SWAP documentation.

### 6c. YT-DLP Options

**What:** Custom yt-dlp options for downloading videos.

**Format:** A Python dictionary `{key: value, key: value}`

**Example:**
```
{"format": "bv*+mergeall[vcodec=none]", "nocheckcertificate": true}
```

**Click → type the dictionary → send.**

### 6d. Upload Paths

**What:** Custom upload destinations for different file extensions.

**Format:** A dictionary `{name: path}`

**Example:**
```
{"Videos": "remote:Videos", "Music": "gdrive:MusicFolderID"}
```

**Click → type the dictionary → send.**

### 6e. YT Cookie File

**What:** Your personal cookie file for YouTube/website access.

**How to set:** Click → send your `cookies.txt` file.

---

## Quick Reference

| Category | Settings inside |
|---|---|
| General | Upload mode, token mode, cookie mode |
| Mirror | Rclone config/path/flags, GDrive ID/index/token/stop-dup/categories, YT tools, Mega tools |
| Leech | Thumbnail, split size, destination, prefix, suffix, caption, doc/media, equal splits, media group, leech by, hybrid, thumbnail layout |
| Uphoster | Gofile, BuzzHeavier, PixelDrain, DevUploads, VikingFile keys |
| FF Media | FFmpeg cmds, global metadata, audio/video/subtitle metadata |
| Mics | Excluded extensions, name swap, yt-dlp options, upload paths, cookie file |

---

## Tips

- All settings are **yours only** — other users don't see them
- Uploading a new file (rclone.conf, token.pickle, cookie file) **replaces** the old one
- Your settings override the bot owner's defaults
- The **Reset All** button clears ALL your personal settings
