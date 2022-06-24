import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { DrawerMenu } from './DrawerMenu'
import { Navigation } from './Navigation'

export const Header = () => (
  <Flex
    as="header"
    direction="row"
    height="15vh"
    width={{ base: '90vw', md: '768px' }}
    justifyContent="space-between"
    alignItems="center"
  >
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
    <Box display={{ base: 'none', md: 'block' }}>
      <Navigation />
    </Box>
    <Box display={{ base: 'block', md: 'none' }}>
      <DrawerMenu />
    </Box>
  </Flex>
)
