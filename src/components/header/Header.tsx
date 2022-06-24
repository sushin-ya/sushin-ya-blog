import { Box, Flex, HStack, Spacer, Stack } from '@chakra-ui/react'
import { DarkModeSwitch } from '../DarkModeSwitch'
import { AboutMe } from './AboutMe'
import { DrawerMenu } from './DrawerMenu'
import { Navigation } from './Navigation'
import { Title } from '@/components/header/Title'
import { Responsive } from '../Responsive'

export const Header = () => (
  <Stack mb={16}>
    <HStack as={'header'} pt={10} pb={5}>
      <Title />
      <Spacer />
      <Stack
        direction={{ base: 'column-reverse', sm: 'row' }}
        alignItems={'center'}
        spacing={4}
      >
        <Responsive pc={<Navigation />} mobile={<DrawerMenu />} />
        <DarkModeSwitch />
      </Stack>
    </HStack>
    <AboutMe />
  </Stack>
)
