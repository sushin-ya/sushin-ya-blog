import { HStack } from '@chakra-ui/react'
import { CustomLink } from '../CustomLink'

export const Navigation = () => (
  <HStack as={'nav'} spacing={4}>
    <CustomLink href={'/about'}>About</CustomLink>
    <CustomLink href={'/blog'}>Blog</CustomLink>
    <CustomLink href={'/search'}>Search</CustomLink>
  </HStack>
)
