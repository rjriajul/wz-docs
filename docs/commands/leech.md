# Leech Commands

Leech commands download a file and send it to you on Telegram instead of uploading to cloud storage.

## Available Commands

| Command | What it does | Best for |
|---|---|---|
| `/leech [link]` | Download using Aria2 and send to Telegram | Direct links, HTTP downloads, torrents |
| `/qbleech [magnet/torrent]` | Download via qBittorrent and send to Telegram | Torrents only |
| `/ytdlleech [link]` | Download via yt-dlp and send to Telegram | YouTube, social media, streams |
| `/jdleech [link]` | Download via JDownloader and send to Telegram | Premium hosting sites |
| `/nzbleech [link]` | Download via SABnzbd and send to Telegram | Usenet/NZB files |

**How to use:**
```
/leech https://example.com/video.mp4
/ytdlleech https://youtube.com/watch?v=dQw4w9WgXcQ
/qbleech magnet:?xt=urn:btih:xxxx
```

---

## Arguments

Leech commands support **almost all the same arguments** as [mirror commands](./mirror), but the destination is always Telegram.

| Arg | What it does | Example |
|---|---|---|
| `-n` | Rename the file | `/leech link -n myfile.mp4` |
| `-z` | Zip the file (password optional) | `/leech link -z mypass` |
| `-e` | Extract a zip/rar | `/leech link -e` |
| `-sp` | Split size | `/leech link -sp 500mb` |
| `-t` | Set thumbnail | `/leech link -t https://img.url/thumb.jpg` |
| `-s` | Select files from torrent | `/qbleech link -s` |
| `-d` | Seed after download | `/leech link -d 0.7:10` |
| `-i` | Multi-link mode | `/leech -i 3` |
| `-b` | Bulk mode | `/leech -b` |
| `-m` | Same directory | `/leech -i 3 -m "Movies"` |
| `-sv` | Sample video (duration:part) | `/leech link -sv 60:4` |
| `-ss` | Screenshots (count) | `/leech link -ss 6` |
| `-ca` | Convert audio | `/leech link -ca mp3` |
| `-cv` | Convert video | `/leech link -cv mp4` |
| `-f` | Force start | `/leech link -f` |
| `-fd` | Force download only | `/leech link -fd` |
| `-fu` | Force upload only | `/leech link -fu` |
| `-ff` | FFmpeg commands | `/leech link -ff ["cmd1","cmd2"]` |
| `-meta` | Add metadata | `/leech link -meta title=MyMovie` |
| `-ns` | Name substitution | `/leech link -ns old/new` |
| `-rcf` | Rclone flags | `/leech link -rcf --buffer-size:8M` |
| `-au` | Username for auth | `/leech link -au user` |
| `-ap` | Password for auth | `/leech link -ap pass` |
| `-h` | Custom headers | `/leech link -h "key: value"` |
| `-j` | Join split files | `/leech link -j` |
| `-opt` | yt-dlp options (for `/ytdlleech`) | `/ytdlleech link -opt format:bv*` |

### Leech-specific arguments

#### Leech as document or media: `-doc` `-med`

Controls whether files are sent as documents (raw files) or media (with Telegram preview).

```
/leech link -doc                # Send as document
/leech link -med                # Send as media (photos show preview, videos play inline)
```

By default, the bot follows your setting from `/userset`. Use these to override for a single task.

#### TG Transmission: `-hl` `-bt` `-ut`

Controls who uploads the file to Telegram.

```
/leech link -hl                 # Hybrid leech (bot sends files >20MB, user sends small files)
/leech link -bt                 # Bot sends everything
/leech link -ut                 # User session sends everything
```

**What's the difference?**
- **Bot leech (`-bt`):** The bot uploads the files. Works immediately.
- **User leech (`-ut`):** Your user session uploads (needs `USER_SESSION_STRING`). Better for large files because user accounts have higher limits.
- **Hybrid (`-hl`):** Automatically picks bot or user based on file size.

#### Thumbnail layout: `-tl`

Controls thumbnail layout when sending media.

```
/leech link -tl 3x3             # 3 photos per row, 3 rows
```

#### Choose where to leech: `-up`

By default, the bot sends files to the chat where you sent the command. Use `-up` to send elsewhere.

```
/leech link -up @username       # Send to a specific chat
/leech link -up pm              # Send to your private messages
/leech link -up id|topic_id     # Send to a specific topic in a forum
```

---

## Examples

```
# Simple leech
/leech https://example.com/video.mp4

# Leech with rename and split
/leech https://example.com/movie.mkv -n "My Movie.mkv" -sp 1.5gb

# Leech YouTube as audio
/ytdlleech https://youtube.com/watch?v=dQw4w9WgXcQ -ca mp3

# Leech torrent with file selection and seed
/qbleech magnet:?xt=urn:btih:xxxx -s -d 1.0:60

# Leech with zip and send to private message
/leech link -z -up pm

# Multi-link leech in same directory
/leech -i 3 -m "Series" -med

# Bulk leech
/leech -b
# Reply to a message containing:
# link1 -n ep1.mp4
# link2 -n ep2.mp4 -doc

# Leech with FFmpeg subtitle burn
/leech link -ff ["-i mltb.mkv -vf subtitles=subs.srt mltb.mkv"]
```
