import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { DrawerMenu } from './DrawerMenu'
import { HeaderTitle } from './HeaderTitle'
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
    <HeaderTitle />
    <Box display={{ base: 'none', md: 'block' }}>
      <Navigation />
    </Box>
    <Box display={{ base: 'block', md: 'none' }}>
      <DrawerMenu />
    </Box>
  </Flex>
)
