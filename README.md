# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Showcasing DevOps projects, technical blog posts, and professional experience with a beautiful, animated UI powered by shadcn/ui components.

🌐 **Live Site**: [https://deployone.cloud](https://deployone.cloud)

## 🎯 Overview

This portfolio website serves as a comprehensive showcase for a DevOps Engineer's work, featuring:
- **Project Showcase**: Detailed project pages with architecture diagrams, tech stacks, and lessons learned
- **Blog Section**: Technical articles and insights on DevOps practices
- **Skills Display**: Organized skill categories with visual icons
- **Professional Profile**: Bio, experience, and contact information
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Page transitions and scroll animations powered by Framer Motion

## ✨ Features

### Core Features
- **Fully Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Dark/Light Mode Toggle**: System preference detection with manual override
- **Smooth Page Transitions**: Animated route transitions using Framer Motion
- **Scroll Animations**: Elements animate into view as you scroll
- **Project Filtering**: Filter projects by category (Infrastructure, Automation, Monitoring, Security, CI/CD, Serverless)
- **Project Detail Pages**: Comprehensive project pages with:
  - Architecture diagrams
  - Problem/solution descriptions
  - Key features and tech stack
  - Lessons learned
  - Visual galleries
  - Links to GitHub and live demos
- **Blog Integration**: Links to Medium articles with tags and reading time
- **Error Handling**: Custom error boundary and 404/500 error pages
- **SEO Optimized**: Meta tags, robots.txt, and semantic HTML

### UI/UX Features
- **Modern Design System**: Built with shadcn/ui components
- **Accessible**: ARIA labels, keyboard navigation, and semantic HTML
- **Fast Loading**: Optimized assets and code splitting
- **Smooth Scrolling**: Native smooth scroll behavior
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Theme Persistence**: Theme preference saved in localStorage

## 🛠 Tech Stack

### Frontend Framework & Build Tools
- **React 18.3.1**: UI library
- **TypeScript 5.8.3**: Type safety
- **Vite 7.3.0**: Build tool and dev server
- **React Router DOM 6.30.1**: Client-side routing

### Styling & UI
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components built on Radix UI
- **Framer Motion 12.24.11**: Animation library
- **Lucide React 0.462.0**: Icon library
- **next-themes 0.3.0**: Theme management

### State Management & Data Fetching
- **TanStack React Query 5.83.0**: Server state management
- **React Hook Form 7.61.1**: Form handling
- **Zod 3.25.76**: Schema validation

### UI Component Libraries (Radix UI)
- Accordion, Alert Dialog, Avatar, Checkbox, Dialog
- Dropdown Menu, Hover Card, Navigation Menu, Popover
- Progress, Radio Group, Select, Separator, Slider
- Switch, Tabs, Toast, Tooltip, and more

### Additional Libraries
- **date-fns 3.6.0**: Date formatting
- **recharts 2.15.4**: Charting library
- **sonner 1.7.4**: Toast notifications
- **embla-carousel-react 8.6.0**: Carousel component
- **cmdk 1.1.1**: Command palette
- **class-variance-authority 0.7.1**: Component variants
- **clsx & tailwind-merge**: Utility functions for className management

### Development Tools
- **ESLint 9.32.0**: Code linting
- **TypeScript ESLint**: TypeScript-specific linting
- **PostCSS 8.5.6**: CSS processing
- **Autoprefixer 10.4.21**: CSS vendor prefixing
- **@vitejs/plugin-react-swc**: Fast React refresh

### Deployment & Infrastructure
- **AWS S3**: Static website hosting
- **AWS CloudFront**: CDN for global content delivery
- **AWS Route 53**: DNS management
- **AWS ACM**: SSL/TLS certificates
- **GitHub Actions**: CI/CD pipeline (referenced in projects)

## 📂 Project Structure

```
clean-slate-devops/
├── public/                          # Static assets
│   ├── projects/                    # Project images and screenshots
│   │   ├── portfolio/              # Portfolio project assets
│   │   └── qr/                     # QR generator project assets
│   ├── 404.html                    # Custom 404 error page
│   ├── 500.html                    # Custom 500 error page
│   ├── favicon.ico                 # Site favicon
│   ├── placeholder.svg             # Placeholder image
│   ├── resume.pdf                  # Resume document
│   └── robots.txt                  # SEO robots file
│
├── src/
│   ├── assets/                     # Source assets
│   │   ├── indian-flag.jpg        # Flag image
│   │   └── profile-photo.png      # Profile picture
│   │
│   ├── components/                 # React components
│   │   ├── sections/              # Page sections
│   │   │   ├── HeroSection.tsx    # Landing hero section
│   │   │   ├── ProjectsSection.tsx # Projects showcase
│   │   │   └── BlogSection.tsx    # Blog posts section
│   │   ├── ui/                    # shadcn/ui components (40+ components)
│   │   ├── AnimatedRoutes.tsx     # Route configuration with animations
│   │   ├── ErrorBoundary.tsx      # Error handling component
│   │   ├── ErrorPage.tsx          # Error page component
│   │   ├── Footer.tsx             # Site footer
│   │   ├── Header.tsx              # Navigation header
│   │   ├── NavLink.tsx             # Navigation link component
│   │   ├── PageTransition.tsx     # Page transition wrapper
│   │   └── ThemeToggle.tsx        # Dark/light mode toggle
│   │
│   ├── data/                       # Static data files
│   │   ├── blog.ts                # Blog posts data
│   │   ├── profile.ts             # Profile information
│   │   ├── projects.ts            # Projects data
│   │   └── skills.ts              # Skills data
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx         # Mobile detection hook
│   │   ├── use-scroll-animation.ts # Scroll animation hook
│   │   ├── use-theme.ts           # Theme management hook
│   │   └── use-toast.ts           # Toast notification hook
│   │
│   ├── lib/                        # Utility functions
│   │   └── utils.ts               # Common utilities (cn function, etc.)
│   │
│   ├── pages/                      # Page components
│   │   ├── Blogs.tsx              # Blog listing page
│   │   ├── Index.tsx              # Home page
│   │   ├── NotFound.tsx           # 404 page
│   │   └── ProjectDetail.tsx      # Individual project detail page
│   │
│   ├── App.tsx                     # Main app component
│   ├── App.css                     # Global app styles
│   ├── index.css                   # Global styles and CSS variables
│   ├── main.tsx                    # Application entry point
│   └── vite-env.d.ts              # Vite type declarations
│
├── dist/                           # Production build output (generated)
│   ├── assets/                     # Bundled and optimized assets
│   ├── index.html                  # Production HTML
│   └── ...
│
├── deploy.sh                       # AWS deployment script
├── local_deploy.sh                 # Local deployment script
├── components.json                 # shadcn/ui configuration
├── eslint.config.js                # ESLint configuration
├── package.json                    # Dependencies and scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.app.json               # App-specific TypeScript config
├── tsconfig.node.json              # Node-specific TypeScript config
├── vite.config.ts                  # Vite configuration
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18 or higher
- **npm** or **bun**: Package manager
- **AWS CLI**: Configured with appropriate credentials (for deployment)
- **Git**: Version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd clean-slate-devops
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:8080` (or the port shown in terminal)
   - The app will hot-reload on file changes

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development mode (with source maps)
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## 📄 Pages & Routes

### Home Page (`/`)
- **Hero Section**: Introduction, profile photo, and call-to-action
- **Projects Section**: Filterable grid of projects with categories
- **Skills Display**: Organized skill categories with icons
- **Social Links**: GitHub, LinkedIn, and email

### Project Detail Page (`/project/:id`)
- **Project Overview**: Name, description, and category
- **Tech Stack**: Technologies used in the project
- **Architecture Diagram**: Visual representation of system architecture
- **Problem & Solution**: Detailed explanation of challenges and solutions
- **Key Features**: List of main features
- **Lessons Learned**: Insights and takeaways
- **Visual Gallery**: Screenshots and diagrams
- **Links**: GitHub repository and live demo URLs

### Blog Page (`/blogs`)
- **Blog Post List**: Grid of blog posts with:
  - Title and excerpt
  - Publication date
  - Reading time
  - Tags
  - Link to Medium article

### 404 Page (`/*`)
- Custom error page for unmatched routes

## 🎨 Customization

### Updating Profile Information

Edit `src/data/profile.ts`:
```typescript
export const profile = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  location: "Your Location",
  yearsOfExperience: 3,
  resumeUrl: "/resume.pdf",
  bio: "Your bio...",
  // ... other fields
};
```

### Adding Projects

Edit `src/data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: "unique-id",
    name: "Project Name",
    description: "Project description",
    techStack: ["Tech1", "Tech2"],
    category: "infrastructure", // or other categories
    githubUrl: "https://github.com/...",
    liveUrl: "https://example.com",
    // ... optional fields
  },
];
```

### Adding Blog Posts

Edit `src/data/blog.ts`:
```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "unique-id",
    title: "Blog Post Title",
    excerpt: "Short description...",
    date: "2025-01-01",
    readTime: "5 min read",
    tags: ["Tag1", "Tag2"],
    slug: "blog-post-slug",
    mediumUrl: "https://medium.com/...",
  },
];
```

### Updating Skills

Edit `src/data/skills.ts`:
```typescript
export const skillCategories = [
  {
    name: "Category Name",
    icon: Cloud, // Import from lucide-react
    skills: ["Skill1", "Skill2"],
  },
];
```

### Theme Customization

Edit `src/index.css` to modify CSS variables:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... other variables */
}
```

### Tailwind Configuration

Modify `tailwind.config.ts` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints
- Animations

## 🌍 Deployment

### AWS Deployment

The project is configured for deployment to AWS using S3, CloudFront, and Route 53.

#### Prerequisites
- AWS CLI installed and configured
- S3 bucket created (e.g., `deployone.cloud`)
- CloudFront distribution created
- Route 53 hosted zone configured

#### Deploy Script

The `deploy.sh` script automates the deployment process:

```bash
#!/bin/bash
# Build the site
npm run build

