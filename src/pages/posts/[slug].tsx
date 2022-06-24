import Layout from '@/components/Layout'
import { PostDetail } from '@/components/posts/detail/PostDetail'
import { posts } from '../../../mock/posts'

const PostPage = () => {
  return (
    <Layout hasAboutMe={false}>
      <PostDetail post={posts[0]} />
    </Layout>
  )
}

export default PostPage
