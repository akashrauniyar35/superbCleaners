import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import Drawer from './Drawer'
import HeaderDivider from './HeaderDivider'
import InstantQuote from './InstantQuoteButton'
import Logo from './Logo'

function HeaderButtons() {
    return (
        <>
            <Flex px={4} align="center" flexDirection="row" justify="space-between" my="2">
                <Drawer />
                <Logo />
                <InstantQuote />
            </Flex>
            <HeaderDivider />
        </>
    )
}

export default HeaderButtons