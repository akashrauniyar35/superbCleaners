import { Box, Flex, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'

function ChooseUS() {
    return (
        <>
            <Box backgroundColor={"#f5f5f5"} p={4} rounded='md' my={4} shadow="base" w={{ base: '98%', md: '80%', lg: '70%' }} marginX="auto">
                <Box backgroundColor={"#f5f5f5"}>
                    <Text textAlign="left" fontSize="16" fontWeight="bold" color="gray.700">Why choose Superb Cleaning?</Text>

                    <Flex align="center" marginTop={2} >
                        <Flex bgGradient='linear(to-t, red.300, #e5236c)' opacity={1} p={1} h={10} w={10} justify="center" rounded='full' shadow={'base'}>
                            <Flex bg='white' rounded='full' opacity={1} justify="center" align="center" width="8" height="8">
                                <Image
                                    // width="8" height="8"
                                    width="8" height="8"
                                    objectFit='cover'
                                    opacity={.6}
                                    rounded='full'
                                    p={1}
                                    shadow="base"
                                    src="/100Percent.png"
                                />
                            </Flex>
                        </Flex>


                        <Box w={{ lg: '40%', sm: '60%' }}>
                            <Text fontSize="16" textAlign='left' marginLeft={4} color="gray.700" fontWeight="bold" mb={1}>Satisfaction Guaranteed</Text>
                            <Text fontSize="14" textAlign='left' marginLeft={4} color="gray.700">Get a free estimate and book online in minutes, or give us a call to book your cleaning over the phone.</Text>
                        </Box>

                    </Flex>

                    <Flex align="center">

                        <Flex bgGradient='linear(to-t, red.300, #e5236c)' opacity={1} p={1} h={10} w={10} justify="center" rounded='full' shadow={'base'}>
                            <Flex bg='white' rounded='full' opacity={1} justify="center" align="center" width="8" height="8">
                                <Image
                                    // width="8" height="8"
                                    width="8" height="8"
                                    objectFit='cover'
                                    opacity={.6}
                                    rounded='full'
                                    p={1}
                                    shadow="base"
                                    src="/teams.png"
                                />
                            </Flex>
                        </Flex>

                        <Box marginTop={4} w={{ lg: '40%', sm: '60%' }}>
                            <Text fontSize="16" textAlign='left' marginLeft={4} color="gray.700" fontWeight="bold" mb={1}>Skilled & Trained Team</Text>

                            <Text fontSize="14" textAlign='left' marginLeft={4} color="gray.700">Our team are fully skilled on cleaning services, with high attention to details.</Text>
                        </Box>

                    </Flex>

                    <Flex align="center" marginTop={4}>

                        <Flex bgGradient='linear(to-t, red.300, #e5236c)' opacity={1} p={1} h={10} w={10} justify="center" rounded='full' shadow={'base'}>
                            <Flex bg='white' rounded='full' opacity={1} justify="center" align="center" width="8" height="8">
                                <Image
                                    // width="8" height="8"
                                    width="8" height="8"
                                    objectFit='cover'
                                    opacity={.6}
                                    rounded='full'
                                    p={1}
                                    shadow="base"
                                    src="/flexibleSchedule.png"
                                />
                            </Flex>
                        </Flex>


                        <Box marginTop={2} w={{ lg: '40%', sm: '60%' }}>
                            <Text fontSize="16" textAlign='left' marginLeft={4} color="gray.700" fontWeight="bold" mb={1}>Flexible Schedule</Text>

                            <Text fontSize="14" textAlign='left' marginLeft={4} color="gray.700">Our team are fully skilled on cleaning services, with high attention to details.</Text>
                        </Box>

                    </Flex>

                    <Flex align="center" marginTop={2}>


                        <Flex bgGradient='linear(to-t, red.300, #e5236c)' opacity={1} p={1} h={10} w={10} justify="center" rounded='full' shadow={'base'}>
                            <Flex bg='white' rounded='full' opacity={1} justify="center" align="center" width="8" height="8">
                                <Image
                                    // width="8" height="8"
                                    width="8" height="8"
                                    objectFit='cover'
                                    opacity={.6}
                                    rounded='full'
                                    p={1}
                                    shadow="base"
                                    src="/dollarHand.png"
                                />
                            </Flex>
                        </Flex>

                        <Box marginTop={2} w={{ lg: '40%', sm: '60%' }}>
                            <Text fontSize="16" textAlign='left' marginLeft={4} color="gray.700" fontWeight="bold" mb={1}>Flexible Schedule</Text>

                            <Text fontSize="14" textAlign='left' marginLeft={4} color="gray.700">Our team are fully skilled on cleaning services, with high attention to details.</Text>
                        </Box>

                    </Flex>


                </Box>
            </Box>
        </>
    )
}

export default ChooseUS