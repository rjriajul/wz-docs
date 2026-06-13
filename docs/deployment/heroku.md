# Heroku (via WZ-Deploy)

[WZ-Deploy](https://github.com/SilentDemonSD/WZ-Deploy) is a dedicated deployment repo for running WZML-X on Heroku.

::: info Prerequisites
Make sure you have the [prerequisites](./) ready before starting (BotFather token, api_id, api_hash, user ID, MongoDB URL).
:::

## Method A: Google Colab Notebook (recommended)

This is the easiest way to deploy on Heroku — everything runs in your browser, no local setup needed.

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SilentDemonSD/WZ-Deploy/blob/main/wzv3_hk_deploy.ipynb)

::: tip Recommended
Click the badge above to open the notebook, then run each cell one by one. Each cell has a simple form to fill in.
:::

### Step 1: Open the notebook

Click the badge above or go to [wzv3_hk_deploy.ipynb](https://colab.research.google.com/github/SilentDemonSD/WZ-Deploy/blob/main/wzv3_hk_deploy.ipynb).

### Step 2: Get your Heroku API key

1. Log in to [dashboard.heroku.com](https://dashboard.heroku.com)
2. Go to **Account Settings** (under your avatar)
3. Scroll to **API Key** → click **Reveal** and copy it

### Step 3: Run the cells in order

The notebook has 5 cells. Run them one at a time from top to bottom:

| Cell | What it does |
|---|---|
| **Heroku Login** | Enter your Heroku email + API key |
| **Create Heroku Multi App** | Pick a region (`eu` or `us`) and optionally name your app (leave blank for a random name). Enter team name only if deploying to a Heroku team. |
| **WZML-X Repo Config Setup** | This is the main config cell. Enter your **App Name** (from step above), then fill in all 8 variables: `BOT_TOKEN`, `TELEGRAM_API`, `TELEGRAM_HASH`, `OWNER_ID`, `DATABASE_URL`, `BASE_URL`, `UPSTREAM_REPO`, `UPSTREAM_BRANCH`. You can also upload a `config.py` file or use a Gist URL instead. |
| **Deploy Heroku Multi App** | Enter your app name again — this pushes and deploys |
| **Show Heroku App Logs** | (Optional) Enter your app name to view live logs |

To run a cell, click the play button on its left or press `Ctrl+Enter`.

### Step 4: After deployment

1. Your bot should be live on Telegram — send it `/start`
2. Use `/bsetting` (or `/bs`) to upload private files (`token.pickle`, `rclone.conf`, `accounts.zip`, etc.) and set any remaining variables
3. Check logs in Heroku dashboard if something isn't working

---

## Method B: GitHub Actions Workflow

### Step 1: Fork and star the repo

Go to [github.com/SilentDemonSD/WZ-Deploy](https://github.com/SilentDemonSD/WZ-Deploy) and click **Fork**. Star the repo to show support.

### Step 2: Enable GitHub Actions

In your forked repo, go to **Settings** → **Actions** → **General** and make sure Actions are enabled.

### Step 3: Get your Heroku API key

1. Log in to [dashboard.heroku.com](https://dashboard.heroku.com)
2. Go to **Account Settings** (under your avatar)
3. Scroll to **API Key** → click **Reveal** and copy it

### Step 4: Run the workflow

1. Go to the **Actions** tab in your fork
2. Select the **Deploy to Heroku** workflow
3. Click **Run workflow** and fill in:

| Input | What to put |
|---|---|
| `BOT_TOKEN` | From @BotFather |
| `OWNER_ID` | Your Telegram user ID |
| `DATABASE_URL` | Your MongoDB connection string |
| `TELEGRAM_API` | From my.telegram.org |
| `TELEGRAM_HASH` | From my.telegram.org |
| `HEROKU_APP_NAME` | A unique name for your app (e.g., `my-wzmlx-bot`) |
| `HEROKU_EMAIL` | Your Heroku account email |
| `HEROKU_API_KEY` | The API key from step 3 |
| `HEROKU_TEAM_NAME` | (Optional) Only if deploying under a Heroku team |
| `UPSTREAM_REPO` | `https://github.com/SilentDemonSD/WZML-X` (or your fork) |

### Step 5: Wait

The workflow takes a few minutes. When it's green, your bot is live.

### Step 6: Finalize setup

Send `/botset` to your bot on Telegram to upload private files (`token.pickle`, `rclone.conf`, `accounts.zip`) and set remaining variables.

## Method C: Heroku CLI (manual)

### Step 1: Install Heroku CLI

```bash
# Linux
curl https://cli-assets.heroku.com/install.sh | sh

# Ubuntu/Debian
curl https://cli-assets.heroku.com/install-ubuntu.sh | sh

# macOS
brew install heroku/brew/heroku
```

### Step 2: Clone WZ-Deploy and login

```bash
git clone https://github.com/SilentDemonSD/WZ-Deploy.git wzbot
cd wzbot

heroku login
# or: heroku login -i (use email + API key)
```

### Step 3: Create a Heroku app

```bash
heroku create --region us --stack container YOUR_APP_NAME
```

Copy the URL it gives you — that's your `BASE_URL`.

### Step 4: Create and edit config.py

```bash
nano config.py
```

Paste this and fill in your values:

```python
BOT_TOKEN = ""
TELEGRAM_API = 0
TELEGRAM_HASH = ""
OWNER_ID = 0
UPSTREAM_REPO = "https://github.com/SilentDemonSD/WZML-X"
UPSTREAM_BRANCH = "wzv3"
DATABASE_URL = ""
BASE_URL = ""
```

Save: `Ctrl+O` → `Enter` → `Ctrl+X`

### Step 5: Deploy

```bash
git add . -f
git commit -m "HK Setup"
heroku git:remote -a YOUR_APP_NAME
git push heroku main -f
```

### Step 6: Check logs

```bash
heroku logs -a YOUR_APP_NAME -t
```

Press `Ctrl+C` to exit the live log stream.

### Step 7: Finalize setup

Send `/botset` to your bot on Telegram to upload private files (`token.pickle`, `rclone.conf`, `accounts.zip`) and set remaining variables.

## Important notes for Heroku

| Note | Detail |
|---|---|
| **Ephemeral storage** | Any files not in your repo/git are deleted when the app restarts. Use `/botset` to upload private files. |
| **Idle sleep** | Free Heroku apps sleep after 30 min of inactivity (unless you add a credit card). |
| **BASE_URL** | Required for torrent file selection. Format: `https://your-app-name.herokuapp.com/` |
| **Config in Colab** | Set all 8 mandatory vars in the notebook: `BOT_TOKEN`, `TELEGRAM_API`, `TELEGRAM_HASH`, `OWNER_ID`, `UPSTREAM_REPO`, `UPSTREAM_BRANCH`, `DATABASE_URL`, `BASE_URL`. You can also upload `config.py` or use a Gist URL. |
| **Config in CLI** | Only set the 5 required vars + `BASE_URL` + `UPSTREAM_REPO` in `config.py`. Everything else goes via `/botset`. |
| **No extra files in repo** | Don't delete `.gitignore` or any other files in the repo. Only modify `config.py`. |
