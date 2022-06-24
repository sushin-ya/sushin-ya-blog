import { Box, Flex, Stack } from '@chakra-ui/react'
import { DarkModeSwitch } from '../DarkModeSwitch'
import { AboutMe } from './AboutMe'
import { DrawerMenu } from './DrawerMenu'
import { Navigation } from './Navigation'
import { Title } from '@/components/header/Title'

export const Header = () => (
  <Stack mb="10vh">
    <Flex
      as="header"
      direction="row"
      paddingTop="5vh"
      paddingBottom={{ base: 'unset', sm: '5vh' }}
      width={{ base: '90vw', md: '768px' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Title />
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
    <AboutMe />
  </Stack>
)
