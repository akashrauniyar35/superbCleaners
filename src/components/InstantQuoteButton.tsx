import { Flex, Text, Button } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'
import Link from 'next/link'

function InstantQuoteButton() {
    return (

        <Link href="/instantQuote">

            <Flex _hover={{ opacity: '.8' }} background={Colors.colorOneBlue} padding={1.5} rounded={4} boxShadow="md" paddingX={4} cursor="pointer" >
                <Text fontSize={12} fontWeight="bold" color="white">Instant Quote</Text>
            </Flex >
        </Link>

    )
}

export default InstantQuoteButton