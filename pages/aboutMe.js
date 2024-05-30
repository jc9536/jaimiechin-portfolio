import {
    Text,
    Box,
    Heading,
    Image,
    Center,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const About = () => {
    const profile = `/images/profile${useColorModeValue('', '_dark')}.jpg`
    return (
        <Layout>
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
                                <Heading as="h1" variant="page-title" size="2xl" mt={6} mb={2}>
                                    Who am I?
                                </Heading>
                                <Text fontSize="xl">
                                    I&apos;ve always been interested in solving problems by identifying common patterns in data. I want to continue developing my skills in research, design and development in order to make the world a better place.
                                    To me, learning is a lifelong journey and it never stops.
                                </Text>
                            </Box>
                        </Box>
                    </Section>
                </Box>
                <br />

                <Section delay={0.5}>
                    <Heading as="h1" variant="page-title" size="2xl" mb={2}>
                        What I like to do
                    </Heading>
                    <Text fontSize="xl">
                        My creative hobbies all stem from my initial interdisciplinary study between learning about people and technology. When I&apos;m not organizing spreadsheets and coding analyses, you can often find me gaming my favorite titles: <b><i>Animal Crossing</i></b>, <b><i>Pokémon</i></b>, and <b><i>Stardew Valley</i></b> or
                        exploring new creative skills like 3D modeling in Blender and front-end development.
                    </Text>
                </Section>
                
                <br />

                <Section delay={0.6}>
                    <Heading as="h1" variant="page-title" size="2xl" mb={2}>
                        My passion for UX
                    </Heading>
                    <Text fontSize="xl">
                        Within my user experience projects, I&apos;m interested in creating more mindful user experiences by improving design decisions through qualitative research methods, quantitative research methods & data analysis. I am also passionate about incorporating accessibility and inclusivity into my design decisions. I believe that every user should be able to easily navigate and interact with a product, regardless of their background or ability.
                    </Text>
                </Section>
                <br />
                <br />
            </Section>
        </Layout>
    )
}

export default About