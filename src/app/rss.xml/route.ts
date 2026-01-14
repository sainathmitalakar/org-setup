import { getAllPosts } from '@/lib/blog'

export async function GET() {
  const posts = getAllPosts()
  const baseUrl = 'https://sainathmitalakar.github.io/org-setup'

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bhagat Singh Private Limited India - Technical Blog</title>
    <description>Daily technical blogs covering web development, programming, and technology trends for Indian developers.</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>noreply@bhagat-singh.org (Technical Team)</managingEditor>
    <webMaster>noreply@bhagat-singh.org (Technical Team)</webMaster>
    <category>Technology</category>
    <category>Programming</category>
    <category>Web Development</category>
    <category>Education</category>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="false">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>noreply@bhagat-singh.org (${post.author})</author>
      ${post.tags.map(tag => `<category>${tag}</category>`).join('')}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}