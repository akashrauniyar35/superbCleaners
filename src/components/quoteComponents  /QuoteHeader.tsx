import { Box, Flex, Image, Text, Skeleton } from '@chakra-ui/react'
import React, { useState } from 'react'
import Colors from '../../assets/Colors'

import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io'

import house from '../../assets/house.png'

const serviceTypes = [

    {
        id: '00',
        title: 'End of Lease Cleaning',
        icon: '/key.png',
        description: 'What does an end of lease cleaning include? A bond cleaning usually includes vacuuming all carpets, mopping the floors, thorough dusting of any hard furniture, cleaning the kitchen, bathrooms, the oven inside and out, as well as washing the windows.',
    },
    {
        id: '01',
        title: 'General Cleaning Service',
        icon: '/house.png',
        description: 'A general cleaning meaning consists of basic cleaning activities that include sweeping, vacuuming, dusting, mopping, etc. This type of surface cleaning is performed on a weekly basis to maintain a level of cleanliness and hygiene in your home and offices.',
    }
];


function QuoteHeader() {
    const [selectedService, setSeletedService] = useState("End of Lease Cleaning");



    return (
        <>
            <Box>
                <Text textAlign="left" fontSize="20" mb={2} fontWeight="bold" color={Colors.colorOneBlue}>Select a Service</Text>

                <Flex align='center' justify='space-between' >
                    {
                        serviceTypes.map((item) => {
                            return (

                                <Flex p={2} w='180px' rounded='md' bg={Colors.colorOneBlue} cursor='pointer' justify='space-between' onClick={() => setSeletedService(item.title)}

                                    opacity={item.title === selectedService ? "1" : '.3'}

                                >
                                    <Image
                                        width="20" height="20"
                                        // boxSize='70px'
                                        objectFit='cover'
                                        src={item.icon}
                                        background={'#fff'}
                                        padding='2'
                                        rounded='lg'
                                    />
                                    <Text ml={3} fontSize='18' fontWeight='medium' color='#fff'>{item.title}</Text>
                                </Flex>
                            )
                        })
                    }

                </Flex>
            </Box>

        </>
    )
}

export default QuoteHeader