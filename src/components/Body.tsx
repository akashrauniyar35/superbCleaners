import { Box, Flex, Image, List, ListIcon, ListItem, OrderedList, Stack, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { MdCheckCircle, MdSettings } from 'react-icons/md';
import Colors from '../assets/Colors';

import CallUs from './CallUs';
import ChooseUS from './ChooseUS';
import CleaningProcess from './CleaningProcess';
import FooterAccordians from './FooterAccordians';
import ImageSlider from './ImageSlider';
import Reviews from './Reviews';
import Suburbs from './Suburbs';



function Banner() {
    return (
        <>

            <Box px={4} pb={4} position="relative">
                <Box width="90" alignSelf="center" mt={-8}>
                    <Text
                        bgGradient='linear(to-l, #e5236c,#FF0080,#7928CA)'
                        bgClip='text'
                        fontWeight='extrabold'
                        textAlign="left" fontSize="28" lineHeight={1}>Cleaning services for all your needs
                    </Text>
                </Box>

                <Box width="90" alignSelf="center" pt={4}>
                    <Text textAlign="left" fontSize="13">The no-stress way to book the cleaning service you need in minutes. Eliminates back and forth emails. Book straight into our team`s schedule even on SUNDAY! </Text>
                </Box>

                <Box position="relative">
                    <Image
                        width="500" height="500"
                        objectFit='cover'
                        src="/bannerPicture.png"
                    />
                    <Flex bg="#f5f5f5" shadow="base" marginTop={-20} rounded="md" px={4}>
                        <Box marginTop={8} pb={4}>
                            <Text textAlign="left" fontSize="18  " fontWeight="bold" color="gray.700">Modern cleaning for modern lives</Text>

                            <Flex align="center" justify="space-between" marginTop={2}>
                                <Text fontSize="13" textAlign='left' color="gray.700">We have the technology to keep things efficient and the people to keep things personalized.</Text>
                            </Flex>


                        </Box>
                    </Flex>


                    <Box px={4} my={4} rounded="md" py={4} bg="#f5f5f5" shadow="base">

                        <Box>
                            <Text textAlign="left" fontSize="18" fontWeight="bold" color="gray.700">Instant online booking</Text>
                            <Flex align="center" justify="space-between" marginTop={2}>
                                <Flex rounded="full" align="center"
                                    justify="center" bgGradient='linear(to-t, red.300, #e5236c)' boxSize="50px" height="48px" shadow="base">
                                    <Image
                                        alignSelf="center"
                                        width="35px" height="35px"
                                        objectFit='cover'
                                        p={.5}
                                        opacity={.6}
                                        src="/bookNow.png"
                                    /></Flex>
                                <Text fontSize="13" textAlign='left' width="80" marginLeft={6} color="gray.700">Get a free estimate and book online in minutes, or give us a call to book your cleaning over the phone.</Text>
                            </Flex>
                        </Box>



                        <Box marginTop={4}>
                            <Text textAlign="left" fontSize="18" fontWeight="bold" color="gray.700">Adjustable scheduling</Text>
                            <Flex align="center" justify="space-between" marginTop={2}>
                                <Flex rounded="full" align="center"
                                    justify="center" bgGradient='linear(to-t, red.300, #e5236c)' boxSize="50px" height="48px" shadow="base">
                                    <Image
                                        alignSelf="center"
                                        width="35px" height="35px"
                                        objectFit='cover'
                                        p={.5}
                                        opacity={.6}
                                        src="/calendar.png"

                                    />
                                </Flex>
                                <Text fontSize="13" textAlign='left' width="80" marginLeft={6} color="gray.700">Get a free estimate and book online in minutes, or give us a call to book your cleaning over the phone.</Text>
                            </Flex>
                        </Box>

                        <Box marginTop={4}>
                            <Text textAlign="left" fontSize="18" fontWeight="bold" color="gray.700">Trusted professionals</Text>
                            <Flex align="center" justify="space-between" marginTop={2}>
                                <Flex rounded="full" align="center"
                                    justify="center" bgGradient='linear(to-t, red.300, #e5236c)' boxSize="50px" height="48px" shadow="base">
                                    <Image
                                        opacity={.6}
                                        alignSelf="center"
                                        width="35px" height="35px"
                                        objectFit='cover'
                                        p={.5}
                                        ml={1}
                                        src="/professional.png"
                                    /></Flex>
                                <Text fontSize="13" textAlign='left' width="80" marginLeft={6} color="gray.700">Fully insured and carefully vetted cleaning technicians will make sure to complete the service as per your requirements.</Text>
                            </Flex>
                        </Box>

                    </Box>

                    <Box width="50%" position='absolute' top={10} right={0}>
                        <Flex bgGradient='linear(to-tr, red.300, #e5236c)'
                            rounded='full' align="center" h="200px" w="200px" shadow="base">
                            <UnorderedList fontSize={13} ml={7} color='white'>
                                <ListItem><Text fontSize="13" color="white">Best in Sydney, NSW</Text></ListItem>
                                <ListItem><Text fontSize="13" color="white">Get a Quote in less than 2 minutes</Text></ListItem>
                                <ListItem><Text fontSize="13" color="white">Satisfaction guranteed</Text></ListItem>
                                <ListItem><Text fontSize="13" color="white">Resonable Pricings</Text></ListItem>
                            </UnorderedList>
                        </Flex>
                    </Box>
                </Box>

                <Box>
                    <CleaningProcess />
                </Box>

                <Box >
                    <ChooseUS />
                </Box>

                <Box>
                    <Suburbs />
                </Box>
                <Box >
                    <Reviews />
                </Box>

                <Box >
                    <ImageSlider />
                </Box>


                <Box>
                    <FooterAccordians />
                </Box>



            </Box>



        </>
    )
}

export default Banner