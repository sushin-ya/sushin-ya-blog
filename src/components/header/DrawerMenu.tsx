import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  Link as ChakraLink,
  Stack,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon w={6} h={6} />}
        aria-label="Toggle Theme"
        colorScheme="green"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack as={'nav'} spacing={4}>
                <ChakraLink href="/about">About</ChakraLink>
                <ChakraLink href="/blog">Blog</ChakraLink>
                <ChakraLink href="/search">Search</ChakraLink>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