# Upload to S3
aws s3 sync dist/ s3://deployone.cloud --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
    --distribution-id YOUR_DISTRIBUTION_ID \
    --paths "/*"
```

#### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Invalidate CloudFront cache**
   ```bash
   aws cloudfront create-invalidation \
       --distribution-id YOUR_DISTRIBUTION_ID \
       --paths "/*"
   ```

#### Update Deployment Configuration

Edit `deploy.sh` and update:
- S3 bucket name
- CloudFront distribution ID

### Custom Domain Setup

1. **Create Route 53 Hosted Zone**
   - Go to AWS Route 53
   - Create hosted zone for your domain
   - Update nameservers at your domain registrar

2. **Configure CloudFront**
   - Add your domain as an alternate domain name (CNAME)
   - Request SSL certificate in AWS Certificate Manager (ACM)
   - Associate certificate with CloudFront distribution

3. **Update DNS Records**
   - Create A record (or Alias) pointing to CloudFront distribution

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
- Development server port: `8080`
- React plugin with SWC for fast refresh
- Path aliases: `@/` maps to `src/`
- Component tagger for development mode

### TypeScript Configuration
- **tsconfig.json**: Base TypeScript configuration
- **tsconfig.app.json**: Application-specific settings
- **tsconfig.node.json**: Node.js-specific settings

### ESLint Configuration (`eslint.config.js`)
- React hooks rules
- TypeScript support
- Modern JavaScript standards

### Tailwind Configuration (`tailwind.config.ts`)
- Dark mode: class-based
- Custom color scheme
- Custom animations
- Container settings

## 🎯 Key Features Explained

### Theme System
- Uses `next-themes` for theme management
- Supports system preference detection
- Persists theme choice in localStorage
- Smooth transitions between themes

### Animations
- **Page Transitions**: Framer Motion AnimatePresence for route changes
- **Scroll Animations**: Custom hook for elements animating into view
- **Hover Effects**: Interactive elements with smooth transitions

### Error Handling
- **Error Boundary**: Catches React errors and displays fallback UI
- **404 Page**: Custom not found page
- **500 Page**: Server error page (for static hosting)

### Performance Optimizations
- Code splitting with React Router
- Optimized asset bundling with Vite
- Lazy loading for images
- CSS purging with Tailwind

## 🤝 Contributing

Contributions are welcome! Here are some ways you can contribute:

1. **Report Bugs**: Open an issue with detailed bug reports
2. **Suggest Features**: Share your ideas for new features
3. **Submit Pull Requests**: Fork the repo and submit PRs
4. **Improve Documentation**: Help improve this README or add comments

### Development Guidelines

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes locally before submitting

## 📝 License

This project is for personal use. Feel free to:
- Use it as a template for your own portfolio
- Modify and customize it
- Share it with others

## 📧 Contact

- **Email**: akhileshchoure1@gmail.com
- **GitHub**: [@lightsspeed](https://github.com/lightsspeed)
- **LinkedIn**: [Akhilesh Choure](https://www.linkedin.com/in/akhilesh-choure/)
- **Website**: [https://deployone.cloud](https://deployone.cloud)

## 🙏 Acknowledgments

- **shadcn/ui**: Beautiful, accessible component library
- **Radix UI**: Unstyled, accessible component primitives
- **Framer Motion**: Powerful animation library
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **AWS**: Reliable cloud infrastructure

---

Made with ❤️ using modern web technologies and AWS infrastructure

**Last Updated**: January 2026
