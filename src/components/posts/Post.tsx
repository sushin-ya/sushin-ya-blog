import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  FlexProps,
  Text,
  Icon,
  List,
  Heading,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import PostType from '../../types/post'

type Props = {
  post: PostType
}

export const Post = ({ post }: Props) => (
  <Flex direction="column" gap={2}>
    <Heading fontSize="2xl">{post.title}</Heading>
    <Flex gap={3}>
      <Text>{dayjs(post.date).format('MMMM D, YYYY')}</Text>
      <Text>🍵🍵🍵</Text>
      <Text>5 min read</Text>
    </Flex>
    <Text>{post.excerpt}</Text>
  </Flex>
)
