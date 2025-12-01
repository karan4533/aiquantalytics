# Design System Guide

## 🎨 Design Philosophy

This website follows a **minimalist, modern SaaS design** inspired by contemporary web design trends. The focus is on:

- **Clarity**: Clean layouts with ample white space
- **Simplicity**: Minimal UI elements that serve a purpose
- **Bold Typography**: Large, readable headings
- **Subtle Interactions**: Smooth animations and hover states
- **Professional Feel**: Corporate-friendly color scheme

## 📐 Layout System

### Container System
- `section-container`: Max-width container with responsive padding
- `section-padding`: Consistent vertical spacing (py-16 md:py-24 lg:py-32)

### Grid System
- Responsive grid using Tailwind's grid utilities
- Mobile-first approach
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)

## 🎨 Color Palette

### Primary Colors
```css
primary-50:  #f0f9ff  /* Lightest blue */
primary-100: #e0f2fe
primary-200: #bae6fd
primary-300: #7dd3fc
primary-400: #38bdf8
primary-500: #0ea5e9  /* Main brand color */
primary-600: #0284c7
primary-700: #0369a1
primary-800: #075985
primary-900: #0c4a6e  /* Darkest blue */
```

### Dark/Gray Scale
```css
dark-50:  #f8fafc  /* Almost white */
dark-100: #f1f5f9
dark-200: #e2e8f0
dark-300: #cbd5e1
dark-400: #94a3b8
dark-500: #64748b
dark-600: #475569
dark-700: #334155  /* Body text */
dark-800: #1e293b
dark-900: #0f172a  /* Headings, buttons */
```

## 📝 Typography

### Font Family
- **Primary**: Inter (sans-serif)
- **Display**: Inter (for headings)
- **Fallback**: system-ui, sans-serif

### Type Scale
```css
/* Hero heading */
text-hero: clamp(2.5rem, 8vw, 5rem) / line-height: 1.1 / weight: 700

/* Display heading */
text-display: clamp(2rem, 6vw, 3.5rem) / line-height: 1.2 / weight: 700

/* Heading levels */
h1: text-4xl md:text-5xl (36px → 48px)
h2: text-3xl md:text-4xl (30px → 36px)
h3: text-2xl md:text-3xl (24px → 30px)

/* Body text */
Large: text-xl (20px)
Normal: text-base (16px)
Small: text-sm (14px)
Tiny: text-xs (12px)
```

## 🎭 Components

### Badges/Pills
```jsx
<div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full">
  Badge Text
</div>
```

### Buttons

**Primary Button:**
```jsx
<button className="px-8 py-4 bg-dark-900 text-white font-semibold rounded-full hover:bg-dark-800 transition-all shadow-lg">
  Button Text
</button>
```

**Secondary Button:**
```jsx
<button className="px-8 py-4 bg-white border-2 border-dark-200 text-dark-900 font-semibold rounded-full hover:border-dark-300 transition-all">
  Button Text
</button>
```

### Cards

**Service Card:**
```jsx
<div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
  {/* Icon */}
  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
    <Icon className="w-7 h-7 text-primary-600" />
  </div>
  
  {/* Content */}
  <h3 className="text-xl font-bold text-dark-900 mb-4">Title</h3>
  <p className="text-dark-600">Description</p>
</div>
```

### Form Inputs
```jsx
<input 
  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
  placeholder="Placeholder"
/>
```

## ✨ Animations

### Fade In
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Staggered Children
```jsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {item}
  </motion.div>
))}
```

### Hover Effects
```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  Click me
</motion.button>
```

## 📱 Responsive Design

### Breakpoint Usage
```jsx
/* Mobile first */
className="text-base md:text-lg lg:text-xl"

/* Grid responsive */
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

/* Spacing responsive */
className="px-4 md:px-6 lg:px-8"
```

## 🎯 Best Practices

### 1. Spacing
- Use consistent spacing scale (4, 8, 12, 16, 24, 32, 48, 64)
- More white space = more premium feel
- section-padding for vertical rhythm

### 2. Colors
- Limit to 2-3 colors per section
- Use dark-900 for important text
- Use dark-600 for secondary text
- Use primary-500 for accents

### 3. Typography
- Clear hierarchy with size and weight
- Line height: 1.5 for body, 1.2 for headings
- Max-width: 65-75 characters per line for readability

### 4. Images
- Use aspect-ratio for consistency
- Add grayscale + hover:grayscale-0 for subtle effect
- Border-radius: rounded-xl or rounded-2xl for modern look

### 5. Shadows
- shadow-sm: Subtle elevation
- shadow-lg: Cards and buttons
- shadow-xl: Hover states
- shadow-2xl: Modals and overlays

## 🚀 Performance

- Use `loading="lazy"` for images
- Minimize animation complexity
- Use CSS transforms for smooth animations
- Debounce scroll events
- Use React.memo for heavy components

## ♿ Accessibility

- Maintain color contrast ratios (WCAG AA)
- Use semantic HTML
- Add aria-labels to icon buttons
- Ensure keyboard navigation works
- Use focus-visible for keyboard users

## 📦 Component Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky navigation
│   ├── Hero.jsx            # Hero with CTA
│   ├── About.jsx           # Company intro
│   ├── Services.jsx        # Service cards
│   ├── Products.jsx        # Product showcase
│   ├── Stats.jsx           # Animated counters
│   ├── CTA.jsx             # Call to action
│   ├── Team.jsx            # Leadership team
│   ├── Advisory.jsx        # Advisors + team carousel
│   ├── Clients.jsx         # Client logos
│   ├── Contact.jsx         # Contact form
│   ├── FAQ.jsx             # Accordion
│   ├── Footer.jsx          # Site footer
│   └── ScrollToTop.jsx     # Utility component
├── pages/
│   ├── HomePage.jsx        # Main landing page
│   └── CareersPage.jsx     # Careers application
```

## 🎨 Customization Guide

### Change Brand Color
Update `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#YOUR_COLOR',
    // Generate shades using: https://tailwindshades.com
  }
}
```

### Change Font
Update `index.html` and `tailwind.config.js`:
```js
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

### Adjust Spacing
Modify `section-padding` in `src/index.css`:
```css
.section-padding {
  @apply py-20 md:py-28 lg:py-36;
}
```

