import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'
import { IoMdCall } from 'react-icons/io';





function CallUs() {



    return (
        <Flex align="center" justify="center" rounded='full' w="45px" h="45px" shadow='md' position="absolute" bottom={"10px"} right={'10px'} zIndex="2" borderWidth={4} borderColor="#fff" >

            {/* <IoMdCall color='#fff' size={24} /> */}
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