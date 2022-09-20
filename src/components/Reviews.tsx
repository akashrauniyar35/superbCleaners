import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillStar } from 'react-icons/ai';

const data = [
    {
        id: '00',
        service: "End of Lease Cleaning",
        name: 'Cristiano Ronaldo',
        comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
        date: '20 August',
        star: 5,
        img: '/userOne.png'
    },
    {
        id: '01',
        service: "General Cleaning",
        name: 'Nick Mandra',
        comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again first time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
        date: '14 April',
        star: 5,
        img: '/userOne.png'
    },
    {
        id: '02',
        service: "End of Lease Cleaning",
        name: 'Sam Sandra',
        comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
        date: '08 January',
        star: 4,
        img: '/userOne.png',

    },
]

function Reviews() {


    const ReviewCard = ({ item: { service, name, comment, date, img, star } }: any) => {


        function ratings(star: any) {
            for (let i = 0; i < star; i++) {
                return <AiFillStar color={"#ffdd43"} />
            }
        }

        return (
            <Flex flexDirection="column" align="left" position="relative">

                <Flex flexDirection="row" align="center" alignSelf="left" justify="flex-start">
                    <Box h="35px" w="35px" >
                        <Image rounded='md' src={img} />
                    </Box>
                    <Flex align="top" justify="space-between" w="100%">
                        <Box pl={4}>
                            <Text textAlign="left" fontSize="16" fontWeight="medium" color="gray.700">{name}</Text>
                            {ratings(star)}
                        </Box>
                        <Text textAlign="left" fontSize="10" fontWeight="medium" color="gray.700">{date}</Text>
                    </Flex>

                </Flex>

                <Box bg='#fff' rounded='md' p={2} mt={4} h={32} shadow="inner">
                    <Text textAlign="left" fontSize="10" fontWeight="medium" color="gray.700">{comment}</Text>
                </Box>




            </Flex >
        )
    }
    return (
        <>
            <Box mt={2} backgroundColor={"#f5f5f5"} rounded="md" px={4} pt={4} position='relative'>
                <Text textAlign="left" fontSize="20" fontWeight="bold" color="gray.700">Reviews</Text>


                <Flex flexDirection="column" pt={2}>

                    <Carousel  showStatus={false} autoPlay={true} infiniteLoop={true} swipeable={true} showIndicators={false} showArrows={false}>
                        {data.map((item) => {
                            let parseIn = parseInt(item.id)
                            console.log('DATA LENGTH', parseIn)
                            return (<ReviewCard key={item.id} item={item} />)

                        })}
                    </Carousel>

                </Flex>
            </Box>
        </>
    )
}

export default Reviews