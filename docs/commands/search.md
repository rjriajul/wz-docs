# Search Commands

Search for content across torrent sites, your Google Drive, or get info about movies and shows.

---

## `/search [query]`

**What it does:** Searches torrent sites using qBittorrent search plugins. The bot has multiple search engines configured.

**How to use:**
```
/search ubuntu desktop            # Search for "ubuntu desktop"
/search The Mandalorian S03       # Search for a TV show
```

**What you'll get:** A list of torrent search results with names, seeds, size, and links.

---

## `/list [query]`

**What it does:** Searches for files and folders in your configured Google Drive(s).

**How to use:**
```
/list mydocument.pdf              # Find a specific file
/list project                     # Find folders/files with "project" in the name
```

**What you'll get:** Links to matching files/folders in your Google Drive.

**Note:** You need to have Google Drive configured (token.pickle or service accounts) and `GDRIVE_ID` set.

---

## `/imdb [movie/TV]`

**What it does:** Looks up movie and TV show information from IMDB.

**How to use:**
```
/imdb The Matrix                  # Search by name
/imdb tt0133093                   # Search by IMDB ID
```

**What you'll get:** Rating, plot summary, cast, release year, runtime, genre, and poster.

---

## `/anilist [anime]`

**What it does:** Searches anime information on AniList.

**How to use:**
```
/anilist Attack on Titan          # Search by name
/anilist 20755                    # Search by ID
```

**What you'll get:** Rating, description, episodes, genres, and poster.

---

## `/nzbsearch [query]`

**What it does:** Searches Usenet (NZB) content using NZBHydra. Requires `HYDRA_IP` and `HYDRA_API_KEY` to be configured.

**How to use:**
```
/nzbsearch linux iso              # Search for Usenet releases
/nzbsearch ubuntu 24.04           # Search with multiple terms
```

**What you'll get:** A Telegraph page with search results and direct download links.

**Who can use it:** All authorized users.

**Note:** Only works if you have NZBHydra set up with the correct IP and API key in config.

---

## `/mdl [drama]`

**What it does:** Searches Korean, Chinese, Japanese, and other Asian dramas on MyDramaList.

**How to use:**
```
/mdl Crash Landing on You        # Search by name
```

**What you'll get:** Rating, episodes, country, cast, and poster.

---

## Examples

```
# Find torrents
/search linux mint iso

# Find files in your Google Drive
/list my_backup.zip

# Look up a movie
/imdb Inception

# Search anime
/anilist Demon Slayer

# Search dramas
/mdl Extraordinary Attorney Woo
```
