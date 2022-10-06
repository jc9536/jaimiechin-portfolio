import NextLink from 'next/link'
import {
    Button,
    Container,
    Text,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import NoSsr from '../components/no-ssr.js'
import JaimieCharacter from '../components/jaimie-character'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


const Page = () => {
    return (
        <Layout>
        <Container maxW="container.lg">
            <br />
            <br />
            <Container maxW="container.md">
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={4} mb={6} align="center">
                        <Text fontSize="2xl">
                            <Typewriter
                                words={[String.fromCodePoint(0x1F44B) + " Hi, I'm a really tired person."]}
                                cursor
                                cursorColor="#fccb35"
                                typeSpeed={125}
                            />
                        </Text>
                </Box>
            </Container>

            <Box display={{ lg: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h1" variant="page-title" size="4xl" mb={4}>
                        Jaimie Chin
                    </Heading>
                    <Text fontSize="xl">
                        Some sort of description about how tired I am on a daily basis.
                        I need more words in this description to see how the layout looks. 
                        So I'm going to start documenting the total hours of sleep I have had for an entire week.
                        Starting from Oct. 2nd 2022 - Oct. 5th 2022: about 12 hours total. 
                    </Text>
                </Box>
                <Box> 
                    <NoSsr>
                        <JaimieCharacter />
                    </NoSsr>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Container maxW="container.md">
                    <Heading as="h3" variant="section-title">
                        UX Work
                    </Heading>
                    <br />
                    <Paragraph>
                            Some sort of paragraph that explains who I am as a person 
                        -- I'm honestly way too lazy to type it out at this point so this
                        is just going to be some filler fluff stuff until I can formulate better words
                        and descriptions. Sample of adding a link {''}
                        <NextLink href="/uxWorks/Sheepy">
                            <Link>Sheepy</Link>
                        </NextLink>
                        .
                    </Paragraph>

                    <br />
                
                    <Box align="center" my={4}>
                        <NextLink href="/uxWorks">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
                                My UX/UI Work
                            </Button>
                        </NextLink>
                    </Box>

                </Container>

            </Section>
            
            <div>
                {/*
                    <Section delay={0.2}>
                        <Heading as="h3" variant="section-title">
                            Bio
                        </Heading>
                        <br />
                        <BioSection>
                            <BioYear>2001</BioYear>
                            Born in New York City, New York.
                        </BioSection>
                        <BioSection>
                            <BioYear>2019</BioYear>
                            Graduated from Townsend Harris High School.
                        </BioSection>
                        <BioSection>
                            <BioYear>2023</BioYear>
                            Graduated from New York University with a B.S in Applied Psycholgy & B.A in Data Science.
                        </BioSection>
                    </Section>
                */}
            </div>

        </Container>
        </Layout>
    )
}

export default Page