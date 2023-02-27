import { Box, Circle, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillStar } from 'react-icons/ai';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const data = [
    {
        id: '00',
        service: "Manly NSW",
        name: 'Aaron Mcguire',
        comment: 'I recently used Hassle Free Cleaning to deep clean my home and was blown away by the results. The team arrived on time, were friendly and professional, and completed the job to an incredibly high standard. They paid great attention to detail and left every surface spotless, including hard-to-reach areas that I had never been able to clean properly myself. The communication from the company was excellent, and the price was very reasonable for the quality of work that was done. I couldnt be happier with the service I received and would highly recommend Hassle Free Cleaning to anyone in need of a professional and reliable cleaning service. 5 stars!',
        date: '12 Feburary',
        star: 5,
        img: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        id: '01',
        service: "Chatswood NSW",
        name: 'Charlotte McKennan',
        comment: 'First time using Hassle Free Cleaners and I was very impressed. Friendly, pounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again first time using Hassle Free Cleaners and I was very impressed. Friendlt, ounctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
        date: '14 January',
        star: 5,
        img: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    {
        id: '02',
        service: "Strathfield NSW",
        name: 'Milan Sharma',
        comment: 'I recently booked Hassle Free Cleaning Company for an end of lease cleaning, and I was thoroughly impressed with their service. The team arrived on time, they cleaned every corner of my apartment to an incredibly high standard, and the property looked spotless when they were finished. They were also very thorough and made sure to clean areas that are often overlooked in regular cleaning. The communication from the company was excellent, and the price was very reasonable for the quality of work that was done. I received my full bond back without any issues, and I know that the cleaning played a big part in that. I would highly recommend Hassle Free Cleaning to anyone in need of an end of lease cleaning service. Thank you for a job well done! 5 stars.',
        date: '02 December',
        star: 5,
        img: '/userTwo.png',
    },
    {
        id: '03',
        service: "North Sydney",
        name: 'Abdul Khan',
        comment: 'This guys has cleaned my house beyond my expectation. I celebrated my great festival with a very clean house. Thank you Hassle Free for your five star service. Will definately recommend to the colleagues.',
        date: '14 November',
        star: 5,
        img: '/userOne.png',
    },
    {
        id: '04',
        service: "Bondi",
        name: 'Bella Smith',
        comment: 'Good guys, arrived on time and did a fantastic job. Highly recommended Hassle Free Cleaning for end of lease cleaning service.',
        date: '03 November',
        star: 5,
        img: 'https://randomuser.me/api/portraits/women/90.jpg',
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
                        <Image alt="" rounded='full' src={img} />
                    </Box>
                    <Flex align="top" justify="space-between" w="100%">
                        <Box pl={4}>
                            <Text fontFamily="Outfit" textAlign="left" fontSize="16" fontWeight="600" color="gray.700">{name}</Text>
                            <Text fontFamily="Outfit" textAlign="left" fontSize="10" fontWeight="700" color="gray.500">{service}</Text>
                            {star > 4 ? fiveStars() : fourStars()}
                        </Box>
                        <Text fontFamily="Outfit" textAlign="left" fontSize="10" fontWeight="300" color="gray.700">{date}</Text>
                    </Flex>
                </Flex>

                <Box bg='#fff' rounded='md' p={2} mt={2} shadow="inner" >
                    <Text fontFamily="Outfit" textAlign="left" fontSize="13" p={2} fontWeight="300" color="gray.700">{comment}</Text>
                </Box>
            </Flex >
        )
    }

    const arrowPrevious = (clickHandler: any) => {
        return (
            <Circle bgGradient='linear(to-tr, red.300, #e5236c)' onClick={clickHandler} cursor='pointer' borderColor={'#fff'} borderWidth={2} size="35px" rounded='full' position='absolute' bottom="0" left={"10px"} zIndex={2}>
                <GoChevronLeft color='white' size={32} />
            </Circle>
        )
    }
    const arrowNext = (clickHandler: any) => {
        return (
            <Circle zIndex={2} onClick={clickHandler} cursor='pointer' bgGradient='linear(to-tr, red.300, #e5236c)' borderColor={'#fff'} borderWidth={2} size="35px" rounded='full' position='absolute' bottom="0" right={"10px"} >
                <GoChevronRight color='white' size={32} />
            </Circle>
        )
    }

    return (
        <>
            <Box backgroundColor={"#f5f5f5"} rounded="md" px={4} py={6} shadow="base" marginX="auto" >

                <Text fontFamily="Outfit" textAlign="left" fontSize="18" fontWeight="600" color="gray.700">Testimonials</Text>

                <Flex flexDirection="column" pt={2} w={{ base: "100%", lg: '90%', sm: '100%' }} marginX="auto">
                    <Carousel showThumbs={false} swipeable={false} interval={5000} showStatus={false} infiniteLoop={true} renderArrowNext={(clickHandler) => arrowNext(clickHandler)} renderArrowPrev={(clickHandler) => arrowPrevious(clickHandler)}
                    >
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