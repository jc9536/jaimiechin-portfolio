import NextLink from 'next/link'
import {
    Box,
    Heading,
    Image,
    Container,
    Divider,
    Button,
    useColorModeValue} from '@chakra-ui/react'
import Head from 'next/head'

const NotFound = () => {
    <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P4NPYDG6ZT"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag(&apos; js&apos;, new Date());

            gtag(&apos;config&apos;, &apos;G-P4NPYDG6ZT&apos;);
        </script>
    </Head>
    
    const notFound = `/images/404notFound${useColorModeValue('', '_dark')}.png`
    return (
        <Container> 
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