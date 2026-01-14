# Contributing to Bhagat Singh Private Limited India Website

Thank you for your interest in contributing to our website! We welcome contributions from developers of all skill levels. This document provides guidelines and instructions to help you get started.

## 🌟 Ways to Contribute

### 1. **Code Contributions**
- Fix bugs and improve features
- Add new components and pages
- Improve performance and accessibility
- Enhance mobile responsiveness
- Write unit tests

### 2. **Content Contributions**
- Write technical blog posts
- Create tutorials and guides
- Improve documentation
- Translate content to regional languages
- Review and proofread existing content

### 3. **Design Contributions**
- Improve UI/UX design
- Create graphics and illustrations
- Design icons and logos
- Optimize visual hierarchy
- Enhance accessibility

### 4. **Community Contributions**
- Help answer questions in discussions
- Review pull requests
- Mentor new contributors
- Organize virtual events
- Spread awareness about the project

## 📋 Before You Start

### Prerequisites
- Node.js 18+ installed
- Git knowledge
- Basic understanding of React/Next.js
- Familiarity with TypeScript (preferred)

### Setting Up Your Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/website.git
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

4. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🐛 Reporting Bugs

Before creating a bug report, please check existing issues to avoid duplicates.

### Bug Report Template
When filing a bug report, please include:

- **Description**: Clear description of the issue
- **Steps to Reproduce**: Step-by-step instructions
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable
- **Environment**: Browser, OS, device type
- **Additional Context**: Any other relevant information

### Example Bug Report
```markdown
**Description**
The navigation menu doesn't close on mobile when clicking a link.

**Steps to Reproduce**
1. Open the website on mobile
2. Click the hamburger menu
3. Click on "About" link
4. Observe that the menu stays open

**Expected Behavior**
Menu should close after clicking a navigation link.

**Environment**
- Browser: Safari on iOS 17
- Device: iPhone 14
```

## 💡 Suggesting Features

We love feature suggestions! Please:

1. Check existing issues and discussions
2. Describe the problem you're trying to solve
3. Explain your proposed solution
4. Consider the impact on other users
5. Be open to feedback and discussion

## 📝 Writing Blog Posts

Our blog is a key part of our mission to educate developers. Here's how to contribute:

### Blog Post Guidelines

#### Content Standards
- **Original Content**: Write original content or properly attribute sources
- **Technical Accuracy**: Ensure all code examples and explanations are correct
- **Practical Value**: Focus on practical, actionable content
- **Beginner-Friendly**: Explain concepts clearly for developers at all levels
- **Indian Context**: Consider the Indian developer ecosystem when relevant

#### Writing Style
- **Clear and Concise**: Use simple, clear language
- **Structured**: Use headings, bullet points, and code blocks effectively
- **Engaging**: Make content interesting and relatable
- **Professional**: Maintain a professional yet friendly tone

#### Technical Requirements
- **MDX Format**: Use MDX for rich content with React components
- **Frontmatter**: Include complete metadata
- **Code Quality**: Test all code examples
- **Images**: Optimize images and provide alt text
- **Links**: Verify all external links work

### Blog Post Template

```markdown
---
title: "Your Blog Post Title (Be Descriptive and SEO-Friendly)"
date: "YYYY-MM-DD"
excerpt: "A compelling 1-2 sentence summary that makes people want to read more"
author: "Your Name"
tags: ["PrimaryTopic", "SecondaryTopic", "Framework", "TechnologyUsed"]
---

# Your Blog Post Title

Start with a hook that grabs attention and explains what readers will learn.

## What You'll Learn

- Key point 1
- Key point 2
- Key point 3

## Prerequisites

List any required knowledge or tools.

## Step-by-Step Tutorial

### Step 1: Setup
Explain the first step with code examples.

```javascript
// Provide working code examples
const example = "This should actually work";
console.log(example);
```

### Step 2: Implementation
Continue with clear explanations.

## Best Practices

Share important tips and common pitfalls to avoid.

## Conclusion

Summarize what was covered and suggest next steps.

## Further Reading

- [Relevant Link 1](url)
- [Relevant Link 2](url)
```

### Blog Post Topics We're Looking For

