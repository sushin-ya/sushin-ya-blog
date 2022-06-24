import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, FlexProps, Text, Icon, List } from '@chakra-ui/react'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import PostType from '../../types/post'

type Props = {
  post: PostType
}

export const Post = ({ post }: Props) => (
  <Box>
    <Text>{post.title}</Text>
    <Text>{post.author.name}</Text>
    <Text>{post.excerpt}</Text>
  </Box>
)
