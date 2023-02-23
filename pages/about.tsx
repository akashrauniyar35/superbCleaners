import { Box, Circle, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { IoMdCall } from 'react-icons/io'
import Colors from '../src/assets/Colors'
import DrawerButton from '../src/components/Drawer'
import Footer from '../src/components/Footer'
import HeaderButtons from '../src/components/HeaderButtons'
import InstantQuoteButton from '../src/components/InstantQuoteButton'
import Logo from '../src/components/Logo'


const data = [

    { id: '00', title: 'What?', description: 'We help you by taking care of your home by offering a great variety of cleaning services. We provide domestic and commercial cleaning in Sydney. Everything is done by professionals using high-quality equipment. ', img: './paper.png' },
    { id: '01', title: 'Why?', description: 'We believe cleaning services could be provided in a more superb way. Customers are as important as the technicians and this improves the quality. It is called the Superb Philosophy! ', img: './heart.png' },
    { id: '02', title: 'How?', description: 'We use technology where it works and people where it matters. Through innovation and technology, we are able to provide a high-quality on-demand response to your unique cleaning needs. ', img: './idea.png' },
]


const About = () => {
    return (
        <>
            <HeaderButtons />
            <Box w={{ base: '100%', sm: '100%', md: "70%", lg: '40%' }} marginX="auto">

                <Box px={4} alignSelf="center" my={4} >
                    <Text
                        bgGradient='linear(to-l, #e5236c,#FF0080,#7928CA)'
                        bgClip='text'
                        fontWeight='extrabold'
                        textAlign="left" fontFamily="Outfit" fontSize="28" lineHeight={1}>Abouts
                    </Text>
                </Box>


                <Flex overflow={"hidden"} zIndex={3} px={4} position='relative'  align='center' justify='center'>
                    <Image alt="" marginX="auto" position='relative' rounded="md" src="/background.png" />
                    <Text w={{ base: '80%', sm: '60%', md: '40%', lg: '40%' }} top='5%' position='absolute' fontSize="28" color={"gray.700"} fontWeight="bold" lineHeight={1} zIndex={2}
                        textAlign="center" fontFamily="Outfit"
                    >We are here because you have better things to do.</Text>
                </Flex>



                <Flex px={4} flexDirection="column" pt={8} position="relative">
                    {data.map((item) => {
                        return (
                            <Flex key={item.id} align="center" flexDirection="column" mb={8} position="relative">
                                <Image alt="" position="relative" boxSize="20" shadow='inner' rounded="full" src={item.img} bg="gray.300" opacity=".9" p={4} />
                                <Text fontFamily="Outfit" my={2} fontSize="16" fontWeight="bold" color={"gray.700"}>{item.title}</Text>
                                <Text fontFamily="Outfit" w={{ base: '80%', sm: '80%', md: '60%', lg: '40%' }} textAlign="center" fontSize="14" fontWeight="light" color={"gray.700"}>{item.description}</Text>
                            </Flex>
                        )
                    })}

                </Flex>
            </Box>
            <Box><Footer /></Box>
        </>
    )
}

export default About