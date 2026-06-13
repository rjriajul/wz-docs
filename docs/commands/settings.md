# Settings & RSS

---

## `/userset`

**What it does:** Opens your personal settings panel. From here you can customize how the bot works for you.

**How to use:** Just send `/userset`. The bot will reply with a menu of buttons.

**Who can use it:** All authorized users.

### What you can set

| Setting | What it does |
|---|---|
| **Default upload destination** | Choose where your files go by default — Google Drive, Rclone path, or Telegram |
| **Thumbnail** | Set a custom thumbnail image for your uploads |
| **Leech type** | Choose between document (raw file) or media (with preview) |
| **Split size** | Set maximum file size before splitting (e.g., 1.5GB for Telegram) |
| **Rclone config** | Upload your own Rclone config file |
| **Token.pickle** | Upload your own Google Drive token |
| **Service accounts** | Upload service accounts for GDrive |
| **FFmpeg settings** | Set per-stream metadata for audio, video, and subtitles |

**How to set a value:**
1. Send `/userset`
2. Click the appropriate button
3. Follow the bot's instructions (send a file, enter a value, etc.)

---

## `/category`

**What it does:** Opens the category selection menu. Categories let you organize uploads into different folders/drives based on content type (e.g., Movies, TV, Music).

**How to use:** Just send `/category`. The bot shows your current categories.

**Who can use it:** All authorized users.

**How categories work:**
1. Admin sets up categories via `/botset` → Drive/Folder categories
2. Each category maps to a Google Drive folder or Rclone path
3. Users pick a category before starting a task
4. The file is uploaded to the category's destination

---

## `/rss`

**What it does:** Opens the RSS management menu. RSS lets the bot automatically download new content from RSS feeds — like a subscription service.

**How to use:** Just send `/rss`. The bot will show your current RSS feeds and options.

**Who can use it:** All authorized users.

### How RSS works

1. You add an RSS feed URL (e.g., from a TV show release site)
2. The bot checks the feed regularly for new items
3. When a new item matches your filters, the bot automatically downloads it

### Adding an RSS feed

```
/rss
# Then click the button to add a feed
```

You'll need:
- **Title** — A name for this feed (pick anything)
- **Link** — The RSS feed URL
- **Command** (optional) — Arguments to apply to downloads from this feed

### Command filters for RSS

When adding a feed, you can specify commands that will be applied to every download from that feed:

```
-c mirror                         # Command to run (mirror, leech, etc.)
-up mrcc:remote:path              # Upload destination
-rcf --buffer-size:8M             # Rclone flags
-d ratio:time                     # Seed ratio/time
-z password                       # Zip with password
```

### Content filters: `-inf` and `-exf`

Control which items to download based on their title:

| Filter | What it does | Example |
|---|---|---|
| `-inf 1080 or 720` | Only download if title contains "1080" OR "720" | `-inf 1080 or 720\|mkv or mp4` |
| `-exf flv or web` | Skip if title contains "flv" OR "web" | `-exf flv or web\|xxx` |

**How filters work:**
- `|` means AND
- `or` means OR
- Example: `-inf 1080 or 720|mkv or mp4|hevc`
  - This means: title must contain (1080 OR 720) AND (mkv OR mp4) AND hevc
- Example: `-exf flv or web|xxx`
  - This means: title must NOT contain (flv OR web) AND must NOT contain xxx

**Full example adding a feed:**

Title: MyTVShow
Link: https://example.com/rss
Command: -leech -up pm -inf 1080 or 720p|.web. or .webrip.
This will automatically leech new episodes that match the quality filter.

### Sensitive filter: `-stv`

By default, filters are case-insensitive. Add `-stv true` to make them case-sensitive.
