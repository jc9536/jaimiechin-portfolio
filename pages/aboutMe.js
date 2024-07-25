import React from 'react';
import {
    Text,
    Box,
    Heading,
    Image,
    Center,
    Container,
    useColorModeValue
} from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { BioSection, BioYear } from '../components/bio';

const About = () => {
    const profile = `/images/profile${useColorModeValue('', '_dark')}.jpg`;

    return (
        <Layout>
            <Container maxW="max">
                <br />
                <br />
                <Section delay={0.3}>
                    <Heading as="h1" variant="page-title" size="4xl" mb={4} align="center">
                        About Me
                    </Heading>
                    <br />
                    <Box
                        borderRadius="xl"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                        p={4}
                        mb={6}>
                        <Text align="center" fontSize="3xl">
                            My name is Jaimie and I&apos;m an aspiring UX designer and researcher studying Human Centered Design & Engineering at the University of Washington
                        </Text>
                    </Box>
                    <br />
                    <Box display={{ lg: 'flex' }}>
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
                                    <Image borderRadius='full' boxSize="325px" src={profile} alt="profile" />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="225px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

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
                                        Graduated from NYU with a <b>B.S in Applied Psychology</b> & <b>B.A in Data Science</b>
                                    </BioSection>
                                    <BioSection>
                                        <BioYear>2025</BioYear>
                                        Will graduate from University of Washington with a <b>M.S in Human Centered Design & Engineering</b>
                                    </BioSection>
                                </Box>
                            </Box>
                        </Section>
                    </Box>
                    <br />

                    <Section delay={0.5}>
                        <Heading as="h1" variant="page-title" size="2xl" mb={2}>
                            Who am I?
                        </Heading>
                        <Text fontSize="xl">
                            I am a dedicated UX designer and developer passionate about solving problems by identifying common patterns in data. I aim to continuously develop my research, design, and development skills to make the world a better place. Learning is a lifelong journey that never stops, and I strive to integrate this philosophy into all aspects of my work. A significant driving force behind my work is my interest in educational technology.
                        </Text>
                        <br />
                        <Text fontSize="xl">
                            With a background in early childhood education research, including my role as an Assistant Research Scientist at IHDSC, I have managed and organized data to promote school readiness and positive behavioral outcomes for children. This experience has solidified my commitment to leveraging technology to create impactful educational tools accessible and beneficial to all.
                        </Text>
                    </Section>

                    <br />

                    <Section delay={0.5}>
                        <Heading as="h1" variant="page-title" size="2xl" mb={2}>
                            What I like to do
                        </Heading>
                        <Text fontSize="xl">
                            My creative hobbies are deeply rooted in my interdisciplinary study of people and technology. When I'm not organizing spreadsheets and coding analyses, I often play my favorite titles: Animal Crossing, Pokémon, and Stardew Valley. Additionally, I love exploring new creative skills like 3D modeling in Blender and front-end development. I have also recently developed an interest in building games:
                        </Text>

                        <br />

                        <Box textAlign="center">
                            <Text fontSize="sm" color="grey" as="i"> Press Space Bar or Tap to Jump! </Text>
                        </Box>

                        <Box display="flex" justifyContent="center" mt={2}>
                            <Box
                                borderRadius="2xl" // Increased border radius for more rounded corners
                                overflow="hidden"
                                border="2px"
                                borderColor={useColorModeValue('gray.200', 'gray.700')}
                                boxShadow="lg"
                                width="80%" // Adjust width as needed
                                maxW="800px"
                                maxH="600px"
                            >
                                <Box
                                    position="relative"
                                    paddingTop="75%" // 4:3 Aspect Ratio
                                    width="100%"
                                    height="0"
                                >
                                    <iframe
                                        src="/TrainJump.html"
                                        title="TrainJump Game"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                            borderRadius: 'inherit'
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Section>
                    

                    <br />

                    <Section delay={0.6}>
                        <Heading as="h1" variant="page-title" size="2xl" mb={2}>
                            My passion for UX
                        </Heading>
                        <Text fontSize="xl">
                            In my user experience projects, I am dedicated to creating mindful user experiences by enhancing design decisions through qualitative and quantitative research methods and data analysis. My passion extends to incorporating accessibility and inclusivity into every design decision. Every user, regardless of their background or ability, should be able to navigate and interact with a product effortlessly. My commitment to educational technology is reflected in my projects. I leverage technology to develop impactful educational tools that benefit all users. Explore my portfolio to see how my passion for UX, commitment to accessibility, and dedication to educational technology come together in my work.
                        </Text>
                    </Section>
                    <br />
                    <br />
                </Section>
            </Container>
        </Layout>
    )
}

export default About;