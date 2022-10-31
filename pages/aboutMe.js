import {
    Container,
    Text,
    Box,
    Heading,
    Image} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const About = () => {
    return (
        <Layout>
            <br/>
            <br/>
            <Heading as="h1" variant="page-title" size="4xl" mb={4}>
                About Me
            </Heading>
            <br />
            <Text align="center" fontSize="3xl">
                My name is Jaimie and I&apos;m an aspiring UX designer and researcher studying Applied Psychology and Data Science at New York University. 
            </Text>
            <br />
            <Box display={{ lg: 'flex'}}>

                <Box flexGrow={1}>
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
                        Will graduate from New York University with a B.S in Applied Psycholgy & B.A in Data Science.
                    </BioSection>  
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                    p="1%">

                        <Image borderRadius='full' boxSize="400px" src="/images/profile.png" />

                    

                </Box>
            </Box>

            <br/>
            <br/>

        </Layout>
    )
}

export default About