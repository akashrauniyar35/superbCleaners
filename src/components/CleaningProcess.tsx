import { Box, Circle, Flex, Image, Square, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'

function CleaningProcess() {
    return (
        <>
            <Box backgroundColor={"#f5f5f5"} p={4} py={6} rounded='md' shadow="base" w={{ base: '98%', md: '80%', lg: '70%' }} marginX="auto" position={"relative"}>

                <Box mb={4}>
                    <Text fontFamily="Outfit" textAlign="left" mb={2} fontSize="18" fontWeight="bold" color={'gray.700'}>Our Working Process</Text>

                    <Flex flexDirection="row" position={"relative"}>

                        <Circle left="-8" top="13px" zIndex={2} position={"absolute"} bgGradient='linear(to-tr, red.300, #e5236c)' size='35px' color='white' borderWidth={4} borderColor="#fff">
                            <Text fontFamily="Outfit" color='#fff' fontSize='14' fontWeight='900'>1</Text>
                        </Circle>

                        <Square size='60px' rounded="md" bgGradient='linear(to-tr, red.300, #e5236c)' shadow="base">
                            <Image
                                alt=""
                                padding={4}
                                objectFit='cover'
                                src="/bookingOnlinePicture.png"
                            />
                        </Square>

                        <Flex flexDirection="column" ml={2} align="left" justify="center" mt={-1}>
                            <Text fontFamily="Outfit" textAlign="left" fontSize="16" fontWeight="600" color={'gray.700'}>Superb Working Process</Text>
                            <Text fontWeight="300" fontFamily="Outfit" fontSize="14" textAlign='left' width="70" color="gray.700">You can just call us for the quote or fill in the get quote form and we will get back to you with the Quote.</Text>
                        </Flex>
                    </Flex>
                </Box>


                <Box mb={4}>
                    <Flex flexDirection="row" position="relative" >

                        <Circle left="-8" top="13px" zIndex={2} position={"absolute"} bgGradient='linear(to-tr, red.300, #e5236c)' size='35px' color='white' borderWidth={4} borderColor="#fff">
                            <Text fontFamily="Outfit" color='#fff' fontSize='14' fontWeight='900'>2</Text>
                        </Circle>

                        <Square size='60px' rounded="md" bgGradient='linear(to-tr, red.300, #e5236c)' shadow="base">
                            <Image
                                alt=""
                                padding={4}
                                objectFit='cover'
                                src="/home.png"
                            />
                        </Square>
                        <Flex flexDirection="column" ml={2} align="left" justify="center" mt={-1}>
                            <Text fontFamily="Outfit" textAlign="left" fontSize="16" fontWeight="600" color={'gray.700'}>We Clean Your Property</Text>
                            <Text fontWeight="300" fontFamily="Outfit" fontSize="14" textAlign='left' width="70" color="gray.700">We provide best End of lease cleaning service in ydney. We will come on your prefered date and time and do what we do best.</Text>
                        </Flex>
                    </Flex>
                </Box>

                <Flex bgGradient='linear(to-t, red.300, #e5236c)' w={"2px"} position="absolute" h={{ base: '240px', sm: "150px", md: '150px', lg: '150px', }} left={0} zIndex={1} bottom={"70px"} mr={"40px"} />

                <Box mb={0}>
                    <Flex flexDirection="row" position={'relative'}>
                        <Circle left="-8" top="13px" zIndex={2} position={"absolute"} bgGradient='linear(to-tr, red.300, #e5236c)' size='35px' color='white' borderWidth={4} borderColor="#fff">
                            <Text fontFamily="Outfit" color='#fff' fontSize='14' fontWeight='900'>3</Text>
                        </Circle>

                        <Square size='60px' rounded="md" bgGradient='linear(to-tr, red.300, #e5236c)' shadow="base">
                            <Image
                                alt=""
                                padding={4}
                                objectFit='cover'
                                src="/notification.png"
                            />
                        </Square>

                        <Flex flexDirection="column" ml={2} align="left" justify="center" mt={-1}>
                            <Text fontFamily="Outfit" textAlign="left" fontSize="16" fontWeight="600" color={'gray.700'}>Notify & Close Job</Text>
                            <Text fontWeight="300" fontFamily="Outfit" fontSize="14" textAlign='left' width="70" color="gray.700">Once cleaning is complete on your property, we will do final checks and notify you and return property keys.</Text>
                        </Flex>
                    </Flex>
                </Box>


            </Box >



        </>
    )
}

export default CleaningProcess