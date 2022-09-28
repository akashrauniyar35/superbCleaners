import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ProductSelectedCard from './ProductSelectedCard'





const data = [
    {
        id: '00',
        service: 'End of Lease Cleaning',
        property: 'Unit',
        bedroomCount: 2,
        bathroomCount: 3,
        addOns: [
            {
                id: '00',
                count: 2,
                label: 'Separate Toilet'
            },
            {
                id: '01',
                count: 1,
                label: 'Garage'
            },
            {
                id: '02',
                count: 1,
                label: 'Study Room'
            },
            {
                id: '03',
                count: 1,
                label: 'Study Room'
            },
            {
                id: '03',
                count: 1,
                label: 'Study Room'
            },
            {
                id: '03',
                count: 1,
                label: 'Study Room'
            },
            {
                id: '03',
                count: 1,
                label: 'Study Room'
            },
        ],
    }
]


function ProductsSelected() {



    return (
        <Flex shadow='base' position='sticky' flexDirection='column' bgGradient='linear(to-tr, red.300, #e5236c)' rounded='md' p={.5} px={1} color="white">

            {data.map((item) => <ProductSelectedCard item={item} />)}

        </Flex>
    )
}

export default ProductsSelected