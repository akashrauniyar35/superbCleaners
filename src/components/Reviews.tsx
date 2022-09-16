import { Box } from '@chakra-ui/react'
import React from 'react'

function Reviews() {

    const data = [
        {
            id: '00',
            service: "End of Lease Cleaning",
            name: 'Nick Sandra',
            comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
            date: '20 Aug'
        },
        {
            id: '01',
            service: "General Cleaning",
            name: 'Nick Sandra',
            comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
            date: '14 Apr'
        },
        {
            id: '02',
            service: "End of Lease Cleaning",
            name: 'Nick Sandra',
            comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
            date: '08 Jan'
        },
    ]



    return (
        <>
            <Box mt={2} backgroundColor={"#f5f5f5"} rounded="md" p={4} position='relative'>
                Reviews
            </Box>
        </>
    )
}

export default Reviews