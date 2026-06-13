# Mirroring

**Mirroring** means downloading a file from the internet and **uploading it to a cloud destination** (Google Drive, Rclone, Mega, or a DDL server).

```
You → /mirror [link] → Bot downloads → Bot uploads to cloud → Done!
```

---

## Basic mirror

```bash
/mirror https://example.com/file.zip
```

The bot downloads the file and uploads it to your **default upload destination** (set in config or `/userset`).

---

## Mirror types

| Command | Best for |
|---|---|
| `/mirror` | Direct download links, HTTP/HTTPS files |
| `/qbmirror` | Torrent magnets and `.torrent` files (uses qBittorrent) |
| `/ytdl` | YouTube, Vimeo, Twitter, Instagram, TikTok, and any [yt-dlp supported site](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md) |
| `/jdmirror` | Premium hosters via JDownloader |
| `/nzbmirror` | Usenet/NZB files via SABnzbd |
| `/clone` | Copy files/folders from one Google Drive to another |

---

## Setting the upload destination

By default, files go to wherever `DEFAULT_UPLOAD` is set (either Google Drive `"gd"` or Rclone `"rc"`).

To override for a single task, use `-up`:

```bash
/mirror link -up rcl
```

This opens buttons to select your Rclone remote and path.

```bash
/mirror link -up gdl
```

This opens buttons to select your Google Drive token and folder.

You can also specify the path directly:

```bash
/mirror link -up remote:dir/subdir    # Rclone path
/mirror link -up 1ABCDEfgh_XYZ       # Google Drive folder ID
```

---

## Extra options for mirroring

### Rename the file

```bash
/mirror link -n MyNewFileName.mp4
```

### Extract a zip/rar

```bash
/mirror link -e
/mirror link -e mypassword    # password protected
```

### Zip the files

```bash
/mirror link -z
/mirror link -z mypassword    # password protected
```

### Extract then zip

```bash
/mirror link -z mypassword -e
```

### Select files from a torrent

```bash
/mirror magnet:?xt=... -s
```

This opens the web UI where you can pick which files to download.

### Seed after download

```bash
/mirror magnet:?xt=... -d 0.7:10
```

Seeds until ratio `0.7` OR `10` minutes, whichever comes first.

### Create a sample video

```bash
/mirror video.mp4 -sv 60:4
```

Creates a 60-second sample with 4-second parts.

### Take screenshots

```bash
/mirror video.mp4 -ss 6
```

Takes 6 screenshots from the video.

### Convert media format

```bash
/mirror link -ca mp3         # convert audio to mp3
/mirror link -cv mp4         # convert video to mp4
/mirror link -ca mp3 -cv mp4 # both
```

### Apply Rclone flags

```bash
/mirror link -rcf --buffer-size:8M|--drive-starred-only
```

See all [Rclone flags](https://rclone.org/flags/).

### Add metadata

```bash
/mirror link -meta title=MyMovie|artist=Me|year={year}
```

Available variables: `{filename}`, `{basename}`, `{extension}`, `{year}`

### Swap words in filenames

```bash
/mirror link -ns oldname/newname/s
```

The `/s` makes it case-sensitive. Leave it off for case-insensitive.

### Force start (skip the queue)

```bash
/mirror link -f       # force download AND upload
/mirror link -fd      # force download only
/mirror link -fu      # force upload only
```

---

## Multiple links at once

### Multi-link mode (`-i`)

Download several links as separate tasks:

```bash
/mirror -i 3
```

Then reply with 3 links (one per message).

### Bulk mode (`-b`)

Reply to a text file or message containing links (one per line):

```bash
/mirror -b
```

Each link can have its own options:

```
link1 -n name1 -up remote1
link2 -n name2 -up remote2 -z
link3 -e -up remote3
```

### Same directory (`-m`)

Put all downloaded files into one folder:

```bash
/mirror -i 3 -m "My Folder"
/mirror -b -m "My Folder"
```

---

## Cloning

Clone copies files/folders **between Google Drives** (no downloading to your server):

```bash
/clone https://drive.google.com/.../folder
/clone gdriveID
/clone rcl/rclone_path
```

Use `-sync` for Rclone sync mode:

```bash
/clone rcl/source -up rcl/destination -sync
```
