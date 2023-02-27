import { Box, Container, Flex, Hide, Show, Stack, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { IoMdCall } from 'react-icons/io'
import Drawer from './Drawer'
import HeaderDivider from './HeaderDivider'
import InstantQuote from './InstantQuoteButton'
import Logo from './Logo'
import TabsPanel from './TabsPanel'
import CallUs from './CallUs'

const container = React.createRef();

function HeaderButtons() {

    return (
        <>

            <Flex position="sticky" bg="white" top={0} zIndex={4} px={4} align="center" flexDirection="row" justify="space-between" py={0} shadow="base" >
                <Flex align="center" justify="space-between" w={{ base: '100%', sm: '100%', md: "80%", lg: '50%' }} marginX="auto" h="70px">

                    <Flex align="center" flex='1' display={{
                        base: "flex", sm: "flex", md: 'flex', lg: "none "
                    }}>
                        <Drawer />
                        <Box ml={4} >
                            <Logo />
                        </Box>
                    </Flex>

                    <Flex align="center" flex='1' display={{
                        base: "none", sm: "none", md: 'none', lg: "flex "
                    }}>
                        < Logo />
                        <Box marginX="auto">
                            <TabsPanel />
                        </Box>
                    </Flex>
                    <CallUs />
                    <InstantQuote />
                </Flex>
            </Flex>
            <HeaderDivider />

        </>
    )
}

export default HeaderButtons