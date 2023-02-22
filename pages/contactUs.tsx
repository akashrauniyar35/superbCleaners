import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Image, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Skeleton, Spinner, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdAlert, IoMdCheckboxOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import Colors from '../src/assets/Colors'
import DrawerButton from '../src/components/Drawer'
import Footer from '../src/components/Footer'
import InstantQuoteButton from '../src/components/InstantQuoteButton'
import Logo from '../src/components/Logo'
import { postContactFail, postContactPending, postContactSuccess } from '../src/redux/slice'
import contactUsSubmit from './api/contactUSSubmit'

const ContactUs = () => {
    const [data, setData] = useState({ name: '', email: '', phone: '', streetAddress: '', unit: '', postCode: "", suburb: "", state: "NSW", message: "", category: "" })
    const [accordionIndex, setAccordionIndex] = useState(-1);

    const toast = useToast()
    const rePhoneNumber =
        /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm
    const reEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    const postLoading: any = useSelector((state: any) => state.postQuoteLoading)
    let testEmail = reEmail.test(data.email)
    let testPhone = rePhoneNumber.test(data.phone)

    const dispatch = useDispatch()

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

    const onSubmitHandler = async () => {
        dispatch(postContactPending())
        let arr = data.name.split(" ", 2);

        let prams: any = {
            from_name: data.name,
            form_quote_date: new Date().toString(),
            from_email_id: data.email,
            form_phone_number: data.phone,
            from_address: `${data.unit} ${data.streetAddress} ${data.suburb} ${data.state} ${data.postCode}`,
            from_service: data.category,
            from_message: data.message
        }
        const res = await contactUsSubmit(prams)
        console.log("Res", res)
        if (res === "OK") {
            dispatch(postContactSuccess())
            toast({
                duration: 9000,
                position: 'top',
                render: () => (
                    <Flex flex="1" align="center" justify="center">
                        <Box color='white' p={3} bg='green.500' rounded="md" w={'100%'}>
                            <Text fontFamily="Outfit" fontWeight="600">Thankyou {arr[0].charAt(0).toUpperCase() + arr[0].slice(1)}, for contacting us.</Text>
                            <Text fontFamily="Outfit" fontWeight="300" >One of our team members will shortly reach out to you.</Text>
                        </Box>
                    </Flex>
                ),
            })

            setData({ name: '', email: '', phone: '', streetAddress: '', unit: '', postCode: "", suburb: "", state: "NSW", message: "", category: "" })
        }
        dispatch(postContactFail())

    }

    return (
        <>
            <Flex position="sticky" bg="white" top={0} zIndex={4} px={4} align="center" flexDirection="row" justify="space-between" py={2} shadow="base">
                <Flex align="center">
                    <DrawerButton />
                    <Box ml={4}>
                        <Logo />
                    </Box>
                </Flex>
                <InstantQuoteButton />
            </Flex>

            <Box px={4} pt={4} w={{ base: '100%', sm: '100%', md: '80%', lg: '40%' }} marginX="auto">

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

            <Box px={4} pt={4} w={{ base: '100%', sm: '100%', md: '80%', lg: '40%' }} marginX="auto">

                <Stack spacing={3} >
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                        ><Image
                                boxSize='35px'
                                objectFit='cover'
                                src={'/user.png'}
                                opacity={.5}
                                background={'transparent'}
                                padding='2'
                                mt='1'
                            /></InputLeftElement>
                        <Input value={data.name} fontFamily={"Outfit"} fontSize={"14"} onChange={(e) => setData({ ...data, name: e.target.value })} size='sm' rounded='md' placeholder='Full name' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={3} />
                    </InputGroup>

                    {
                        data.email.length > 3 && !testEmail ?
                            <Flex align="center">
                                <IoMdAlert color="red" size="20px" />
                                <Text fontWeight="300" fontFamily="Outfit" color="red" ml={2}>Please enter a valid email</Text>
                            </Flex> : null
                    }

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                        ><Image
                                boxSize='35px'
                                objectFit='cover'
                                src={'/mail.png'}
                                opacity={.5}
                                background={'transparent'}
                                padding='2'
                                mt='2'
                            /></InputLeftElement>
                        <Input value={data.email} fontFamily={"Outfit"} fontSize={"14"} size='sm' onChange={(e) => setData({ ...data, email: e.target.value })} rounded='md' placeholder='Email' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={3} />

                    </InputGroup>


                    {
                        data.phone.length > 3 && !testPhone ?
                            <Flex align="center">
                                <IoMdAlert color="red" size="20px" />
                                <Text fontWeight="300" fontFamily="Outfit" color="red" ml={2}>Please enter a valid phone number</Text>
                            </Flex> : null
                    }

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                        >
                            <Image
                                boxSize='35px'
                                objectFit='cover'
                                opacity={.5}
                                src={'/phone.png'}
                                background={'transparent'}
                                padding='2'
                                mt='1'
                            /></InputLeftElement>
                        <Input value={data.phone} fontFamily={"Outfit"} fontSize={"14"} maxLength={10} size='sm' onChange={(e) => setData({ ...data, phone: e.target.value })} rounded='md' placeholder='Contact number' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={3} />

                    </InputGroup>



                    <Accordion allowToggle index={accordionIndex}>
                        <AccordionItem borderWidth={0} borderBottom={0}>
                            <h2>
                                <AccordionButton onClick={(() => setAccordionIndex(0))} py={2} _hover={{ backgroundColor: "transparent" }} borderWidth={.2} borderColor="gray.200" rounded='md'>
                                    <Box fontFamily={"Outfit"} as="span" flex='1' textAlign='left'>
                                        <Text color={data.category ? "gray.700" : 'gray.500'} fontFamily={"Outfit"} fontSize={"14"} opacity={data.category ? "1" : ".8"} >{data.category ? data.category : "Category"}</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                            </h2>
                            {services.map((x: any) => {
                                return (
                                    <AccordionPanel py={2}>
                                        <Flex onClick={() => { setData({ ...data, category: x.title }), setAccordionIndex(-1) }} flex="1" align="center" justify="space-between" cursor={"pointer"}>
                                            <Text color='gray.500' fontFamily={"Outfit"} fontSize={"14"} opacity=".8" >{x.title}</Text>
                                        </Flex>

                                    </AccordionPanel>
                                )
                            })}
                        </AccordionItem>
                    </Accordion>

                    <Flex align='center'>
                        <Input value={data.unit} size='sm' fontFamily={"Outfit"} fontSize={"14"} onChange={(e) => setData({ ...data, unit: e.target.value })} rounded='md' placeholder='Unit' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={2} pl={3} w="20%" mr={4} />

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                            ><Image
                                    boxSize='35px'
                                    objectFit='cover'
                                    src={'/location.png'}
                                    opacity={.5}
                                    background={'transparent'}
                                    padding='2'
                                    mt='-.5'
                                /></InputLeftElement>
                            <Input value={data.streetAddress} fontFamily={"Outfit"} fontSize={"14"} onChange={(e) => setData({ ...data, streetAddress: e.target.value })} size='sm' rounded='md' placeholder='Street Address' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={2} />
                        </InputGroup>
                    </Flex>

                    <InputGroup>

                        <Flex align='center'>

                            <Input value={data.postCode} fontFamily={"Outfit"} fontSize={"14"} size='sm' rounded='md' onChange={(e) => setData({ ...data, postCode: e.target.value })} placeholder='Post Code' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={3} pl={3} w="25%" mr={4} />

                            <Input value={data.suburb} fontFamily={"Outfit"} fontSize={"14"} size='sm' rounded='md' placeholder='Suburb' onChange={(e) => setData({ ...data, suburb: e.target.value })} variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={2} pl={3} w="45%" mr={4} />

                            <Input value={data.state} fontFamily={"Outfit"} fontSize={"14"} size='sm' onChange={(e) => setData({ ...data, state: e.target.value })} rounded='md' placeholder={data.state} variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={2} pl={3} w="25%" />

                        </Flex>
                    </InputGroup>


                    <Textarea value={data.message} fontFamily={"Outfit"} fontSize={"14"} size='sm' onChange={(e) => setData({ ...data, message: e.target.value })} rounded='md' placeholder="message..." variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={3} pl={3} />

                </Stack>
            </Box>

            <Box px={4} pt={4} w={{ base: '100%', sm: '100%', md: '80%', lg: '40%' }} marginX="auto">
                <Skeleton isLoaded={testEmail && testPhone}>
                    <Flex onClick={() => onSubmitHandler()} cursor='pointer' h={"10"} shadow="base" align="center" bgGradient='linear(to-tr, red.300, #e5236c)' justify='center' rounded='md' mb={4}>
                        {postLoading ? <Spinner color={'#fff'} size='md' /> :
                            <Text fontFamily="Outfit" fontSize="14" fontWeight="600" color={'#fff'}>Submit</Text>
                        }
                    </Flex>
                </Skeleton>
            </Box>

            <Box mt={10} bg='blue.700' >
                <Footer />
            </Box>


        </>
    )
}

export default ContactUs
