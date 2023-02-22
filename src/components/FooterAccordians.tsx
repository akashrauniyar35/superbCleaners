import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import Colors from '../assets/Colors'



const data = [
    {
        id: '00',
        label: 'What is End of Lease Cleaning?',
        description: 'End of lease cleaning refers to the process of thoroughly cleaning a rental property at the end of a lease term, in order to meet the landlords expectations and requirements for the return of the property. It is usually a requirement for tenants to leave the property in a clean and tidy condition, as specified in the lease agreement.',
    },
    {
        id: '01',
        label: 'What does End of Lease Cleaning include?',
        description: 'End of lease cleaning typically involves a comprehensive clean of the property, including:',
        points: [
            { id: "00", text: "Cleaning and disinfecting all surfaces, including floors, walls, and countertops." },
            { id: "01", text: "Cleaning all appliances, such as ovens, laundry machines and dishwashers." },
            { id: "02", text: "Dusting and wiping down throughout the property." },
            { id: "03", text: "Cleaning all windows, blinds, and curtains." },
            { id: "04", text: "Vacuuming and mopping all floors." },
        ],
        conclusion: "It is important to ensure that the property is left in the same condition it was when the tenant moved in, and any damages or repairs required are addressed before the end of the lease. This is essential to get back the security deposit from the landlord. Some tenants choose to hire a professional cleaning service to ensure that the property is cleaned to the required standard, but it is also possible to clean the property yourself if you have the necessary time and resources."

    },
    {
        id: '02',
        label: 'Do I need to Provide any cleaning materials?',
        description: 'No, we provide all the cleaning Materials and Equipment to deep clean trough out your property.',
    },
    {
        id: '03',
        label: 'How long does it take to clean the property?',
        description: 'It depends entirely on the size of your property! The minimum booking length is 3 hours, but you can always a request a longer booking if you need one. Depending on the number of bedrooms and bathrooms you have, our checkout. ',
    },
    {
        id: '04',
        label: 'How much do you charge?',
        description: 'The cost of your end of lease clean generally depends on the size of your property. We charge in accordance with the number of bedrooms and bathrooms in your home. There are additional charges for extra services that are not included in the general scope of our standard bond clean. These include carpet steam cleaning, outside windows, extra balconies, full wall washing and extra blinds. If the property requires a more thorough cleaning, we may reserve the right to charge extra, this will be communicated to you before we start cleaning.',
    },
    {
        id: '05',
        label: 'How would I get a quote?',
        description: 'If you only need an estimate for the cleaning of your leased property and do not want to book yet, we have got you covered. We offer free quotes that do not incur any obligations or charges. You can contact our support team to get your free estimate today. You can also go to booking page to get quote on the website. It allows clients to understand the costing and use the quote to compare the pricing with other cleaning companies. We have no hidden charges and provide the final costing upfront so that you can make an informed decision. ',
    },
    {
        id: '06',
        label: 'Do I need to Provide any cleaning materials?',
        description: 'No, we provide all the cleaning Materials and Equipment to deep clean trough out your property. ',
    },
]


function FooterAccordians() {


    const AccordianCard = ({ label, key, description, points, conclusion }: any) => {
        return (
            <AccordionItem key={key} borderWidth={0} borderColor="transparent" pb={4} >
                <AccordionButton p={0} _hover={{ backgroundColor: "transparent" }} >
                    <Box flex='1' textAlign='left'>
                        <Text fontFamily="Outfit" textAlign="left" fontSize="16" fontWeight="md" color="gray.700">{label}</Text>
                    </Box>
                    <AccordionIcon w={6} h={6} color="gray.700" />
                </AccordionButton>

                {label === "What does End of Lease Cleaning include?" ?
                    <AccordionPanel p={0} borderWidth={0} w={{ lg: '80%', sm: '80%' }} >
                        <Text fontFamily="Outfit" fontSize="14" textAlign='left' fontWeight="300" color="gray.700" mb={2}>{description}</Text>
                        <UnorderedList>
                            {points.map((x: any) => {
                                return (
                                    <ListItem>
                                        <Text mb={1} fontFamily="Outfit" fontSize="14" textAlign='left' fontWeight="300" color="gray.700">{x.text}</Text>
                                    </ListItem>
                                )
                            })}
                        </UnorderedList>
                        <Text fontFamily="Outfit" fontSize="14" textAlign='left' fontWeight="300" color="gray.700" mt={2}>{conclusion}</Text>
                    </AccordionPanel> :

                    <AccordionPanel p={0} borderWidth={0} w={{ lg: '80%', sm: '80%' }} >
                        <Text fontFamily="Outfit" fontSize="14" textAlign='left' fontWeight="300" color="gray.700">{description}</Text>
                    </AccordionPanel>}

            </AccordionItem >
        )
    }

    return (
        <>
            <Box shadow='base' bg="#f5f5f5" rounded="md" p={4} position='relative' w={{ base: '98%', md: '80%', lg: '70%' }} marginX="auto">
                <Text fontFamily="Outfit" mb={2} textAlign="left" fontSize="18" fontWeight="600" color="gray.700">Questionaries</Text>
                <Accordion allowToggle>
                    {data.map((item) => (<AccordianCard key={item.id} description={item.description} label={item.label} points={item.points} conclusion={item.conclusion} />))}
                </Accordion>
            </Box>
        </>

    )
}

export default FooterAccordians