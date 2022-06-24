import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react'

export const AboutMe = () => (
  <HStack>
    <Box width={16}>
      <Image
        boxSize={16}
        rounded={100}
        objectFit={'cover'}
        src={'/assets/avatar.jpg'}
        alt="Sushin-ya"
      />
    </Box>
    <Box>
      <Text fontSize={'sm'}>Personal blog by Sushin-ya.</Text>
      <Text fontSize={'sm'}>
        Interested in learning about front-end technology.
      </Text>
    </Box>
  </HStack>
)
