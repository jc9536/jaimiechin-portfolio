import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'


const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="public/images/favicon.ico" type="image/x-icon" />
                <link rel="shortcut icon" href="public/images/favicon.ico" type="image/x-icon" />
                <title>Jaimie Chin - Homepage</title>
                
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.xl" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main