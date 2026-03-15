# Helmigandi Blog

A simple static blog built with HTML, CSS, and JavaScript.

## Project Structure

```bash
blog/
├── index.html                  # Homepage
├── 404.html                    # Error page
├── rss.xml                     # RSS feed
├── README.md                   # This file
├── css/
│   ├── style.css              # Main styles
│   ├── post.css               # Post detail styles
│   └── 404.css                # 404 page styles
├── js/
│   ├── navbar-home.js         # Navbar for homepage
│   ├── navbar.js              # Navbar for category pages
│   ├── navbar-posts.js        # Navbar for post detail pages
│   ├── navbar-404.js          # Navbar for 404 page
│   ├── posts.js               # Posts display function
│   ├── prism-loader.js        # Syntax highlighting loader
│   └── posts/
│       ├── linux.js           # Linux posts data
│       ├── windows.js         # Windows posts data
│       └── java.js            # Java posts data
├── pages/
│   ├── linux.html             # Linux category page
│   ├── java.html              # Java category page
│   └── windows.html           # Windows category page
├── posts/
│   ├── linux/
│   │   └── 2025/
│   │       └── post-name.html
│   ├── java/
│   │   └── 2025/
│   │       └── post-name.html
│   └── windows/
│       └── 2025/
│           └── post-name.html
├── images/
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── linux/
│   │   └── 2025/
│   ├── java/
│   │   └── 2025/
│   └── windows/
│       └── 2025/
└── includes/
    └── navbar.html            # Navbar template (not used)
```

## How to Add a New Blog Post

### Step 1: Create Post HTML File

1. Navigate to `posts/CATEGORY/YEAR/` folder

2. Create new HTML file: `your-post-title.html`

3. Use this template:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Post Title - Example's Blog</title>
        <link rel="stylesheet" href="../../../css/style.css">
        <link rel="stylesheet" href="../../../css/post.css">
        <!-- Prism.js CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css">
        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="../../../images/favicon.ico">
        <link rel="icon" type="image/png" sizes="32x32" href="../../../images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../../../images/favicon-16x16.png">
        <!-- RSS Feed -->
        <link rel="alternate" type="application/rss+xml" title="Example's Blog RSS Feed" href="../../../rss.xml">
    </head>
    <body data-page="CATEGORY">
        <div id="navbar"></div>

        <article class="post-content">
            <h1 class="post-title">Your Post Title</h1>
            <p class="post-meta">DD Month YYYY, HH:MM</p>

            <div class="post-body">
                <p>Your content here...</p>
            </div>

            <div class="post-footer">
                <a href="../../../pages/CATEGORY.html">← Back to CATEGORY Posts</a>
            </div>

            <!-- Utterances Comments -->
            <div class="comments-section">
                <h3>Comments</h3>
                <script src="https://utteranc.es/client.js"
                        repo="YOUR-USERNAME/YOUR-REPO-NAME"
                        issue-term="pathname"
                        theme="github-light"
                        crossorigin="anonymous"
                        async>
                </script>
            </div>
        </article>

        <script src="../../../js/navbar-posts.js"></script>
        <!-- Load Prism.js -->
        <script src="../../../js/prism-loader.js"></script>
    </body>
    </html>
    ```

### Step 2: Update Posts Data File

Edit `js/posts/CATEGORY.js` and add new entry:

```javascript
const categoryPosts = [
    {
        date: 'DD Month YYYY',
        title: 'Your Post Title',
        category: 'category-name',
        url: '../posts/category/2025/your-post-title.html'
    },
    // ... other posts
];
```

### Step 3: Update RSS Feed

Edit `rss.xml` and add new item at the top:

```xml
<item>
    <title>Your Post Title</title>
    <link>https://helmigandi.com/posts/category/2025/your-post-title.html</link>
    <description>Brief description of your post.</description>
    <pubDate>Day, DD Mon YYYY HH:MM:SS +0000</pubDate>
    <category>Category</category>
    <guid>https://helmigandi.com/posts/category/2025/your-post-title.html</guid>
