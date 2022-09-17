import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { Fragment, useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import Colors from '../assets/Colors';


const data = [
    {
        id: '0',
        title: 'Instagram Pictures',
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





    const SliderCard = ({ item: { img, title, id } }: any) => {

        const previousState = () => {

            const x = currentIndex - 1
            setCurrentIndex(x)
        };

        const nextState = () => {

        }

        const nutralState = () => {

        }


        return (
            <Box position='relative' >

                <Image rounded='md' src={img} alt="Segun Adebayo" w={60} h={80} />

                <Text>{title}</Text>
                <Flex onClick={() => previousState()} cursor='pointer' backgroundColor={Colors.red} borderColor={'#fff'} borderWidth={4} w={'45px'} h={'45px'} rounded='full' position='absolute' align='center' justify="center" top="40%" left={"-30px"}>
                    <GoChevronLeft color='white' size={32} />
                </Flex>

                <Flex onClick={() => nextState()} cursor='pointer' backgroundColor={Colors.red} borderColor={'#fff'} borderWidth={4} w={'45px'} h={'45px'} rounded='full' position='absolute' align='center' justify="center" top="40%" right={"-30px"}>
                    <GoChevronRight color='white' size={32} />
                </Flex>

            </Box>
        )
    }



    return (
        <>

            <Box mt={2} backgroundColor={"#f5f5f5"} rounded="md" p={4} position='relative'>

                <Text>Image Slider</Text>

                <Flex flexDirection="column" align="center" py={2}>
                    {data.map((item) => {
                        let parseIn = parseInt(item.id)
                        console.log('DATA LENGTH', parseIn)
                        return (<SliderCard key={item.id} item={item} />)
                    })}
                </Flex>

            </Box>
        </>
    )
}

export default ImageSlider