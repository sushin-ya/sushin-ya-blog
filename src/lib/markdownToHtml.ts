import remark from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
// @ts-ignore
import prism from 'remark-prism'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(gfm)
    .use(prism)
    .use(html, { sanitize: false })
    .process(markdown)
  return result.toString()
}