</item>
```

### Step 4: Add Images (Optional)

If your post has images:

1. Save images to `images/CATEGORY/YEAR/`

2. Reference in post: `<img src="../../../images/CATEGORY/YEAR/image-name.jpg" alt="Description">`

### Step 5: Deploy

```bash
git add .
git commit -m "Add new post: Your Post Title"
git push
```

Cloudflare Pages will automatically rebuild and deploy!

## Files to Edit When Adding New Post

**ALWAYS EDIT:**

1. **Create**: `posts/CATEGORY/YEAR/post-name.html` - The post itself

2. **Edit**: `js/posts/CATEGORY.js` - Add post data

3. **Edit**: `rss.xml` - Add RSS entry

4. **Add (Optional)**: `images/CATEGORY/YEAR/image.jpg` - If post has images

## Content Formatting Tips

### Code Blocks with Syntax Highlighting

```html
<pre><code class="language-python">
def hello():
    print("Hello World")
</code></pre>
```

### Images

**Without caption:**

```html
<img src="../../../images/category/2025/image.jpg" alt="Description">
```

**With caption:**

```html
<figure>
    <img src="../../../images/category/2025/image.jpg" alt="Description">
    <figcaption>Your caption here</figcaption>
</figure>
```

### Lists

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

### Tables

```html
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

### Blockquotes

```html
<blockquote>
    Your quote here
</blockquote>
```

## Deployment

This blog is deployed on **Cloudflare Pages**:

- Push to GitHub → Automatic deployment
- URL: `https://helmigandi.com`

## 🔧 Adding New Category

To add a new category (e.g., "Python"):

1. Create `pages/python.html` (copy from existing category page)
2. Create `js/posts/python.js` for posts data
3. Create `posts/python/2025/` folder
4. Create `images/python/2025/` folder
5. Update all navbar files (`js/navbar-*.js`) to include new menu item
6. Update `includes/navbar.html` (if used)

## 📦 Features

- ✅ Simple static blog
- ✅ Category pages
- ✅ Pagination (15 posts per page)
- ✅ Syntax highlighting (Prism.js)
- ✅ RSS feed
- ✅ Responsive design
- ✅ Comments (Utterances)
- ✅ 404 page with auto-redirect
- ✅ Organized by year

## 🛠️ Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Prism.js (syntax highlighting)
- Utterances (comments)
- Cloudflare Pages (hosting)

## Cloudflare Pages Configuration

1. Your blog should already be pushed to GitHub from the previous step. If not, do it first:

    ```bash
    cd your-blog-folder
    git init
    git add .
    git commit -m "Ready for deployment"
    git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
    git push -u origin main
    ```

2. Sign Up / Log In to Cloudflare

    - Go to: <https://dash.cloudflare.com/>
    - Sign up for a free account (or log in if you have one)
    - Verify your email

3. Go to Cloudflare Pages

    - From Cloudflare dashboard, click **"Workers & Pages"** in the left sidebar
    - Click **"Create application"**
    - Click **"Pages"** tab
    - Click **"Connect to Git"**

4. Connect Your GitHub Repository

    - Click **"Connect GitHub"**
    - Authorize Cloudflare to access your GitHub account
    - Select **"Only select repositories"**
    - Choose your blog repository
    - Click **"Install & Authorize"**

5. Configure Your Build Settings

    - Select your blog repository from the list
    - Click **"Begin setup"**

6. Fill in the configuration

    - **Project name**: `my-blog` (or whatever you want - this will be your subdomain)
    - **Production branch**: `main`
    - **Framework preset**: `None` (select from dropdown)
    - **Build command**: Leave empty (your blog is static HTML)
    - **Build output directory**: `/` (root directory)

7. Deploy

    - Click **"Save and Deploy"**
    - Wait for deployment (usually takes 1-2 minutes)
    - You'll see a success message with your live URL!

8. Your Blog is Live! 🎉

    Your blog will be available at: `https://helmigandi.com`

## License

Feel free to use this blog structure for your own projects!
