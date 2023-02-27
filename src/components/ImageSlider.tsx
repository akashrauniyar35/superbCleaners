import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const data = [
    {
        id: '00',
        img: '/galleryOne.png',
    },
    {
        id: '01',
        img: '/galleryTwo.png',
    },
    {
        id: '02',
        img: '/galleryThree.png',
    },
    {
        id: '03',
        img: '/galleryFour.png',
    },
    {
        id: '04',
        img: '/galleryFive.png',
    },
    {
        id: '05',
        img: '/gallerySix.png',
    },
    {
        id: '07',
        img: '/galleryEight.png',
    },

]

function ImageSlider() {
    const SliderCard = ({ item: { img, title, id } }: any) => {
        return (

            <Image alt="" rounded='md' src={img} w={'60px'} h={'280px'} />

        )
    }

    return (
        <>
            <Box my={4} backgroundColor={"#f5f5f5"} rounded="md" px={4} py={6} position='relative' shadow="base" marginX="auto">
                <Text fontFamily="Outfit" textAlign="left" fontSize="18" fontWeight="600" color="gray.700">Gallery</Text>
                <Flex flexDirection="column" align="center" pt={4} w={{ base: '100%', lg: '90%', sm: '100%', }} marginX="auto">
                    <Carousel showArrows={false} showThumbs={false} interval={2000} autoPlay={true} infiniteLoop={true} swipeable={false} showIndicators={false}>
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