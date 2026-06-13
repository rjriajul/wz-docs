# Mirror Commands

Mirror commands download a file from the internet and upload it to a cloud destination (Google Drive, Rclone remote, etc.).

## Available Commands

| Command | What it does | Best for |
|---|---|---|
| `/mirror [link]` | Download using Aria2 | Direct links, HTTP downloads, torrents, magnet links |
| `/qbmirror [magnet/torrent]` | Download using qBittorrent | Torrents only (better torrent handling) |
| `/ytdl [link]` | Download using yt-dlp | YouTube, Twitter, Facebook, TikTok, m3u8 streams, and 1000+ sites |
| `/jdmirror [link]` | Download using JDownloader | Premium hosting sites, captcha-protected links |
| `/nzbmirror [link]` | Download using SABnzbd | Usenet/NZB files |
| `/clone [link]` | Copy files between Google Drives | GDrive-to-GDrive copy (no download needed) |

**How to send a command:**
```
/mirror https://example.com/video.mp4
/ytdl https://youtube.com/watch?v=dQw4w9WgXcQ
/qbmirror magnet:?xt=urn:btih:xxxx
```

You can either type the link after the command, or reply to a message/file with just the command.

---

## Arguments you can add

After the link, you can add extra arguments to control what happens. Here's every argument explained simply:

### Rename the file: `-n`

Renames the file before uploading. Doesn't work with torrents.

```
/mirror https://example.com/video.mp4 -n my_video.mp4
```

### Choose upload destination: `-up`

Pick where to upload. If you don't use this, the bot uses your default destination.

```
/mirror link -up rcl            # Opens buttons to pick Rclone remote & path
/mirror link -up gdl            # Opens buttons to pick Google Drive folder
/mirror link -up remote:dir     # Upload directly to an Rclone path
/mirror link -up gdrive_id      # Upload directly to a specific GDrive folder ID
```

**For Telegram leech (sending to a chat instead of cloud):**
```
/mirror link -up id/@username   # Leeches to that chat
/mirror link -up pm             # Sends files to you in private
/mirror link -up b:id           # Leech by bot session
/mirror link -up u:id           # Leech by user session
/mirror link -up h:id           # Hybrid leech (bot+user based on file size)
/mirror link -up id|topic_id    # Leech to specific topic in a forum chat
```

**Using your personal upload settings from `/userset`:**
```
/mirror link -up mrcc:remote:path   # Uses your Rclone config from userset
/mirror link -up mtp:gdrive_id      # Uses your token.pickle from userset
```

**Choosing token.pickle vs service accounts:**
```
/mirror link -up tp:gdrive_id    # Upload using token.pickle
/mirror link -up sa:gdrive_id    # Upload using service accounts
```

### Extract a zip/rar: `-e`

Extracts compressed files (zip, rar, tar, 7z, etc.) after download.

```
/mirror link -e                  # Extract without password
/mirror link -e mypassword       # Extract with password
```

### Zip the files: `-z`

Compresses files into a zip archive after download.

```
/mirror link -z                  # Zip without password
/mirror link -z mypassword       # Zip with password protection
```

### Extract AND Zip: `-e -z`

Use both together — it extracts first, then zips the result.

```
/mirror link -z mypass -e mypass   # Extract then zip (both password protected)
```

### File selection from torrents: `-s`

Lets you pick which files to download from a torrent, NZB, or JDownloader link.

```
/qbmirror magnet:?xt=urn:btih:xxxx -s   # Opens file selection menu
```

### Set split size: `-sp`

Splits large files into smaller parts. Only mb and gb are supported (or write bytes without a unit).

```
/mirror link -sp 500mb           # Split into 500MB parts
/mirror link -sp 2gb             # Split into 2GB parts
/mirror link -sp 4000000000      # Split into 4GB parts (in bytes)
```

### Set a thumbnail: `-t`

Adds a custom thumbnail to the uploaded file. Only works for GDrive uploads.

```
/mirror link -t https://example.com/thumb.jpg     # URL to an image
/mirror link -t none                               # Upload without any thumbnail
```

You can also use a Telegram message link containing a photo or document.

### Torrent seeding: `-d`

Keeps the torrent seeding after download completes. Format: `ratio:time_in_minutes`.