- **Web Development**: React, Next.js, TypeScript, Node.js
- **Mobile Development**: React Native, Flutter
- **Backend**: Express.js, NestJS, Databases
- **DevOps**: Docker, CI/CD, Deployment
- **Career Advice**: Interview tips, skill development
- **Open Source**: Contributing to projects, maintaining code
- **Tools & Productivity**: Development tools, workflows

## 🔧 Code Contributions

### Development Workflow

1. **Check existing issues** or create a new one
2. **Fork and clone** the repository
3. **Create a feature branch** from main
4. **Write your code** following our standards
5. **Test your changes** thoroughly
6. **Submit a pull request**

### Coding Standards

#### JavaScript/TypeScript
- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Prefer functional components and hooks

#### React/Next.js
- Use Next.js App Router conventions
- Implement proper error boundaries
- Optimize for performance (lazy loading, memoization)
- Follow accessibility best practices
- Use Tailwind CSS for styling

#### File Organization
```
src/
  app/                    # Next.js pages
    (route)/
      page.tsx           # Page component
      layout.tsx         # Layout component
  components/            # Reusable components
    ComponentName/
      ComponentName.tsx  # Main component
      index.ts          # Export file
  lib/                   # Utility functions
  content/              # Blog posts and content
```

#### Component Structure
```typescript
import { FC } from 'react'

interface ComponentNameProps {
  // Define props with TypeScript
  title: string
  optional?: boolean
}

/**
 * Brief description of what this component does
 */
const ComponentName: FC<ComponentNameProps> = ({ title, optional = false }) => {
  // Component logic here

  return (
    <div className="component-classes">
      {/* JSX content */}
    </div>
  )
}

export default ComponentName
```

### CSS/Styling Guidelines
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Ensure proper contrast ratios (WCAG AA)
- Test on multiple screen sizes
- Use semantic HTML elements

### Git Commit Guidelines

We follow conventional commits for clear history:

#### Commit Message Format
```
type(scope): short description

Longer description if needed

Closes #123
```

#### Types
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

#### Examples
```bash
feat(blog): add RSS feed generation
fix(navigation): mobile menu closing issue
docs(readme): update installation instructions
style(components): apply consistent formatting
```

## 🎯 Pull Request Process

### Before Submitting
- [ ] Code follows our style guidelines
- [ ] Tests pass (if applicable)
- [ ] Documentation is updated
- [ ] Changes are tested on multiple devices/browsers
- [ ] Commit messages are clear and descriptive

### Pull Request Template
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/formatting change
- [ ] Refactoring
- [ ] Other (please describe)

## Testing
Describe how you tested your changes.

## Screenshots
Include screenshots for UI changes.

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated (if applicable)
```

### Review Process
1. **Automated checks** must pass (linting, build)
2. **Community review** from at least one maintainer
3. **Testing** on different devices/browsers
4. **Merge** once approved

### After Your PR is Merged
- Delete your feature branch
- Pull the latest changes from main
- Consider contributing more!

## 🚀 Getting Help

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Where to Ask Questions
- **GitHub Discussions**: General questions and ideas
- **GitHub Issues**: Bug reports and feature requests
- **Code Reviews**: Specific feedback on pull requests

### Response Times
- **Issues**: We aim to respond within 2-3 days
- **Pull Requests**: Reviews typically take 3-5 days
- **Discussions**: Community-driven, responses vary

## 🏆 Recognition

We appreciate all contributions! Contributors are recognized through:

- **GitHub Contributors** section on our repository
- **Blog post mentions** for significant contributions
- **Community showcase** in our monthly updates
- **Contributor highlights** on our social media

## 📚 Learning Resources

### For Beginners
- [freeCodeCamp](https://www.freecodecamp.org/)
- [React Tutorial](https://react.dev/learn)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

### For Advanced Contributors
- [Next.js Advanced Features](https://nextjs.org/docs/advanced-features)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Web Performance](https://web.dev/performance/)

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

## 📞 Contact

- **Project Maintainers**: Create an issue or discussion
- **Security Issues**: Report privately through GitHub security advisories
- **General Questions**: Use GitHub Discussions

---

Thank you for contributing to our mission of making technical education accessible to every Indian developer! 🇮🇳