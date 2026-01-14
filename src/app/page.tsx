import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering India Through
            <span className="text-primary-600 block">Open Source & Education</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bhagat Singh Private Limited India is a non-profit organization dedicated to
            promoting technical education, fostering open-source contributions, and building
            a stronger tech community across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer" className="btn-primary text-lg px-8 py-4">
              Join Our Mission
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                <p className="text-gray-600">
                  Providing accessible technical education and resources to aspiring developers
                  and engineers across India through comprehensive learning materials and mentorship.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Open Source</h3>
                <p className="text-gray-600">
                  Encouraging contributions to open-source projects and creating opportunities
                  for developers to collaborate on meaningful projects that benefit society.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600">
                  Building a supportive tech community where knowledge sharing, mentorship,
                  and collaboration drive innovation and personal growth.
                </p>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of volunteers who are already contributing to India's tech revolution.
              Whether you're a student, professional, or enthusiast, there's a place for you here.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Developers</h3>
                <p className="text-gray-600 mb-4">Contribute code, review PRs, and build amazing projects.</p>
                <Link href="/volunteer" className="text-primary-600 hover:text-primary-700 font-medium">
                  Start Contributing →
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mentors</h3>
                <p className="text-gray-600 mb-4">Share your knowledge and guide the next generation.</p>
                <Link href="/volunteer" className="text-primary-600 hover:text-primary-700 font-medium">
                  Become a Mentor →
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Creators</h3>
                <p className="text-gray-600 mb-4">Write technical blogs and create educational content.</p>
                <Link href="/volunteer" className="text-primary-600 hover:text-primary-700 font-medium">
                  Join Writers →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}