```
/mirror link -d 0.7:10          # Seed until ratio 0.7 OR 10 minutes (whichever comes first)
/mirror link -d 0.7             # Seed until ratio 0.7
/mirror link -d :10             # Seed for 10 minutes
```

### Multi-link mode: `-i`

Download multiple links at once. Reply to the first link and specify how many links follow.

```
/mirror -i 3                    # Then reply to 3 links in order
```

### Bulk mode: `-b`

Download many links from a text file or message. Reply to a message where each link is on a new line. Each link can have its own arguments.

```
/mirror -b                      # Reply to a message/file with links
```

Example bulk message (reply to this with `/mirror -b`):
```
https://link1.com -n video1.mp4 -up rcl:media
https://link2.com -z
https://link3.com -e -n extracted
```

**Bulk range:** You can download only a portion of the bulk list:
```
/mirror -b 2:5                  # Download links 2 through 5
/mirror -b :3                   # Download first 3 links only
/mirror -b 4:                   # Download from link 4 onwards
```

### Same directory mode: `-m`

Puts all downloaded files into a single folder. Useful when you want multiple links combined into one upload.

```
/mirror link -m "My Folder"      # Creates "My Folder" and puts the download inside
/mirror -i 3 -m "Season 1"      # All 3 links go into one folder "Season 1"
```

When used with bulk mode, you can even set different folders for different links in the same bulk:
```
link1 -m folder1
link2 -m folder1
link3 -m folder2
```

### Create a sample video: `-sv`

Creates a short sample clip from a video file. Format: `duration_seconds:part_duration_seconds`.

```
/mirror link -sv                 # Default: 60s sample with 4s parts
/mirror link -sv 30:5           # 30 second sample with 5 second parts
/mirror link -sv :5             # Default duration (60s), 5s parts
/mirror link -sv 30             # 30s sample, default parts (4s)
```

### Take screenshots: `-ss`

Takes screenshots from a video at regular intervals.

```
/mirror link -ss                 # Default: 10 screenshots
/mirror link -ss 6              # Take 6 screenshots
```

### Convert audio: `-ca`

Converts audio files to a different format.

```
/mirror link -ca mp3             # Convert all audio to mp3
/mirror link -ca mp3 + flac ogg  # Convert only flac and ogg to mp3 (skip others)
```

### Convert video: `-cv`

Converts video files to a different format.

```
/mirror link -cv mp4             # Convert all video to mp4
/mirror link -cv mkv - webm flv  # Convert all video to mkv EXCEPT webm and flv
```

### Force start: `-f` `-fd` `-fu`

Bypasses the queue and starts immediately.

```
/mirror link -f                  # Force download AND upload (skip queue)
/mirror link -fd                 # Force download only (still queues upload)
/mirror link -fu                 # Force upload (skip upload queue)
```

### FFmpeg commands: `-ff`

Run custom FFmpeg commands on files before uploading. You can pass a list of commands.

```
/mirror link -ff ["-i mltb.mkv -c copy -c:s srt mltb.mkv", "-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3"]
```

**How it works:**
- `mltb.mkv` — only works on `.mkv` files
- `mltb.video` — works on all video files
- `mltb.m4a` — only works on `.m4a` audio files
- `mltb.audio` — works on all audio files
- `mltb` — same extension as the input
- Add `-del` to delete the original file after the command runs

### Add metadata: `-meta`

Adds custom metadata (title, artist, album, year, etc.) to media files.

```
/mirror link -meta title=My Movie|artist=Singer Name
/ytdl link -meta album=Playlist|year=2024|genre=Action
```

**Dynamic variables you can use:**
- `{filename}` — Original filename
- `{basename}` — Filename without extension
- `{extension}` — File extension
- `{audiolang}` — Audio language
- `{sublang}` — Subtitle language
- `{year}` — Year from filename

### Name substitution: `-ns`

Replaces words in filenames. Format: `old/new/s` (s = case-sensitive).

```
/mirror link -ns script/code              # Replace "script" with "code"
/mirror link -ns [mltb]/mltb              # Remove [mltb] brackets
/mirror link -ns cpu/                     # Remove "cpu" from name
/mirror link -ns \text\/text/s            # Replace \text\ with text (case-sensitive)
```

