import { Text, Heading, HStack, Stack, Link } from '@chakra-ui/react'
import dayjs from 'dayjs'
import PostType from '../../types/post'

type Props = {
  post: PostType
}

export const Post = ({ post }: Props) => (
  <Stack direction={'column'} gap={2}>
    <Link href={`/posts/${post.slug}`}>
      <Heading fontSize={'2xl'}>{post.title}</Heading>
    </Link>
    <HStack gap={2}>
      <Text>{dayjs(post.date).format('MMMM D, YYYY')}</Text>
      <Text>🍵🍵🍵</Text>
      <Text>5 min read</Text>
    </HStack>
    <Text>{post.excerpt}</Text>
  </Stack>
)
