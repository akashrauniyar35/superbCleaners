import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'

function CleaningProcess() {
    return (
        <>
            <Box backgroundColor={"#f5f5f5"} rounded="md" p={4} position='relative' shadow="base" w={{ base: '98%', md: '80%', lg: '70%' }} marginX="auto">
                <Box mb={4}>
                    <Text textAlign="left" mb={2} fontSize="18" fontWeight="bold" color={'gray.700'}>Our Working Process</Text>

                    <Flex flexDirection="row" align="flex-start" justify="center">
                        <Image
                            marginTop={2}
                            opacity={.5}
                            width="20" height="20"
                            objectFit='cover'
                            bgGradient='linear(to-tr, red.300, #e5236c)'
                            shadow='md'
                            rounded="md"
                            src="/bookingOnlinePicture.png"
                        />
                        <Flex flexDirection="column" ml={2} align="left" justify="center" mt={2}>
                            <Text textAlign="left" fontSize="16" fontWeight="bold" color={'gray.700'}>WeDo Working Process</Text>
                            <Text fontSize="14" textAlign='left' width="70" color="gray.700">You can just call us for the quote or fill in the get quote form and we will get back to you with the Quote.</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Box mb={2}>

                    <Flex flexDirection="row" align="flex-start" justify="center">

                        <Image
                            marginTop={2}
                            width="20" height="20"
                            objectFit='cover'
                            opacity={.5}
                            shadow='md'
                            bgGradient='linear(to-tr, red.300, #e5236c)'
                            rounded="md"
                            src="/teamWorking.png"
                        />

                        <Flex flexDirection="column" ml={2} align="left" justify="center" mt={2}>
                            <Text textAlign="left" fontSize="16" fontWeight="bold" color={'gray.700'}>We Clean Your Property</Text>
                            <Text fontSize="14" textAlign='left' width="70" color="gray.700">We provide best End of lease cleaning service in sydney. We will come on your prefered date and time and do what we do best.</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Box mb={0}>
                    <Flex flexDirection="row" align="flex-start" justify="center">
                        <Image
                            marginTop={2}
                            width="20" height="20"
                            objectFit='cover'
                            shadow='md'
                            opacity={.5}
                            bgGradient='linear(to-tr, red.300, #e5236c)'
                            rounded="md"
                            src="/keys.png"
                        />
                        <Flex flexDirection="column" ml={2} align="left" justify="center" mt={2}>
                            <Text textAlign="left" fontSize="16" fontWeight="bold" color={'gray.700'}>Notify & Close Job</Text>
                            <Text fontSize="14" textAlign='left' width="70" color="gray.700">Once cleaning is complete on your property, we will do final checks and notify you and return property keys.</Text>
                        </Flex>
                    </Flex>
                </Box>


                <Box position="absolute" top='20' zIndex="2" left={4}>
                    <Flex shadow="base" align="center" position="relative" justify="center" bgGradient='linear(to-tr, red.300, #e5236c)' rounded="full" ml={-8} borderWidth={4} borderColor="#fff" mb={'90px'} w={'40px'} h="40px" zIndex={4} >
                        <Text color='#fff' fontSize='14' fontWeight='bold'>1</Text>
                    </Flex>
                    <Flex shadow="base" align="center" position="relative" justify="center" bgGradient='linear(to-tr, red.300, #e5236c)' rounded="full" ml={-8} borderWidth={4} borderColor="#fff" mb={'90px'} w={'40px'} h="40px">
                        <Text color='#fff' fontSize='14' fontWeight='bold' alignSelf="center" >2</Text>
                    </Flex>
                    <Flex shadow="base" align="center" position="relative" justify="center" bgGradient='linear(to-tr, red.300, #e5236c)' rounded="full" ml={-8} borderWidth={4} borderColor="#fff" w={'40px'} h="40px">
                        <Text color='#fff' fontSize='14' fontWeight='bold' alignSelf="center">3</Text>
                    </Flex>
                    <Flex bgGradient='linear(to-t, red.300, #e5236c)' w={.2} position="absolute" h={'280'} top={5} left={-3} zIndex={-2} />
                </Box>

            </Box >



        </>
    )
}

export default CleaningProcess