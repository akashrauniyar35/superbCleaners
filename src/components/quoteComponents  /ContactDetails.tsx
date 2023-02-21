import { PhoneIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Skeleton, Stack, Text, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Colors from '../../assets/Colors'

import { customerDetails } from '../../redux/slice';
import { useDispatch, useSelector } from 'react-redux'

function ContactDetails() {
    const [loaded, setLoaded] = useState(true)
    const dispatch = useDispatch();

    const [data, setData] = useState({ name: '', email: '', phone: '', streetAddress: '', unit: '', postCode: "", suburb: "", state: "NSW", message: "" })


    useEffect(() => {
        dispatch(customerDetails(data))
    }, [data])

    console.log("data", data)

    return (
        <Box>
            <Skeleton isLoaded={loaded}>
                <Text textAlign="left" fontSize="20" mb={2} fontWeight="bold" color={"gray.700"}>Contact Details</Text>
            </Skeleton>

            <Box>
                <Stack spacing={3} >
                    <Skeleton isLoaded={loaded}>

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
                                    mt='-1'
                                /></InputLeftElement>
                            <Input onChange={(e) => setData({ ...data, name: e.target.value })} size='sm' rounded='md' placeholder='Full name' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} />

                        </InputGroup>
                    </Skeleton>
                    <Skeleton isLoaded={loaded}>

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
                                    mt='-1'
                                /></InputLeftElement>
                            <Input size='sm' onChange={(e) => setData({ ...data, email: e.target.value })} rounded='md' placeholder='Email' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} />

                        </InputGroup>
                    </Skeleton>

                    <Skeleton isLoaded={loaded}>

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
                                    mt='-1'
                                /></InputLeftElement>
                            <Input size='sm' onChange={(e) => setData({ ...data, phone: e.target.value })} rounded='md' placeholder='Contact number' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} />

                        </InputGroup>
                    </Skeleton>
                    <Skeleton isLoaded={loaded}>

                        <Flex align='center'>

                            <Input size='sm' onChange={(e) => setData({ ...data, unit: e.target.value })} rounded='md' placeholder='Unit' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} pl={3} w="20%" mr={4} />

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
                                        mt='-1'
                                    /></InputLeftElement>
                                <Input onChange={(e) => setData({ ...data, streetAddress: e.target.value })} size='sm' rounded='md' placeholder='Street Address' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} />
                            </InputGroup>
                        </Flex>

                    </Skeleton>
                    <Skeleton isLoaded={loaded}>

                        <InputGroup>

                            <Flex align='center'>

                                <Input size='sm' rounded='md' onChange={(e) => setData({ ...data, postCode: e.target.value })} placeholder='Post Code' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} pl={3} w="25%" mr={4} />

                                <Input size='sm' rounded='md' placeholder='Suburb' onChange={(e) => setData({ ...data, suburb: e.target.value })} variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} pl={3} w="45%" mr={4} />

                                <Input size='sm' onChange={(e) => setData({ ...data, state: e.target.value })} rounded='md' placeholder={data.state} variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} pl={3} w="25%" />

                            </Flex>
                        </InputGroup>


                    </Skeleton>

                    <Skeleton isLoaded={loaded}>
                        <Textarea size='sm' onChange={(e) => setData({ ...data, message: e.target.value })} rounded='md' placeholder="message..." variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} pl={3} />
                    </Skeleton>
                </Stack>
            </Box>


        </Box>
    )
}

export default ContactDetails