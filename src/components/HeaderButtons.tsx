import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Drawer from './Drawer'
import HeaderDivider from './HeaderDivider'
import InstantQuote from './InstantQuoteButton'
import Logo from './Logo'

import { Sticky, StickyScrollUp, StickyProvider } from 'react-stickup';
// import styles from "./HeaderButtons.css"


const container = React.createRef();

function HeaderButtons() {





    return (
        <>

            <Flex position="sticky" bg="white" top={0} zIndex={4} px={4} align="center" flexDirection="row" justify="space-between" py={2} shadow="base">
                <Drawer />
                <Logo />
                <InstantQuote />
            </Flex>



        </>
    )
}

export default HeaderButtons