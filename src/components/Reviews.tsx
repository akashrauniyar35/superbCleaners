import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillStar } from 'react-icons/ai';

const data = [
    {
        id: '00',
        service: "End of Lease Cleaning",
        name: 'Kole Mcguire',
        comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
        date: '20 August',
        star: 5,
        img: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        id: '01',
        service: "General Cleaning",
        name: 'Charlotte McKennan',
        comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again first time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
        date: '14 April',
        star: 5,
        img: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    {
        id: '02',
        service: "End of Lease Cleaning",
        name: 'Jposhua Lewis',
        comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
        date: '08 January',
        star: 4,
        img: 'https://randomuser.me/api/portraits/men/72.jpg',
    },
    {
        id: '03',
        service: "End of Lease Cleaning",
        name: 'Darcy Sellers',
        comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
        date: '08 January',
        star: 4,
        img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: '04',
        service: "End of Lease Cleaning",
        name: 'Courtney Allen',
        comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
        date: '08 January',
        star: 4,
        img: 'https://randomuser.me/api/portraits/women/90.jpg',
    },
    {
        id: '05',
        service: "End of Lease Cleaning",
        name: 'John Maldonado',
        comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
        date: '08 January',
        star: 4,
        img: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    {
        id: '06',
        service: "End of Lease Cleaning",
        name: 'Bikash Patel',
        comment: 'First time using Wedo Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
        date: '08 January',
        star: 4,
        img: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
]

function Reviews() {


    const ReviewCard = ({ item: { service, name, comment, date, img, star } }: any) => {




        function fiveStars() {
            return (
                <Flex>
                    <AiFillStar color={"#ffdd43"} />
                    <AiFillStar color={"#ffdd43"} />
                    <AiFillStar color={"#ffdd43"} />
                    <AiFillStar color={"#ffdd43"} />
                    <AiFillStar color={"#ffdd43"} />
                </Flex>
            )
        }
        function fourStars() {
            return (
                <Flex>
                    <AiFillStar color={"#ffdd43"} />
                    <AiFillStar color={"#ffdd43"} />
                    <AiFillStar color={"#ffdd43"} />
                    <AiFillStar color={"#ffdd43"} />
                </Flex>
            )
        }





        return (
            <Flex flexDirection="column" align="left" position="relative">

                <Flex flexDirection="row" align="center" alignSelf="left" justify="flex-start">
                    <Box h="45px" w="45px" >
                        <Image rounded='full' src={img} />
                    </Box>
                    <Flex align="top" justify="space-between" w="100%">
                        <Box pl={4}>
                            <Text textAlign="left" fontSize="16" fontWeight="medium" color="gray.700">{name}</Text>
                            <Text textAlign="left" fontSize="10" fontWeight="medium" color="gray.400">{service}</Text>
                            {star > 4 ? fiveStars() : fourStars()}
                        </Box>
                        <Text textAlign="left" fontSize="10" fontWeight="medium" color="gray.700">{date}</Text>
                    </Flex>

                </Flex>

                <Box bg='#fff' rounded='md' p={2} mt={4} h={32} shadow="inner">
                    <Text textAlign="left" fontSize="13" p={2} fontWeight="medium" color="gray.700">{comment}</Text>
                </Box>




            </Flex >
        )
    }
    return (
        <>
            <Box my={4} backgroundColor={"#f5f5f5"} rounded="md" px={4} pt={4} position='relative' shadow="base">
                <Text textAlign="left" fontSize="18" fontWeight="bold" color="gray.700">Reviews</Text>


                <Flex flexDirection="column" pt={2}>

                    <Carousel showStatus={false} autoPlay={true} infiniteLoop={true} swipeable={true} showIndicators={false} showArrows={false}>
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