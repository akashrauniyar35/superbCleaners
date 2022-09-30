import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Colors from '../src/assets/Colors'
import DrawerButton from '../src/components/Drawer'
import Footer from '../src/components/Footer'
import Logo from '../src/components/Logo'

const ContactUs = () => {
    const [selectedService, setSeletedService] = useState("");
    const [notes, setNotes] = useState("");

    const services = [
        {
            id: '00',
            title: 'End of Lease Cleaning'
        },
        {
            id: '01',
            title: 'General Cleaning'
        },
    ]

    const onClickHandle = (service: string) => {
        setSeletedService(service)

    }

    return (
        <>
            <Flex py={2} px={4} shadow="base" align="center" flexDirection="row" justify="space-between" >
                <DrawerButton />
                <Logo />
                <Flex align="center">
                    <Image
                        boxSize="14"
                        objectFit="cover"
                        src={"/phone.png"}
                        background={"transparent"}
                        padding="2"
                    />
                </Flex>
            </Flex>

            <Box px={4} pt={4} w={{ base: '100%', sm: '100%', md: '80%', lg: '70%' }} marginX="auto">

                <Box alignSelf="center" mb={4} >
                    <Text
                        bgGradient='linear(to-l, #e5236c,#FF0080,#7928CA)'
                        bgClip='text'
                        fontWeight='extrabold'
                        textAlign="left" fontSize="28" lineHeight={1}>Contact Us
                    </Text>
                </Box>

                <Text fontSize="14" color="gray.700" fontWeight="light">If you want to request a service, discuss an existing appointment, learn more about our franchise opportunities, collaborate with us on an exiting project or drop us a line about your service experience, use the form below and we&apos;ll get in touch shortly! </Text>
            </Box>

            <Box px={4} w={{ base: '100%', sm: '100%', md: '80%', lg: '70%' }} marginX="auto" my={4} mt={20}>
                <Flex flexDirection="column" bg='gray.300' px={4} rounded={'md'} py={4} shadow="base">
                    <Input my={2} size='lg' rounded='md'
                        px={2}
                        fontSize='13'
                        shadow='inner'
                        variant='unstyled' placeholder='Full name' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} bg='#fff' _placeholder={{ color: 'gray.700', fontSize: '13' }} py={1.5} />
                    <Input my={2} size='lg' rounded='md'
                        px={2}
                        fontSize='13'
                        shadow='inner'
                        variant='unstyled' placeholder='Email' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} bg='#fff' _placeholder={{ color: 'gray.700', fontSize: '13' }} py={1.5} />
                    <Input my={2} size='lg' rounded='md'
                        px={2}
                        fontSize='13'
                        shadow='inner'
                        variant='unstyled' placeholder='Contact no.' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} bg='#fff' _placeholder={{ color: 'gray.700', fontSize: '13' }} py={1.5} />
                    <Flex align="center" justify="space-between">
                        <Input my={2} size='lg' rounded='md'
                            px={2} w="60%"
                            fontSize='13'
                            shadow='inner'
                            variant='unstyled' placeholder='Suburb' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} bg='#fff' _placeholder={{ color: 'gray.700', fontSize: '13' }} py={1.5} />
                        <Input my={2} size='lg' rounded='md'
                            px={2} w="30%"
                            fontSize='13'
                            shadow='inner'
                            variant='unstyled' placeholder='Post code' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} bg='#fff' _placeholder={{ color: 'gray.700', fontSize: '13' }} py={1.5} />
                    </Flex>


                    <Box my={2}>
                        <Accordion allowToggle={true} bg='#fff' rounded='md' borderWidth={0} shadow='inner' borderColor="transparent" >
                            <AccordionItem borderWidth={0} >
                                <AccordionButton py='1.5'>
                                    <Box flex='1'>
                                        <Text ml='-2' textAlign="left" fontSize="13" color={selectedService ? "gray.700" : "#8C929B"}>{selectedService ? selectedService : "Select a service"}</Text>
                                    </Box>
                                    <AccordionIcon color='#8C929B' mr='-2' />
                                </AccordionButton>

                                {services.map((item) => {
                                    return (
                                        <AccordionPanel key={item.id} cursor='pointer' _hover={{ backgroundColor: 'gray.700' }} py='0' mb='2' onClick={() => onClickHandle(item.title)}>
                                            <Text textAlign="left" fontSize="13" fontWeight="medium" color={"#8C929B"} _hover={{ color: 'gray.100' }} py='1' >{item.title}</Text>
                                        </AccordionPanel>
                                    )
                                })}
                            </AccordionItem>
                        </Accordion>
                    </Box>


                    <Box >
                        <Input mt={2} size='lg' shadow='inner'
                            onChange={(e) => setNotes(e.target.value)}
                            px={2}
                            fontSize='13'
                            variant='unstyled' rounded='md' bg='#fff' placeholder='Any additional notes?' color={Colors.mattBlue} borderWidth={0} textColor={"gray.700"} _placeholder={{ color: 'gray.700', fontSize: '13' }} py={1.5} />

                        {/* <Box shadow='inner' bg='#fff' borderColor='transparent' rounded='md' mt='-4' >
                            <Text pl={2} textAlign="left" fontSize="14" fontWeight="medium" color={"gray.700"} pt='4' pb={notes === "" ? '0' : '2'} >{notes}</Text>
                        </Box> */}
                    </Box>

                </Flex>

            </Box >

            <Box px='4' py={4} w={{ base: '100%', sm: '100%', md: '80%', lg: '70%' }} marginX="auto">
                <Flex py="1" rounded='md' align='center' justify='center' bg={'blue.700'}>
                    <Text textAlign="left" fontSize="18" fontWeight="bold" color={"gray.100"}>Submit</Text>
                </Flex>
            </Box>

            <Box mt={10} bg='blue.700' pb={120}>
                <Footer />
            </Box>


        </>
    )
}

export default ContactUs
