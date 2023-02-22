import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Colors from '../../assets/Colors'

import { useDispatch, } from 'react-redux'
import { selectedService } from '../../redux/slice'


const serviceTypes = [

    {
        id: '00',
        title: 'End of Lease Cleaning',
        icon: '/keys.png',
        icon2: '/keysWhite.png',
        description: 'What does an end of lease cleaning include? A bond cleaning usually includes vacuuming all carpets, mopping the floors, thorough dusting of any hard furniture, cleaning the kitchen, bathrooms, the oven inside and out, as well as washing the windows.',
    },
    {
        id: '01',
        title: 'General Cleaning Service',
        icon: '/house.png',
        icon2: '/houseWhite.png',
        description: 'A general cleaning meaning consists of basic cleaning activities that include sweeping, vacuuming, dusting, mopping, etc. This type of surface cleaning is performed on a weekly basis to maintain a level of cleanliness and hygiene in your home and offices.',
    }
];


function QuoteHeader() {
    const [service, setService] = useState();

    const dispatch = useDispatch();

    const onServiceSelect = (service: any) => {
        console.log('first')
        setService(service);
        dispatch(selectedService(service));
    }

    return (
        <>
            <Box>
                <Text textAlign="left" fontSize="18" mb={2} fontWeight="600" fontFamily="Outfit" color={"gray.700"}>Select a Service</Text>

                <Flex align='center' justify='space-between' >
                    {
                        serviceTypes.map((item) => {
                            return (

                                <Flex key={item.id} p={2} w="45%" rounded='md'
                                    borderWidth="thin" borderColor={item.title === service ? "transparent" : service ? 'transparent' : 'gray.500'}
                                    cursor='pointer' justify='space-between' align='center' bgGradient={item.title === service ? 'linear(to-tr, red.300, #e5236c)' : "#fff"} onClick={() => onServiceSelect(item.title)}
                                    opacity={item.title === service ? "1" : service ? '.5' : '1'}
                                    shadow={item.title === service ? "base" : 'inner'}
                                >
                                    <Image
                                        alt=""
                                        boxSize='30px'
                                        opacity=".8"
                                        objectFit="cover"
                                        src={item.title === service ? item.icon2 : item.icon}
                                    />
                                    <Text ml={3} mt={.5} fontSize='14' fontFamily="Outfit" lineHeight='1.2' fontWeight='medium' color={item.title === service ? "#fff" : "gray.700"}>{item.title}</Text>
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