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