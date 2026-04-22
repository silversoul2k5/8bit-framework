# 8bit-framework - Premium Portfolio Website

A **fully responsive, high-performance portfolio website** for a creative frontend development agency. Built with modern technologies and inspired by premium design principles.

## ✨ Features

### 🎨 Design & Animations
- **Dark Theme** with accent highlights (Cyan, Purple, Pink)
- **Smooth Scroll Animations** with Framer Motion
- **Interactive Hover Effects** and micro-interactions
- **Floating/Parallax Effects** on elements
- **Responsive Grid Layouts** with asymmetrical design
- **Beautiful Typography** with gradient text effects

### 📱 Responsive Design
- Mobile-first approach
- Fully responsive on all screen sizes
- Smooth mobile navigation
- Touch-friendly interactions

### ⚡ Performance
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for optimized styling
- Lazy loading and image optimization
- Production-ready build

### 🧩 Complete Sections
1. **Hero** - Full-screen animated introduction
2. **About** - Personal introduction and highlights
3. **Services** - Service offerings with hover effects
4. **Projects** - Portfolio grid with interactive cards
5. **Skills** - Animated skill bars and categories
6. **Contact** - Contact form and social links
7. **Navigation** - Smooth sticky header with mobile menu
8. **Footer** - Professional footer with quick links

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
8bit-framework/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & animations
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main page
│   ├── components/
│   │   ├── Navigation.tsx        # Sticky header
│   │   ├── Button.tsx            # Reusable button
│   │   ├── Card.tsx              # Card component
│   │   ├── SectionTitle.tsx      # Title component
│   │   ├── Footer.tsx            # Footer
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Services.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       └── Contact.tsx
│   └── utils/
│       └── animations.ts         # Framer Motion variants
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── next.config.ts                # Next.js configuration
└── package.json
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --accent-primary: #00d9ff;      /* Cyan */
  --accent-secondary: #a855f7;    /* Purple */
  --accent-tertiary: #ff006e;     /* Pink */
}
```

### Content
- **Hero Section**: Edit `src/components/sections/Hero.tsx`
- **About Section**: Edit `src/components/sections/About.tsx`
- **Services**: Edit `src/components/sections/Services.tsx`
- **Projects**: Edit `src/components/sections/Projects.tsx`
- **Skills**: Edit `src/components/sections/Skills.tsx`
- **Contact**: Edit `src/components/sections/Contact.tsx`

### Animations
Customize animation timings and effects in `src/utils/animations.ts`

## 🛠 Technologies Used

- **React 18** - UI Framework
- **Next.js 14** - Framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **GSAP** - Advanced animations (optional)

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

## 🎯 Key Features Implemented

✅ **Full-Screen Hero** with animated entrance
✅ **Smooth Scroll Behavior** across all sections
✅ **Hover Animations** on all interactive elements
✅ **Staggered Content** animations for visual depth
✅ **Responsive Navigation** with mobile menu
✅ **Form Validation** in contact section
✅ **Skill Progress Bars** with animations
✅ **Project Cards** with interactive effects
✅ **Social Links** integration
✅ **Performance Optimized** with Next.js best practices

## 🎬 Animation Details

### Scroll-based Animations
- Elements fade in and slide up as they enter the viewport
- Using Framer Motion's `whileInView`
- Smooth stagger effects per section

### Hover Effects
- Scale transformations
- Glow effects with cyan/purple accents
- Shadow transitions
- Color changes

### Entry Animations
- Fade-in transitions
- Y-axis translation (slideUp)
- Customizable delays per element

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All sections adapt perfectly to screen size.

## 🔗 Links & References

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

## 📝 Content Placeholders

Update the following with your actual content:
- Email address in Contact section
- GitHub and Instagram links
- Project descriptions and technologies
- Skills and expertise
- Personal intro and bio

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
- Netlify
- AWS Amplify
- Docker containers
- Self-hosted servers

## ✨ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Built with ❤️ for 8bit-framework

## 🤝 Contributing

Feel free to customize and extend this template for your needs.

---

**Made with beautiful animations and modern technology** 🎨⚡
