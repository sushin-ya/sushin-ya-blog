import { Box, Image, Stack, Text } from '@chakra-ui/react'

export const AboutMe = () => (
  <Stack
    direction="row"
    width={{ base: '90vw', md: '768px' }}
    alignItems="center"
  >
    <Stack>
      <Box width="64px">
        <Image
          boxSize="64px"
          borderRadius="100%"
          objectFit="cover"
          src="/avatar.jpg"
          alt="Dan Abramov"
        />
      </Box>
    </Stack>
    <Box>
      <Text fontSize="sm">Personal blog by Sushin-ya.</Text>
      <Text fontSize="sm">
        Interested in learning about front-end technology.
      </Text>
    </Box>
  </Stack>
)
