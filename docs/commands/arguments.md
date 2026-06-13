# Command Arguments Reference

You can add these arguments AFTER the link to customize how the bot handles your download. Most arguments work with both mirror and leech commands.

## How to use arguments

```
/command link -arg1 -arg2 value
```

Examples:
```
/mirror https://example.com/video.mp4 -n myfile.mp4 -up gdl
/leech https://example.com/file.zip -z mypassword -sp 500mb
```

---

## All arguments

### `-n` — New name
Rename the file before upload. Doesn't work with torrents.
```
/mirror link -n myfile.mp4
```

### `-up` — Upload destination
Choose where to upload the file.
```
/mirror link -up rcl                   # Rclone (opens button menu)
/mirror link -up gdl                   # Google Drive (opens button menu)
/mirror link -up remote:dir            # Direct Rclone path
/mirror link -up gdrive_id             # Direct GDrive folder ID
/mirror link -up pm                    # Send to your Telegram PM
/mirror link -up @username             # Send to a Telegram chat
/mirror link -up id\|topic_id          # Send to a forum topic
/mirror link -up mrcc:remote:path      # Use your Rclone config from userset
/mirror link -up mtp:gdrive_id         # Use your token.pickle from userset
/mirror link -up tp:gdrive_id          # Use token.pickle for GDrive
/mirror link -up sa:gdrive_id          # Use service accounts for GDrive
```

### `-z` — Zip
Compress files into a zip archive. Optional password.
```
/mirror link -z                        # Zip without password
/mirror link -z mypassword             # Zip with password
```

### `-e` — Extract
Extract compressed files (zip, rar, 7z, tar, etc.).
```
/mirror link -e                        # Extract without password
/mirror link -e mypassword             # Extract with password
```

### `-z` + `-e` together — Extract then Zip
```
/mirror link -z mypass -e mypass       # Extract first, then zip
```

### `-sp` — Split size
Split large files into smaller parts. Supports mb, gb, or bytes.
```
/mirror link -sp 500mb
/mirror link -sp 2gb
```

### `-s` — Select files (torrent)
Open a file selection menu for torrents, NZBs, or JDownloader.
```
/qbmirror link -s
```

### `-t` — Thumbnail
Set a custom thumbnail image.
```
/mirror link -t https://example.com/thumb.jpg
/mirror link -t none                   # Remove thumbnail
```

### `-d` — Seed (torrents)
Keep seeding after download. Format: ratio:time_minutes.
```
/mirror link -d 0.7:10                 # Ratio 0.7 OR 10 minutes
/mirror link -d 0.7                    # Ratio only
/mirror link -d :10                    # Time only
```

### `-i` — Multi-link mode
Download multiple links in sequence. Reply to the first link.
```
/mirror -i 5
```

### `-b` — Bulk mode
Download many links from a text message/file. Reply to the message.
```
/mirror -b
/mirror -b 2:5                         # Bulk range (links 2-5)
```

### `-m` — Same directory
Put all downloaded files into one folder.
```
/mirror -i 3 -m "My Folder"
```

### `-sv` — Sample video
Create a short sample clip. Default: 60s sample with 4s parts.
```
/mirror link -sv                       # Default (60:4)
/mirror link -sv 30:5                  # 30s sample, 5s parts
```

### `-ss` — Screenshots
Take screenshots from a video.
```
/mirror link -ss                       # Default 10 screenshots
/mirror link -ss 6                     # 6 screenshots
```

### `-ca` — Convert audio
Convert audio to a different format.
```
/mirror link -ca mp3                   # All audio to mp3
/mirror link -ca mp3 + flac ogg        # Only flac/ogg to mp3
```

### `-cv` — Convert video
Convert video to a different format.
```
/mirror link -cv mp4                   # All video to mp4
/mirror link -cv mkv - webm flv        # All except webm/flv to mkv
```

### `-doc` — Leech as document
Send files as documents (no preview).
```
/leech link -doc
```

