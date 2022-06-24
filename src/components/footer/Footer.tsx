import { Text, Icon, HStack, VStack } from '@chakra-ui/react'
import { FiGithub, FiTwitter } from 'react-icons/fi'

export const Footer = () => (
  <VStack pt={24} pb={8}>
    <HStack spacing={'8'}>
      <Icon as={FiGithub} w={5} h={5} />
      <Icon as={FiTwitter} w={5} h={5} />
    </HStack>
    <Text>&copy; 2022 Sushin-ya. All rights reserved.</Text>
  </VStack>
)
