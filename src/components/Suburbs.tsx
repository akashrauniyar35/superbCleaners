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
];

function Suburbs() {
    return (
        <Box mt={2} backgroundColor={Colors.red} rounded="md" p={4} position='relative'>
            <Text mb={2} textAlign="left" fontSize="20" fontWeight="bold" color="#fff">Sydney</Text>
            <UnorderedList>
                <Flex align="center" flexWrap='wrap' >

                    {data.map((item) => {
                        return (
                            <ListItem marginRight={8} marginBottom={2} color="#fff">
                                <Text fontSize="14" marginLeft={4} color="#fff">{item.title}</Text>
                            </ListItem>
                        )
                    })}
                </Flex>
            </UnorderedList>

        </Box>
    )
}

export default Suburbs