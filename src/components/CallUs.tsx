import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'
import { IoMdCall } from 'react-icons/io';





function CallUs() {



    return (
        <Flex cursor='pointer' align="center" justify="center" rounded='full' w="45px" h="45px" shadow='md' position="absolute" top={"23%"} right={'10px'} zIndex="2" borderWidth={4} borderColor="#fff" >

            <Image
                // boxSize='55'

                objectFit='cover'
                src={'/phone.png'}
                background={'transparent'}
            />
        </Flex>


    )
}

export default CallUs