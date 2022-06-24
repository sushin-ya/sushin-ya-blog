import { FlexProps, List, ListItem, Text } from '@chakra-ui/react'
import { posts } from '../../../mock/posts'
import PostType from '../../types/post'
import { Post } from './Post'

type Props = {
  posts: PostType[]
}

export const Posts = () => {
  return (
    <List>
      {posts.length > 0 &&
        posts.map((post, index) => (
          <ListItem key={index}>
            <Post post={post} />
          </ListItem>
        ))}
      <Text>test</Text>
    </List>
  )
}
