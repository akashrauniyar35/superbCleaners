import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderButtons from '../src/components/HeaderButtons'
import Body from '../src/components/Body'
import Footer from '../src/components/Footer'
import CallUs from '../src/components/CallUs'
import { Flex } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Superb Cleaning Sydney</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href='/logo.png' /> */}
      </Head>
      <Flex margin="auto" flexDirection="column" bg='white' w={{ base: '100%', md: '100%', lg: '100%' }}>
        <HeaderButtons />
        <CallUs />
        <Body />
        <Footer />
      </Flex>
    </>
  )
}

export default Home
