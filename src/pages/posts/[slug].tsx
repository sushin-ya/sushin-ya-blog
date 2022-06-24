import Layout from '@/components/Layout'
import { PostDetail } from '@/components/posts/detail/PostDetail'
import { getAllPosts, getPostBySlug } from 'lib/api'
import remark from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
// @ts-ignore
import prism from 'remark-prism'
import PostType from '../../types/post'

type Props = {
  post: PostType
}

const PostPage = ({ post }: Props) => {
  console.log({ post })
  return (
    <Layout hasAboutMe={false}>
      <PostDetail post={post} />
    </Layout>
  )
}

export default PostPage

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await remark()
    .use(gfm)
    .use(prism)
    .use(html)
    .process(post.content)

  console.log({ content })

  return {
    props: {
      post: {
        ...post,
        content: content.toString(),
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
