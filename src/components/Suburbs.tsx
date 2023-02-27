import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'


const data = [
    {
        id: '00',
        title: 'Chatswood',
    },
    {
        id: '01',
        title: 'Bondi',
    },
    {
        id: '02',
        title: 'Manly',
    },
    {
        id: '03',
        title: 'Coogee',
    },
    {
        id: '04',
        title: 'North Sydney',
    },
    {
        id: '05',
        title: 'Ashfield',
    },
    {
        id: '06',
        title: 'Eastwood',
    },
    {
        id: '07',
        title: 'Hornsby',
    },
    {
        id: '08',
        title: 'Manly Beach',
    },
    {
        id: '09',
        title: 'Epping',
    },
    {
        id: '10',
        title: 'Strathfield',
    },
    {
        id: '11',
        title: 'Burwood',
    },
    {
        id: '12',
        title: 'Ashfield',
    },
    {
        id: '13',
        title: 'Ryde',
    },
    {
        id: '14',
        title: 'Five Dock',
    },
    {
        id: '15',
        title: 'Parramatta',
    },
    {
        id: '16',
        title: 'Lidcombe',
    },
    {
        id: '17',
        title: 'Auburn',
    },
    {
        id: '18',
        title: 'Hurstville',
    },

];

function Suburbs() {
    return (
        <Box my={4} bg="#f5f5f5" rounded="md" p={4} position='relative' shadow="base" marginX="auto">
            <Text mb={2} textAlign="left" fontSize="18" fontWeight="bold" color="gray.700">Sydney</Text>
            <UnorderedList>
                <Flex align="center" flexWrap='wrap' w={{ lg: '80%', sm: '90%' }}>

                    {data.map((item) => {
                        return (
                            <ListItem key={item.id} marginRight={8} marginBottom={2} color="gray.700"  >
                                <Text fontWeight="300" fontFamily="Outfit" fontSize="14" color="gray.700" >{item.title}</Text>
                            </ListItem>
                        )
                    })}
                </Flex>
            </UnorderedList>

        </Box >
    )
}

export default Suburbs