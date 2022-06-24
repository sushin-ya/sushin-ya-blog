import { Text } from '@chakra-ui/react'
import PostType from '../../../types/post'

type Props = {
  post: PostType
}

export const PostDetail = ({ post }: Props) => <Text>{post.title}</Text>
