import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../src/assets/Colors'
import DrawerButton from '../src/components/Drawer'
import InstantQuote from '../src/components/InstantQuoteButton'
import Logo from '../src/components/Logo'

const Blogs = () => {
    return (
        <>
            <Flex py={2} px={4} shadow="base" align="center" flexDirection="row" justify="space-between" >
                <DrawerButton />
                <Logo />
                <InstantQuote />
            </Flex>

            <Box px={4} pt={4} >
                <Text textAlign="left" fontSize="28" mb={4} fontWeight="bold" color={"gray.700"}>Our Blogs</Text>
                <Text fontSize="14" color="gray.700" fontWeight="light">Welcome to our Blogs. Get some expert advices and cleaning tips that might come handy while minor cleaning a home by yourself.</Text>
            </Box>

            <Box bg={Colors.grayBG}>
                <Box px={4} py={4}>
                    <Text textAlign="left" fontSize="20" mb={4} fontWeight="light" color={"gray.700"}>Cleaning Tips</Text>


                    {/* <Image
                        boxSize='60px'
                        objectFit='cover'
                        src={}
                        background={'#fff'}
                        padding='2'
                        rounded='lg'
                    /> */}

                </Box>
            </Box>

        </>
    )
}

export default Blogs