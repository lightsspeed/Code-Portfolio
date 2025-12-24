

```markdown
# Personal Portfolio

A modern, responsive personal portfolio website built with the latest web technologies. Deployed and ready to showcase your work!

🌐 **Live Site**: https://deployone.cloud (or your custom domain)

## 🚀 Features

- Fully responsive design (mobile, tablet, desktop)
- Clean, minimal UI with Tailwind CSS
- Built with Vite + React + TypeScript
- Beautiful components powered by **shadcn/ui**
- Fast loading with optimized assets
- Custom domain support via CloudFront + Route 53

## 🛠 Tech Stack

- **Frontend**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Hosting**: AWS S3 + CloudFront (global CDN)
- **DNS**: AWS Route 53
- **SSL**: AWS ACM (free HTTPS)
- **Deployment**: Automated via bash script

## 📂 Project Structure

```
.
├── public/               # Static assets (favicon, images)
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   └── App.tsx           # Main app
├── dist/                 # Built production files (generated)
├── Dockerfile            # For containerization (optional)
├── deploy.sh             # One-click deployment script
└── package.json
```

## 🚀 Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Setup

```bash
# Clone the repo
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 to view the app.

## 🌍 Deployment

Your site is hosted on **AWS S3 + CloudFront** for speed and reliability.

### One-Click Deploy

```bash
# Make sure you're in the project root
chmod +x deploy.sh        # First time only
./deploy.sh
```

This script:
1. Builds the site (`npm run build`)
2. Uploads to S3
3. Invalidates CloudFront cache
4. Deploys instantly worldwide

## 🔒 Custom Domain & HTTPS

Already configured:
- Domain: `deployone.cloud` (or your custom domain)
- HTTPS via AWS Certificate Manager
- Global delivery via CloudFront edge locations

To add your own domain:
1. Go to Route 53 → Create Hosted Zone for your domain
2. Update nameservers at your registrar
3. Add CNAME records (Lovable or manual)

## 🤝 Contributing

Feel free to:
- Add new sections (About, Projects, Blog, Contact)
- Customize colors/theme in Tailwind config
- Add animations or dark mode

## 📝 License

Personal use – feel free to modify and make it your own!

---

Made with ❤️ using modern web tools & AWS
```

Just replace this content in your `README.md` file.  
It’s clean, professional, and explains everything clearly for visitors, recruiters, or future you.

Let me know if you want to add a screenshot section, badges, or dark mode toggle instructions! 🚀
```
