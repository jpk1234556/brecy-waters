# Brecy Waters' 20th Birthday Celebration Website

A beautiful, interactive birthday website created with love from Julius.

## Features
- Festive pink and white design theme
- Profile picture and photo gallery with dynamic loading
- Full-screen image viewing capability
- Interactive elements with animations and effects
- Background music with play/pause controls
- Countdown timer (shows "Happy Birthday" message on her special day)
- Heartfelt wishes from Julius
- Easy photo management system
- Ready for Vercel deployment with real photo uploads

## Deployment Instructions

### Deploying to Netlify (Current)

1. **Sign up for Netlify** (if you haven't already)
   - Go to [netlify.com](https://netlify.com)
   - Sign up for a free account

2. **Deploy the site*
   - Log in to your Netlify account
   - Drag and drop the entire project folder to the Netlify deployment area
   - OR connect your GitHub repository if you've uploaded the code there

3. **Configure settings** (if needed)
   - The [netlify.toml](file:///C:/Users/JPK/Desktop/brecy%20waters/netlify.toml) file in this project handles most settings automatically
   - No build command is needed as this is a static site
   - Publish directory is set to the root folder

4. **Custom domain** (optional)
   - In your Netlify dashboard, go to "Domain settings"
   - Add a custom domain if desired
   - Follow Netlify's instructions for DNS configuration

### Deploying to Vercel (Recommended for Photo Uploads)

The website is also ready for deployment to Vercel with real photo upload functionality:

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up for a free account

2. **Connect your repository**
   - Create a new project
   - Connect to your GitHub repository

3. **Configure build settings**
   - Framework: Other
   - Build Command: (Leave empty)
   - Output Directory: (Leave empty)

4. **Deploy**
   - Vercel will automatically deploy your site

For full photo upload functionality on Vercel, see [VERCEL_DEPLOYMENT.md](file:///C:/Users/JPK/Desktop/brecy%20waters/VERCEL_DEPLOYMENT.md) for setup instructions.

## File Structure
```
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # Interactive elements
├── photo-manager.js    # Dynamic photo loading
├── upload.html         # Photo upload interface
├── netlify.toml        # Netlify configuration
├── README.md           # This file
├── PHOTO_INSTRUCTIONS.md # Photo management guide
└── images/             # Folder containing all images
    ├── profile/        # Profile photo
    │   └── profile.jpg
    └── gallery/        # Gallery photos
        ├── image01.jpg
        ├── image02.jpg
        └── ...more images
```

## Customization
To personalize this website for another person/event:
1. Replace images in the `images/` folder
2. Update text content in `index.html`
3. Modify colors in `styles.css` if desired
4. Update wishes in the wishes section

## Photo Management
Brecy can easily add more photos using either:
1. **Manual method**: Follow instructions in PHOTO_INSTRUCTIONS.md
2. **Upload interface**: Visit /upload.html (when deployed)
3. **Simple method**: Follow the easy steps in EASY_PHOTO_STEPS.md

No coding knowledge is required to add photos!

## Support
For any issues or questions about this website, contact the creator.

Made with ❤️ by Julius for Brecy Waters' 20th Birthday