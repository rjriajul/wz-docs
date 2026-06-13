# Upload Destinations

WZML-X can upload files to many different places. This page explains all your options.

---

## Where can files go?

| Destination | How to use it |
|---|---|
| **Google Drive** | Set `DEFAULT_UPLOAD = "gd"` in config |
| **Rclone** | Set `DEFAULT_UPLOAD = "rc"` in config |
| **Telegram** | Use `/leech` instead of `/mirror` |
| **Mega** | Set `MEGA_EMAIL` and `MEGA_PASSWORD` in config |
| **DDL Servers** | Use `/uphoster` command (Gofile, Streamtape, etc.) |

---

## Google Drive

### Setting it up

1. Get a Google Drive folder ID:
   - Open the folder in your browser
   - The URL looks like: `https://drive.google.com/drive/folders/1ABCDEfgh_XYZ`
   - The folder ID is that last part: `1ABCDEfgh_XYZ`

2. Set it in config:

```python
GDRIVE_ID = "1ABCDEfgh_XYZ"
IS_TEAM_DRIVE = False    # True if it's a Team Drive
```

3. Generate a `token.pickle` file:

```bash
python3 gen_scripts/gen_token_pickle/script.py
```

Follow the link, log in, paste the code. This creates `token.pickle`.

4. Upload `token.pickle` via `/botset` → Private Files

Or upload via the bot settings panel.

### Service Accounts (for higher quota)

If you get Google Drive quota errors, use Service Accounts:

1. Set `USE_SERVICE_ACCOUNTS = True` in config
2. Generate service accounts:

```bash
python3 gen_scripts/gen_sa_accounts/script.py
```

3. Upload the `accounts.zip` via `/botset` → Private Files

### Stopping duplicates

```python
STOP_DUPLICATE = True
```

The bot checks if a file/folder already exists before uploading.

### Index URL

If you have a Google Drive index (like GDIndex), set:

```python
INDEX_URL = "https://your-index.workers.dev/"
```

This creates shareable download links.

---

## Rclone

### Setting it up

1. Configure Rclone on your server:

```bash
docker compose exec app rclone config
```

Follow the prompts to add your cloud storage (Google Drive, Dropbox, OneDrive, etc.).

2. Set the default path in config:

```python
RCLONE_PATH = "main:folder/subfolder"
```

`main` is the remote name, `folder/subfolder` is the path within that remote.

### Rclone flags

Add extra flags:

```python
RCLONE_FLAGS = "--buffer-size:8M|--drive-starred-only"
```

Format is `key:value|key|key:value`

### Rclone Serve

You can serve files directly through Rclone:

```python
RCLONE_SERVE_URL = "http://your-server-ip"
RCLONE_SERVE_PORT = 8081
RCLONE_SERVE_USER = "username"
RCLONE_SERVE_PASS = "password"
```

This lets users browse and download files directly from your Rclone remotes via a web browser.

---

## Telegram (Leech)

Leeching means uploading directly to Telegram. See the [Leeching guide](/leeching) for full details.

Key settings:

```python
AS_DOCUMENT = False          # True = all files as documents
LEECH_SPLIT_SIZE = 0         # split size (0 = max allowed)
USER_TRANSMISSION = True     # use user account for downloads
HYBRID_LEECH = True          # mix bot + user for speed
```

---

## Mega

```python
MEGA_EMAIL = "you@email.com"
MEGA_PASSWORD = "yourpassword"
```

Set these in config and Mega becomes an upload destination.

---

## DDL Servers

Use `/uphoster` to upload a file to DDL servers:

```
/uphoster (reply to a file)
```

Supported servers (set API keys in config):

| Server | Config variable |
|---|---|
| Gofile.io | `GOFILE_API`, `GOFILE_FOLDER_ID` |
| Streamtape | (built-in) |
| StreamWish | `STREAMWISH_API` |
| FileLion | `FILELION_API` |
| PixelDrain | `PIXELDRAIN_KEY` |
| BuzzHeavier | `BUZZHEAVIER_API` |
| DevUploads | `DEVUPLOADS_KEY`, `DEVUPLOADS_FOLDER` |
| VikingFile | `VIKINGFILE_HASH`, `VIKINGFILE_FOLDER` |
| ProtectedFiles | `PROTECTED_API` |

---

## Per-task upload destination

You can override the upload destination for a single task with `-up`:

```bash
/mirror link -up gdl        # Google Drive (opens folder picker)
/mirror link -up rcl        # Rclone (opens remote picker)
/mirror link -up 1ABCDEfgh  # Direct GDrive folder ID
/mirror link -up main:dump  # Direct Rclone path
/mirror link -up tp:GDriveID    # Use token.pickle
/mirror link -up sa:GDriveID    # Use service accounts
/mirror link -up mrcc:main:dump # Use your own rclone config
/mirror link -up mtp:GDriveID   # Use your own token
```

Prefixes explained:

| Prefix | What it does |
|---|---|
| `tp:` | Use owner's `token.pickle` |
| `sa:` | Use service accounts |
| `mtp:` | Use your uploaded token (from `/userset`) |
| `mrcc:` | Use your uploaded rclone config (from `/userset`) |

---

## Adding your own destinations

Regular users can add their own Google Drive tokens and Rclone configs via `/userset` → Upload Settings. This lets each user have their own private upload destinations.
