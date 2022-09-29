import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { Fragment, useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import Colors from '../assets/Colors';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const data = [
    {
        id: '0',
        title: 'This will be some description of the picture dont know how to make a description but trying my best.',
        img: 'https://scitechdaily.com/images/New-Hubble-Image-Shows-Part-of-the-Large-Magellanic-Cloud.jpg',
    },
    {
        id: '1',
        title: 'Instagram Pictures',
        img: 'https://www.bondcleaninginbrisbane.com.au/wp-content/uploads/2021/09/blog-banner-bg.png',
    },
    {
        id: '2',
        title: 'Instagram Pictures',
        img: 'https://www.bondcleaninginbrisbane.com.au/wp-content/uploads/2018/09/31192-womancleaning-womanexhausted-tiredwoman-tired-cleaning-springcleaning.jpg',
    },
    {
        id: '3',
        title: 'Instagram Pictures',
        img: 'https://www.bondcleaninginbrisbane.com.au/wp-content/uploads/2020/07/service-img-3.png',
    },

]

function ImageSlider() {

    const [currentIndex, setCurrentIndex] = useState(0)

    console.log("Current index", currentIndex)




    const arrowPrevious = (clickHandler: any) => {
        return (
            <Flex onClick={clickHandler} cursor='pointer' backgroundColor={"blue.700"} borderColor={'#fff'} borderWidth={2} w={'35px'} h={'35px'} rounded='full' position='absolute' align='center' justify="center" top="40%" left={"2px"} zIndex="5">
                <GoChevronLeft color='white' size={32} />
            </Flex>
        )
    }
    const arrowNext = (clickHandler: any) => {
        return (
            <Flex onClick={clickHandler} cursor='pointer' backgroundColor={"blue.700"} borderColor={'#fff'} borderWidth={2} w={'35px'} h={'35px'} rounded='full' position='absolute' align='center' justify="center" top="40%" right={"2px"} zIndex="2">
                <GoChevronRight color='white' size={32} />
            </Flex>
        )
    }






    const SliderCard = ({ item: { img, title, id } }: any) => {


        return (
            <Box position='relative'>

                <Box py={2} bg='white' position='absolute' bottom='0' borderBottomRadius='md' w="100%" textAlign='left' px="2">
                    <Text alignSelf="left" fontSize='10' color='gray.700' opacity='1'>{title}</Text>
                </Box>
                <Image rounded='md' src={img} w={'60px'} h={'280px'} />
            </Box >
        )
    }



    return (
        <>
            <Box my={4} backgroundColor={"#f5f5f5"} rounded="md" px={4} pt={4} position='relative' shadow="base" w={{ base: '88%', md: '50%', lg: '70%' }} marginX="auto">
                <Text textAlign="left" fontSize="18" fontWeight="bold" color="gray.700">Instagram Pictures</Text>
                <Flex flexDirection="column" align="center" pt={4} w={{ lg: '40%', sm: '80%' }} marginX="auto">
                    <Carousel interval={2000} autoPlay={true} infiniteLoop={true} swipeable={true} showIndicators={false} renderArrowNext={(clickHandler) => arrowNext(clickHandler)} renderArrowPrev={(clickHandler) => arrowPrevious(clickHandler)} >
                        {data.map((item) => {
                            let parseIn = parseInt(item.id)
                            console.log('DATA LENGTH', parseIn)
                            return (<SliderCard key={item.id} item={item} />)

                        })}
                    </Carousel>
                </Flex>

            </Box>
        </>
    )
}

export default ImageSlider