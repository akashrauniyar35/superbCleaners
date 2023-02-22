import { Box, Circle, Flex, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'

function ChooseUS() {
    return (
        <>
            <Box backgroundColor={"#f5f5f5"} p={4} rounded='md' py={8} my={4} shadow="base" w={{ base: '98%', md: '80%', lg: '70%' }} marginX="auto">

                <Box backgroundColor={"#f5f5f5"}>
                    <Text fontFamily="Outfit" textAlign="left" fontSize="18" fontWeight="bold" color="gray.700">Why choose Superb Cleaning?</Text>


                    <Flex marginTop={4} >
                        <Circle bgGradient='linear(to-t, red.300, #e5236c)' opacity={1} p={1} size="10" rounded='full' shadow={'base'}>
                            <Image
                                width="8" height="8"
                                objectFit='cover'
                                p={1}
                                src="/quality.png"
                            />
                        </Circle>

                        <Box w={{ lg: '40%', sm: '60%' }}>
                            <Text fontFamily="Outfit" fontSize="16" textAlign='left' marginLeft={4} color="gray.700" fontWeight="600" mb={1}>Satisfaction Guaranteed</Text>
                            <Text fontWeight="300" fontFamily="Outfit" fontSize="14" textAlign='left' marginLeft={4} color="gray.700">At Supert Cleaning, we are committed to providing top-quality cleaning services and ensuring that our clients are 100% satisfied with the results.</Text>
                        </Box>
                    </Flex>

                    <Flex marginTop={4} >
                        <Circle bgGradient='linear(to-t, red.300, #e5236c)' opacity={1} p={1} size="10" rounded='full' shadow={'base'}>
                            <Image
                                width="8" height="8"
                                objectFit='cover'
                                p={1}
                                src="/professional.png"
                            />
                        </Circle>

                        <Box w={{ lg: '40%', sm: '60%' }}>
                            <Text fontFamily="Outfit" fontSize="16" textAlign='left' marginLeft={4} color="gray.700" fontWeight="600" mb={1}>Skilled & Trained Team</Text>
                            <Text fontWeight="300" fontFamily="Outfit" fontSize="14" textAlign='left' marginLeft={4} color="gray.700">Our team are fully skilled on cleaning services, with high attention to details.</Text>
                        </Box>
                    </Flex>
                    <Flex marginTop={4} >
                        <Circle bgGradient='linear(to-t, red.300, #e5236c)' opacity={1} p={1} size="10" rounded='full' shadow={'base'}>
                            <Image
                                width="8" height="8"
                                objectFit='cover'
                                p={1}
                                src="/calendar.png"
                            />
                        </Circle>

                        <Box w={{ lg: '40%', sm: '60%' }}>
                            <Text fontFamily="Outfit" fontSize="16" textAlign='left' marginLeft={4} color="gray.700" fontWeight="600" mb={1}>Flexible Schedule</Text>
                            <Text fontWeight="300" fontFamily="Outfit" fontSize="14" textAlign='left' marginLeft={4} color="gray.700">We understand that our clients have busy lives and schedules, and that's why we offer flexible cleaning services to meet your unique needs. Whether you need a one-time cleaning, recurring cleaning, or a customized cleaning plan, we can work with you to find a schedule that fits your lifestyle. Our team of cleaning professionals is available to clean your home or business during the day, evening, or weekend, depending on your preference.</Text>
                        </Box>
                    </Flex>
                    <Flex marginTop={4} >
                        <Circle bgGradient='linear(to-t, red.300, #e5236c)' opacity={1} p={1} size="10" rounded='full' shadow={'base'}>
                            <Image
                                width="8" height="8"
                                objectFit='cover'
                                p={1}
                                src="/saveMoney.png"
                            />
                        </Circle>

                        <Box w={{ lg: '40%', sm: '60%' }}>
                            <Text fontFamily="Outfit" fontSize="16" textAlign='left' marginLeft={4} color="gray.700" fontWeight="600" mb={1}>Reasonable Pricing</Text>
                            <Text fontWeight="300" fontFamily="Outfit" fontSize="14" textAlign='left' marginLeft={4} color="gray.700">We believe that everyone deserves to have a clean and organized space without breaking the bank. That's why we offer competitive and reasonable pricing for all our cleaning services. Our pricing is transparent, and we will work with you to find a cleaning plan that meets your needs and budget.</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default ChooseUS