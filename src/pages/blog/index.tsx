import Layout from '@/components/Layout'
import { PostList } from '@/components/posts/PostList'
import { getAllPosts } from 'lib/api'
import PostType from 'types/post'

type Props = {
  allPosts: PostType[]
}

const Index = ({ allPosts }: Props) => (
  <Layout hasAboutMe={false}>
    <PostList posts={allPosts} />
  </Layout>
)

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    // 'slug',
    // 'author',
    // 'coverImage',
    // 'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
