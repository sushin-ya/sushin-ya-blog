import { Heading, HStack, Text } from '@chakra-ui/react'

export const Title = () => (
  <HStack direction={'row'} alignItems={'flex-end'}>
    <Heading fontSize="3xl">🍣🐈 Sushin-ya Blog</Heading>
    <Text fontSize="xl" display={['none', 'block']}>
      |
    </Text>
    <Text>frontend engineer</Text>
  </HStack>
)
