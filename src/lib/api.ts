import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

// FIXME: 下は削除
import remark from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import prism from 'remark-prism'
import unified from 'unified'
import remarkStringify from 'remark-stringify/lib'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // FIXME: test
  const markdown = fs.readFileSync(
    '/Users/otsukaryutaro/Documents/environment_nextjs/sushinya-blog/text.md',
    'utf8'
  )
  const result = matter(markdown)
  console.log({ result })

  const c = remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .use(prism)
    .process(result.content)
  const d = unified()
    .use(remarkParse as any)
    .use(remarkStringify)
    .use(html, { sanitize: false })
    .use(prism)
    .process(result.content)

  console.log({ c, d })

  // FIXME: test end

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
