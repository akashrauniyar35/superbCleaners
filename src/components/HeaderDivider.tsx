import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'

import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';
function HeaderDivider() {
    return (
        <Flex align="center" bgGradient='linear(to-r, blue.700 82%, blue.400)' justify="space-around" paddingY={1}>


            <Flex align="center">

                <Flex align="center" >
                    <Flex align="center">
                        <Text fontSize={16} color="white" fontWeight="medium">8</Text>
                        <Text fontSize={16} color="white" marginLeft={1}>AM</Text>
                    </Flex>
                    <Text fontSize={12} color="white" marginLeft={1} marginRight={1} marginTop={0}>to</Text>
                    <Flex align="center">
                        <Text fontSize={16} color="white" fontWeight="medium">10</Text>
                        <Text fontSize={16} color="white" marginLeft={1}>PM</Text>
                    </Flex>
                </Flex>

                <Center height='4'>
                    <Divider orientation='vertical' marginX={2} />
                </Center>

                <Flex align="center">
                    <Text fontSize={16} color="white" fontWeight="medium">7</Text>
                    <Text fontSize={16} color="white" marginLeft={1}>Days</Text>
                </Flex>


            </Flex>


            <Flex align="center">
                <MdOutlineLocationOn color='white' size="20" />
                <Text fontSize={14} color="white">Sydney, NSW</Text>
            </Flex>

            <Flex align="center" padding="1" rounded={4} cursor='pointer'>
                <AiOutlineInstagram color={'#fff'} size="20" />
            </Flex>


        </Flex>
    )
}

export default HeaderDivider