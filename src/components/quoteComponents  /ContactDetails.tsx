import { PhoneIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Skeleton, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Colors from '../../assets/Colors'

import { customerDetails, customerName } from '../../redux/slice';
import { useDispatch, useSelector } from 'react-redux'

function ContactDetails() {
    const [loaded, setLoaded] = useState(true)
    const dispatch = useDispatch();

    const [data, setData] = useState([{ customerName: '', emial: '', phone: '', streetAddress: '', unit: '', postCode: null, suburb: null, }])

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
                            <Input onChange={(e) => dispatch(customerName(e.target.value))} size='sm' rounded='md' placeholder='Full name' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} />

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
                            <Input size='sm' rounded='md' placeholder='Email' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} />

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
                            <Input size='sm' rounded='md' placeholder='Contact number' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} />

                        </InputGroup>
                    </Skeleton>
                    <Skeleton isLoaded={loaded}>

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
                            <Input size='sm' rounded='md' placeholder='Street Address' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} />
                        </InputGroup>
                    </Skeleton>
                    <Skeleton isLoaded={loaded}>

                        <InputGroup>

                            <Flex align='center' justify='space-between'>
                                <Input size='sm' rounded='md' placeholder='Unit No.' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} pl={4} w="25%" />

                                <Input size='sm' rounded='md' placeholder='Post Code' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} pl={4} w="25%" />

                                <Input size='sm' rounded='md' placeholder='Suburb' variant='unstyled' color={Colors.mattBlue} borderWidth={.2} borderColor="gray.200" textColor={"gray.700"} _placeholder={{ color: 'gray.700', }} py={1.5} pl={4} w="45%" />
                            </Flex>
                        </InputGroup>
                    </Skeleton>
                </Stack>
            </Box>


        </Box>
    )
}

export default ContactDetails