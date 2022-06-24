import { HStack, Link as ChakraLink } from '@chakra-ui/react'

export const Navigation = () => (
  <HStack as={'nav'} spacing={4}>
    <ChakraLink href="/about">About</ChakraLink>
    <ChakraLink href="/blog">Blog</ChakraLink>
    <ChakraLink href="/search">Search</ChakraLink>
  </HStack>
)
