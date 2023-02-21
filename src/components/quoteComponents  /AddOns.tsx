import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Circle, Flex, HStack, Image, Skeleton, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import Colors from '../../assets/Colors'
import { IoMdAddCircle, IoMdRemoveCircle, IoMdCheckmarkCircle, IoMdAdd, IoMdRemove } from 'react-icons/io'
import { addAddOn, removeAddOn } from '../../redux/slice';
import { useDispatch, useSelector } from 'react-redux'


function AddOns() {
    const [steameClean, setSteameClean] = useState(false)
    const [loaded, setLoaded] = useState(true)
    const [linesVisible, setLinesVisible] = useState(false);
    const dispatch = useDispatch()
    const [data, setData] = useState([
        {
            id: '00',
            label: 'Study room',
            count: 0,
            icon: '/study.png',
        },
        {
            id: '01',
            label: 'Laundry',
            count: 0,
            icon: '/laundry.png',
        },
        {
            id: '02',
            label: 'Separate toilet',
            count: 0,
            icon: '/toilet.png',
        },
        {
            id: '03',
            label: 'Balcony',
            count: 0,
            icon: '/balcony.png',
        },
        {
            id: '04',
            label: 'Wall spot clean',
            count: 0,
            icon: '/wall.png',
        },
        {
            id: '05',
            label: 'Garage',
            count: 0,
            icon: '/garage.png',
        },
        {
            id: '06',
            label: 'Blinds',
            count: 0,
            icon: '/blinds.png',
        },
        {
            id: '08',
            label: 'Carpets Steam Clean',
            count: 0,
            icon: '/carpet.png',
        },
    ]
    )



    const AddOnCards = ({ item }: any) => {
        let pp: any = []
        const onAddClick = (item: any) => {
            let newAddons = data.map((x: any) => {
                if (x.label === item.label) {
                    return { ...x, count: x.count + 1 }
                }
                return x
            })
            setData(newAddons)
            newAddons.map((y: any) => {
                if (y.count >= 1) {
                    pp.push(y)
                }
            })
            dispatch(addAddOn(pp))
        }


        const onRemoveClick = (item: any) => {
            let pp: any = []
            let newAddons = data.map((x: any) => {
                if (x.label === item.label) {
                    return { ...x, count: x.count > 0 ? x.count - 1 : 0 }
                }
                return x
            })
            setData(newAddons)
            newAddons.map((y: any) => {
                if (y.count >= 1) {
                    pp.push(y)
                }
            })
            dispatch(removeAddOn(pp))

        }

        return (
            <>
                <Flex justify="space-between" mb={2}>

                    <Flex align="center">
                        <Image
                            boxSize='20px'
                            objectFit='cover'
                            src={item.icon}
                            opacity={item.label === "Wall spot clean" ? .6 : .9}
                            background={'#fff'}
                            mr={4}
                        />
                        <Text fontSize="14" fontWeight="sm" color={"gray.700"}>{item.label}</Text>
                    </Flex>

                    <Flex align="center" justify="space-evenly" borderBottomRadius={'md'}>
                        <Box bgGradient='linear(to-tr, red.300, #e5236c)' p={.5} rounded="sm" shadow="base">
                            <IoMdRemove onClick={() => onRemoveClick(item)} size={16} color={"white"} cursor='pointer' />
                        </Box>
                        <Text px={4} fontSize="16" fontWeight="sm" color={"gray.700"}>{item.count}</Text>
                        <Box bgGradient='linear(to-tr, red.300, #e5236c)' p={.5} rounded="sm" shadow="base">
                            <IoMdAdd onClick={() => onAddClick(item)} size={16} color={"white"} cursor='pointer' />
                        </Box>
                    </Flex>
                </Flex>
            </>
        )
    }




    return (
        <>
            <Box>
                <Accordion allowToggle borderColor="transparent" onChange={(expandedIndex) => expandedIndex === 0 ? setLinesVisible(true) : setLinesVisible(false)}>
                    <AccordionItem>

                        <AccordionButton bgGradient='linear(to-tr, red.300, #e5236c)' rounded="sm">
                            <Text fontSize="18" fontWeight="bold" color={"#fff"}>Add-ons</Text>
                        </AccordionButton>

                        <AccordionPanel>
                            {
                                data.map((item) => {
                                    return (
                                        <AddOnCards key={item.id} item={item} />
                                    )
                                })
                            }
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </>
    )
}

export default AddOns