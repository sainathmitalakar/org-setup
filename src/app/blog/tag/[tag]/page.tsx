import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostsByTag, getAllTags, formatDate } from '@/lib/blog'

interface TagPageProps {
  params: {
    tag: string
  }
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag.toLowerCase()),
  }))
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag)
  const posts = getPostsByTag(tag)

  if (posts.length === 0) {
    return {
      title: 'Tag Not Found - Bhagat Singh Private Limited India',
    }
  }

  const tagDisplayName = getAllTags().find(
    t => t.toLowerCase() === tag.toLowerCase()
  ) || tag

  return {
    title: `Posts tagged "${tagDisplayName}" - Bhagat Singh Private Limited India`,
    description: `Browse all blog posts tagged with "${tagDisplayName}" on our technical blog.`,
  }
}

export default function TagPage({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag)
  const posts = getPostsByTag(tag)
  const allTags = getAllTags()

  if (posts.length === 0) {
    notFound()
  }

  const tagDisplayName = allTags.find(
    t => t.toLowerCase() === tag.toLowerCase()
  ) || tag

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to Blog
            </Link>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Posts tagged "{tagDisplayName}"
          </h1>
          <p className="text-xl text-gray-600">
            {posts.length} article{posts.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
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
                      {post.tags.map((postTag) => (
                        <Link
                          key={postTag}
                          href={`/blog/tag/${encodeURIComponent(postTag.toLowerCase())}`}
                          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                            postTag.toLowerCase() === tag.toLowerCase()
                              ? 'bg-primary-100 text-primary-800'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          }`}
                        >
                          {postTag}
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
          </div>
        </div>
      </section>

      {/* Other Tags */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Browse Other Topics
            </h2>
            <div className="flex flex-wrap gap-2">
              {allTags
                .filter(t => t.toLowerCase() !== tag.toLowerCase())
                .map((otherTag) => (
                  <Link
                    key={otherTag}
                    href={`/blog/tag/${encodeURIComponent(otherTag.toLowerCase())}`}
                    className="bg-white hover:bg-primary-50 text-primary-700 border border-primary-200 hover:border-primary-300 px-3 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    {otherTag}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}