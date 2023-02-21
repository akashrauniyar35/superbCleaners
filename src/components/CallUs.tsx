import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'
import { IoMdCall } from 'react-icons/io';





function CallUs() {



    return (

        <Flex align="center" justify="center" p={2} bg="green.400" rounded={"full"} w="50px" h="50px" cursor='pointer' position="sticky" top={"93%"} zIndex={4} borderWidth={4} borderColor="#fff" left={'85%'}>
            <IoMdCall size="30px" color='#fff' />
        </ Flex>



    )
}

export default CallUs