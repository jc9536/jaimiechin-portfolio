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

            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-P4NPYDG6ZT', 'auto');
          ga('send', 'pageview');
        `}
            </Script>
            <Script
                src="https://www.google-analytics.com/analytics.js"
                strategy="afterInteractive"
            />

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