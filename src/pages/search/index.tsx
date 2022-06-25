import Layout from '@/components/Layout'
import { Heading, Stack } from '@chakra-ui/react'

const Index = () => (
  <Layout hasAboutMe={false}>
    {/* // TODO: Emptyに寄せる */}
    <Stack alignItems={'center'} py={20}>
      <Heading size={'md'}>Work in progress....🤔🤔🤔</Heading>
    </Stack>
  </Layout>
)

export default Index

export const getStaticProps = async () => {
  return {
    props: {},
  }
}
