import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Text,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

import Link from 'next/link';
import { AiFillHome, AiOutlineClose, AiOutlineInstagram } from 'react-icons/ai';
import { FaSprayCan } from 'react-icons/fa';
import { IoMdAlert, IoMdCall } from 'react-icons/io';
import { MdContacts } from 'react-icons/md';
import Footer from './Footer';
import Logo from './Logo';


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

                                    <a href="tel:0481834009">
                                        <Flex cursor='pointer' mb={4} bg="green.400" justify='space-between' rounded={"md"} p={1.5} align="center" px="3">
                                            <Text color="#fff" fontWeight="600" ml="2" letterSpacing="1px" fontFamily="Outfit">0481834009</Text>
                                            <IoMdCall size="20px" color='#fff' />
                                        </Flex>
                                    </a>

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