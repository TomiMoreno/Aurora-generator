import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react'
import { Aurora } from '../components/Aurora'
import { CSSProperties } from 'react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aurora generator</title>
        <meta name="description" content="An aurora generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aurora />
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 16 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Create your own <br />
            <Text
              as={'span'}
              color={'green.400'}
              background={
                'linear-gradient(86deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);'
              }
              backgroundClip={'text'}
              style={
                {
                  '-webkit-text-fill-color': 'transparent',
                } as CSSProperties & { '-webkit-text-fill-color': string }
              }
            >
              Aurora
            </Text>{' '}
            background
          </Heading>
        </Stack>
      </Container>
    </>
  )
}

export default Home
