import { Box, Flex, Image, Skeleton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io'
import Colors from '../../assets/Colors';



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
    const [selectedProperty, setSelectedProperty] = useState("House");
    const [bedroomCount, setBedroomCount] = useState(1);
    const [bathroomCount, setBathroomCount] = useState(1);
    const [loaded, setLoaded] = useState(false)

    function addBedroom() {
        setBedroomCount(bedroomCount + 1)
    }
    function addBathroom() {
        setBathroomCount(bathroomCount + 1)
    }
    function removeBedroom() {
        bedroomCount > 1 ? setBedroomCount(bedroomCount - 1) : setBedroomCount(1)
    }
    function removeBathroom() {
        bathroomCount > 1 ? setBathroomCount(bathroomCount - 1) : setBathroomCount(1)
    }


    return (
        <>

            <Box>

                <Skeleton isLoaded={loaded} >
                    <Text textAlign="left" fontSize="20" my={2} fontWeight="bold" color={Colors.mattBlue}>Please tell us about your place</Text>
                </Skeleton>

                <Skeleton isLoaded={loaded}>
                    <Flex align='center' justify='space-between' bg={Colors.grayBG} p={2} rounded='md' >

                        {propertyTypes.map((item) => {
                            return (
                                <Flex
                                    onClick={() => setSelectedProperty(item.label)}
                                    opacity={item.label === selectedProperty ? '1' : '.3'} cursor='pointer' align='center' justify='center' bg={Colors.mattBlue} px='9' rounded='sm' py='1'>
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
                                    background={'#fff'}
                                />
                                <Text ml={4} mt={0} textAlign="left" fontSize="18" fontWeight="bold" color={Colors.mattBlue}>Bedroom</Text>
                            </Flex>

                            <Flex align="center" justify="space-evenly">
                                <IoMdRemoveCircle size={20} color={Colors.mattBlue} cursor='pointer' onClick={() => removeBedroom()} />
                                <Text px={4} fontSize="16" fontWeight="bold" color={Colors.mattBlue}>{bedroomCount}</Text>
                                <IoMdAddCircle onClick={() => addBedroom()} size={20} color={Colors.mattBlue} cursor='pointer' />
                            </Flex>


                        </Flex>

                        <Flex align="center" justify="space-between" width="100%">

                            <Flex align="center">
                                <Image
                                    boxSize='60px'
                                    objectFit='cover'
                                    src={'/bath.png'}
                                    background={'#fff'}
                                />
                                <Text ml={4} mt={0} textAlign="left" fontSize="18" fontWeight="bold" color={Colors.mattBlue}>Bathroom</Text>
                            </Flex>

                            <Flex align="center" justify="space-evenly">
                                <IoMdRemoveCircle size={20} color={Colors.mattBlue} cursor='pointer' onClick={() => removeBathroom()} />
                                <Text px={4} fontSize="16" fontWeight="bold" color={Colors.mattBlue}>1</Text>
                                <IoMdAddCircle onClick={() => addBathroom()} size={20} color={Colors.mattBlue} cursor='pointer' />
                            </Flex>
                        </Flex>
                    </Flex>
                </Skeleton>
            </Box>

        </>
    )
}

export default PropertyTypes