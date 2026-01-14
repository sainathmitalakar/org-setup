import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, formatDate, getAllTags } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog - Bhagat Singh Private Limited India',
  description: 'Daily technical blogs covering web development, programming, and technology trends for Indian developers.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Daily insights, tutorials, and deep-dives into modern web development,
            programming concepts, and technology trends.
          </p>
        </div>
      </section>

      {/* Tags Filter */}
      {tags.length > 0 && (
        <section className="bg-gray-50 py-8">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by Topic</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                    className="bg-white hover:bg-primary-50 text-primary-700 border border-primary-200 hover:border-primary-300 px-3 py-1 rounded-full text-sm font-medium transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Blog Posts Yet</h3>
                <p className="text-gray-600 mb-6">
                  We're working on creating amazing technical content. Stay tuned for our first posts!
                </p>
                <Link
                  href="/volunteer"
                  className="btn-primary"
                >
                  Join Our Writing Team
                </Link>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span>By {post.author}</span>
                          <span>•</span>
                          <time dateTime={post.date}>
                            {formatDate(post.date)}
                          </time>
                          <span>•</span>
                          <span>{post.readingTime} min read</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Link
                            key={tag}
                            href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium transition-colors"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Read more →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {posts.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Want to Contribute?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Share your knowledge with the community. Write about your experiences,
                tutorials, or insights into modern web development.
              </p>
              <Link
                href="/volunteer"
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Join Our Writing Team
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}