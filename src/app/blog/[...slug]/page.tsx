import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogPostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug.split('/'),
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const slug = params.slug.join('/')
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found - Bhagat Singh Private Limited India',
    }
  }

  return {
    title: `${post.title} - Bhagat Singh Private Limited India`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

const mdxComponents = {
  h1: (props: any) => <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 mt-6" {...props} />,
  h4: (props: any) => <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 mt-4" {...props} />,
  p: (props: any) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 my-6" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 text-primary-600 px-1 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm" {...props} />
  ),
  a: (props: any) => (
    <a className="text-primary-600 hover:text-primary-700 underline" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-gray-300" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="border border-gray-300 px-4 py-2 bg-gray-50 text-left font-semibold text-gray-900" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-gray-300 px-4 py-2 text-gray-700" {...props} />
  ),
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = params.slug.join('/')
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="container py-12">
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
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-gray-600 mb-6">
              Help us create more quality content by joining our community of writers and contributors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/volunteer"
                className="btn-primary"
              >
                Join Our Team
              </Link>
              <Link
                href="/blog"
                className="btn-secondary"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}