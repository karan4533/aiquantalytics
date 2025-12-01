# Setup Instructions

Follow these steps to set up and run your new modern React website:

## 1. Copy Your Images

Before running the application, you need to copy your images folder:

```bash
# Copy the images folder to the public directory
# Make sure to copy the entire 'images' folder from your old website
cp -r images/ public/images/
```

Or manually:
- Copy the `images` folder from your current website
- Paste it into the `public` directory of this React project

## 2. Install Dependencies

Install all required npm packages:

```bash
npm install
```

## 3. Run Development Server

Start the development server:

```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

## 4. Build for Production

When you're ready to deploy:

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 5. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
aiquantalytics-react/
├── public/
│   └── images/          # Copy your images here!
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## Key Features Implemented

✅ Modern React 18 with Hooks
✅ Smooth animations with Framer Motion
✅ Responsive design with Tailwind CSS
✅ Video background on hero sections
✅ Animated statistics counter
✅ Modern carousels for team/clients
✅ FAQ accordion with smooth animations
✅ Contact form with Google Maps
✅ Careers application page
✅ Mobile-friendly navigation
✅ Glassmorphism effects
✅ Gradient designs
✅ Smooth scrolling

## Troubleshooting

### Images not showing?
Make sure you've copied the `images` folder to `public/images/`

### Port already in use?
The dev server will try port 3000. If it's in use, Vite will automatically use another port.

### Build errors?
Delete `node_modules` and `package-lock.json`, then run `npm install` again.

## Next Steps

1. Update content in component files if needed
2. Customize colors in `tailwind.config.js`
3. Add your backend API endpoints for form submissions
4. Deploy to your hosting provider (Vercel, Netlify, etc.)

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload contents of 'dist' folder to your web server
```

## Support

For any issues or questions about this modern React implementation, refer to:
- React documentation: https://react.dev
- Vite documentation: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion

