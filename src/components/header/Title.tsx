import { Heading, Stack, Text } from '@chakra-ui/react'
import { CustomLink } from '../CustomLink'

export const Title = () => (
  <Stack
    direction={['column', 'row']}
    alignItems={['center', 'flex-end']}
    spacing={[1, 2]}
  >
    <CustomLink href={'/'}>
      <Heading fontSize="3xl">🍣🐈 Sushin-ya Blog</Heading>
    </CustomLink>
    <Text fontSize="xl" display={['none', 'block']}>
      |
    </Text>
    <Text>frontend engineer</Text>
  </Stack>
)
