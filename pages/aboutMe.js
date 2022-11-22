import {
    Text,
    Box,
    Heading,
    Image, 
    Center,
    useColorModeValue} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import {Script} from 'next/head'

const About = () => {
    return (
        <Layout>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-P4NPYDG6ZT"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-P4NPYDG6ZT);
                `}
            </Script>
            <br/>
            <br/>
            <Heading as="h1" variant="page-title" size="4xl" mb={4}>
                About Me
            </Heading>
            <br />
            <Box
                    borderRadius="xl"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={4}
                    mb={6}>
                <Text align="center" fontSize="3xl">
                    My name is Jaimie and I&apos;m an aspiring UX designer and researcher studying Applied Psychology and Data Science at New York University. 
                </Text>
            </Box>
            <br />
            <Box display={{ lg: 'flex'}}>
                <Box
                    flexShrink={0}
                    textAlign="center"
                    p="1%">
                        <Center>
                            <Box
                                borderColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                borderWidth={8}
                                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                                borderStyle="solid"
                                w="325px"
                                h="325px"
                                display="inline-block"
                                borderRadius="full"
                                overflow="hidden"
                            >
                                <Image borderRadius='full' boxSize="325px" src="/images/profile.png" alt="profile" />
                            </ Box>
                        </Center>
                </Box>

                <Box w="225px" h="20px" display="inline=block" overflow="hidden"></Box>

                <Box flexGrow={1} display="inline-block" overflow="hidden">
                    <Box display="inline-block" overflow="hidden">
                        <Heading as="h3" variant="section-title">
                            Bio
                        </Heading>
                        <br />
                        <BioSection>
                            <BioYear>2019</BioYear>
                            Graduated from Townsend Harris High School
                        </BioSection>
                        <BioSection>
                            <BioYear>2023</BioYear>
                            Will graduate from New York University with a <b>B.S in Applied Psycholgy</b> & <b>B.A in Data Science</b>
                        </BioSection>  
                        <Heading as="h1" variant="page-title" size="2xl" mt={6} mb={2}>
                                Who am I?
                        </Heading>
                        <Text fontSize="xl">
                            I&apos;ve always been interested in solving problems by identifying common patterns in data. I want to continue developing my skills in research, design and development in order to make the world a better place. 
                            To me, learning is a lifelong journey and it never stops.
                        </Text>
                    </Box>
                </Box>
            </Box>
            <br />
            <br />

            <Heading as="h1" variant="page-title" size="2xl" mb={2}>
                What I like to do 
            </Heading>
            <Text fontSize="xl">
                My creative hobbies all stem from my initial interdisciplinary study between learning about people and technology. When I&apos;m not organizing spreadsheets and coding analyses, you can often find me gaming my favorite titles: <b><i>Animal Crossing</i></b>, <b><i>Pokémon</i></b>, and <b><i>Stardew Valley</i></b> or 
                exploring new creative skills like 3D modeling in Blender and front-end development. 
            </Text>
            


            <br/>
            <br/>

        </Layout>
    )
}

export default About