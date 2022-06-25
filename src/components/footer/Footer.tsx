import {
  Text,
  Icon,
  HStack,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { FiGithub, FiTwitter } from 'react-icons/fi'

export const Footer = () => (
  <VStack pt={24} pb={8}>
    <HStack spacing={'8'}>
      <ChakraLink href={'https://github.com/sushin-ya'}>
        <Icon as={FiGithub} w={5} h={5} />
      </ChakraLink>
      <ChakraLink href={'https://twitter.com/sushin_ya'}>
        <Icon as={FiTwitter} w={5} h={5} />
      </ChakraLink>
    </HStack>
    <Text>&copy; 2022 Sushin-ya. All rights reserved.</Text>
  </VStack>
)
