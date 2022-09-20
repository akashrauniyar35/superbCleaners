import { Box, Flex, Image, Skeleton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Colors from '../../assets/Colors'
import { IoMdAddCircle, IoMdRemoveCircle, IoMdCheckmarkCircle } from 'react-icons/io'
import { addAddOn } from '../../redux/slice';
import { useDispatch, useSelector } from 'react-redux'



function AddOns() {
    const [steameClean, setSteameClean] = useState(false)
    const [loaded, setLoaded] = useState(true)

    const dispatch = useDispatch()
    const addOnData = useSelector((state: any) => state.addOns)
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
            label: 'Wall wash',
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
            id: '07',
            label: 'Carpets',
            count: 0,
            steameClean: false,
            icon: '/carpet.png',
        },
    ]
    )




    const AddOnCards = ({ item }: any) => {
        const [counters, setCounters] = useState(0)

        const onAddClick = (item: any) => {
            setCounters(counters + 1)
            let selectedAddon = {
                id: item.id,
                title: item.label,
                count: counters
            }
            // dispatch(addAddOn({selectedAddon}))
        }

        const onRemoveClick = (item: any) => {
            setCounters(counters > 0 ? counters - 1 : 0)
            let selectedAddon = {
                id: item.id,
                title: item.label,
                count: counters
            }

        }


        const General = () => {
            return (
                <>
                    <Flex borderWidth={.1} borderColor={'gray.200'} rounded='md' align='center' flexDirection='column' w={120} mb={3} mx={1}>
                        <Skeleton w={'100%'} isLoaded={loaded} >

                            <Flex align='center' bgGradient='linear(to-r, blue.700 82%, blue.500)' w="100%" justify="left" borderTopRadius={'md'}>
                                <Text fontSize='14' ml={2} fontWeight='medium' color={'#fff'}>{item.label}</Text>
                            </Flex>
                            <Flex align="center" flexDirection='column'>
                                <Image
                                    boxSize='60px'
                                    objectFit='cover'
                                    src={item.icon}
                                    background='white'
                                    padding='2'
                                    rounded='lg'
                                />
                            </Flex>

                            <Flex align="center" justify="space-evenly" w="100%" bgGradient='linear(to-r, blue.700 82%, blue.500)' borderBottomRadius={'md'}>
                                <IoMdRemoveCircle onClick={() => onRemoveClick(item)} size={16} color={'#fff'} cursor='pointer' />
                                <Text px={4} fontSize="16" fontWeight="bold" color={'#fff'}>{counters}</Text>
                                <IoMdAddCircle onClick={() => onAddClick(item)} size={16} color={'#fff'} cursor='pointer' />
                            </Flex>
                        </Skeleton>
                    </Flex>
                </>
            )
        }

        const Carpets = () => {

            const ShowAddButtons = () => {
                return (
                    <Flex align="center" justify="space-evenly" w="100%" bgGradient='linear(to-r, blue.700 82%, blue.500)' borderBottomRadius={'md'}>
                        <Text fontSize='14' w="48%" fontWeight='medium' color={'#fff'}>No. of Rooms</Text>
                        <IoMdRemoveCircle size={16} color={'#fff'} cursor='pointer' />
                        <Text px={4} fontSize="16" fontWeight="bold" color={'#fff'}>{'1'}</Text>
                        <IoMdAddCircle size={16} color={'#fff'} cursor='pointer' />
                    </Flex>
                )
            }

            return (
                <>


                    <Flex borderWidth={.1} borderColor={'gray.200'} rounded='md' align='left' flexDirection='column' w={250} mb={3} mx={1} >
                        <Skeleton w="100%" isLoaded={loaded} >

                            <Flex align='center' bgGradient='linear(to-r, blue.700 82%, blue.500)' w="100%" justify="left" borderTopRadius={'md'}>
                                <Text fontSize='14' ml={2} fontWeight='medium' color={'#fff'}>{item.label}</Text>
                            </Flex>

                            <Flex align="center" px={1}>

                                <Image
                                    boxSize='60px'
                                    objectFit='cover'
                                    src={item.icon}
                                    background={'#fff'}
                                    padding='2'
                                    rounded='lg'
                                />
                                <Box ml={2}>
                                    <Flex onClick={() => setSteameClean(!steameClean)} align='' my={2} cursor="pointer" justify='space-between' w="140%">
                                        <Text fontSize='12' fontWeight='medium' color={Colors.mattBlue}>Vaccumed Only</Text>

                                        {!steameClean ? <IoMdCheckmarkCircle size={16} color={'#48A14D'} cursor='pointer' /> : null}
                                    </Flex>

                                    <Flex onClick={() => setSteameClean(!steameClean)} align='' my={1} cursor="pointer" justify='space-between' w="140%">
                                        <Text fontSize='12' fontWeight='medium' color={Colors.mattBlue}>Steam Cleaned</Text>
                                        {steameClean ? <IoMdCheckmarkCircle size={16} color={'#48A14D'} cursor='pointer' /> : null}
                                    </Flex>
                                </Box>

                            </Flex>

                            <ShowAddButtons />


                        </Skeleton>
                    </Flex>

                </>
            )
        }

        return item.label === "Carpets" ? <Carpets /> : <General />


    }




    return (
        <>
            <Box>
                <Skeleton isLoaded={loaded} >
                    <Text textAlign="left" fontSize="18" my={2} fontWeight="bold" color={Colors.mattBlue}>Add Ons</Text>
                </Skeleton>
                <Flex align="center" justify="space-evenly" flexWrap="wrap">

                    {
                        data.map((item) => {
                            return (
                                <AddOnCards key={item.id} item={item} />
                            )
                        })
                    }
                </Flex>
            </Box>
        </>
    )
}

export default AddOns