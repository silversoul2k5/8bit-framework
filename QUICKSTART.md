# 🚀 Quick Start Guide - 8bit-framework Portfolio

## Start here! 👇

### 1️⃣ **Install Dependencies**
```bash
cd /home/arjun/Projects/8BIt-Framework/8bit-framework
npm install
```

### 2️⃣ **Run Development Server**
```bash
npm run dev
```
Then open: **http://localhost:3000**

### 3️⃣ **See Live Preview**
The website will open with:
- Full-screen animated hero
- Smooth scrolling sections
- Interactive hover effects
- Mobile-responsive design
- Contact form
- Skills showcase

---

## 📁 Key Files to Edit

| What | File | Line |
|------|------|------|
| Hero text | `src/components/sections/Hero.tsx` | 50-80 |
| About bio | `src/components/sections/About.tsx` | 45-75 |
| Services | `src/components/sections/Services.tsx` | 12-35 |
| Projects | `src/components/sections/Projects.tsx` | 15-75 |
| Skills list | `src/components/sections/Skills.tsx` | 15-45 |
| Email & links | `src/components/sections/Contact.tsx` | 85-110 |
| Colors | `src/app/globals.css` | 5-10 |

---

## 🎨 Quick Customization

### Change Your Info
1. Open `src/components/sections/Hero.tsx`
2. Change "Welcome to 8bit-framework" to your name
3. Update the tagline
4. Change button texts

### Add Your Projects
1. Open `src/components/sections/Projects.tsx`
2. Edit the `projects` array (line 15)
3. Add 4 of your best projects with descriptions

### Update Contact Info
1. Open `src/components/sections/Contact.tsx`
2. Change email to yours (line 85)
3. Update GitHub link (line 105)
4. Update Instagram link (line 106)

### Change Colors (Optional)
1. Open `src/app/globals.css`
2. Edit CSS variables (lines 5-10):
   ```css
   --accent-primary: #00d9ff;      /* Cyan */
   --accent-secondary: #a855f7;    /* Purple */
   --accent-tertiary: #ff006e;     /* Pink */
   ```

---

## 🚀 Deploy to Production

### Option 1: Vercel (Free, Recommended)
```bash
npm i -g vercel
vercel deploy
```

### Option 2: Netlify
```bash
npm run build
# Upload .next folder to Netlify
```

### Option 3: Your Own Server
```bash
npm run build
npm start
```

---

## 📋 What's Inside

✅ **Hero Section** - Full-screen animated intro
✅ **About Section** - About you with highlights  
✅ **Services** - 6 service offerings
✅ **Projects** - 4 featured projects portfolio
✅ **Skills** - Animated skill bars
✅ **Contact** - Contact form & social links
✅ **Navigation** - Smooth scrolling menu
✅ **Footer** - Professional footer

All sections have:
- 🎬 Smooth animations
- 📱 Mobile responsive
- ⚡ Fast performance
- 🎨 Beautiful design

---

## 🛠 Frequently Used Commands

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm start         # Run production server
npm run lint      # Check code quality
npm run build:watch  # Watch mode (if available)
```

---

## 💡 Tips

1. **Test on Phone** - Open dev server on your phone to test responsive design
2. **Browser DevTools** - Press F12 to see styling and debug
3. **Animations** - All animations are in `src/utils/animations.ts`
4. **Images** - Place in `public/images/` folder
5. **Resume** - Consider adding a downloadable resume section

---

## 📞 Common Issues

**Port 3000 already in use?**
```bash
PORT=3001 npm run dev
```

**Build fails?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Styling looks wrong?**
- Clear browser cache (Ctrl+Shift+Delete)
- Run `npm run build` again

---

## 📚 Documentation

For detailed information, see:
- **SETUP_GUIDE.md** - Complete customization guide
- **README.md** - Full project documentation

---

## ✨ Final Checklist

- [ ] Customized all text content
- [ ] Updated email and social links
- [ ] Added your projects
- [ ] Updated skills list
- [ ] Changed colors (optional)
- [ ] Tested on mobile
- [ ] Ready to deploy

---

**Your premium portfolio is ready! Deploy it and start impressing clients! 🚀**

Questions? Check SETUP_GUIDE.md for detailed information.
