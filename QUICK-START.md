# 🚀 Quick Start Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Your images folder from the old website

## Installation (5 minutes)

### Step 1: Copy Images
```bash
# Copy the images folder to public directory
cp -r images/ public/images/
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The site will open at `http://localhost:3000` 🎉

## What's Different?

### ✨ New Minimalist Design
- **Clean, modern SaaS aesthetic**
- **Bold typography** with Inter font
- **Subtle animations** on scroll
- **Professional color scheme** (blue + dark gray)
- **Lots of white space** for clarity

### 🎨 Design Elements
- Large hero section with floating elements
- Service cards with hover effects
- Minimal team cards with grayscale images
- Clean contact form with map
- Smooth accordion for FAQ
- Modern footer design

### 📱 Improved Mobile Experience
- Better responsive breakpoints
- Smoother mobile navigation
- Touch-friendly buttons and cards
- Optimized images for mobile

## File Structure

```
├── public/
│   └── images/           ← YOUR IMAGES HERE
├── src/
│   ├── components/       ← All reusable components
│   ├── pages/           ← HomePage & CareersPage
│   ├── App.jsx          ← Main app
│   ├── main.jsx         ← Entry point
│   └── index.css        ← Global styles
├── tailwind.config.js   ← Design system config
├── vite.config.js       ← Build config
└── package.json         ← Dependencies
```

## Common Tasks

### Change Brand Color
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#0ea5e9', // Change this
  }
}
```

### Update Content
All content is in component files:
- Hero text: `src/components/Hero.jsx`
- Services: `src/components/Services.jsx`
- Products: `src/components/Products.jsx`
- Team members: `src/components/Team.jsx`

### Add New Section
1. Create component: `src/components/NewSection.jsx`
2. Add to HomePage: `src/pages/HomePage.jsx`
```jsx
import NewSection from '../components/NewSection'

// Add in return:
<NewSection />
```

### Build for Production
```bash
npm run build
```
Output will be in `dist/` folder.

## Design System

### Colors
- **Primary**: Blue (#0ea5e9)
- **Dark**: Near-black (#0f172a)
- **Gray**: Various shades for text
- **White**: Background

### Typography
- **Font**: Inter (clean, modern)
- **Headings**: Bold, large sizes
- **Body**: Regular weight, good spacing

### Spacing
- Sections: 16-32 units vertical
- Components: 6-8 units spacing
- Grid gaps: 6-8 units

### Animations
- Fade in on scroll
- Hover scale effects
- Smooth transitions

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload contents of 'dist' folder to your server
```

## Troubleshooting

### Images not showing?
✅ Make sure images are in `public/images/`

### Port 3000 already in use?
✅ Vite will automatically use another port (check terminal)

### Build fails?
✅ Delete `node_modules` and `package-lock.json`, then `npm install` again

### Styles not updating?
✅ Stop the dev server, clear cache, restart: `npm run dev`

## Need Help?

- **Design Guide**: See `DESIGN-GUIDE.md` for detailed design system
- **Setup Instructions**: See `SETUP.md` for comprehensive setup
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion

## What's Included

✅ Modern React 18 setup
✅ Vite for fast development
✅ Tailwind CSS for styling
✅ Framer Motion for animations
✅ Responsive design
✅ Smooth scrolling
✅ Contact form
✅ Careers page
✅ FAQ accordion
✅ Client carousel
✅ Team showcase

## Performance

- ⚡ **Fast**: Vite provides instant HMR
- 🎯 **Optimized**: Production builds are minified
- 📱 **Responsive**: Works on all devices
- ♿ **Accessible**: Semantic HTML and ARIA labels
- 🎨 **Modern**: Latest design trends

---

**You're all set!** 🎉 Your modern minimalist website is ready to go.

