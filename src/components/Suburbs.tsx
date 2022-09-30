import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'


const data = [
    {
        id: '00',
        title: 'StrathField',
    },
    {
        id: '01',
        title: 'Burwood',
    },
    {
        id: '02',
        title: 'Central',
    },
    {
        id: '03',
        title: 'Townhall',
    },
    {
        id: '04',
        title: 'Manly Beach',
    },
    {
        id: '05',
        title: 'Coogee Beach',
    },
    {
        id: '06',
        title: 'Coogee Beach',
    },
    {
        id: '07',
        title: 'Townhall',
    },
    {
        id: '08',
        title: 'Manly Beach',
    },
    {
        id: '09',
        title: 'Coogee Beach',
    },
    {
        id: '10',
        title: 'Coogee Beach',
    },
    {
        id: '11',
        title: 'Townhall',
    },
    {
        id: '12',
        title: 'Manly Beach',
    },
    {
        id: '13',
        title: 'Coogee Beach',
    },
    {
        id: '14',
        title: 'Coogee Beach',
    },
];

function Suburbs() {
    return (
        <Box my={4} bg="#f5f5f5" rounded="md" p={4} position='relative' shadow="base" w={{ base: '98%', md: '80%', lg: '70%' }} marginX="auto">
            <Text mb={2} textAlign="left" fontSize="18" fontWeight="bold" color="gray.700">Sydney</Text>
            <UnorderedList>
                <Flex align="center" flexWrap='wrap' w={{ lg: '80%', sm: '90%' }}>

                    {data.map((item) => {
                        return (
                            <ListItem key={item.id} marginRight={8} marginBottom={2} color="gray.700"  >
                                <Text fontSize="14" color="gray.700" >{item.title}</Text>
                            </ListItem>
                        )
                    })}
                </Flex>
            </UnorderedList>

        </Box >
    )
}

export default Suburbs