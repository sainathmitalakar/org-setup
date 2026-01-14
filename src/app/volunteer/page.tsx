import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volunteer - Bhagat Singh Private Limited India',
  description: 'Join our community of volunteers and contribute to technical education and open-source projects in India.',
}

export default function VolunteerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Volunteer With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a community of passionate individuals working together to promote
            technical education and open-source contributions across India.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Volunteer With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Make an Impact</h3>
                <p className="text-gray-600">
                  Your contributions directly help aspiring developers across India
                  access quality education and opportunities.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Grow Your Skills</h3>
                <p className="text-gray-600">
                  Collaborate with experienced developers, learn new technologies,
                  and improve your technical and leadership skills.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Build Network</h3>
                <p className="text-gray-600">
                  Connect with like-minded professionals and build meaningful
                  relationships within the tech community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              How You Can Contribute
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Developers */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Developers</h3>
                </div>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• Contribute to open-source projects</li>
                  <li>• Review code and provide feedback</li>
                  <li>• Build new features and tools</li>
                  <li>• Fix bugs and improve performance</li>
                  <li>• Create technical documentation</li>
                </ul>
                <p className="text-sm text-gray-500">
                  <strong>Skills needed:</strong> JavaScript, TypeScript, React, Node.js, Python, or any programming language
                </p>
              </div>

              {/* Content Writers */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Content Writers</h3>
                </div>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• Write daily technical blog posts</li>
                  <li>• Create tutorials and guides</li>
                  <li>• Develop course materials</li>
                  <li>• Translate content to regional languages</li>
                  <li>• Edit and proofread articles</li>
                </ul>
                <p className="text-sm text-gray-500">
                  <strong>Skills needed:</strong> Technical writing, communication skills, subject matter expertise
                </p>
              </div>

              {/* Mentors */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Mentors</h3>
                </div>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• Guide junior developers</li>
                  <li>• Conduct code review sessions</li>
                  <li>• Host technical workshops</li>
                  <li>• Provide career advice</li>
                  <li>• Lead community discussions</li>
                </ul>
                <p className="text-sm text-gray-500">
                  <strong>Skills needed:</strong> 3+ years experience, patience, communication skills, passion for teaching
                </p>
              </div>

              {/* Community Managers */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Community Managers</h3>
                </div>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• Organize online events and meetups</li>
                  <li>• Moderate community discussions</li>
                  <li>• Onboard new volunteers</li>
                  <li>• Manage social media presence</li>
                  <li>• Coordinate volunteer activities</li>
                </ul>
                <p className="text-sm text-gray-500">
                  <strong>Skills needed:</strong> Communication, organization, social media, event planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              How to Get Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Join Our GitHub</h3>
                <p className="text-gray-600">
                  Visit our GitHub organization and star the repositories
                  you're interested in contributing to.
                </p>
                <a
                  href="https://github.com/sainathmitalakar/org-setup"
                  className="text-primary-600 hover:text-primary-700 font-medium mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub →
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Read Guidelines</h3>
                <p className="text-gray-600">
                  Review our contribution guidelines and code of conduct
                  to understand our community standards.
                </p>
                <a
                  href="https://github.com/sainathmitalakar/org-setup/blob/main/CONTRIBUTING.md"
                  className="text-primary-600 hover:text-primary-700 font-medium mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Guidelines →
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Contributing</h3>
                <p className="text-gray-600">
                  Pick an issue labeled "good first issue" or propose
                  a new feature to start your contribution journey.
                </p>
                <a
                  href="https://github.com/sainathmitalakar/org-setup/issues"
                  className="text-primary-600 hover:text-primary-700 font-medium mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Issues →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If you have any questions about volunteering or need help getting started,
              don't hesitate to reach out to our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/sainathmitalakar/org-setup/discussions"
                className="btn-primary text-lg px-8 py-4 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discussions
              </a>
              <a
                href="https://github.com/sainathmitalakar/org-setup/issues/new"
                className="btn-secondary text-lg px-8 py-4 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}