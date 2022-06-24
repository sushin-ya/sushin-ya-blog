import { List, ListItem, Spacer } from '@chakra-ui/react'
import PostType from '../../types/post'
import { Empty } from './Empty'
import { Post } from './Post'

type Props = {
  posts: PostType[]
}

export const Posts = ({ posts }: Props) => {
  return (
    <List spacing={16}>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <ListItem key={index}>
            <Post post={post} />
          </ListItem>
        ))
      ) : (
        <>
          <Spacer></Spacer>
          <Empty />
          <Spacer></Spacer>
        </>
      )}
    </List>
  )
}
