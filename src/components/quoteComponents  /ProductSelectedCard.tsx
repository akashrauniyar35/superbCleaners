import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoMdCart } from 'react-icons/io';

function ProductSelectedCard({ item: { service, bedroomCount, bathroomCount, addOns } }: any) {
    const [linesVisible, setLinesVisible] = useState(false);


    const Circle = ({ count, id, transparent }: any) => {

        const isLast = addOns.length - id === 1 ? true : false;

        return (
            <Flex justify="center" w="6" h="6" rounded='full' bg={!transparent ? "white" : "transparent"} shadow={!transparent ? 'base' : "none"} position="relative" >
                {linesVisible ? <Text
                    bgGradient='linear(to-tr, red.300, #e5236c)'
                    bgClip='text'
                    alignSelf='center'
                    marginLeft="-1px"
                    fontWeight="bold"
                    fontSize="13">{count}
                </Text> : <Flex bgGradient='linear(to-tr, red.300, #e5236c)' align='center' justify="center" w="6" h="6" borderWidth={1} borderColor="white" rounded='full'><IoMdCart size={'16'} /></Flex>}
                <Box h={linesVisible ? !isLast ? "4" : "0" : "0"} top={'24px'} bg="transparent" position="absolute" borderStyle={!transparent ? "dotted" : "none"} borderLeftWidth={4} zIndex={1} borderColor={'white'} />
            </Flex >
        )
    }


    return (
        <>

            <Box position="relative">
                <Accordion allowToggle borderColor="transparent" onChange={(expandedIndex) => expandedIndex === 0 ? setLinesVisible(true) : setLinesVisible(false)}>
                    <AccordionItem>
                        <AccordionButton>
                            <Flex flex='1' textAlign='left' align='center'>
                                <Circle count={1} transparent={false} />
                                <Flex align="center" justify="space-between" w="87%">
                                    <Text marginLeft="3" fontSize='16' fontWeight="medium">{linesVisible ? service : "Cart All Items"}</Text>
                                    <Flex w='30%' align='center' justify="left">
                                        <Text fontSize='16' fontWeight="medium" ml='5'>$</Text>
                                        <Text fontSize='16' fontWeight="medium" ml='2'>150.00</Text>
                                    </Flex>
                                </Flex>
                            </Flex>

                        </AccordionButton>
                        <AccordionPanel pb={4}>

                            <Box>
                                <Flex flex='1' align='center' >
                                    <Circle count={bedroomCount} transparent={false} />
                                    <Flex align="center" justify="space-between" w="87%" >
                                        <Text marginLeft="3" fontSize='16' fontWeight="medium">Bedrooms</Text>
                                        <Flex w='30%' align='center' justify="left">
                                            <Text fontSize='16' fontWeight="medium" ml='5'>$</Text>
                                            <Text fontSize='16' fontWeight="medium" ml='2'>150.00</Text></Flex>
                                    </Flex>
                                </Flex>
                            </Box>

                            {/* <Box mt={4}>
                                <Flex flex='1' align='center' >
                                    <Circle count={bathroomCount} transparent={false} />
                                    <Flex align="center" justify="space-between" w="87%" >
                                        <Text marginLeft="3" fontSize='16' fontWeight="medium">Bedrooms</Text>
                                        <Flex w='30%' align='center' justify="left">
                                            <Text fontSize='16' fontWeight="medium" ml='5'>$</Text>
                                            <Text fontSize='16' fontWeight="medium" ml='2'>80.00</Text></Flex>
                                    </Flex>
                                </Flex>
                            </Box> */}

                            <Box mt={4}>
                                <Flex flex='1' align='center' >
                                    <Circle count={bathroomCount} transparent={false} />
                                    <Flex align="center" justify="space-between" w="87%" >
                                        <Text marginLeft="3" fontSize='16' fontWeight="medium">Bathroom</Text>
                                        <Flex w='30%' align='center' justify="left">
                                            <Text fontSize='16' fontWeight="medium" ml='5'>$</Text>
                                            <Text fontSize='16' fontWeight="medium" ml='2'>80.00</Text></Flex>
                                    </Flex>
                                </Flex>
                            </Box>

                            {addOns.map((item: any, index: number) => {
                                return (
                                    <Box mt={4} key={item.id}>
                                        <Flex flex='1' align='center' >
                                            <Circle count={item.count} id={index} transparent={false} />
                                            <Flex align="center" justify="space-between" w="87%" >
                                                <Text marginLeft="3" fontSize='16' fontWeight="medium">{item.label}</Text>
                                                <Flex w='30%' align='center' justify="left">
                                                    <Text fontSize='16' fontWeight="medium" ml='5'>$</Text>
                                                    <Text fontSize='16' fontWeight="medium" ml='2'>80.00</Text></Flex>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                )
                            })}




                            <Box mt={4}>
                                <Box w="100%" opacity={.5} bg='white' h="1px" rounded="full" alignSelf="center" />

                                <Flex flex='1' align='center' mt={2}>
                                    <Circle transparent={true} />
                                    <Flex align="center" justify="space-between" w="87%" >
                                        <Text marginLeft="3" fontSize='16' fontWeight="bold">Total</Text>
                                        <Flex w='30%' align='center' justify="left">
                                            <Text fontSize='16' fontWeight="bold" ml='5'>$</Text>
                                            <Text fontSize='16' fontWeight="bold" ml='2'>800.00</Text></Flex>
                                    </Flex>
                                </Flex>
                            </Box>


                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>




            </Box>
        </>
    )
}

export default ProductSelectedCard