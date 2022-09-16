import { Box, Flex, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'

function ChooseUS() {
    return (
        <>
            <Box backgroundColor={Colors.mattBlue} p={4} rounded='md' mt={4}>
                <Box>
                    <Text textAlign="left" fontSize="20" fontWeight="bold" color="#fff">Why Cloose WeDo Cleaning Service?</Text>

                    <Flex align="center" marginTop={2}>

                        <Image
                            width="10" height="10"
                            objectFit='cover'
                            background={'#fff'}
                            rounded='full'
                            p={1}
                            src="/100Percent.png"
                        />

                        <Box >
                            <Text fontSize="18" textAlign='left' width="80" marginLeft={4} color="#fff" fontWeight="bold" mb={2}>Satisfaction Guaranteed</Text>

                            <Text fontSize="14" textAlign='left' width="80" marginLeft={4} color="#fff">Get a free estimate and book online in minutes, or give us a call to book your cleaning over the phone.</Text>
                        </Box>

                    </Flex>
                    <Flex align="center" marginTop={4}>

                        <Image
                            width="10" height="10"
                            background={'#fff'}
                            p={1}
                            rounded='full'
                            objectFit='cover'


                            src="/teams.png"
                        />

                        <Box >
                            <Text fontSize="18" textAlign='left' width="80" marginLeft={4} color="#fff" fontWeight="bold" mb={2}>Skilled & Trained Team</Text>

                            <Text fontSize="14" textAlign='left' width="80" marginLeft={4} color="#fff">Our team are fully skilled on cleaning services, with high attention to details.</Text>
                        </Box>

                    </Flex>

                    <Flex align="center" marginTop={4}>

                        <Image
                            width="10" height="10"
                            objectFit='cover'
                            rounded='full'
                            background={'#fff'}
                            p={1}
                            src="/flexibleSchedule.png"
                        />

                        <Box >
                            <Text fontSize="18" textAlign='left' width="80" marginLeft={4} color="#fff" fontWeight="bold" mb={2}>Flexible Schedule</Text>

                            <Text fontSize="14" textAlign='left' width="80" marginLeft={4} color="#fff">Our team are fully skilled on cleaning services, with high attention to details.</Text>
                        </Box>

                    </Flex>

                    <Flex align="center" marginTop={4}>

                        <Image
                            width="10" height="10"
                            objectFit='cover'
                            background={'#fff'}
                            rounded='full'
                            p={1}
                            src="/dollarHand.png"
                        />

                        <Box >
                            <Text fontSize="18" textAlign='left' width="80" marginLeft={4} color="#fff" fontWeight="bold" mb={2}>Flexible Schedule</Text>

                            <Text fontSize="14" textAlign='left' width="80" marginLeft={4} color="#fff">Our team are fully skilled on cleaning services, with high attention to details.</Text>
                        </Box>

                    </Flex>


                </Box>
            </Box>
        </>
    )
}

export default ChooseUS