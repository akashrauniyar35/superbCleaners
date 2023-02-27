import React, { useRef, useState } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Box,
    Text,
    Flex,
} from '@chakra-ui/react'

import { IoMdCall, IoMdInformationCircleOutline } from 'react-icons/io';
import { GiNewspaper, GiRead, GiVacuumCleaner } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import Colors from '../assets/Colors';
import Link from 'next/link';
import { MdAlternateEmail, MdContacts } from 'react-icons/md';
import { IoMdAlert, } from 'react-icons/io';
import { AiOutlineClose, AiOutlineInstagram } from 'react-icons/ai';
import { FaSprayCan } from 'react-icons/fa';
import Logo from './Logo';
import Footer from './Footer';
import InstantQuoteButton from './InstantQuoteButton';


const data = [
    {
        id: '00',
        title: 'Home',
        nav: './',
        icon: <AiFillHome color="#4A5568" />
    },
    {
        id: '01',
        title: 'Services',
        nav: './services',
        icon: <FaSprayCan color="#4A5568" />
    },
    {
        id: '03',
        title: 'About',
        nav: './about',
        icon: <IoMdAlert color="#4A5568" />
    },
    {
        id: '04',
        title: 'Contact Us',
        nav: './contactUs',
        icon: <MdContacts color="#4A5568" />
    },
]

function DrawerButton() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDrawer() {
        setIsOpen(!isOpen);
    }

    // const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()



    const DrawerCard = ({ item: { title, nav, icon } }: any) => {
        return (

            <Link href={nav}>
                <Flex onClick={() => '.pages/contactUs'} align="center" cursor="pointer" mb={4} >
                    {icon}
                    <Text fontFamily="Outfit" fontSize="16" textAlign='left' mb={1} ml={4} color="#4A5568" fontWeight="400">{title}</Text>
                </Flex>
            </Link>
        )
    }

    return (
        <>
            <Box>

                <HamburgerIcon cursor="pointer" color="#4A5568" onClick={toggleDrawer} w={7} h={7} />

                <Box>
                    <Drawer

                        size={{ base: 'xs', sm: 'xs', md: 'xs', xl: 'xs' }}
                        isOpen={isOpen}
                        placement='left'
                        onClose={toggleDrawer}
                    // finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>

                            <DrawerHeader shadow='base' h="70px">
                                <Flex align='center' h="43px" justify='space-between' color='white'>
                                    <Box ml={-4}>
                                        <Logo />
                                    </Box>
                                    <Box bgGradient='linear(to-tr, red.300, #e5236c)' rounded={"full"} p={1.5}>
                                        {/* <IoMdCall size="30px" color='#fff' /> */}
                                        <AiOutlineClose size="16" onClick={toggleDrawer} cursor='pointer' />
                                    </Box>
                                </Flex>
                            </DrawerHeader>

                            <DrawerBody >
                                <Box my={8}>
                                    {data.map((item) => (<DrawerCard key={item.id} item={item} />))}
                                </Box>

                                <Box >

                                    <Flex cursor='pointer' mb={4} bg="green.400" justify='space-between' rounded={"md"} p={1.5} align="center" px="3">
                                        <Text color="#fff" fontWeight="600" ml="2" letterSpacing="1px" fontFamily="Outfit">0415 987 872</Text>
                                        <IoMdCall size="20px" color='#fff' />
                                    </Flex>

                                    <Flex cursor='pointer' mb={4} rounded='md' align="center" backgroundColor="blue.700" px={4} py={1.5} justify='space-between' >
                                        <Text fontSize="16" textAlign='left' color="#fff" mr={2} fontWeight="bold">Follow us On</Text>
                                        <AiOutlineInstagram color={'#fff'} size="24" />
                                    </Flex>

                                    <Link href="/instantQuote">
                                        <Flex p={1.5} px={4} rounded='md' cursor='pointer' align="center" _hover={{ bgGradient: 'linear(to-tl, red.300, #e5236c)' }} bgGradient='linear(to-tr, red.300, #e5236c)'>
                                            <Text fontSize="16" textAlign='left' color="#fff" fontWeight="bold">Get a quote</Text>
                                        </Flex>
                                    </Link>
                                </Box>

                            </DrawerBody>
                            <Footer display={true} />
                        </DrawerContent>




                    </Drawer>
                </Box>
            </Box>


        </>
    )
}

export default DrawerButton