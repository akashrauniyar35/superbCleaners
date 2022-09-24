import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../src/assets/Colors'
import DrawerButton from '../src/components/Drawer'
import Footer from '../src/components/Footer'
import Logo from '../src/components/Logo'


const data = [

    { id: '00', title: 'What?', description: 'We help you by taking care of your home by offering a great variety of cleaning services. We provide domestic and commercial cleaning in Melbourne, Sydney, the UK and even some cities in the US. Everything is done by professionals using high-quality equipment. ', img: './paper.png' },
    { id: '01', title: 'Why?', description: 'We believe cleaning services could be provided in a more fantastic way. Customers are as important as the technicians and this improves the quality. It is called the Fantastic Philosophy! ', img: './heart.png' },
    { id: '02', title: 'How', description: 'We use technology where it works and people where it matters. Through innovation and technology, we are able to provide a high-quality on-demand response to your unique cleaning needs. ', img: './idea.png' },
]


const About = () => {
    return (
        <>
            <Flex px={4} shadow="base" align="center" flexDirection="row" justify="space-between" py={2}>
                <DrawerButton />
                <Logo />
                <Flex align="center">
                    <Image
                        boxSize="14"
                        objectFit="cover"
                        src={"/phone.png"}
                        background={"transparent"}
                        padding="2"
                    />
                </Flex>
            </Flex>

            <Box px={4} pt={4}>
                <Text textAlign="left" fontSize="18" mb={4} fontWeight="bold" color={"gray.700"}>About us</Text>
            </Box>


            <Flex px={4} position='relative' align='center' justify='center'>
                <Flex bgGradient='linear(to-tr, red.100, #e5236c)' rounded="md">
                    <Image position="relative" boxSize="400" rounded="md" src="/teamWorking.png" opacity={.6} />
                </Flex>
                <Text w='70%' top='60%' position='absolute' fontSize="28" mb={2} color={"gray.700"} fontWeight="bold" lineHeight={1} zIndex={2}
                    textAlign="center"
                >We are here because you have better things to do</Text>
            </Flex>


            <Flex px={4} flexDirection="column" py={4} position="relative">
                {data.map((item) => {
                    return (
                        <Flex key={item.id} align="center" flexDirection="column" mb={8} position="relative">
                            <Image position="relative" boxSize="20" shadow='inner' rounded="full" src={item.img} bg="gray.300" opacity=".9" p={4} />
                            <Text my={2} fontSize="16" fontWeight="bold" color={"gray.700"}>{item.title}</Text>
                            <Text w='70%' textAlign="center" fontSize="12" fontWeight="light" color={"gray.700"}>{item.description}</Text>
                        </Flex>
                    )
                })}

            </Flex>

            <Box><Footer /></Box>
        </>
    )
}

export default About