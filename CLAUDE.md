# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A pure static blog (HTML/CSS/Vanilla JS) with no build system. Deployed automatically to Cloudflare Pages (`helmigandi.com`) on every push to `main`. There is no build command — the root directory is served directly.

## Adding a New Blog Post

Every new post requires editing three things:

1. **Create** `posts/CATEGORY/YEAR/post-name.html` — the post itself (use an existing post as template)
2. **Edit** `js/posts/CATEGORY.js` — prepend a new entry to the array with `date`, `title`, `category`, `url`
3. **Edit** `rss.xml` — add a new `<item>` at the top of the channel

### Post date format

Dates must use Indonesian month names: `"DD MMMM YYYY"` (e.g. `"24 Mei 2026"`). The `parseDate()` function in `js/posts.js` only understands this format.

### Navbar script to use (path-dependent)

Each HTML file must load the correct navbar script matching its directory depth:

| File location | Script to use |
|---|---|
| `index.html` (root) | `js/navbar-home.js` |
| `pages/CATEGORY.html` | `js/navbar.js` |
| `posts/CATEGORY/YEAR/post.html` | `js/navbar-posts.js` |
| `404.html` | `js/navbar-404.js` |

The `body` tag must carry `data-page="CATEGORY"` (e.g. `data-page="linux"`) so the navbar highlights the active link.

### Syntax highlighting

Posts use **Highlight.js** loaded via `js/highlight-loader.js` (not Prism.js — the README is outdated). Load it at the bottom of each post with:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">
...
<script src="../../../js/highlight-loader.js"></script>
```

Use `<pre><code class="language-bash">...</code></pre>` for code blocks. The loader strips leading indentation automatically.

## Adding a New Category

1. Create `pages/CATEGORY.html` (copy from an existing category page)
2. Create `js/posts/CATEGORY.js` with a `const categoryPosts = [...]` array
3. Create `posts/CATEGORY/YEAR/` and `images/CATEGORY/YEAR/` directories
4. Add the new category to `getAllPosts()` in `js/posts.js`
5. Add a nav link to all four navbar files: `js/navbar-home.js`, `js/navbar.js`, `js/navbar-posts.js`, `js/navbar-404.js`

## Architecture

- **`js/posts/CATEGORY.js`** — data-only: each file exports a global array (e.g. `linuxPosts`) listing all posts for that category
- **`js/posts.js`** — merges all category arrays, sorts by date descending, renders paginated post list (15 per page) into `#posts-list`
- **`js/navbar-*.js`** — four variants of the same navbar HTML; differ only in relative paths. They read `data-page` from `<body>` to set the active link
- **`js/highlight-loader.js`** — dynamically loads Highlight.js from CDN, strips indentation, runs `hljs.highlightAll()`, then injects line numbers
- **Comments** — powered by Utterances, linked to the `helmigandi/helmigandi` GitHub repo using `issue-term="pathname"`

## Deployment

```bash
git add .
git commit -m "Add post: Title"
git push
```

Cloudflare Pages picks up the push and deploys automatically — no build step needed.
