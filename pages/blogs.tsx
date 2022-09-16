import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import DrawerButton from '../src/components/Drawer'
import InstantQuote from '../src/components/InstantQuote'
import Logo from '../src/components/Logo'

function blogs() {
    return (
        <>
            <Flex py={2} px={4} shadow="base" align="center" flexDirection="row" justify="space-between" >
                <DrawerButton />
                <Logo />
                <InstantQuote />
                {/* <Flex align="center">
                    <Image
                        boxSize="14"
                        objectFit="cover"
                        src={"/phone.png"}
                        background={"transparent"}
                        padding="2"
                    />
                </Flex> */}
            </Flex>

            <Box px={4} pt={4}>
                <Text textAlign="left" fontSize="28" mb={4} fontWeight="bold" color={"gray.700"}>Our Blogs</Text>
                <Text fontSize="14" color="gray.700" fontWeight="light">Welcome to our Blogs. Get some expert advices and cleaning tips that might come handy while minor cleaning a home by yourself.</Text>
            </Box>
        </>
    )
}

export default blogs