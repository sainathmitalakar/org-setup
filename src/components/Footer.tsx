export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Bhagat Singh Private Limited India</h3>
            <p className="text-gray-300 mb-4">
              A non-profit organization dedicated to promoting technical education,
              open-source contributions, and community building across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Bhagat-Singh-Private-Limited-India"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/volunteer" className="text-gray-300 hover:text-white transition-colors">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Bhagat-Singh-Private-Limited-India/website/issues"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Bhagat-Singh-Private-Limited-India/website/blob/main/CONTRIBUTING.md"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bhagat Singh Private Limited India.
            Built with Next.js and hosted on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  )
}