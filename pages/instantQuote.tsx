import { Box, Button, Divider, Flex, Image, Skeleton, Spinner, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import Colors from '../src/assets/Colors'

import Logo from '../src/components/Logo'
import AddOns from '../src/components/quoteComponents  /AddOns'
import ContactDetails from '../src/components/quoteComponents  /ContactDetails'
import PropertyTypes from '../src/components/quoteComponents  /PropertyTypes'
import QuoteHeader from '../src/components/quoteComponents  /QuoteHeader'

const InstantQuotePage = () => {
    const [loaded, setLoaded] = useState(true);
    const [sending, setSending] = useState(false);

    const toast = useToast()
    function onSubmit() {
        setSending(true)
        setTimeout(() => setSending(false), 3000)

    }

    return (
        <>
            <Flex px={4} py={2} shadow='base' zIndex={4} align="center" flexDirection="row" bg='white' justify="space-between" top={0} position="sticky" mb={2}>
                <Logo />
                <Flex shadow="base" align="center" p={.5} rounded="full" bgGradient='linear(to-tr, white, green.600)' >
                    <Image
                        boxSize='45px'
                        objectFit='cover'
                        cursor='pointer'
                        src={'/phone.png'}
                        background={'transparent'}
                        p={1}
                    />
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

                    {/* <Box>
                        <Skeleton isLoaded={loaded}>

                            <Flex onClick={() => onSubmit()} cursor='pointer' h={"10"} shadow="base" align="center" bgGradient='linear(to-tr, red.300, #e5236c)' justify='center' rounded='md' mb={4}>
                                {sending ? <Spinner color={'#fff'} size='md' /> :
                                    <Text fontSize="20" fontWeight="bold" color={'#fff'}>Submit</Text>
                                }
                            </Flex>
                        </Skeleton>
                    </Box> */}




                    <Button
                        onClick={() =>
                            toast({
                                position: 'top',
                                render: () => (
                                    <Box p={3} w={'100%'} bgGradient='linear(to-tr, red.300, #e5236c)' color="white">
                                        Hello World

                                    </Box>
                                ),
                            })
                        }
                    >
                        Show Toast
                    </Button>

                </Stack>


            </Box >

        </>
    )
}

export default InstantQuotePage