import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, useColorModeValue, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
function TabsPanel() {
    const route = useRouter()

    return (
        <Tabs variant='unstyled' fontFamily={"Outfit"}>
            <TabList>
                <Tab onClick={() => route.push("./")}>
                    <Text fontSize={"16"}
                        color='gray.700'
                        fontWeight='300'>Home</Text>
                </Tab>
                <Tab onClick={() => route.push("./services")}>
                    <Text fontSize={"16"}
                        color='gray.700'
                        fontWeight='300'>Service</Text>
                </Tab>
                <Tab onClick={() => route.push("./about")}>
                    <Text fontSize={"16"}
                        color='gray.700'
                        fontWeight='300'>About</Text>
                </Tab>
                <Tab onClick={() => route.push("./contactUs")}>
                    <Text fontSize={"16"}
                        color='gray.700'
                        fontWeight='300'>Contact Us</Text>
                </Tab>
            </TabList>
        </Tabs >
    )
}

export default TabsPanel