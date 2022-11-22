import { Head, Script } from 'next/script'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico?v=1" type="image/x-icon" />
                <link rel="shortcut icon" href="/favicon.ico?v=1" type="image/x-icon" />
                <title>Jaimie Chin - Homepage</title>
            </Head>

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-P4NPYDG6ZT"
                strategy="afterInteractive"
            />
            <Script id="G-P4NPYDG6ZT" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-P4NPYDG6ZT);
                    `}
            </Script>

            <Navbar path={router.asPath} />

            <Container maxW="container.xl" pt={14}>
                {children}

                <br />
                <br />
                
            </Container>
            <Footer />
        </Box>
        
    )
}

export default Main