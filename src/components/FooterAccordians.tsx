import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'



const data = [
    {
        id: '00',
        label: 'What is End of Lease Cleaning?',
        description: 'When you move out of your property and the new tenants have to move in, then require Deep Cleaning of the property.',
    },
    {
        id: '01',
        label: 'Do I need to Provide any cleaning materials?',
        description: 'No, we provide all the cleaning Materials and Equipment to deep clean trough out your property. ',
    },
    {
        id: '02',
        label: 'How long does it take to clean the property?',
        description: 'It depends entirely on the size of your property! The minimum booking length is 3 hours, but you can always a request a longer booking if you need one. Depending on the number of bedrooms and bathrooms you have, our checkout. ',
    },
    {
        id: '03',
        label: 'How much do you charge?',
        description: 'The cost of your end of lease clean generally depends on the size of your property. We charge in accordance with the number of bedrooms and bathrooms in your home. There are additional charges for extra services that are not included in the general scope of our standard bond clean. These include carpet steam cleaning, outside windows, extra balconies, full wall washing and extra blinds. If the property requires a more thorough cleaning, we may reserve the right to charge extra, this will be communicated to you before we start cleaning.',
    },
    {
        id: '04',
        label: 'How would I get a quote?',
        description: 'If you only need an estimate for the cleaning of your leased property and do not want to book yet, we have got you covered. We offer free quotes that do not incur any obligations or charges. You can contact our support team to get your free estimate today. You can also go to booking page to get quote on the website. It allows clients to understand the costing and use the quote to compare the pricing with other cleaning companies. We have no hidden charges and provide the final costing upfront so that you can make an informed decision. ',
    },
    {
        id: '05',
        label: 'Do I need to Provide any cleaning materials?',
        description: 'No, we provide all the cleaning Materials and Equipment to deep clean trough out your property. ',
    },
]


function FooterAccordians() {


    const AccordianCard = ({ label, description }) => {
        return (
            <AccordionItem borderWidth={0} borderColor={Colors.red} pb={2}>

                <AccordionButton p={0} _hover={{ backgroundColor: "transparent" }}>
                    <Box flex='1' textAlign='left'>
                        <Text textAlign="left" fontSize="14" fontWeight="bold" color="#fff">{label}</Text>
                    </Box>
                    <AccordionIcon w={6} h={6} color="#fff" />
                </AccordionButton>

                <AccordionPanel p={0} borderWidth={0}>

                    <Text fontSize="14" textAlign='left' color="#fff">{description}</Text>
                </AccordionPanel>
            </AccordionItem>
        )
    }

    return (
        <>

            <Box mt={2} backgroundColor={Colors.red} rounded="md" p={4} position='relative'>
                <Text mb={2} textAlign="left" fontSize="20" fontWeight="bold" color="#fff">Questionaries</Text>

                <Accordion allowMultiple >

                    {data.map((item) => (<AccordianCard key={item.id} description={item.description} label={item.label} />))}


                </Accordion>
            </Box>
        </>

    )
}

export default FooterAccordians