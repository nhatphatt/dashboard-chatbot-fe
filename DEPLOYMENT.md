# Deployment Guide

This project is configured as a **Next.js Static Export** application, which means it generates static HTML files that can be deployed to any static hosting service.

## 🚀 Quick Start

### Development
```bash
npm run dev
# or
bun run dev
```
- Runs on `http://localhost:3000` (or next available port)
- Uses Bun for faster development experience

### Production Build
```bash
npm run build
```
- Creates optimized static files in `/out` directory
- Uses npm for stable production builds

### Preview Production
```bash
npm run start
# or
npm run preview
# or  
npm run serve
```
- Serves the static files from `/out` directory
- Runs on available port (usually 3000+)

## 📋 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `bun --bun next dev` | Start development server with Bun |
| `build` | `next build` | Build for production (static export) |
| `start` | `npx serve@latest out` | Serve production build |
| `preview` | `npx serve@latest out` | Preview production build |
| `serve` | `npx serve@latest out` | Serve static files |
| `lint` | `next lint` | Run ESLint |
| `type-check` | `tsc --noEmit` | Check TypeScript types |
| `build:bun` | `bun --bun next build` | Build with Bun (fallback) |
| `clean` | `rm -rf .next out` | Clean build artifacts |

## 🌐 Deployment Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 2. Netlify
1. Build the project: `npm run build`
2. Upload the `/out` folder to Netlify
3. Or connect your Git repository

### 3. GitHub Pages
1. Build: `npm run build`
2. Push `/out` contents to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### 4. AWS S3 + CloudFront
1. Build: `npm run build`
2. Upload `/out` contents to S3 bucket
3. Configure S3 for static website hosting
4. Set up CloudFront distribution

### 5. Any Static Hosting
The `/out` directory contains all static files needed:
- Upload entire `/out` folder contents
- Set index.html as default document
- Configure 404.html for error handling

## ⚙️ Configuration

### Next.js Config (`next.config.js`)
```javascript
const nextConfig = {
  output: 'export',           // Enable static export
  eslint: {
    ignoreDuringBuilds: true, // Skip linting during build
  },
  images: { 
    unoptimized: true         // Required for static export
  },
};
```

### Why Static Export?
- **No server required**: Pure static files
- **CDN friendly**: Fast global distribution
- **Cost effective**: Cheap hosting options
- **High performance**: Pre-rendered pages
- **Easy deployment**: Upload and serve

## 🔧 Troubleshooting

### Build Issues with Bun
If `bun run build` fails, use npm:
```bash
npm run build
```

### Port Already in Use
The serve command will automatically find an available port:
```
This port was picked because 3000 is in use.
- Local: http://localhost:60013
```

### Clean Build
If you encounter caching issues:
```bash
npm run clean
npm run build
```

### TypeScript Errors
Check types before building:
```bash
npm run type-check
```

## 📊 Build Output

After running `npm run build`, you'll see:
```
Route (app)                    Size     First Load JS
┌ ○ /                         2.5 kB   81.9 kB
├ ○ /dashboard/departments    5.92 kB  119 kB
├ ○ /dashboard/tuition        12.4 kB  140 kB
└ ○ /login                    3.98 kB  94.1 kB

○ (Static) automatically rendered as static HTML
```

## 🎯 Production Checklist

- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] Check all routes work correctly
- [ ] Verify API calls work in production
- [ ] Test responsive design
- [ ] Check console for errors
- [ ] Validate performance metrics

## 📝 Notes

- **Development**: Uses Bun for faster hot reload
- **Production**: Uses npm for stability
- **Static Export**: All pages pre-rendered at build time
- **No SSR**: Server-side rendering disabled
- **API Routes**: Not supported in static export mode
