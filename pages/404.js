import NextLink from 'next/link'
import {
    Box,
    Heading,
    Image,
    Container,
    Divider,
    Button,
    useColorModeValue} from '@chakra-ui/react'
import {Script} from 'next/head'

const NotFound = () => {

    const notFound = `/images/404notFound${useColorModeValue('', '_dark')}.png`
    return (
        <Container> 
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
            <br/>
            <br/>
            <Heading as="h1">Not Found</Heading>
            <br />
            <Box 
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    align="center">
                        <Image 
                            display="inline-block"
                            src= {notFound}
                            alt="Not Found"/>
                </Box>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="yellow">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound