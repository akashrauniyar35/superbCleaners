import { Box, Flex, Skeleton, Spinner, Stack, Text, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { IoMdCall } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../src/components/Logo'
import AddOns from '../src/components/quoteComponents  /AddOns'
import ContactDetails from '../src/components/quoteComponents  /ContactDetails'
import PropertyTypes from '../src/components/quoteComponents  /PropertyTypes'
import QuoteHeader from '../src/components/quoteComponents  /QuoteHeader'
import { postQuoteFail, postQuotePending, postQuoteSuccess } from '../src/redux/slice'
import onSubmit from './api/submit'
import Link from 'next/link'


const InstantQuotePage = () => {
    const postLoading: any = useSelector((state: any) => state.postQuoteLoading)
    const toast = useToast()
    const dispatch = useDispatch()
    const data: any = useSelector((state) => state)
    const router = useRouter()

    const rePhoneNumber =
        /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm
    const reEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

    let testEmail = reEmail.test(data.email)
    let testPhone = rePhoneNumber.test(data.phone)

    const onSubmitHandler = async () => {
        let arr = data.fullname.split(" ", 2);

        dispatch(postQuotePending())
        let addons = data.addOns.reduce((all: any, cur: any) => ({ ...all, [cur.label]: cur.count }), {})

        let prams: any = {
            from_name: data.fullname,
            form_quote_date: new Date().toString(),
            from_email_id: data.email,
            form_phone_number: data.phone,
            from_address: data.address,
            from_service: data.service,
            from_property: data.property,
            from_bedroom: data.bedroomCount,
            from_bathroom: data.bathroomCount,
            from_addons: JSON.stringify(addons),
            from_message: data.message
        }
        const res = await onSubmit(prams)
        if (res === "OK") {
            router.push("./")
            dispatch(postQuoteSuccess())
            toast({
                duration: 3000,
                position: 'top',
                render: () => (
                    <Flex flex="1" align="center" justify="center">
                        <Box color='white' p={3} bg='green.500' rounded="md" w={'90%'}>
                            <Text fontFamily="Outfit" fontWeight="600">Thankyou {arr[0].charAt(0).toUpperCase() + arr[0].slice(1)}, We have received your quote.</Text>
                            <Text fontFamily="Outfit" fontWeight="300" >One of our team members will shortly reach out to you on your contact number {data.phone}</Text>
                        </Box>
                    </Flex>
                ),
            })
        }
        dispatch(postQuoteFail())
    }

    return (
        <>
            <Flex px={4} py={0} shadow='base' zIndex={4} align="center" flexDirection="row" bg='white' justify="space-between" top={0} position="sticky" mb={2} h="70px">
                <Flex align={"center"} justify="space-between" w={{ base: '100%', sm: '100%', md: "80%", lg: '50%' }} marginX="auto">
                    <Logo />
                    <Flex bg="green.400" rounded={"md"} p={1.5} align="center" px="3">
                        <IoMdCall size="20px" color='#fff' />
                        <Link href="tel:0481834009">
                            <Text color="#fff" fontWeight="600" ml="2" letterSpacing="1px" fontFamily="Outfit">0481834009</Text>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>

            <Box px={4} w={{ base: '100%', sm: '80%', md: "60%", lg: '40%' }} marginX="auto">
                <Stack spacing={8}>
                    <Box mt={4}>
                        <QuoteHeader />
                    </Box>
                    <Box>
                        <PropertyTypes />
                    </Box>
                    <Box>
                        <AddOns />
                    </Box>
                    <Box>
                        <ContactDetails />
                    </Box>
                    <Box>
                        <Skeleton isLoaded={testEmail && testPhone}>
                            <Flex onClick={() => onSubmitHandler()} cursor='pointer' h={"10"} shadow="base" align="center" bgGradient='linear(to-tr, red.300, #e5236c)' justify='center' rounded='md' mb={4}>
                                {postLoading ? <Spinner color={'#fff'} size='md' /> :
                                    <Text fontFamily="Outfit" fontSize="14" fontWeight="600" color={'#fff'}>Submit</Text>
                                }
                            </Flex>
                        </Skeleton>
                    </Box>
                </Stack>


            </Box >

        </>
    )
}

export default InstantQuotePage