import { Box, Flex, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'

function ChooseUS() {
    return (
        <>
            <Box backgroundColor={"#f5f5f5"} p={4} rounded='md' my={4} shadow="base">
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


                        <Box>
                            <Text fontSize="16" textAlign='left' width="80" marginLeft={4} color="gray.700" fontWeight="bold" mb={2}>Satisfaction Guaranteed</Text>

                            <Text fontSize="13" textAlign='left' width="80" marginLeft={4} color="gray.700">Get a free estimate and book online in minutes, or give us a call to book your cleaning over the phone.</Text>
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
                                    src="/teams.png"
                                />
                            </Flex>
                        </Flex>

                        <Box >
                            <Text fontSize="16" textAlign='left' width="80" marginLeft={4} color="gray.700" fontWeight="bold" mb={2}>Skilled & Trained Team</Text>

                            <Text fontSize="13" textAlign='left' width="80" marginLeft={4} color="gray.700">Our team are fully skilled on cleaning services, with high attention to details.</Text>
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


                        <Box >
                            <Text fontSize="16" textAlign='left' width="80" marginLeft={4} color="gray.700" fontWeight="bold" mb={2}>Flexible Schedule</Text>

                            <Text fontSize="13" textAlign='left' width="80" marginLeft={4} color="gray.700">Our team are fully skilled on cleaning services, with high attention to details.</Text>
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
                                    src="/dollarHand.png"
                                />
                            </Flex>
                        </Flex>

                        <Box >
                            <Text fontSize="16" textAlign='left' width="80" marginLeft={4} color="gray.700" fontWeight="bold" mb={2}>Flexible Schedule</Text>

                            <Text fontSize="13" textAlign='left' width="80" marginLeft={4} color="gray.700">Our team are fully skilled on cleaning services, with high attention to details.</Text>
                        </Box>

                    </Flex>


                </Box>
            </Box>
        </>
    )
}

export default ChooseUS