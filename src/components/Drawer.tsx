import React, { useRef, useState } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Button,
    useDisclosure,
    Input,
    Container,
    Text,
    Flex,
} from '@chakra-ui/react'

import { IoMdCall, IoMdInformationCircleOutline } from 'react-icons/io';
import { GiNewspaper, GiRead, GiVacuumCleaner } from 'react-icons/gi';
import Colors from '../assets/Colors';
import Link from 'next/link';
import { MdAlternateEmail, MdOutlineHome, } from 'react-icons/md';
import { AiOutlineClose, AiOutlineCloseCircle, AiOutlineInstagram } from 'react-icons/ai';
import Logo from './Logo';


const data = [
    {
        id: '00',
        title: 'Home',
        nav: './',
        icon: <MdOutlineHome />
    },
    {
        id: '01',
        title: 'Services',
        nav: './services',
        icon: <GiVacuumCleaner />
    },
    {
        id: '02',
        title: 'Blogs',
        nav: './blogs',
        icon: <GiNewspaper />
    },
    {
        id: '03',
        title: 'About',
        nav: './about',
        icon: <IoMdInformationCircleOutline />
    },
    {
        id: '04',
        title: 'Contact Us',
        nav: './contactUs',
        icon: <MdAlternateEmail />
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
                    <Text fontSize="16" textAlign='left' mb={1} ml={4} color="gray.700" fontWeight="md">{title}</Text>
                </Flex>
            </Link>
        )
    }

    return (
        <>
            <Box>

                <HamburgerIcon cursor="pointer" onClick={toggleDrawer} w={8} h={8} />

                <Box>
                    <Drawer

                        size={{ base: 'xs', sm: 'lg', md: 'lg', xl: 'lg' }}
                        isOpen={isOpen}
                        placement='left'
                        onClose={toggleDrawer}
                    // finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>



                            <DrawerHeader shadow='base' bgGradient='linear(to-r, white 25%, blue.200,blue.700, )'>
                                <Flex align='center' justify='space-between' color='white'>
                                    <Logo />
                                    <AiOutlineClose size="22" onClick={toggleDrawer} cursor='pointer' />
                                </Flex>
                            </DrawerHeader>
                            <DrawerBody mt={6}>
                                {data.map((item) => (<DrawerCard key={item.id} item={item} />))}

                                <Flex justify="space-between" mt={10} >

                                    <Flex rounded='md' align="center" justify={{ base: "center", sm: 'space-between' }} backgroundColor="#48A14D" px={{ base: 2, sm: 4 }} py={1} w={{ base: '', sm: '50%' }}>
                                        <Text fontSize="16" color="#fff" mr={2} fontWeight="bold">Call Us</Text>
                                        <IoMdCall color='#fff' size={22} />
                                    </Flex>

                                    <Flex rounded='md' align="center" backgroundColor="blue.700" px={4} py={1} justify='space-between' w={{ base: '', sm: '45%' }}>
                                        <Text fontSize="16" textAlign='left' color="#fff" mr={2} fontWeight="bold">Follow us On</Text>
                                        <AiOutlineInstagram color={'#fff'} size="24" />
                                    </Flex>


                                </Flex>

                                <Link href="/instantQuote">

                                    <Flex mt={4} rounded='md' cursor='pointer' align="center" justify="center" _hover={{ bgGradient: 'linear(to-tl, red.300, #e5236c)' }} bgGradient='linear(to-tr, red.300, #e5236c)'>
                                        <Text fontSize="16" textAlign='left' color="#fff" py={1} px={4} fontWeight="bold">Request a Free Quote</Text>
                                    </Flex>
                                </Link>

                            </DrawerBody>







                        </DrawerContent>




                    </Drawer>
                </Box>
            </Box>


        </>
    )
}

export default DrawerButton