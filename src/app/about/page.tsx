import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Bhagat Singh Private Limited India',
  description: 'Learn about our mission, values, and commitment to promoting technical education and open-source contributions in India.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Organization
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Named after the great freedom fighter Bhagat Singh, our organization embodies
            the spirit of revolution through education, technology, and community service.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize technical education and empower the next generation of
                  Indian developers, engineers, and innovators through open-source
                  collaboration and community-driven learning.
                </p>
                <p className="text-gray-600">
                  We believe that access to quality technical education should not be
                  limited by geography or economic status. Our platform provides free
                  resources, mentorship opportunities, and hands-on project experience
                  to anyone passionate about technology.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To create a self-sustaining ecosystem where Indian technologists
                  contribute meaningfully to global open-source projects while
                  solving local challenges through innovative solutions.
                </p>
                <p className="text-gray-600">
                  We envision an India where every aspiring developer has access to
                  world-class mentorship, cutting-edge resources, and opportunities
                  to make a real impact through technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from code quality
                  to educational content and community support.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of collaboration and open-source
                  principles to drive innovation and learning.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth</h3>
                <p className="text-gray-600">
                  We are committed to continuous learning and helping our
                  community members grow both personally and professionally.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We encourage creative thinking and innovative solutions
                  to address real-world challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Educational Content</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Daily technical blog posts covering modern web development</li>
                  <li>• Comprehensive tutorials and learning paths</li>
                  <li>• Code reviews and best practices guides</li>
                  <li>• Interview preparation materials</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Open Source Projects</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Community-driven development projects</li>
                  <li>• Tools and libraries for developers</li>
                  <li>• Documentation and contribution guides</li>
                  <li>• Code mentorship and review sessions</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mentorship Programs</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• One-on-one mentorship with industry experts</li>
                  <li>• Career guidance and skill development</li>
                  <li>• Project collaboration opportunities</li>
                  <li>• Community workshops and events</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community Building</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Online forums and discussion platforms</li>
                  <li>• Local meetups and tech talks</li>
                  <li>• Networking opportunities</li>
                  <li>• Recognition and awards programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of the change you want to see in India's tech ecosystem.
              Together, we can create opportunities and drive innovation.
            </p>
            <a
              href="/volunteer"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Get Involved Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}