**Note:** Add `\` before special characters: `\^$.|?*+()[]{}`

### Rclone flags: `-rcf`

Pass extra flags to Rclone for fine control over the upload.

```
/mirror link -up remote:path -rcf --buffer-size:8M|--drive-starred-only
```

Check [rclone.org/flags](https://rclone.org/flags/) for all available flags.

### Leech type: `-doc` `-med`

Forces the file to be sent as document or media when leeching to Telegram.

```
/mirror link -doc               # Upload as document (raw file)
/mirror link -med               # Upload as media (Telegram shows preview)
```

### Thumbnail layout: `-tl`

Controls how many thumbnails appear per row when viewing gallery images. Format: `widthxheight`.

```
/mirror link -tl 3x3            # 3 photos per row, 3 rows
```

### TG Transmission: `-hl` `-bt` `-ut`

Controls who does the uploading when leeching to Telegram.

```
/mirror link -hl                # Hybrid — bot sends big files, user sends small ones
/mirror link -bt                # Bot sends everything
/mirror link -ut                # User session sends everything
```

### Direct link authorization: `-au` `-ap`

For links that need a username and password.

```
/mirror link -au myusername -ap mypassword
```

### Custom headers: `-h`

Add custom HTTP headers for direct link downloads.

```
/mirror link -h "key: value" "key2: value2"
```

### Join split files: `-j`

Joins split files (like `.001`, `.002`) before processing. Only works before extract/zip, so use it with `-m` (same directory).

```
/mirror link -j -m "folder"     # Join splits into a single file
/mirror -i 3 -j -m "folder"     # Join splits from multiple links
/mirror -b -j -m "folder"       # Join splits in bulk mode
```

---

## Downloading from different sources

### Telegram links

You can mirror files directly from Telegram. Three types of links work:

- **Public:** `https://t.me/channel_name/message_id`
- **Private:** `tg://openmessage?user_id=xxxxxx&message_id=xxxxx`
- **Super:** `https://t.me/c/channel_id/message_id`
- **Range:** `https://t.me/channel_name/100-150` (downloads a range of messages)

```
/mirror https://t.me/c/123456789/100-150     # Download messages 100-150 from a channel
```

**Note:** For private/supergroup links, you need a `USER_SESSION_STRING` configured.

### Google Drive links

If your default upload is Rclone (`DEFAULT_UPLOAD = "rc"`), you can force GDrive upload:

```
/mirror gdriveLink -up gd                   # Upload to default GDrive folder
/mirror tp:gdriveLink -up tp:gdrive_id      # Use token.pickle
/mirror sa:gdriveLink -up sa:gdrive_id       # Use service accounts
/mirror mtp:gdriveLink -up mtp:gdrive_id     # Use user's token.pickle from usetting
```

### Rclone paths

If your default is GDrive, you can force Rclone upload:

```
/mirror rcl/rclone_path -up rcl/rclone_path/rc -rcf flagkey:flagvalue
/mirror mrcc:rclone_path -up rc             # Use user's Rclone config from usetting
```

### User download options

Control how files are downloaded (which account/service is used):

```
/mirror tp:link                 # Download using owner's token.pickle
/mirror sa:link                 # Download using service accounts
/mirror mrcc:remote:path        # Download using user's Rclone config from usetting
/mirror mtp:gdrive_id           # Download using user's token.pickle from usetting
```

---

## Examples

```
# Simple mirror
/mirror https://example.com/file.zip

# Mirror with rename and extract
/mirror https://example.com/archive.rar -n myfiles -e

# Torrent with seeding and file selection
/qbmirror magnet:?xt=urn:btih:xxxx -d 1.0:30 -s

# YouTube download with custom format and metadata
/ytdl https://youtube.com/watch?v=dQw4w9WgXcQ -opt {"format":"best"} -meta title=MySong

# Multi-link with zip and same directory
/mirror -i 3 -z -m "Downloads"

# Bulk mirror with different settings per link
/mirror -b
# Reply to a message containing:
# link1 -n video.mp4 -up gdl
# link2 -z -up rcl:backup
# link3 -e

# Clone between Google Drives
/clone https://drive.google.com/drive/folders/xxxx

# Mirror with FFmpeg processing
/mirror link -ff ["-i mltb.mkv -c copy -c:s srt mltb.mkv", "-del"]
```
