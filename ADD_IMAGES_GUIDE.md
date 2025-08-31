# 📸 How to Add Images to Your Executive Website

## Quick Steps:

1. **Create the images folder** (if not already created):
   ```bash
   mkdir -p public/images
   ```

2. **Add your images** to the `/public/images/` folder

3. **Uncomment the image code** in the website by removing `{/* */}` comments

## Priority Images to Add:

### 1. Professional Headshot (Hero Section)
- **File**: `public/images/professional-headshot.jpg`
- **Size**: 800x800px minimum
- **Location in code**: Line 159-171 in `app/page.tsx`
- **To activate**: Remove the `{/* */}` comment wrapper

### 2. Hero Background Image
- **File**: `public/images/hero-background.jpg`
- **Size**: 1920x1080px minimum
- **Location in code**: Line 131-139 in `app/page.tsx`
- **To activate**: Remove the `{/* */}` comment wrapper

### 3. AWS Certification Badge
- **File**: `public/images/aws-certified-badge.png`
- **Size**: 200x200px
- **Location in code**: Line 907-915 in `app/page.tsx`
- **To activate**: Remove the `{/* */}` comment wrapper

### 4. Solution Screenshots (Optional)
- **Tourism Analytics**: `public/images/tourism-analytics-screenshot.png`
- **Location in code**: Line 408-416 in `app/page.tsx`
- Add similar screenshots for other solutions

## Example: Activating Your Headshot

1. Add your photo to: `public/images/professional-headshot.jpg`

2. In `app/page.tsx`, change this:
```jsx
{/* <div className="flex justify-center mb-8">
  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gold-500/30 shadow-2xl">
    <ImageWithFallback
      src="/images/professional-headshot.jpg"
      alt="Reno Provine"
      width={192}
      height={192}
      className="object-cover"
      priority
    />
  </div>
</div> */}
```

To this (remove `{/*` and `*/}`):
```jsx
<div className="flex justify-center mb-8">
  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gold-500/30 shadow-2xl">
    <ImageWithFallback
      src="/images/professional-headshot.jpg"
      alt="Reno Provine"
      width={192}
      height={192}
      className="object-cover"
      priority
    />
  </div>
</div>
```

3. Save the file and the image will appear!

## Free Stock Photo Resources:

### Professional Business Photos:
- **Unsplash**: https://unsplash.com/s/photos/business-executive
- **Pexels**: https://www.pexels.com/search/business%20leader/

### Hawaii Business/Tech Images:
- **Unsplash**: https://unsplash.com/s/photos/hawaii-business
- **Pexels**: https://www.pexels.com/search/hawaii/

### Technology/AI Backgrounds:
- **Unsplash**: https://unsplash.com/s/photos/artificial-intelligence
- **Pexels**: https://www.pexels.com/search/technology%20abstract/

## Image Optimization Tools:

1. **TinyPNG**: https://tinypng.com/ - Compress images
2. **Squoosh**: https://squoosh.app/ - Resize and convert formats
3. **Remove.bg**: https://www.remove.bg/ - Remove backgrounds from photos

## Tips:

- Keep images under 500KB for fast loading
- Use JPEG for photos, PNG for logos/badges
- Consider using WebP format for better performance
- Always add descriptive alt text for accessibility

## Need Help?

The website will work without images, but adding them will significantly enhance the professional appearance and credibility of your executive presence.