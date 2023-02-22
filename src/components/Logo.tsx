import { Box, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function Logo() {
    return (
        <>
            <Link href="./" >
                < Image alt="" src='/logo.png' w="140px" cursor="pointer" />
            </Link>
        </>
    )
}

export default Logo