import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  readingTime: number
  content: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  readingTime: number
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): BlogPostMeta[] {
  const allPosts: BlogPostMeta[] = []

  // Get all year directories
  const years = fs.readdirSync(postsDirectory).filter(item => {
    const yearPath = path.join(postsDirectory, item)
    return fs.statSync(yearPath).isDirectory()
  })

  years.forEach(year => {
    const yearPath = path.join(postsDirectory, year)
    const files = fs.readdirSync(yearPath).filter(name => name.endsWith('.mdx'))

    files.forEach(file => {
      const fullPath = path.join(yearPath, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const slug = `${year}/${file.replace(/\.mdx$/, '')}`
      const readingTime = Math.ceil(content.split(' ').length / 200) // Assuming 200 words per minute

      allPosts.push({
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        author: data.author || 'Anonymous',
        tags: data.tags || [],
        readingTime,
      })
    })
  })

  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const readingTime = Math.ceil(content.split(' ').length / 200)

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      author: data.author || 'Anonymous',
      tags: data.tags || [],
      readingTime,
      content,
    }
  } catch (error) {
    return null
  }
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter(post =>
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  )
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()

  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })

  return Array.from(tags).sort()
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}