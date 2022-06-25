import { Text, Heading, Stack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import PostType from '../../types/post'
import { CustomLink } from '../CustomLink'

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
    <CustomLink href={`/posts/${post.slug}`}>
      <Heading fontSize={'2xl'}>{post.title}</Heading>
    </CustomLink>
    <Text whiteSpace={'nowrap'}>{dayjs(post.date).format('MMMM D, YYYY')}</Text>
  </Stack>
)
