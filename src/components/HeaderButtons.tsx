import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Drawer from './Drawer'
import HeaderDivider from './HeaderDivider'
import InstantQuote from './InstantQuoteButton'
import Logo from './Logo'


const container = React.createRef();

function HeaderButtons() {

    return (
        <>
            <Flex position="sticky" bg="white" top={0} zIndex={4} px={4} align="center" flexDirection="row" justify="space-between" py={2} shadow="base">
                <Flex align={"center"}>
                    <Drawer />
                    <Box ml={4}>
                        <Logo />
                    </Box>
                </Flex>
                <InstantQuote />
            </Flex>
            <HeaderDivider />

        </>
    )
}

export default HeaderButtons