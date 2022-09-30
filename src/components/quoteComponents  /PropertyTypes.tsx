import { Box, Flex, Image, Skeleton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoMdAdd, IoMdAddCircle, IoMdRemove, IoMdRemoveCircle } from 'react-icons/io'
import Colors from '../../assets/Colors';
import { useSelector } from 'react-redux'
import { useDispatch, } from 'react-redux'
import { propertySelected, addBedCount, addBathCount, removeBedCount } from '../../redux/slice'

const propertyTypes = [

    {
        id: '00',
        label: 'House',
    },
    {
        id: '01',
        label: 'Unit',
    },
    {
        id: '02',
        label: 'Studio',
    },
]


function PropertyTypes() {

    const loding: any = useSelector((state) => state)
    const loaded = loding.service === "" ? false : true;
    const dispatch = useDispatch();
    const [selectedProperty, setSelectedProperty] = useState("");
    const [bedroomCount, setBedroomCount] = useState(1);
    const [bathroomCount, setBathroomCount] = useState(1);

    function addBedroom() {
        setBedroomCount(bedroomCount + 1)
        dispatch(addBedCount(bedroomCount))
    }
    function selectProperty(property: any) {
        dispatch(propertySelected(property))
        setSelectedProperty(property)
    }

    function addBathroom() {
        setBathroomCount(bathroomCount + 1)
        dispatch(addBathCount(bathroomCount))
    }

    function removeBedroom() {
        bedroomCount > 1 ? setBedroomCount(bedroomCount - 1) : setBedroomCount(1)
        dispatch(removeBedCount(bedroomCount))
    }

    function removeBathroom() {
        bathroomCount > 1 ? setBathroomCount(bathroomCount - 1) : setBathroomCount(1)
    }

    console.log('use selector', loding.service)
    return (
        <>

            <Box>

                <Skeleton isLoaded={loaded} >
                    <Text textAlign="left" fontSize="18" my={2} fontWeight="bold" color={"gray.700"}>Please tell us about your place</Text>
                </Skeleton>

                <Skeleton isLoaded={loaded}>
                    <Flex align='center' justify='space-between' bg={Colors.grayBG} p={2} rounded='md' >

                        {propertyTypes.map((item) => {
                            return (
                                <Flex key={item.id}
                                    onClick={() => selectProperty(item.label)}
                                    opacity={item.label === selectedProperty ? '1' : '.3'} cursor='pointer' align='center' justify='center' bgGradient='linear(to-tr, red.300, #e5236c)' px='7' rounded='sm' py='1'>
                                    <Text color='#fff' fontSize='14' fontWeight='bold'>{item.label}</Text>
                                </Flex>
                            )
                        })}

                    </Flex>
                </Skeleton>

                <Skeleton isLoaded={loaded}>
                    <Flex flexDirection="column" align="center" mt={4}>

                        <Flex align="center" justify="space-between" width="100%">

                            <Flex align="center">
                                <Image
                                    boxSize='60px'
                                    objectFit='cover'
                                    src={'/bedroom.png'}
                                    opacity={.5}
                                    background={'#fff'}
                                />
                                <Text ml={4} mt={0} textAlign="left" fontSize="16" fontWeight="bold" color={"gray.700"}>Bedroom</Text>
                            </Flex>

                            <Flex align="center" justify="space-evenly" mr={4}>

                                <Box bgGradient='linear(to-tr, red.300, #e5236c)' p={1} rounded="full" shadow="base">
                                    <IoMdRemove onClick={() => addBedroom()} size={16} color={"white"} cursor='pointer' />
                                </Box>

                                <Text px={4} fontSize="16" fontWeight="bold" color={"gray.700"}>{bedroomCount}</Text>

                                <Box bgGradient='linear(to-tr, red.300, #e5236c)' p={1} rounded="full" shadow="base">
                                    <IoMdAdd onClick={() => addBedroom()} size={16} color={"white"} cursor='pointer' />
                                </Box>

                            </Flex>


                        </Flex>

                        <Flex align="center" justify="space-between" width="100%">

                            <Flex align="center">

                                <Image
                                    opacity={.5}
                                    boxSize='60px'
                                    objectFit='cover'
                                    src={'/bath.png'}
                                    background={'#fff'}
                                />

                                <Text ml={4} mt={0} textAlign="left" fontSize="16" fontWeight="bold" color={"gray.700"}>Bathroom</Text>
                            </Flex>

                            <Flex align="center" justify="space-evenly"  mr={4}>

                                <Box bgGradient='linear(to-tr, red.300, #e5236c)' p={1} rounded="full" shadow="base">
                                    <IoMdRemove onClick={() => removeBathroom()} size={16} color={"white"} cursor='pointer' />
                                </Box>

                                <Text px={4} fontSize="16" fontWeight="bold" color={"gray.700"}>1</Text>
                                <Box bgGradient='linear(to-tr, red.300, #e5236c)' p={1} rounded="full" shadow="base">
                                    <IoMdAdd onClick={() => addBathroom()} size={16} color={"white"} cursor='pointer' />
                                </Box>
                            </Flex>

                        </Flex>
                    </Flex>
                </Skeleton>
            </Box>

        </>
    )
}

export default PropertyTypes