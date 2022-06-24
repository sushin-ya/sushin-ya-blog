import { HStack, Spacer, Stack } from '@chakra-ui/react'
import { DarkModeSwitch } from '../DarkModeSwitch'
import { DrawerMenu } from './DrawerMenu'
import { Navigation } from './Navigation'
import { Title } from '@/components/header/Title'
import { Responsive } from '../Responsive'

export const Header = () => (
  <HStack as={'header'} pt={12} pb={[0, 10]}>
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
)
