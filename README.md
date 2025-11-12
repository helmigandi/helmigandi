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

    Your blog will be available at: `https://my-blog.pages.dev`
