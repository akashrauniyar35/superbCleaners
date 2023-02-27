import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'
import FooterAccordians from './FooterAccordians'
import { AiOutlineInstagram } from 'react-icons/ai';
import Logo from './Logo';
import Link from 'next/link';
function Footer({ display }: any) {
    return (
        <Box backgroundColor={"blue.700"} p={4} py={6} fontFamily="Outfit">

            <Box w={{ base: '100%', sm: '100%', md: "80%", lg: '50%' }} marginX="auto">

                <Flex align="flex-start" justify="space-between">
                    {!display ? <Box display={{}}>
                        <Box w="180px" ml={-4}>
                            <Logo />
                        </Box>
                        <Text fontWeight={"600"} fontSize="16" textAlign='left' color="#fff" mt={-2}>Cleaning beyond your expectations</Text>
                    </Box> : null}

                    <Link href="./services" >
                        <Box mr={"10%"}>
                            <Text cursor="pointer" textAlign="left" fontSize="18" fontWeight="bold" color="#fff" mb={4} >Services</Text>
                            <Text cursor="pointer" fontSize="13" textAlign='left' color="#fff" mb={2}>End of Lease Cleaning</Text>
                            <Text cursor="pointer" fontSize="13" textAlign='left' color="#fff" mb={2}>Vacate Cleaning</Text>
                            <Text cursor="pointer" fontSize="13" textAlign='left' color="#fff" mb={2}>Move in/Out Cleaning</Text>
                            <Text cursor="pointer" fontSize="13" textAlign='left' color="#fff" mb={2}>Carpet Steam Cleaning</Text>
                        </Box>
                    </Link>
                </Flex>

                <Flex justify='space-between' mt={8}>
                    <Text textAlign="left" fontSize="18" fontWeight="bold" color="#fff" mb={2} >Follow us on</Text>
                    <AiOutlineInstagram color='#fff' size={24} cursor='pointer' />
                </Flex>
                <Text cursor="pointer" fontSize="13" textAlign='left' color="#fff" mb={1}>Sydney Cleaning Services © 2023. All rights reserved.</Text>
            </Box>

        </Box>
    )
}

export default Footer