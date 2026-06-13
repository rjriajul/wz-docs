# Leeching

**Leeching** means downloading a file from the internet and **sending it to you on Telegram** — either as a file you can download right away, or as a media message (video, audio, photo).

```
You → /leech [link] → Bot downloads → Bot sends to you on Telegram → Done!
```

---

## Basic leech

```bash
/leech https://example.com/file.zip
```

The bot downloads the file and sends it to the chat where you sent the command.

---

## Leech types

| Command | Best for |
|---|---|
| `/leech` | Direct download links, HTTP/HTTPS |
| `/qbleech` | Torrent magnets and `.torrent` files |
| `/ytdlleech` | YouTube, social media, music, streams |
| `/jdleech` | Premium hoster links (via JDownloader) |
| `/nzbleech` | Usenet/NZB files (via SABnzbd) |

---

## Document vs Media

By default, the bot sends files as **documents** or **media** based on your settings.

| Override | What it does |
|---|---|
| `-doc` | Force as document (file stays as-is) |
| `-med` | Force as media (shows preview in Telegram) |

```bash
/leech video.mp4 -doc   # sends as file
/leech video.mp4 -med   # sends as video (with preview)
```

---

## File size & splitting

Telegram has a file size limit:
- **Normal bots**: 50MB
- **Premium bots**: 2GB (with premium)
- **User account**: 2GB

If your file is too big, the bot splits it automatically.

### Custom split size

```bash
/leech link -sp 500mb
/leech link -sp 2gb
/leech link -sp 4000000000   # in bytes
```

### Equal splits

If enabled in settings, the bot splits into equal-sized parts.

### Media group

If enabled, split parts are sent as a media album (nice for videos/photos).

---

## Who sends the files?

Three ways to leech:

| Mode | Flag | How it works |
|---|---|---|
| **Bot** (default) | `-bt` | Bot sends the files. Simple, works for most. |
| **User** | `-ut` | Your user account sends files. Needed for some private channel downloads. Requires `USER_SESSION_STRING`. |
| **Hybrid** | `-hl` | Small files by bot, large files by user (best of both). |

```bash
/leech link -bt   # force bot
/leech link -ut   # force user
/leech link -hl   # hybrid mode
```

---

## Setting a custom thumbnail

```bash
/leech link -t https://example.com/thumb.jpg
/leech link -t none   # no thumbnail
```

Also supports Telegram message links to photos/docs.

### Thumbnail layout

```bash
/leech link -tl 3x3   # 3 rows, 3 columns
```

---

## Extra options

### Rename before leeching

```bash
/leech link -n MyNewName.mp4
```

### Zip before sending

```bash
/leech link -z
/leech link -z mypassword
```

### Extract then zip

```bash
/leech link -e -z
```

The bot extracts first, then zips the result.

### Join split files

```bash
/leech link -j
```

Useful if you downloaded a split archive and need to join it first.

### FFmpeg processing

Apply FFmpeg commands to files before sending:

```bash
/leech link -ff ["-i file -c copy -c:s srt out.mkv"]
```

### Convert media format

```bash
/leech link -ca mp3    # convert all audio to mp3
/leech link -cv mp4    # convert all video to mp4
/leech link -ca mp3 -cv mp4  # both
```

### Add metadata

```bash
/leech link -meta title=MySong|artist=Me|album=Great
```

### Sample video

```bash
/leech video.mp4 -sv 60:4   # 60s sample with 4s parts
```

### Screenshots

```bash
/leech video.mp4 -ss 6   # 6 screenshots
```

### Name substitution

```bash
/leech link -ns oldname/newname
```

---

## Sending to a specific chat

By default, the file is sent to the current chat. To send elsewhere, add `-up`:

```bash
/leech link -up @channelusername
/leech link -up 123456789              # chat ID
/leech link -up pm                     # your private message
/leech link -up b:@channel             # force bot to send
/leech link -up u:123456789            # force user to send
/leech link -up 123456789|1234         # specific topic in a forum
```
