import NextLink from 'next/link'
import {
    Box,
    Heading,
    Image,
    Container,
    Divider,
    Button} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container> 
            <Heading as="h1">Not Found</Heading>
            <br />
            <Box 
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    align="center">
                        <Image 
                            display="inline-block"
                            src= "/images/404notFound.png"
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