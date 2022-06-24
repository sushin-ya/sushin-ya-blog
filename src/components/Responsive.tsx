import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  pc: ReactNode
  mobile: ReactNode
}

export const Responsive = ({ pc, mobile }: Props) => (
  <>
    <Box display={{ base: 'none', md: 'block' }}>{pc}</Box>
    <Box display={{ base: 'block', md: 'none' }}>{mobile} </Box>
  </>
)
