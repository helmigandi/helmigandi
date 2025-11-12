# Simple Blog

My new simple blog.

## Deploy to Cloudflare Pages

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

    1. Go to: <https://dash.cloudflare.com/>
    2. Sign up for a free account (or log in if you have one)
    3. Verify your email

3. Go to Cloudflare Pages

    1. From Cloudflare dashboard, click **"Workers & Pages"** in the left sidebar
    2. Click **"Create application"**
    3. Click **"Pages"** tab
    4. Click **"Connect to Git"**

4. Connect Your GitHub Repository

    1. Click **"Connect GitHub"**
    2. Authorize Cloudflare to access your GitHub account
    3. Select **"Only select repositories"**
    4. Choose your blog repository
    5. Click **"Install & Authorize"**

5. Configure Your Build Settings

    1. Select your blog repository from the list
    2. Click **"Begin setup"**

6. Fill in the configuration

    - **Project name**: `my-blog` (or whatever you want - this will be your subdomain)
    - **Production branch**: `main`
    - **Framework preset**: `None` (select from dropdown)
    - **Build command**: Leave empty (your blog is static HTML)
    - **Build output directory**: `/` (root directory)

7. Deploy

    1. Click **"Save and Deploy"**
    2. Wait for deployment (usually takes 1-2 minutes)
    3. You'll see a success message with your live URL!

8. Your Blog is Live! 🎉

    Your blog will be available at: `https://my-blog.pages.dev`
