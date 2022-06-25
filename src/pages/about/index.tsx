import Layout from '@/components/Layout'
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import PostType from 'types/post'

type Props = {
  allPosts: PostType[]
}

const Index = ({}: Props) => (
  <Layout hasAboutMe={false}>
    <Stack spacing={8}>
      <HStack spacing={4}>
        <Stack spacing={1}>
          <Heading>Sushin-ya 🍣 🐈</Heading>
          <Text>I work as a front-end engineer in Tokyo</Text>
        </Stack>
        <Box width={20}>
          <Image
            boxSize={20}
            rounded={100}
            objectFit={'cover'}
            src={'/assets/avatar.jpg'}
            alt="Sushin-ya"
          />
        </Box>
      </HStack>
      <Grid
        templateAreas={`"a b"
       "a b"
       "a b"`}
        gridTemplateColumns={'auto 1fr'}
        columnGap={2}
        rowGap={0}
      >
        <GridItem w="100%">1994</GridItem>
        <GridItem>Born in Fukuoka, raised in Tokyo. 🍼</GridItem>
        <GridItem w="100%">2018</GridItem>
        <GridItem>Graduated from Waseda University. 👨‍🎓</GridItem>
        <GridItem w="100%">2020</GridItem>
        <GridItem>Quit a well-known Sler and become a NEET. 😄</GridItem>
        <GridItem w="100%">2021</GridItem>
        <GridItem>Career changed to front-end engineer. 😎</GridItem>
        <GridItem w="100%">Now</GridItem>
        <GridItem>Happy. 😙</GridItem>
      </Grid>
      <Stack>
        <Text>I ♥</Text>
        <Text>
          Art, Music, Literature, Philosophy, Anime, Manga, Sake&amp;Sakana and
          Furo&amp;Sauna
        </Text>
        <Text>
          Henry Charles Bukowski, Kurt Vonnegut, John Winslow Irving, Martin
          Charles Scorsese, Paul Thomas Anderson, Kyoko Okazaki, Akira Toriyama,
          Osamu Tezuka, Emil Mihai Cioran, Arthur Schopenhauer, and more...
        </Text>
      </Stack>
      <Text>Thanks for reading!!! 👋</Text>
    </Stack>
  </Layout>
)

export default Index

export const getStaticProps = async () => {
  return {
    props: {},
  }
}
