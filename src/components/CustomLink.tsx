import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

type CustomLinkProps = {
  children: React.ReactNode
  href: string
  options?: any
}

export const CustomLink = ({ children, href, options }: CustomLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...options}>{children}</ChakraLink>
    </NextLink>
  )
}
