import { Text, Heading, Stack, Link } from '@chakra-ui/react'
import dayjs from 'dayjs'
import PostType from '../../types/post'

type Props = {
  post: PostType
}
// TODO: Postに寄せる
export const PostRow = ({ post }: Props) => (
  <Stack
    direction={['column', 'row']}
    justifyContent={['flex-start', 'space-between']}
    spacing={{ base: 0, md: 2 }}
  >
    <Link href={`/posts/${post.slug}`}>
      <Heading fontSize={'2xl'}>{post.title}</Heading>
    </Link>
    <Text whiteSpace={'nowrap'}>{dayjs(post.date).format('MMMM D, YYYY')}</Text>
  </Stack>
)
