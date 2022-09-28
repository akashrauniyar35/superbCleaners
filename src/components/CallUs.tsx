import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'
import { IoMdCall } from 'react-icons/io';




 
function CallUs() {



    return (
        <Flex cursor='pointer' rounded='full' w="45px" h="45px" shadow='base' position="sticky" top={"92%"} zIndex={4} borderWidth={4} borderColor="#fff" left={'88%'}>

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