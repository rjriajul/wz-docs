# File Management Commands

These commands let you check what the bot is doing and control active tasks.

---

## `/status`

**What it does:** Shows all active and queued tasks. You'll see what's downloading, uploading, or waiting.

**How to use:**
```
/status                          # Shows all tasks
/status me                       # Shows only YOUR tasks
```

**What you'll see:** A list of tasks with progress bars, speeds, ETA, and file names.

---

## `/stats`

**What it does:** Shows full bot statistics — CPU usage, RAM, disk space, uptime, total downloads, total uploads, and more.

**How to use:** Just send `/stats`.

---

## `/mediainfo [reply/link]`

**What it does:** Shows detailed technical information about a media file (video/audio). Uses MediaInfo — the same tool professionals use.

**How to use:**
```
/mediainfo                       # Reply to a file or a Telegram message containing media
/mediainfo https://example.com/video.mp4   # Provide a direct link
```

**What you'll get:** Codec, resolution, bitrate, frame rate, audio format, subtitles, and more.

---

## `/cancel [gid]`

**What it does:** Cancels a running or queued task.

**How to use:**
```
/cancel gid123abc                # Cancel by task ID
/cancel                          # Reply to a task message to cancel it
```

You can find the GID (task ID) in the status message or in the task's progress message.

---

## `/cancelall [type]`

**What it does:** Cancels all tasks at once.

**How to use:**
```
/cancelall all                   # Cancel ALL tasks (mirror, leech, and upload)
/cancelall mirror                # Cancel only mirror tasks
/cancelall leech                 # Cancel only leech tasks
/cancelall upload                # Cancel only upload tasks
```

**Warning:** This cannot be undone. Use with care.

---

## `/forcestart [gid]`

**What it does:** Forces a queued task to start immediately, skipping the queue.

**How to use:**
```
/forcestart gid123abc            # Force start by task ID
/forcestart                      # Reply to a queued task message
```

---

## `/select [gid]`

**What it does:** Opens a file selection menu for torrents, NZBs, or JDownloader tasks. You can pick which files to download.

**How to use:**
```
/select gid123abc                # Open selection for a specific task
/select                          # Reply to the task's message
```

**When to use it:**
- A torrent has many files and you only want some of them
- An NZB has multiple releases
- A JDownloader link has multiple parts

---

## Examples

```
# Check what's running
/status

# Cancel a specific task
/cancel gid123abc

# Cancel everything
/cancelall all

# Force a queued download to start
/forcestart gid456def

# Select files from a torrent
/qbmirror magnet:?xt=urn:btih:xxxx -s
# Later to re-open the selection menu:
/select gid789ghi

# Get media info of a file
/mediainfo (reply to a video file)
```
