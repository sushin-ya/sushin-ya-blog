import React from 'react'
import {
  chakra,
  Flex,
  Heading,
  Text,
  Icon,
  Divider,
  UnorderedList,
  OrderedList,
  ListItem,
  Image,
  Code,
  Box,
  Stack,
} from '@chakra-ui/react'
import { FaLink } from 'react-icons/fa'
import PostType from '../../../types/post'
import unified from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import rehypeSlug from 'rehype-slug'
import { CustomLink } from '@/components/CustomLink'

type Props = {
  post: PostType
}

const ContentH1 = (props: any) => (
  <Heading
    fontSize={{ base: 'large', lg: 'x-large' }}
    paddingTop="2"
    paddingBottom="2"
    {...props}
  >
    <Flex align="center">
      <CustomLink href={`#${props.id}`} options={{ padding: '2' }}>
        <Icon as={FaLink} color="gray.500" boxSize="4" />
      </CustomLink>
      {props.children}
    </Flex>
    <Divider />
  </Heading>
)

const ContentH2 = (props: any) => (
  <Heading
    fontSize={{ base: 'large', lg: 'x-large' }}
    paddingTop="2"
    paddingBottom="2"
    {...props}
  >
    <Flex align="center">
      <CustomLink href={`#${props.id}`} options={{ padding: '2' }}>
        <Icon as={FaLink} color="gray.500" boxSize="4" />
      </CustomLink>
      {props.children}
    </Flex>
    <Divider />
  </Heading>
)

const ContentH3 = (props: any) => (
  <Heading
    fontSize={{ base: 'medium', lg: 'large' }}
    paddingTop="2"
    paddingBottom="2"
    {...props}
  >
    <Flex align="center">
      <CustomLink href={`#${props.id}`} options={{ padding: '2' }}>
        <Icon as={FaLink} color="gray.500" boxSize="4" />
      </CustomLink>
      {props.children}
    </Flex>
  </Heading>
)

const ContentH4 = (props: any) => (
  <Heading
    fontSize={{ base: 'medium', lg: 'large' }}
    paddingTop="2"
    paddingBottom="2"
    {...props}
  >
    <Flex align="center">{props.children}</Flex>
  </Heading>
)

const ContentUl = (props: any) => (
  <UnorderedList paddingLeft="4">
    {props.children as React.ReactNode}
  </UnorderedList>
)

const ContentOl = (props: any) => (
  <OrderedList paddingLeft="4">{props.children as React.ReactNode}</OrderedList>
)

const ContentLi = (props: any) => (
  <ListItem padding="1" fontSize={{ base: 'sm', lg: 'medium' }}>
    {props.children as React.ReactNode}
  </ListItem>
)

const ContentParagraph = (props: any) => (
  <Text
    as="p"
    fontSize={{ base: 'sm', lg: 'medium' }}
    lineHeight={{ base: '2', lg: '8' }}
    padding="2"
  >
    {props.children as React.ReactNode}
  </Text>
)

const ContentAnchor = (props: any) => (
  <CustomLink href={props.href as string}>
    <Text as="span" color="green.600">
      {props.children as React.ReactNode}
    </Text>
  </CustomLink>
)

const ContentImage = (props: any) => <Image src={props.src} alt={props.alt} />

const ContentCode = (props: any) => (
  <Code fontSize={{ base: 'xs', lg: 'sm' }} {...props} />
)

const ContentDiv = (props: any) => {
  if (props.className === 'remark-highlight') {
    return (
      <chakra.div fontSize={{ base: 'xs', lg: 'sm' }} paddingX="2" {...props} />
    )
  }
  return <chakra.div {...props} />
}

export const PostDetail = ({ post }: Props) => {
  const content = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSlug)
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        h1: ContentH1,
        h2: ContentH2,
        h3: ContentH3,
        h4: ContentH4,
        ul: ContentUl,
        ol: ContentOl,
        li: ContentLi,
        p: ContentParagraph,
        a: ContentAnchor,
        img: ContentImage,
        code: ContentCode,
        div: ContentDiv,
      },
    })
    .processSync(post.content)

  return (
    <Stack spacing={6}>
      <Heading>{post.title}</Heading>
      <Box>{content.result as React.ReactNode}</Box>
    </Stack>
  )
}
