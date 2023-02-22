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

    const SliderCard = ({ item: { img, title, id } }: any) => {
        return (

            <Image alt="" rounded='md' src={img} w={'60px'} h={'280px'} />

        )
    }



    return (
        <>
            <Box my={4} backgroundColor={"#f5f5f5"} rounded="md" px={4} py={6} position='relative' shadow="base" w={{ base: '98%', md: '80%', lg: '70%' }} marginX="auto">
                <Text fontFamily="Outfit" textAlign="left" fontSize="18" fontWeight="600" color="gray.700">Gallery</Text>
                <Flex flexDirection="column" align="center" pt={4} w={{ base: '100%', lg: '40%', sm: '100%' }} marginX="auto">
                    <Carousel showThumbs={false} interval={2000} autoPlay={true} infiniteLoop={true} swipeable={true} showIndicators={false}>
                        {data.map((item) => {
                            return (<SliderCard key={item.id} item={item} />)

                        })}
                    </Carousel>
                </Flex>

            </Box>
        </>
    )
}

export default ImageSlider