import { Box, Flex, Image, List, ListIcon, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import React from "react"
import { MdCheckCircle, MdCheckCircleOutline } from "react-icons/md"
import Colors from "../src/assets/Colors"
import DrawerButton from "../src/components/Drawer"
import InstantQuote from "../src/components/InstantQuoteButton"
import Logo from "../src/components/Logo"



const servicesData = [

    {
        id: "00",
        title: "End of Lease Cleaning",
        description: "Moving can be stressful no matter how well you plan every step on the way. Pair that with passing the final inspection over the cleanliness of your rental and you have the recipe for an emotional breakdown. Rushing to pack everything in boxes and get out of the door can cause you to lose your bond back. Superb Cleaners offers you a customised end of lease cleaning in Sydney which will make your property look like on a picture. We’ll leave the property so clean, your landlord will regret that you’re moving out.",
        headerList: [
            { id: "00", listTitle: 'FREE RE-CLEAN in the next 72 hours' },
            { id: '01', listTitle: "Every little detail of the property is left {sparkling clean" },
            { id: '02', listTitle: "Cleaning that follows the REA checklists" },
            { id: '03', listTitle: "Flexible booking allowing fitting the cleaning in your schedule", }
        ],

        retuirements: "What Are the Property Condition Requirements?",
        requirementDescription: "Sydneysiders, we need your help! To provide the finest, incomparable bond cleaning service ever, we have a couple of property requirements:",
        requirementList: [
            { id: '00', reqVal: "The cleaners come fully equipped to deliver the service, but they won’t be able to do much unless the property has running water and electricity." },
            { id: '01', reqVal: "The property must be fully unfurnished and free of personal belongings. The Superb cleaners are fully trained to do the job. However, the small items might get in their way of the process. Not to mention that they can get damaged." },
            { id: '02', reqVal: "It's essential to make sure there is available parking near the property that the cleaners can use. This is necessary, especially if we have to steam clean the carpets - the machines are really heavy." },
            { id: '03', reqVal: "If you won’t be able to be at home during the vacate cleaning, you need to make sure that the cleaners have access to the property. You need to arrange who’ll meet them or where you’ll leave the keys for them." },
            { id: '04', reqVal: "If you’ve booked a freezer cleaning together with your bond cleaning, you need to turn it off at least 24 hours prior to the service. The freezer needs to be defrosted so the cleaners can clean it." },
        ],

        stepProcess: 'The Step-by-Step Process Our Bond Cleaners Follows on Every Job',
        stepProcessDescription: "When the bond cleaning team arrives at your property, they’ll inspect every area to confirm that everything which might need cleaning is included in their checklist. They’ll note the areas that might need extra cleaning to make sure everything is left spotless.",
        stepsTasks: [
            { id: '00', title: "Kitchen", label: "Floors will be vacuumed and mopped, benchtops and surfaces - polished; the oven will be cleaned inside and out; the cooker top, hops, knobs will be wiped clean; kitchen cupboards are cleaned inside and out; the sink area is scrubbed; bins - washed; all electrical appliances - sanitised." },
            { id: "01", title: "Living room/ dining room/ common areas", label: "All surfaces, appliances and decoration will be dusted; carpets and rugs - vacuumed (steam carpet cleaning and stain removal treatment is available at discounted rates) the furniture will be polished; skirting boards, light switches and window sills - wiped cleaned; cobwebs will be removed; the internal windows can be washed and blinds - dusted, upon request." },
            { id: '02', title: "Bathroom", label: "The floor will be vacuumed and mopped; the sink and sink cabinet - polished; the toilet, shower and bath are disinfected and sanitised; fittings, bathroom accessories, taps and fixtures are wiped clean and dried." },
            {
                id: "03", title: "Entryway/corridors", label: "Surfaces, banisters and railings will be dusted; floors - vacuumed and mopped."
            },
            { id: "04", title: "Additional Rooms", label: "Upon request balconies, garages, study rooms and any other extra rooms will be thoroughly cleaned on an additional fee. The end of lease cleaning is not hourly based, we determine the estimate of the job by the amount of workload. You can request a customized bond cleaning with a few simple clicks." }
        ],

        img: "",
    },
    {
        id: "01",
        title: "General Cleaning",
        headerList: [],
        description: "Professional cleaners know what you need when it comes to providing help with the housework!",
        stepProcess: "Keep a Tidy Home with the Sydney House Cleaning Experts",
        stepProcessDescription: "How many times has your family failed to keep up with the cleaning rota? Oh, the endless arguments and fall-outs… Well, we got you a solution! We offer regular house cleaning in Sydney, which can bring peace back in your family.",
        stepsTasks: [

            { id: "00", label: "Vacuuming and mopping of all hard floors." },
            { id: "01", label: "Vacuuming of carpeted areas and rugs." },
            { id: "02", label: "Dusting of furniture, window sills and all surfaces throughout the house." },
            { id: "03", label: "Polishing of mirrors, pictures, furniture glass tops." },
            { id: "04", label: "Sanitising bathroom accessories (sink, shower, bath, toilet, fixtures and fittings)." },
            { id: "05", label: "Kitchen sink, benchtops and cupboards are wiped." },

        ],

        img: "",
        requirementList: [],
    },
    {
        id: "02",
        headerList: [],
        title: "Carpet Cleaning",
        description: "Advanced Rug and Caret Cleaning in Sydney for All Types of Textile",
        stepProcess: "Keep a Tidy Home with the Sydney House Cleaning Experts",
        stepProcessDescription: "Superb Cleaners are here to save you the headache by offering advanced steam and dry carpet cleaning in Sydney. The rugs and carpets will not only look brand new, but they’ll also be sanitised. High traffic areas will no longer look faded.",
        stepsTasks: [

            { id: "00", label: "The professional carpet cleaners will first examine what is the type of the stains on your carpet. They’ll do a pH testing using a special alkaline solution. The cleaners will treat the stains with the correct solution for the specific type of stains." },
            { id: "01", label: "After that, the experts will confirm the type of material of which the carpet is made. The cleaner will implement different cleaning methods according to the carpet’s material - hot water extraction, steam cleaning or dry cleaning." },
            { id: "02", label: "The carpet cleaners will vacuum the carpet to remove all the build-up dust, dander and particles using an industrial vacuum cleaner. Any stains and spillages will be pre- treated.High traffic areas will be pre - sprayed to loosen up the grimes and soil." },
            { id: "03", label: "Small furniture will be cleared out of the way by the cleaners - chairs, tables, and small shelves will be moved aside. If massive furniture needs to be relocated for the carpet steam cleaning, you need to do it before the service." },
            { id: "04", label: "he professionals will deep clean the carpets and rugs using hot water extraction, steam cleaning or dry cleaning methods." },
            { id: "05", label: "Fabric protector can be applied on the carpet upon request. It’ll prevent spillages and stains to go deep into the fabric, which will make their cleaning easy." },
            { id: "06", label: "The cleaned rugs and carpets can be deodorised upon request." },
            { id: "07", label: "The carpets will need 3-6 hours of drying time for the best results." },

        ],
        img: "",
        requirementList: [],
    },
    {
        id: "03",
        stepProcess: "What is a Water-Fed Pole Method and How Does it Work",
        stepProcessDescription: "This window cleaning method is a pole system method using a telescopic pole with brushes attached to the end of the pole and is using purified water which is pumped from a unit on the ground.",
        headerList: [],
        title: "Window Cleaning",
        description: "Windows are hard to clean, but they require regular cleaning for increasing the curb appeal and keeping dust and allergies away from your home! Make use of our professional window cleaning in Sydney!",

        img: "",
        requirementList: [],
        stepsTasks: [

            { id: "00", label: "The cleaners will arrive at your property bringing all tools and machines for the cleaning such as water tanks, brushes and water-fed poles;" },
            { id: "01", label: "The cleaners wash interior windows with professional tools and detergents. This includes ammonia-free glass cleaners and scratchless squeegees to ensure spotless results. The window cleaners will start with removing cobwebs, they'll clean the window frames and wipe down the window sills and ledges." },
            { id: "02", label: "Experts clean exterior windows using a stepladder or a water-fed pole. The latter is one of the most effective windows cleaning methods. Pure water is pumped through the brushes and sprayed over the window. The cleaners will focus on stains and marks and making sure to leave the windows spotless." },
        ],
    },
    // {
    //     id: "04",
    //     headerList: [],
    //     stepsTasks: [],
    //     title: "Oven Cleaning",
    //     description: "",
    //     img: "", requirementList: [],

    // },
    // {
    //     id: "05",
    //     headerList: [],
    //     stepsTasks: [],
    //     title: "Other Cleaning",
    //     description: "",
    //     img: "",
    //     requirementList: [],

    // },
]


const Services = () => {



    const ServicesCard = ({ item }: any) => {
        return (
            <Flex flexDirection="column" pb={4} mb={6} borderBottomWidth={1} borderColor="gray.200">
                <Text fontSize="20" mb={2} color="gray.700" fontWeight="bold" lineHeight={1}>{item.title}</Text>

                <Text fontSize="14" mb={2} color="gray.700" fontWeight="light">{item.description}</Text>



                <Box position="relative" rounded="md" >

                    <Box position="relative">
                        <Image boxSize="400" rounded="md" src="/eolBanner.png" bg="#000000" opacity=".8" />
                    </Box>

                    <Box position="absolute" top="0" pl="2" pt="4">
                        <List spacing={3}>
                            {item.headerList.map((x: any) => {
                                return (
                                    <ListItem key={x.id}>
                                        <Flex align="center" >
                                            <ListIcon as={MdCheckCircleOutline} color='gray.900' w="6" h="6" />
                                            <Text fontSize="12" color="gray.900" fontWeight="bold">
                                                {x.listTitle}
                                            </Text>
                                        </Flex>
                                    </ListItem>
                                )

                            })}
                        </List>
                    </Box>

                    {item.title === "End of Lease Cleaning" ?
                        <Box position="absolute" bottom="0" pl="4" pb="8"><InstantQuote /></Box> : null}

                </Box>



                <Box>

                    <Text fontSize="14" my={2} color="gray.700" fontWeight="bold" lineHeight={1}>{item.stepProcess}</Text>

                    <Text fontSize="14" mb={2} color="gray.700" fontWeight="light">{item.stepProcessDescription}</Text>


                    <UnorderedList>
                        {item.stepsTasks.map((y: any) => {
                            return (
                                <ListItem key={y.id}>
                                    <Text fontSize="12" mb={1} color="gray.700" fontWeight="light">{y.title ? y.title + ':' : null} {y.label}</Text>
                                </ListItem>
                            )
                        })}
                    </UnorderedList>

                </Box>


                <Box>

                    <Text fontSize="14" my={2} color="gray.700" fontWeight="bold" lineHeight={1}>{item.retuirements}</Text>

                    <Text fontSize="14" mb={2} color="gray.700" fontWeight="light">{item.requirementDescription}</Text>

                    <UnorderedList>
                        {item.requirementList.map((i: any) => {
                            return (
                                <ListItem key={i.key}>    <Text fontSize="12" mb={1} color="gray.700" fontWeight="light">{i.reqVal}</Text></ListItem>
                            )
                        })}

                    </UnorderedList>
                </Box>




            </Flex >
        )
    }


    return (
        <>
            <Flex px={4} shadow="base" py={2} align="center" flexDirection="row" justify="space-between" >
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
                    {/* <Text fontSize={16} color="gray.700">0415701000</Text> */}
                </Flex>
            </Flex>

            <Box px={4}>


                <Text textAlign="left" fontSize="28" mb={4} fontWeight="bold" color={"gray.700"}>Services</Text>

            </Box>



            <Flex px={4} flexDirection="column">


                {
                    servicesData.map((item) => {
                        return <ServicesCard item={item} key={item.id} />
                    })
                }


            </Flex>


        </>
    )
}

export default Services