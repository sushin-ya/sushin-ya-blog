import { Container, Stack } from '@chakra-ui/react'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { AboutMe } from './AboutMe'
import Meta from './Meta'

type Props = {
  children: React.ReactNode
  hasAboutMe?: boolean
}

const Layout = ({ children, hasAboutMe = true }: Props) => (
  <>
    <Meta />
    <Container maxWidth={['full', '768px']} minHeight={'100vh'}>
      <Stack mb={16}>
        <Header />
        {hasAboutMe && <AboutMe />}
      </Stack>
      {children}
      <Footer />
    </Container>
  </>
)

export default Layout
