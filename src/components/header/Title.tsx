import { Heading, Link, Stack, Text } from '@chakra-ui/react'

export const Title = () => (
  <Stack
    direction={['column', 'row']}
    alignItems={['center', 'flex-end']}
    spacing={[1, 2]}
  >
    <Link href={'/'}>
      <Heading fontSize="3xl">🍣🐈 Sushin-ya Blog</Heading>
    </Link>
    <Text fontSize="xl" display={['none', 'block']}>
      |
    </Text>
    <Text>frontend engineer</Text>
  </Stack>
)
