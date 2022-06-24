import Layout from '@/components/Layout'
import { getAllPosts } from 'lib/api'
import PostType from 'types/post'
import { Posts } from '../components/posts/Posts'

type Props = {
  allPosts: PostType[]
}

const Index = ({ allPosts }: Props) => (
  <Layout>
    <Posts posts={allPosts} />
  </Layout>
)

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
