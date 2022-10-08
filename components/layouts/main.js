import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'


const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Jaimie Chin's portfolio homepage"/>
                <mata name="author" content="Jaimie Chin"/> 
                <link rel="icon" href="/public/images/favicon.ico" type="image/x-icon" />
                <link rel="shortcut icon" href="/public/images/favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" content="Takuya Matsuyama" />
                <meta name="og:title" content="Jaimie Chin" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/public/JaimieChin.png" />
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