import { Container } from '@chakra-ui/react'
import { posts } from '../../mock/posts'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { Posts } from '../components/posts/Posts'

const Index = () => (
  <Container maxWidth={['full', '768px']} minHeight={'100vh'}>
    <Header />
    <Posts posts={posts} />
    <Footer />
  </Container>
)

export default Index
