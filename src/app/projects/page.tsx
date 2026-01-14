import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Bhagat Singh Private Limited India',
  description: 'Explore our open-source projects and community initiatives that promote technical education in India.',
}

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our open-source projects and community initiatives
            designed to empower developers and promote technical education across India.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Website Project */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Organization Website</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Our main website built with Next.js, TypeScript, and Tailwind CSS.
                  Features a blog system, volunteer management, and project showcase.
                  Deployed using GitHub Pages with automated CI/CD.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Next.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    TypeScript
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    MDX
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Bhagat-Singh-Private-Limited-India/website"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code →
                  </a>
                  <a
                    href="https://bhagat-singh-private-limited-india.github.io/website/"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>

              {/* Learning Resources Project */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Learning Resources</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    Planned
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  A comprehensive collection of curated learning materials, tutorials,
                  and coding challenges specifically designed for Indian developers.
                  Will include interview prep, coding patterns, and system design.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    React
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Node.js
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    MongoDB
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Docker
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Bhagat-Singh-Private-Limited-India"
                    className="text-gray-400 cursor-not-allowed"
                  >
                    Coming Soon
                  </a>
                </div>
              </div>

              {/* Mentorship Platform */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Mentorship Platform</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    Planned
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  A platform to connect experienced developers with aspiring ones.
                  Features include mentor-mentee matching, session scheduling,
                  progress tracking, and community forums.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Next.js
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    PostgreSQL
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Prisma
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Auth0
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Bhagat-Singh-Private-Limited-India"
                    className="text-gray-400 cursor-not-allowed"
                  >
                    Coming Soon
                  </a>
                </div>
              </div>

              {/* Dev Tools */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Developer Tools</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    Planned
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  A collection of useful developer tools including code generators,
                  API testing utilities, performance analyzers, and productivity
                  enhancers for Indian developers.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    TypeScript
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Node.js
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    CLI
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Web API
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Bhagat-Singh-Private-Limited-India"
                    className="text-gray-400 cursor-not-allowed"
                  >
                    Coming Soon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Project Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational</h3>
                <p className="text-gray-600">
                  Learning platforms, tutorial systems, and educational tools
                  designed to make technical education more accessible.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Developer Tools</h3>
                <p className="text-gray-600">
                  Utilities, libraries, and frameworks that help developers
                  be more productive and write better code.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600">
                  Platforms and tools that help build and maintain
                  stronger developer communities across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributing */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Want to Contribute?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for passionate developers to help us build
              better tools and resources for the Indian tech community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">New Contributors</h3>
                <p className="text-gray-600 mb-4">
                  Look for issues labeled "good first issue" to get started.
                </p>
                <a
                  href="https://github.com/Bhagat-Singh-Private-Limited-India/website/labels/good%20first%20issue"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find Issues →
                </a>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Ideas</h3>
                <p className="text-gray-600 mb-4">
                  Have an idea for a new project? We'd love to hear it!
                </p>
                <a
                  href="https://github.com/Bhagat-Singh-Private-Limited-India/website/discussions"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share Ideas →
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Bhagat-Singh-Private-Limited-India"
                className="btn-primary text-lg px-8 py-4 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Repositories
              </a>
              <a
                href="/volunteer"
                className="btn-secondary text-lg px-8 py-4 inline-block"
              >
                Learn More About Contributing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}