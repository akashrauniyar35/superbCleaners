import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'
import FooterAccordians from './FooterAccordians'
import { AiOutlineInstagram } from 'react-icons/ai';
function Footer() {
    return (
        <Box backgroundColor={Colors.mattBlue} p={4}>

            <Box>
                <Text textAlign="left" fontSize="20" fontWeight="bold" color="#fff" mb={2} >Services</Text>
                <Text cursor="pointer" fontSize="14" textAlign='left' color="#fff" mb={1}>End of Lease Cleaning</Text>
                <Text cursor="pointer" fontSize="14" textAlign='left' color="#fff" mb={1}>Vacate Cleaning</Text>
                <Text cursor="pointer" fontSize="14" textAlign='left' color="#fff" mb={1}>Move in/Out Cleaning</Text>
                <Text cursor="pointer" fontSize="14" textAlign='left' color="#fff" mb={1}>Carpet Steam Cleaning</Text>
            </Box>

            <Flex justify='space-between' mt={8}>
                <Text textAlign="left" fontSize="20" fontWeight="bold" color="#fff" mb={2} >Follow us on</Text>
                <AiOutlineInstagram color='#fff' size={24} />
            </Flex>

            <Text cursor="pointer" fontSize="14" textAlign='left' color="#fff" mb={1}>Sydney Cleaning Services © 2022. All rights reserved.</Text>

        </Box>
    )
}

export default Footer