import { Flex, Text, Button } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'
import Link from 'next/link'

function InstantQuoteButton() {
    return (
        <Link href="/instantQuote">
            <Flex shadow='base' _hover={{ bgGradient: 'linear(to-tl, red.300, #e5236c)' }} bgGradient='linear(to-tr, red.300, #e5236c)'
                padding={1.5} rounded={4} boxShadow="md" paddingX={4} cursor="pointer" >
                <Text fontFamily={"Outfit"} fontSize={14} fontWeight="bold" color="white">Get a quote</Text>
            </Flex >
        </Link>
    )
}

export default InstantQuoteButton