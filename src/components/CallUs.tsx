import { Circle } from '@chakra-ui/react';
import Link from 'next/link';
import { IoMdCall } from 'react-icons/io';





function CallUs() {
    return (
        <Link href="tel:0481834009">
            <Circle mr={4} p={2} bg="green.400" rounded={"full"} size="35px" cursor={"pointer"}>
                <IoMdCall size="20px" color='#fff' />
            </ Circle>
        </Link>
    )
}

export default CallUs