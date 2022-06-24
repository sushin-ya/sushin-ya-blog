import { Heading, Stack, Text } from '@chakra-ui/react'

export const Title = () => (
  <Stack
    direction={['column', 'row']}
    alignItems={['center', 'flex-end']}
    spacing={[1, 2]}
  >
    <Heading fontSize="3xl">🍣🐈 Sushin-ya Blog</Heading>
    <Text fontSize="xl" display={['none', 'block']}>
      |
    </Text>
    <Text>frontend engineer</Text>
  </Stack>
)
