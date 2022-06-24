import { Container } from '@chakra-ui/react'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { Posts } from '../components/posts/Posts'

const Index = () => (
  <Container maxWidth={['full', '768px']}>
    <Header />
    <Posts />
    <Footer />
  </Container>
)

export default Index
