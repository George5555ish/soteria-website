# Soteria Bible Church Website

A modern, visually stunning church website built with React, TypeScript, GSAP, and Tailwind CSS. Features smooth animations, scroll-based interactions, and a memorable loading experience.

## 🌟 Features

- **Stunning Loading Screen**: 3D animated Bible verse with GSAP
- **Hero Section**: Full-screen parallax background with call-to-action
- **About Section**: Scroll-reveal animations showcasing church history
- **Ministries Grid**: Staggered card animations with hover effects
- **Events Carousel**: Auto-playing Swiper carousel with event cards
- **Gallery**: Parallax image grid with lightbox functionality
- **Testimonials**: Elegant rotating testimonial cards
- **Service Times**: Interactive map and contact information
- **Responsive Navigation**: Sticky navbar that adapts on scroll
- **Footer**: Multi-column layout with newsletter signup
- **Back to Top**: Smooth scroll button
- **Accessibility**: Respects `prefers-reduced-motion` and includes ARIA labels

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP with ScrollTrigger plugin
- **Carousel**: Swiper
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd soteria-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit: `http://localhost:5173`

## 🛠️ Build for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.js`:
- **Primary**: Warm gold tones (customizable)
- **Secondary**: Deep blue tones (customizable)

### Content

Update the content in each component file located in `src/components/`:
- `LoadingScreen.tsx` - Bible verse and loading animation
- `Hero.tsx` - Welcome message and hero image
- `About.tsx` - Church history and mission
- `Ministries.tsx` - Ministry cards and descriptions
- `Events.tsx` - Upcoming events
- `Gallery.tsx` - Photo gallery images
- `Testimonials.tsx` - Member testimonials
- `ServiceTimes.tsx` - Service schedule and location
- `Footer.tsx` - Footer links and newsletter

### Images

Replace placeholder images from Unsplash with your own:
1. Add your images to the `public` folder
2. Update image URLs in the component files

### Google Maps

In `ServiceTimes.tsx`, replace the Google Maps embed URL with your church's location.

## 🎯 Performance Optimizations

- Lazy loading for images below the fold
- GSAP ScrollTrigger for efficient scroll animations
- Optimized animations with CSS transforms
- Responsive images with appropriate sizing
- Code splitting with React components

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Reduced motion support for users with motion sensitivity
- Sufficient color contrast ratios
- Alt text for all images

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🧩 Project Structure

```
soteria-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Events.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── Ministries.tsx
│   │   ├── Navigation.tsx
│   │   ├── ServiceTimes.tsx
│   │   └── Testimonials.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## 📝 License

This project is created for Soteria Bible Church. Feel free to customize and use it for your own church or organization.

## 🙏 Credits

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide React](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

## 💡 Future Enhancements

- [ ] Blog/Sermon archive section
- [ ] Online giving integration
- [ ] Live stream embed
- [ ] Prayer request form
- [ ] Events calendar with filtering
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Admin dashboard for content management

## 🤝 Support

For questions or support, contact: info@soteriachurch.org

---

Built with ❤️ for the Soteria Bible Church community

