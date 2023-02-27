import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function Logo() {
    return (
        <>
            <Link href="./" >
                <Flex position={"relative"} justify="center" align="center" cursor="pointer" >
                    <Box position={"absolute"} mt={1}>
                        <Text lineHeight={.6} color="white" fontSize="16" fontWeight="bold" fontFamily="Outfit">Hassle Free</Text>
                        <Text color="white" fontSize="16" fontWeight="bold" fontFamily="Outfit">Cleaning</Text>
                    </Box>
                    < Image alt="" src='/logoBanner.png' cursor="pointer" h="90px" w="180px" />
                </Flex>
            </Link>
        </>
    )
}

export default Logo