import Layout from '@/components/Layout'
import { posts } from '../../mock/posts'
import { Posts } from '../components/posts/Posts'

const Index = () => (
  <Layout>
    <Posts posts={posts} />
  </Layout>
)

export default Index
