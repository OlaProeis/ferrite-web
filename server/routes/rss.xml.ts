import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent(event, 'blog')
    .sort({ date: -1 })
    .find()

  const siteUrl = 'https://ferrite.dev'
  const feedTitle = 'Ferrite Blog'
  const feedDescription = 'Development blog for Ferrite - the fast, native Markdown editor built with Rust.'

  const rssItems = posts.map(post => {
    const pubDate = new Date(post.date).toUTCString()
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}${post._path}</link>
      <guid isPermaLink="true">${siteUrl}${post._path}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>${post.category || 'Article'}</category>
    </item>`
  }).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${feedTitle}</title>
    <link>${siteUrl}</link>
    <description>${feedDescription}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`

  setResponseHeader(event, 'content-type', 'application/xml')
  return rss
})
