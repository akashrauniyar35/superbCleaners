import { Box, Circle, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'
import { IoMdCall } from 'react-icons/io';





function CallUs() {



    return (

        <Circle mr={4} p={2} bg="green.400" rounded={"full"} size="35px" cursor={"pointer"}>
            <IoMdCall size="20px" color='#fff' />
        </ Circle>



    )
}

export default CallUs