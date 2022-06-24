import { Flex, Link as ChakraLink } from '@chakra-ui/react'

export const Navigation = () => (
  <Flex
    as="nav"
    flexDirection={{ base: 'column', md: 'row' }}
    justifyContent="space-between"
    alignItems={{ base: 'flex-start', md: 'center' }}
    gridGap="3vw"
  >
    <ChakraLink>About</ChakraLink>
    <ChakraLink>Blog</ChakraLink>
    <ChakraLink>Search</ChakraLink>
  </Flex>
)
