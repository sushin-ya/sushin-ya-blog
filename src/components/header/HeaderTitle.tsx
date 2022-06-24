import { Flex, Heading, Text } from '@chakra-ui/react'

export const HeaderTitle = () => (
  <Flex
    flexWrap={{ base: 'wrap', md: 'nowrap' }}
    justifyContent={{ base: 'center', md: 'flex-start' }}
    alignItems="end"
    gap="1vw"
  >
    <Heading fontSize="2xl">🍣🐈 Sushin-ya Blog</Heading>
    <Text display={{ base: 'none', sm: 'block' }}>|</Text>
    <Text>frontend engineer</Text>
  </Flex>
)
