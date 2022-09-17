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

import { IoMdCall } from 'react-icons/io';
import Colors from '../assets/Colors';
import Link from 'next/link';

const data = [
    {
        id: '00',
        title: 'Home',
        nav: './',
    },
    {
        id: '01',
        title: 'Services',
        nav: './services',
    },
    {
        id: '02',
        title: 'Blogs',
        nav: './blogs',
    },
    {
        id: '03',
        title: 'About',
        nav: './about',
    },
    {
        id: '04',
        title: 'Contact Us',
        nav: './contactUs',
    },
]

function DrawerButton() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDrawer() {
        setIsOpen(!isOpen);
    }

    // const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()



    const DrawerCard = ({ item: { title, nav } }: any) => {
        return (

            <Link href={nav}>
                <Flex onClick={() => '.pages/contactUs'} align="center" justify="space-between" cursor="pointer" mb={4} >
                    <Text fontSize="14" textAlign='left' mb={1} color="gray.700" fontWeight="md">{title}</Text>
                </Flex>
            </Link>
        )
    }

    return (
        <>
            <Box>

                <HamburgerIcon cursor="pointer" onClick={toggleDrawer} w={6} h={6} />

                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={toggleDrawer}
                    // finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>

                        <DrawerCloseButton mt="2" />
                        <DrawerHeader><Text>Sydney Cleaners</Text></DrawerHeader>
                        <DrawerBody>
                            {data.map((item) => (<DrawerCard key={item.id} item={item} />))}
                            <Flex mt={10} rounded='md' align="center" justify="center" backgroundColor="#48A14D">
                                <IoMdCall color='#fff' size={24} />
                                <Text fontSize="18" textAlign='left' mb={1} color="#fff" py={1} px={4} fontWeight="bold">Call Us</Text>
                            </Flex>

                            <Link href="/instantQuote">

                                <Flex mt={4} rounded='md' align="center" justify="center" backgroundColor={Colors.mattBlue} >
                                    <Text fontSize="18" textAlign='left' mb={1} color="#fff" py={1} px={4} fontWeight="bold">Request a Free Quote</Text>
                                </Flex>
                            </Link>


                        </DrawerBody>






                    </DrawerContent>




                </Drawer>
            </Box>


        </>
    )
}

export default DrawerButton