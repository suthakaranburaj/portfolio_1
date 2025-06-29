# Suthakar Anburaj - Full Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and professional experience as a Full Stack Developer.

## 🚀 Features

- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap, and robots.txt
- **Performance**: Built with Next.js 15 for optimal performance and SEO
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Beautiful animations with Framer Motion
- **TypeScript**: Full type safety throughout the application
- **PWA Ready**: Progressive Web App support with manifest.json
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Tabler Icons, Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
portfolio_1/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   ├── robots.ts           # Robots.txt generation
│   │   ├── structured-data.ts  # JSON-LD structured data
│   │   ├── blog/
│   │   ├── hackathon/
│   │   └── coming-soon/
│   ├── components/
│   │   ├── hero_section/
│   │   ├── about_section/
│   │   ├── projects_section/
│   │   ├── skills_section/
│   │   ├── experience_section/
│   │   ├── contact_section/
│   │   └── ui/
│   └── lib/
├── public/
│   ├── manifest.json           # PWA manifest
│   └── assets/
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/suthakaranburaj/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://suthakaranburaj.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

### SEO Configuration

Update the following files with your information:

1. **`src/app/layout.tsx`**: Update metadata, title, description
2. **`src/app/structured-data.ts`**: Update personal information and social links
3. **`src/app/sitemap.ts`**: Update URLs and priorities
4. **`public/manifest.json`**: Update PWA information

### Customization

1. **Colors**: Update color scheme in `src/components/colors.ts`
2. **Content**: Update sections in respective component files
3. **Images**: Replace images in `public/` directory
4. **Fonts**: Update font configuration in `src/app/layout.tsx`

## 📊 SEO Features

### Meta Tags
- Comprehensive meta descriptions
- Open Graph tags for social media
- Twitter Card support
- Keywords optimization
- Canonical URLs

### Structured Data
- Person schema for personal information
- WebSite schema for site details
- WebPage schema for page information
- Organization schema for branding
- CreativeWork schema for portfolio content

### Technical SEO
- Dynamic sitemap generation
- Robots.txt configuration
- PWA manifest for mobile experience
- Performance optimization
- Accessibility compliance

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📱 PWA Features

- Installable on mobile devices
- Offline support (with service worker)
- App-like experience
- Splash screen and icons

## 🔍 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: Optimized
- Bundle size: Optimized with Next.js
- Image optimization: Automatic with Next.js Image component

## 📈 Analytics

The portfolio is ready for analytics integration:

- Google Analytics 4
- Google Search Console
- Vercel Analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Name**: Suthakar Anburaj
- **Email**: suthakaranburaj@gmail.com
- **LinkedIn**: [linkedin.com/in/suthakaranburaj](https://linkedin.com/in/suthakaranburaj)
- **GitHub**: [github.com/suthakaranburaj](https://github.com/suthakaranburaj)
- **Portfolio**: [suthakaranburaj.com](https://suthakaranburaj.com)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Tabler Icons for beautiful icons

---

⭐ If you find this portfolio helpful, please give it a star on GitHub!
