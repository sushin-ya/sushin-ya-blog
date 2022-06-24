import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, FlexProps, Text, Icon } from '@chakra-ui/react'
import { FiGithub, FiTwitter } from 'react-icons/fi'

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    mt="5vh"
    py="5vh"
    direction="column"
    gap={{ base: '1vh', sm: '3vh' }}
  >
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap="2vw"
    >
      <Box>
        <Icon as={FiGithub} w={5} h={5} />
      </Box>
      <Box>
        <Icon as={FiTwitter} w={5} h={5} />
      </Box>
    </Flex>
    <Text>&copy; 2022 Sushin-ya. All rights reserved.</Text>
  </Flex>
)
