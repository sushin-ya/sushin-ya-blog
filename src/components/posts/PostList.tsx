import { List, ListItem, Spacer } from '@chakra-ui/react'
import PostType from '../../types/post'
import { Empty } from './Empty'
import { PostRow } from './PostRow'

type Props = {
  posts: PostType[]
}

export const PostList = ({ posts }: Props) => {
  return (
    <List spacing={{ base: 4, md: 2 }}>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <ListItem key={index}>
            <PostRow post={post} />
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
