import { Box, Divider, Flex, Image, Skeleton, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoMdCall } from 'react-icons/io'
import Colors from '../src/assets/Colors'
import CallUs from '../src/components/CallUs'
import Drawer from '../src/components/Drawer'
import HeaderDivider from '../src/components/HeaderDivider'
import Heading from '../src/components/Heading'
import InstantQuote from '../src/components/InstantQuote'
import Logo from '../src/components/Logo'
import AddOns from '../src/components/quoteComponents  /AddOns'
import ContactDetails from '../src/components/quoteComponents  /ContactDetails'
import PropertyTypes from '../src/components/quoteComponents  /PropertyTypes'
import QuoteHeader from '../src/components/quoteComponents  /QuoteHeader'

function instantQuote() {
    const [loaded, setLoaded] = useState(false)
    return (
        <>
            <Flex p={4} shadow='base' align="center" flexDirection="row" justify="space-between" >
                <Logo />
                <Flex align="center">
                    <Image
                        boxSize='45px'
                        objectFit='cover'
                        src={'/phone.png'}
                        background={'transparent'}
                        padding='2'
                    />
                    <Text fontSize={16} color="gray.700">0415701000</Text>

                </Flex>
            </Flex>

            <Box px={4}>
                <Stack spacing={8}>
                    <Box>
                        <QuoteHeader />
                    </Box>


                    <Box>
                        <PropertyTypes />
                    </Box>


                    <Box>
                        <AddOns />
                    </Box>
                    <Box>
                        <ContactDetails />
                    </Box>

                    <Box>
                        <Skeleton isLoaded={loaded}>

                            <Flex align="center" bg={Colors.mattBlue} justify='center' rounded='md' mb={4}>
                                <Text fontSize="20" my={2} fontWeight="bold" color={'#fff'}>Submit</Text>
                            </Flex>
                        </Skeleton>
                    </Box>

                </Stack>


            </Box>

        </>
    )
}

export default instantQuote