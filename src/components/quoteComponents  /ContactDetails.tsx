import { PhoneIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Skeleton, Stack, Text, Textarea } from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import Colors from '../../assets/Colors'
import { IoMdAlert } from 'react-icons/io'

import { customerDetails } from '../../redux/slice';
import { useDispatch, useSelector } from 'react-redux'

function ContactDetails() {
    const loaded = useSelector((state: any) => state.property)
    const dispatch = useDispatch()
    const [data, setData] = useState({ name: '', email: '', phone: '', streetAddress: '', unit: '', postCode: "", suburb: "", state: "NSW", message: "" })

    const rePhoneNumber =
        /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm
    const reEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

    const detailsDispatch = useCallback(() => {
        dispatch(customerDetails(data))
    }, [])
    
    useEffect(() => {
        detailsDispatch()
    }, [data])

    return (
        <Box>
            <Skeleton isLoaded={loaded ? true : false}>
                <Text textAlign="left" fontSize="18" mb={2} fontWeight="600" color={"gray.700"}>Contact Details</Text>
            </Skeleton>

            <Box>
                <Stack spacing={3} >
                    <Skeleton isLoaded={loaded ? true : false}>

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                            ><Image
                                    alt=""
                                    boxSize='35px'
                                    objectFit='cover'
                                    src={'/user.png'}
                                    opacity={.5}
                                    background={'transparent'}
                                    padding='2'
                                    mt='1'
                                /></InputLeftElement>
                            <Input onChange={(e) => setData({ ...data, name: e.target.value })} size='sm' rounded='md' placeholder='Full name' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={3} />
                        </InputGroup>
                    </Skeleton>

                    {
                        data.email.length > 3 && !reEmail.test(data.email) ?
                            <Flex align="center">
                                <IoMdAlert color="red" size="20px" />
                                <Text fontWeight="300" fontFamily="Outfit" color="red" ml={2}>Please enter a valid email</Text>
                            </Flex> : null
                    }

                    <Skeleton isLoaded={loaded ? true : false}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                            ><Image
                                    alt=""
                                    boxSize='35px'
                                    objectFit='cover'
                                    src={'/mail.png'}
                                    opacity={.5}
                                    background={'transparent'}
                                    padding='2'
                                    mt='2'
                                /></InputLeftElement>
                            <Input size='sm' onChange={(e) => setData({ ...data, email: e.target.value })} rounded='md' placeholder='Email' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={3} />

                        </InputGroup>
                    </Skeleton>

                    {
                        data.phone.length > 3 && !rePhoneNumber.test(data.phone) ?
                            <Flex align="center">
                                <IoMdAlert color="red" size="20px" />
                                <Text fontWeight="300" fontFamily="Outfit" color="red" ml={2}>Please enter a valid phone number</Text>
                            </Flex> : null
                    }

                    <Skeleton isLoaded={loaded ? true : false}>

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                            >
                                <Image
                                    alt=""
                                    boxSize='35px'
                                    objectFit='cover'
                                    opacity={.5}
                                    src={'/phone.png'}
                                    background={'transparent'}
                                    padding='2'
                                    mt='1'
                                /></InputLeftElement>
                            <Input maxLength={10} size='sm' onChange={(e) => setData({ ...data, phone: e.target.value })} rounded='md' placeholder='Contact number' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={3} />

                        </InputGroup>
                    </Skeleton>
                    <Skeleton isLoaded={loaded ? true : false}>

                        <Flex align='center'>

                            <Input size='sm' onChange={(e) => setData({ ...data, unit: e.target.value })} rounded='md' placeholder='Unit' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={2} pl={3} w="20%" mr={4} />

                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                ><Image
                                        alt=""
                                        boxSize='35px'
                                        objectFit='cover'
                                        src={'/location.png'}
                                        opacity={.5}
                                        background={'transparent'}
                                        padding='2'
                                        mt='-.5'
                                    /></InputLeftElement>
                                <Input onChange={(e) => setData({ ...data, streetAddress: e.target.value })} size='sm' rounded='md' placeholder='Street Address' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={2} />
                            </InputGroup>
                        </Flex>

                    </Skeleton>
                    <Skeleton isLoaded={loaded ? true : false}>

                        <InputGroup>

                            <Flex align='center'>

                                <Input size='sm' rounded='md' onChange={(e) => setData({ ...data, postCode: e.target.value })} placeholder='Post Code' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={3} pl={3} w="25%" mr={4} />

                                <Input size='sm' rounded='md' placeholder='Suburb' onChange={(e) => setData({ ...data, suburb: e.target.value })} variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={2} pl={3} w="45%" mr={4} />

                                <Input size='sm' onChange={(e) => setData({ ...data, state: e.target.value })} rounded='md' placeholder={data.state} variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={2} pl={3} w="25%" />

                            </Flex>
                        </InputGroup>


                    </Skeleton>

                    <Skeleton isLoaded={loaded ? true : false}>
                        <Textarea size='sm' onChange={(e) => setData({ ...data, message: e.target.value })} rounded='md' placeholder="message..." variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={3} pl={3} />
                    </Skeleton>
                </Stack>
            </Box>


        </Box>
    )
}

export default ContactDetails