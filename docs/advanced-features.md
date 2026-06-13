# Advanced Features

Features for power users who want more control.

---

## RSS Automation

The bot can monitor RSS feeds and automatically download new content.

### Adding an RSS feed

```
/rss
```

This opens the RSS management menu where you can:

- **Add a feed**: Give it a title and URL
- **Set filters**: Only download what matches
- **Set commands**: Customize what happens to each new file
- **List/remove** existing feeds

### Filter syntax

When adding a feed, you can filter what to download:

```
Title https://example.com/rss -inf 1080 or 720|mkv or mp4 -exf flv
```

- `-inf` : **Include** only titles containing these words
  - `|` means **AND**: `mkv|mp4` → must have both `mkv` AND `mp4`
  - `or` means **OR**: `1080 or 720` → either `1080` or `720`
- `-exf` : **Exclude** titles containing these words

### RSS with commands

You can set what to do with each downloaded item:

```
Title https://example.com/rss -c -up mrcc:remote:path -rcf --buffer-size:8M
```

- `-c` : Command to run (e.g., leech, mirror, clone)
- `-up` : Upload destination
- `-rcf` : Rclone flags
- `-d` : Seed ratio/time for torrents
- `-z` : Zip with password
- `-stv` : Case-sensitive filter (`true` or `false`)

---

## FFmpeg Processing

Apply FFmpeg commands to files before they're uploaded.

### Inline FFmpeg commands

```bash
/mirror link -ff ["-i mltb.mkv -c copy -c:s srt mltb.mkv", "-i mltb.audio -c:a libmp3lame -q:a 2 mltb.mp3"]
```

The key is `mltb.*` — this is a placeholder for your files:
- `mltb.mkv` → only works on `.mkv` files
- `mltb.video` → works on **all** video files
- `mltb.audio` → works on **all** audio files
- `mltb` → works on all files, keeps original extension

Add `-del` to delete the original file after processing.

### Preset FFmpeg commands

Set presets in `config.py`:

```python
FFMPEG_CMDS = {
    "subtitle": ["-i mltb.mkv -c copy -c:s srt mltb.mkv"],
    "compress": ["-i mltb.video -c:v libx264 -crf 28 mltb"],
}
```

Then use them with: `/mirror link -ff subtitle`

---

## Metadata Editing

Add metadata to media files before upload.

### Basic usage

```bash
/mirror link -meta title=My Movie|artist=Me|album=Great
```

Separate key-value pairs with `|`.

### Dynamic variables

| Variable | What it becomes |
|---|---|
| `{filename}` | Original filename (with extension) |
| `{basename}` | Filename without extension |
| `{extension}` | File extension (no dot) |
| `{year}` | Year extracted from filename |
| `{audiolang}` | Audio language (auto-detect) |
| `{sublang}` | Subtitle language (auto-detect) |

### Per-stream metadata

In User Settings → FFmpeg Settings, you can set different metadata for:
- **Audio streams** (e.g., `language={audiolang}`)
- **Video streams** (e.g., `title={basename}`)
- **Subtitle streams** (e.g., `language={sublang}`)

### Escaping pipes

Use `\|` if you need a literal pipe in your value:

```
/mirror link -meta title=Movie \| Director's Cut
```

---

## Torrent Search

Search for torrents directly from Telegram:

```bash
/search ubuntu 24.04
```

This searches multiple torrent sites at once using qBittorrent search plugins. The results show you the name, size, seeders, and leechers.

Set custom search plugins in config:

```python
SEARCH_PLUGINS = [
    "https://raw.githubusercontent.com/qbittorrent/.../piratebay.py",
    "https://raw.githubusercontent.com/.../leetx.py",
]
```

---

## Web File Selection UI

When you add `-s` to a torrent mirror command, the bot gives you a link to a web UI where you can select which files to download:

```
/mirror magnet:?xt=... -s
```

The web UI is available through your Cloudflare tunnel URL (check `docker compose logs tunnel`).

If `WEB_PINCODE = True` (default), you'll need to enter a pincode first.

---

## Torrent Selection without Web UI

You can also select files directly in Telegram:

```
/select GID12345
```

Or reply to a task message with `/select`.

---

## Queue System

The bot has a built-in queue to prevent overwhelming your server:

```
QUEUE_ALL = 3         # Max 3 tasks total
QUEUE_DOWNLOAD = 2    # Max 2 downloading at once
QUEUE_UPLOAD = 1      # Max 1 uploading at once
```

When the queue is full, new tasks are queued and start automatically when a slot frees up.

Use `/forcestart [GID]` to skip the queue for an important task.

---

## Name Substitution

Swap words in filenames automatically:

```bash
/mirror link -ns oldname/newname
```

Format: `wordToReplace/replacement/sensitive`

- `/s` at the end makes it case-sensitive
- Use `\` to escape special characters: `\^$.|?*+()[]{}`

Multiple substitutions with `|`:

```bash
/mirror link -ns [1080p]/1080/s | [720p]/720
```

---

## Custom Upload Paths

Set different upload destinations based on file extension:

```python
UPLOAD_PATHS = {
    ".mkv": "main:/movies",
    ".mp3": "main:/music",
    ".pdf": "main:/documents",
}
```

Files are automatically routed to the matching path.

---

## Bot Settings Panel

Owner/Sudo users can change settings on the fly with `/botset`:

- **Config Variables** — Change any config value
- **On/Off Settings** — Toggle features on/off
- **Private Files** — Upload/delete files (token.pickle, rclone.conf, etc.)
- **Qbit Settings** — qBittorrent options
- **Aria2c Settings** — Aria2 options
- **Sabnzbd Settings** — Usenet options
- **JDownloader Sync** — Sync JDownloader config

---

## User Settings Panel

Regular users can customize their experience with `/userset`:

- Upload destination (GDrive / Rclone / Telegram)
- Thumbnail
- Rclone config
- Google Drive token
- Default leech type (document or media)
- Split size
- And more

---

## Multiple Bot Tokens (Parallel Tasks)

Run tasks in parallel using multiple bot tokens:

```python
HELPER_TOKENS = "123456:TOKEN1 789012:TOKEN2"
```

Space-separated list. Each helper bot can handle tasks independently, increasing throughput.

---

## Force Subscription

Require users to join specific channels before using the bot:

```python
FORCE_SUB_IDS = "-1001234567890 -1009876543210"
```

Users who haven't joined will be prompted to join before they can mirror or leech.

---

## Speedtest

Check the server's internet speed:

```bash
/speedtest
```

Useful for diagnosing slow downloads.

---

## MediaInfo

Get detailed technical info about any media file:

```bash
/mediainfo (reply to a video/audio file)
/mediainfo https://example.com/video.mp4
```

Shows codec, bitrate, resolution, duration, and more.

---

## IMDB / AniList / MyDramaList Search

Look up movies, anime, or dramas without leaving Telegram:

```bash
/imdb The Matrix
/anilist Attack on Titan
/mdl My Love from the Star
```

---

## Shell & Exec (Owner only)

Run shell commands or Python code directly from Telegram:

```bash
/shell ls -la
/shell df -h

/exec print("hello world")

/aexec
import asyncio
await asyncio.sleep(1)
print("done")
```

---

## Gallery / Images

Display random images on bot messages:

```bash
/addimage (reply to a photo)
```

Manage images:

```bash
/images
```

Set `USE_IMAGES = True` in config to enable random backgrounds. You can auto-fetch wallpapers with:

```python
IMG_SEARCH = "anime, nature, space"
IMG_PAGE = 2
IMG_SOURCES = ["wallpaperflare", "wallhaven"]
```
