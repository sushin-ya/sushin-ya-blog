import { Container } from '@chakra-ui/react'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <Container maxWidth={['full', '768px']} minHeight={'100vh'}>
    <Header />
    {children}
    <Footer />
  </Container>
)

export default Layout
