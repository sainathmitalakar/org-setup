# Bhagat Singh Private Limited India - Official Website

[![Deploy Next.js to GitHub Pages](https://github.com/Bhagat-Singh-Private-Limited-India/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/Bhagat-Singh-Private-Limited-India/website/actions/workflows/deploy.yml)

Welcome to the official website repository for **Bhagat Singh Private Limited India**, a non-profit organization dedicated to promoting technical education and open-source contributions across India.

## 🌐 Live Website

Visit our website: [https://bhagat-singh-private-limited-india.github.io/website/](https://bhagat-singh-private-limited-india.github.io/website/)

## 🚀 Mission

To democratize technical education and empower the next generation of Indian developers, engineers, and innovators through open-source collaboration and community-driven learning.

## 🛠️ Tech Stack

This website is built using only GitHub-native services and modern web technologies:

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts
- **Deployment**: [GitHub Pages](https://pages.github.com/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Hosting**: GitHub Pages (100% free)

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── robots.txt              # SEO robots file
│   └── ...                     # Static assets
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page
│   │   ├── blog/               # Blog pages
│   │   │   ├── [..slug]/       # Dynamic blog post pages
│   │   │   └── tag/[tag]/      # Tag-based filtering
│   │   ├── projects/           # Projects page
│   │   ├── volunteer/          # Volunteer page
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   └── rss.xml/            # RSS feed
│   ├── components/             # Reusable React components
│   ├── content/                # Blog posts (MDX files)
│   │   └── blog/
│   │       └── 2024/           # Year-based organization
│   └── lib/                    # Utility functions
├── package.json                # Dependencies and scripts
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhagat-Singh-Private-Limited-India/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## ✍️ Contributing to the Blog

We welcome technical blog contributions! Here's how to add a new blog post:

### 1. Create a New MDX File

Create a new file in `src/content/blog/YYYY/` (where YYYY is the current year):

```bash
touch src/content/blog/2024/your-blog-post-title.mdx
```

### 2. Add Frontmatter

Start your blog post with frontmatter:

```markdown
---
title: "Your Blog Post Title"
date: "2024-12-30"
excerpt: "A brief description of your post"
author: "Your Name"
tags: ["Tag1", "Tag2", "Tag3"]
---

# Your Blog Content Here

Write your blog content using Markdown/MDX syntax...
```

### 3. Preview Your Changes

```bash
npm run dev
```

Visit `/blog` to see your new post listed.

### 4. Submit a Pull Request

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/new-blog-post`)
3. Commit your changes (`git commit -m "Add blog post: Your Title"`)
4. Push to the branch (`git push origin feature/new-blog-post`)
5. Open a Pull Request

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here are ways you can contribute:

### For Developers
- Fix bugs and improve features
- Add new components and pages
- Improve performance and accessibility
- Write technical documentation

### For Content Writers
- Write technical blog posts
- Create tutorials and guides
- Translate content to regional languages
- Improve existing documentation

### For Designers
- Improve UI/UX design
- Create graphics and illustrations
- Optimize mobile responsiveness
- Design marketing materials

Please read our [Contributing Guidelines](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) before getting started.

## 📋 Quick Contribution Steps

1. **Fork** this repository
2. **Clone** your fork locally
3. **Create** a new branch for your feature
4. **Make** your changes
5. **Test** your changes locally
6. **Commit** with a descriptive message
7. **Push** to your fork
8. **Submit** a Pull Request

## 🐛 Bug Reports & Feature Requests

- **Bug Reports**: [Create an Issue](https://github.com/Bhagat-Singh-Private-Limited-India/website/issues/new?template=bug_report.md)
- **Feature Requests**: [Create an Issue](https://github.com/Bhagat-Singh-Private-Limited-India/website/issues/new?template=feature_request.md)
- **Questions**: [Start a Discussion](https://github.com/Bhagat-Singh-Private-Limited-India/website/discussions)

## 🔧 Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions:

1. **Push to main branch** triggers the deployment workflow
2. **GitHub Actions** builds the Next.js app
3. **Static files** are generated in the `out/` directory
4. **GitHub Pages** serves the static files

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 🌟 Features

- **Fast & Modern**: Built with Next.js 14 and modern web standards
- **SEO Optimized**: Dynamic sitemap, robots.txt, and RSS feed
- **Mobile Responsive**: Tailwind CSS ensures great mobile experience
- **Accessibility**: ARIA labels and semantic HTML
- **Blog System**: Year-based organization with tag filtering
- **Zero Cost**: Hosted entirely on GitHub's free tier

## 📊 Analytics & Monitoring

- **Performance**: Lighthouse scores tracked in CI/CD
- **Uptime**: GitHub Pages status monitoring
- **SEO**: Google Search Console integration (configured separately)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Bhagat Singh**: Inspiration for our organization's name and values
- **Next.js Team**: For the amazing framework
- **GitHub**: For providing free hosting and CI/CD
- **Contributors**: All the amazing people who contribute to this project

## 📞 Contact & Support

- **Website**: [https://bhagat-singh-private-limited-india.github.io/website/](https://bhagat-singh-private-limited-india.github.io/website/)
- **GitHub**: [Organization Profile](https://github.com/Bhagat-Singh-Private-Limited-India)
- **Issues**: [Report a Problem](https://github.com/Bhagat-Singh-Private-Limited-India/website/issues)
- **Discussions**: [Join the Conversation](https://github.com/Bhagat-Singh-Private-Limited-India/website/discussions)

---

Made with ❤️ by the Indian developer community | Powered by GitHub Pages

**Join us in making technical education accessible to every Indian developer!**