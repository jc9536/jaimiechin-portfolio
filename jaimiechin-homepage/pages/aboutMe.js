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

const About = () => {
    return (
        <Layout>
            <br/>
            <br/>
            <Box display={{ lg: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h1" variant="page-title" size="4xl" mb={4}>
                        About Me
                    </Heading>
                    <Text fontSize="xl">
                        Some sort of description about how tired I am on a daily basis.
                        I need more words in this description to see how the layout looks. 
                        So I'm going to start documenting the total hours of sleep I have had for an entire week.
                        Starting from Oct. 2nd 2022 - Oct. 5th 2022: about 12 hours total. 
                    </Text>
                </Box>
            </Box>

            <br/>
            <br/>

            <Container maxW="container.md">
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
            </Container>

        </Layout>
    )
}

export default About