### `-med` — Leech as media
Send files as media (with preview).
```
/leech link -med
```

### `-f` — Force start
Skip the queue and start immediately.
```
/mirror link -f                        # Force both download and upload
/mirror link -fd                       # Force download only
/mirror link -fu                       # Force upload only
```

### `-ff` — FFmpeg commands
Run custom FFmpeg processing on files.
```
/mirror link -ff ["-i mltb.mkv -c copy -c:s srt mltb.mkv"]
```

### `-meta` — Metadata
Add metadata to media files.
```
/mirror link -meta title=MyMovie|artist=Singer
```

### `-ns` — Name swap
Replace text in filenames. Format: old/new/s (s = case-sensitive).
```
/mirror link -ns script/code
/mirror link -ns \[mltb\]/mltb
```

### `-rcf` — Rclone flags
Pass extra flags to Rclone during upload.
```
/mirror link -rcf --buffer-size:8M|--drive-starred-only
```

### `-hl` — Hybrid leech
Leech using both bot and user, based on file size.
```
/leech link -hl
```

### `-bt` — Leech by bot
Leech using the bot session only.
```
/leech link -bt
```

### `-ut` — Leech by user
Leech using the user session only.
```
/leech link -ut
```

### `-tl` — Thumbnail layout
Set thumbnail grid layout. Format: widthxheight.
```
/leech link -tl 3x3
```

### `-opt` — yt-dlp options (JSON)
Pass custom yt-dlp options in JSON format. Only for ytdl commands.
```
/ytdl link -opt {"format":"best"}
```

### `-au` — Auth username
Username for direct link authorization.
```
/mirror link -au myuser
```

### `-ap` — Auth password
Password for direct link authorization.
```
/mirror link -ap mypass
```

### `-h` — Custom headers
Add custom HTTP headers for direct link downloads.
```
/mirror link -h "key: value" "key2: value2"
```

### `-j` — Join files
Join split files (001, 002, etc.) before processing.
```
/mirror link -j -m "folder"
```

---

## Argument compatibility

| Arg | Mirror | Leech | YTDL | Clone |
|---|---|---|---|---|
| `-n` | Yes | Yes | Yes | No |
| `-up` | Yes | Yes | Yes | Yes |
| `-z` | Yes | Yes | Yes | No |
| `-e` | Yes | Yes | No | No |
| `-sp` | Yes | Yes | Yes | No |
| `-s` | Yes | Yes | Yes (quality) | No |
| `-t` | Yes | Yes | Yes | No |
| `-d` | Yes | Yes | No | No |
| `-i` | Yes | Yes | Yes | Yes |
| `-b` | Yes | Yes | Yes | Yes |
| `-m` | Yes | Yes | Yes | No |
| `-sv` | Yes | Yes | Yes | No |
| `-ss` | Yes | Yes | Yes | No |
| `-ca` | Yes | Yes | Yes | No |
| `-cv` | Yes | Yes | Yes | No |
| `-doc` | Yes | Yes | Yes | No |
| `-med` | Yes | Yes | Yes | No |
| `-f` | Yes | Yes | Yes | No |
| `-fd` | Yes | Yes | Yes | No |
| `-fu` | Yes | Yes | Yes | No |
| `-ff` | Yes | Yes | Yes | No |
| `-meta` | Yes | Yes | Yes | No |
| `-ns` | Yes | Yes | Yes | No |
| `-rcf` | Yes | Yes | Yes | Yes |
| `-hl` | Yes | Yes | Yes | No |
| `-bt` | Yes | Yes | Yes | No |
| `-ut` | Yes | Yes | Yes | No |
| `-tl` | Yes | Yes | Yes | No |
| `-opt` | No | No | Yes | No |
| `-au` | Yes | Yes | No | No |
| `-ap` | Yes | Yes | No | No |
| `-h` | Yes | Yes | No | No |
| `-j` | Yes | Yes | No | No |
