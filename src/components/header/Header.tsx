import { Box, Flex, Stack } from '@chakra-ui/react'
import { DarkModeSwitch } from '../DarkModeSwitch'
import { DrawerMenu } from './DrawerMenu'
import { HeaderTitle } from './HeaderTitle'
import { Navigation } from './Navigation'

export const Header = () => (
  <Flex
    as="header"
    direction="row"
    height="18vh"
    width={{ base: '90vw', md: '768px' }}
    justifyContent="space-between"
    alignItems="center"
  >
    <HeaderTitle />
    <Stack
      alignItems="center"
      gridGap="3vw"
      direction={{ base: 'column-reverse', sm: 'row' }}
    >
      <Box display={{ base: 'none', md: 'block' }}>
        <Navigation />
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <DrawerMenu />
      </Box>
      <DarkModeSwitch />
    </Stack>
  </Flex>
)
