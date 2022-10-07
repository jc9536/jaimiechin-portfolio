import NextLink from 'next/link'
import {
    Button,
    Container,
    Text,
    Box,
    Heading,
    Link,
    useColorModeValue} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NoSsr from '../components/no-ssr.js'
import JaimieCharacter from '../components/jaimie-character'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


const Page = () => {
    return (
        <Layout>
        <Container maxW="container.xl" centerContent>
            <br />
            <br />
            <Box borderRadius="md" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={4} mb={6} w="md">
                    <Text fontSize="2xl" align="center">
                        <Typewriter
                            words={[String.fromCodePoint(0x1F44B) + " Hi, I'm a really tired person."]}
                            cursor
                            cursorColor="#fccb35"
                            typeSpeed={100}
                        />
                    </Text>
            </Box>


            <Box display={{ lg: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h1" variant="page-title" size="3xl" mb={4}>
                        Jaimie Chin
                    </Heading>
                    <Text fontSize="xl">
                        Some sort of description about how tired I am on a daily basis.
                        I need more words in this description to see how the layout looks. 
                        So I&apos;m going to start documenting the total hours of sleep I have had for an entire week.
                        Starting from Oct. 2nd 2022 - Oct. 5th 2022: about 12 hours total. 
                    </Text>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box display="inline-block" overflow="hidden"> 
                        <NoSsr>
                            <JaimieCharacter />
                        </NoSsr>
                    </Box>
                </Box>
            </Box>


            <Section delay={0.1}>

                <Box display={{sm: 'flex'}} maxW="4xl">
                    <Box flexGrow={1}>
                        <Heading as="h3" variant="section-title">
                            UX Work
                        </Heading>
                        <br />
                        <Text fontSize="xl">
                                Some sort of paragraph that explains who I am as a person 
                            -- I&apos;m honestly way too lazy to type it out at this point so this
                            is just going to be some filler fluff stuff until I can formulate better words
                            and descriptions. Sample of adding a link {''}
                            <NextLink href="/uxWorks/Sheepy">
                                <Link>Sheepy</Link>
                            </NextLink>
                            .
                        </Text>
                    </Box>
                </Box>
                <br />
            
                <Box align="center" my={4}>
                    <NextLink href="/uxWorks">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
                            My UX/UI Work
                        </Button>
                    </NextLink>
                </Box>


            </Section>

        </Container>
        </Layout>
    )
}

export default Page