import { Text, Heading, HStack, Stack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import PostType from '../../types/post'
import { CustomLink } from '../CustomLink'

type Props = {
  post: PostType
}

export const Post = ({ post }: Props) => (
  <Stack direction={'column'} gap={2}>
    <CustomLink href={`/posts/${post.slug}`}>
      <Heading fontSize={'2xl'}>{post.title}</Heading>
    </CustomLink>
    <HStack gap={2}>
      <Text>{dayjs(post.date).format('MMMM D, YYYY')}</Text>
      <Text>{post.tea}</Text>
      <Text>{post.readingTime} min read</Text>
    </HStack>
    <Text>{post.excerpt}</Text>
  </Stack>
)
