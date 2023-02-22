import { Box, Flex, Image, List, ListIcon, ListItem, OrderedList, Stack, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import ChooseUS from './ChooseUS';
import CleaningProcess from './CleaningProcess';
import FooterAccordians from './FooterAccordians';
import ImageSlider from './ImageSlider';
import Reviews from './Reviews';
import Suburbs from './Suburbs';



function Banner() {
    return (
        <>

            <Box fontFamily="Outfit" px={4} pb={4} position="relative">
                <Box w={{ base: '100%', sm: '100%', md: '80%', lg: '70%' }} alignSelf="center" mt={-8} marginX="auto">
                    <Text
                        bgGradient='linear(to-l, #e5236c,#FF0080,#7928CA)'
                        bgClip='text'
                        fontWeight='extrabold'
                        textAlign="left" fontSize="28" lineHeight={1} fontFamily="Outfit">Cleaning beyond your expectations
                    </Text>
                </Box>

                <Box alignSelf="center" pt={4} position="relative" marginX="auto" w={{ base: '100%', sm: '100%', md: '80%', lg: '70%' }}>
                    <Text fontFamily="Outfit" textAlign="left" fontSize="14" color="gray.700">Welcome to Superb Cleaning, your go-to cleaning service for all your cleaning needs. We offer a range of cleaning services, including residential, move-in and move-out cleaning and more. Our team uses eco-friendly and non-toxic cleaning products, and we strive to maintain a clean and safe environment for you, your family, and your pets. At Superb Cleaning, we guarantee a spotless and sparkling clean every time. Contact us today to schedule your cleaning service and let us handle the rest!</Text>
                </Box>



                <Flex align={"center"} alignSelf="center" mb={6} mt={8} justify="space-around" w={{ base: '100%', sm: '80%', md: '50%', lg: '50%' }} marginX="auto">

                    <Flex w="110px" justify={'center'} py="2" flex="row" align={"center"} bgGradient='linear(to-tr, red.300, #e5236c)' rounded="full">
                        <Image
                            alt=""
                            alignSelf="center"
                            w="15px"
                            objectFit='cover'
                            src="/star.png"
                        />
                        <Text fontSize="14px" color="#fff" ml="2" letterSpacing={"1px"}>4.9/5</Text>
                    </Flex>
                    <Flex w="110px" justify={'center'} py="2" flex="row" align={"center"} bgGradient='linear(to-tr, red.300, #e5236c)' rounded="full">
                        <Image
                            alt=""
                            alignSelf="center"
                            w="18px"
                            objectFit='cover'
                            src="/quality.png"
                        />
                        <Text fontSize="14px" color="#fff" ml="2" letterSpacing={"1px"}>Reliable</Text>
                    </Flex>
                    <Flex w="110px" justify={'center'} py="2" flex="row" align={"center"} bgGradient='linear(to-tr, red.300, #e5236c)' rounded="full">
                        <Image
                            alt=""
                            alignSelf="center"
                            w="18px"
                            objectFit='cover'
                            src="/trust.png"
                        />
                        <Text fontSize="14px" color="#fff" ml="2" letterSpacing={"1px"}>Trusted</Text>
                    </Flex>
                </Flex>

                <Box position="relative" w={{ base: '98%', md: '80%', lg: '70%' }} marginX="auto">
                    <Box position="relative">
                        <Flex position="relative">

                            <Image
                                alt=""
                                position={"relative"}
                                objectFit='cover'
                                src="/professionalbg.png"
                                zIndex="3"
                                ml={{ base: -20 }}
                                mt={"-5"}
                            />

                            {/* left={{ base: '40%', sm: '60%', lg: '60%' }} */}
                            < Box position="absolute" right={{ base: 0, sm: 0, md: 0, lg: '20%' }} zIndex="3" top={'10'} >
                                <Flex opacity=".95" bgGradient='linear(to-tr, red.300, #e5236c)'
                                    borderRightRadius={{ md: 'full', base: 'none', sm: 'full', lg: ' full' }} borderLeftRadius={{ base: "full", sm: 'full', lg: ' full' }} align="center" h={{ base: '200px', sm: '300px', lg: '300px' }} w={{ base: '230px', sm: '300px', lg: '300px' }} shadow="base" justify={"center"} pl={{ base: 8 }}>
                                    <UnorderedList lineHeight={1} fontSize={14} color='white'>
                                        <ListItem><Text fontFamily="Outfit" mb={2} fontWeight="bold" color="white">Best in Sydney, NSW</Text></ListItem>
                                        <ListItem><Text fontFamily="Outfit" mb={2} fontWeight="bold" color="white">Get a quote in less than a minute</Text></ListItem>
                                        <ListItem><Text fontFamily="Outfit" mb={2} fontWeight="bold" color="white">Satisfaction guranteed</Text></ListItem>
                                        <ListItem><Text fontFamily="Outfit" fontWeight="bold" color="white">Resonable Pricings</Text></ListItem>
                                    </UnorderedList>
                                </Flex>
                            </Box>

                        </Flex>
                    </Box>

                    <Flex bg="#f5f5f5" shadow="base" rounded="md" px={4} >
                        <Box marginTop={8} pb={4}>
                            <Text fontFamily="Outfit" textAlign="left" fontSize="18" fontWeight="600" color="gray.700">Modern cleaning for modern lives</Text>

                            <Flex align="center" justify="space-between" marginTop={2}>
                                <Text fontWeight={"300"} fontFamily="Outfit" fontSize="14" textAlign='left' color="gray.700">We have the technology to keep things efficient and the people to keep things personalized.</Text>
                            </Flex>


                        </Box>
                    </Flex>


                    <Box px={4} my={8} rounded="md" py={4} bg="#f5f5f5" shadow="base">

                        <Box>
                            <Text fontFamily="Outfit" textAlign="left" fontSize="18" fontWeight="600" color="gray.700">Instant online booking</Text>
                            <Flex align="center" marginTop={2}>
                                <Flex rounded="full" align="center"
                                    justify="center" bgGradient='linear(to-t, red.300, #e5236c)' shadow="base">
                                    <Image
                                        alt=""
                                        opacity={.7}
                                        alignSelf="center"
                                        w="70px"
                                        objectFit='cover'
                                        p={3}
                                        src="/bookNow.png"
                                    /></Flex>
                                <Text fontWeight={"300"} fontFamily="Outfit" fontSize="14" textAlign='left' width="80" marginLeft={2} color="gray.700">Get a free estimate and book online in minutes, or give us a call to book your cleaning over the phone.</Text>
                            </Flex>
                        </Box>



                        <Box marginTop={4}>
                            <Text fontFamily="Outfit" textAlign="left" fontSize="18" fontWeight="600" color="gray.700">Adjustable scheduling</Text>
                            <Flex align="center" marginTop={2}>
                                <Flex rounded="full" align="center"
                                    justify="center" bgGradient='linear(to-t, red.300, #e5236c)' shadow="base">
                                    <Image
                                        alt=""
                                        opacity={.7}
                                        alignSelf="center"
                                        w="70px"
                                        objectFit='cover'
                                        p={3.5}
                                        src="/calendar.png"

                                    />
                                </Flex>
                                <Text fontWeight={"300"} fontFamily="Outfit" fontSize="14" textAlign='left' width="80" marginLeft={2} color="gray.700">Get a free estimate and book online in minutes, or give us a call to book your cleaning over the phone.</Text>
                            </Flex>
                        </Box>

                        <Box marginTop={4}>
                            <Text fontFamily="Outfit" textAlign="left" fontSize="18" fontWeight="600" color="gray.700">Trusted professionals</Text>
                            <Flex align="center" marginTop={2}>
                                <Flex rounded="full" align="center"
                                    justify="center" bgGradient='linear(to-t, red.300, #e5236c)' shadow="base">
                                    <Image
                                        alt=""
                                        opacity={.7}
                                        alignSelf="center"
                                        w="70px"
                                        objectFit='cover'
                                        p={3}
                                        src="/professional.png"
                                    /></Flex>
                                <Text fontWeight={"300"} fontFamily="Outfit" fontSize="14" textAlign='left' width="80" marginLeft={2} color="gray.700">Fully insured and carefully vetted cleaning technicians will make sure to complete the service as per your requirements.</Text>
                            </Flex>
                        </Box>


                    </Box>


                </Box>

                <Box my={8}>
                    <CleaningProcess />
                </Box>

                <Box my={8}>
                    <ChooseUS />
                </Box>

                <Box my={8}>
                    <Suburbs />
                </Box>
                <Box my={8}>
                    <Reviews />
                </Box>

                <Box my={8}>
                    <ImageSlider />
                </Box>

                <Box my={8}>
                    <FooterAccordians />
                </Box>



            </Box >



        </>
    )
}

export default Banner