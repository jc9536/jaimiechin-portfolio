import NextLink from 'next/link'
import {
    Button,
    Container,
    Text,
    Box,
    Heading,
    useColorModeValue,
    SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NoSsr from '../components/no-ssr.js'
import JaimieCharacter from '../components/jaimie-character'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { WorkGridItemUX } from '../components/ux-grid-item'
import thumbEmoTune from '../public/images/EmoTune/thumbnail.png'
import dubsThumb from '../public/images/DigiDubs/thumbnail.png'
import { WorkGridItem } from '../components/ds-grid-item'
import underConstructionThumb from '../public/images/underConstruction.png'
import titanicThumb from '../public/images/accuracyFairnessProject/titanicThumbnail.png'
import { WorkGridItemPaper } from '../components/paper-grid-item'
import ictThumb from '../public/images/ICTPaper/ICTThumbnail.png'
import siblingThumb from '../public/images/SiblingPaper/SiblingThumbnail.png'


const Page = () => {
    
    return (
        <Layout>

            <Container maxW="container.xl" centerContent>
                <br />
                <br />
                <Box
                    borderRadius="xl"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={4}
                    mb={6}
                    maxW="750px">
                    <Text fontSize="2xl" align="center">
                        👋
                        <Typewriter
                            words={[" Hello & Welcome!"]}
                            cursor
                            cursorColor="#fccb35"
                            deleteSpeed={100}
                            delaySpeed={500}
                            typeSpeed={85}
                        />
                    </Text>
                </Box>

                <br />


                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h1" variant="page-title" size="3xl" mb={4}>
                            Jaimie Chin
                        </Heading>
                        <Box maxW="3xl">
                            <Text align="left" fontSize="2xl">
                                I&apos;m currently an Assistant Research Scientist analyzing positive development interventions
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                        p="1%"
                    >
                        <Box display="inline-block" overflow="hidden" p="1%">
                            <NoSsr>
                                <JaimieCharacter />
                            </NoSsr>
                        </Box>
                    </Box>
                </Box>


                <Section delay={0.5}>

                    <Box display={{ md: 'flex' }} maxW="3xl">
                        <Box flexGrow={1}>
                            <Heading as="h3" variant="section-title">
                                UX Work
                            </Heading>
                            <br />
                        </Box>
                    </Box>
                    <br />
                    <SimpleGrid columns={[1, 1, 2]} gap={5}>

                        <Container maxW="lg">
                            <WorkGridItemUX id="DigiDubs" title="Digi-Dubs" thumbnail={dubsThumb}>
                                An app to foster a greater sense of community at the University of Washington
                            </WorkGridItemUX>
                        </Container>

                        <Container maxW="lg">
                            <WorkGridItemUX id="EmoTune" title="EmoTune" thumbnail={thumbEmoTune}>
                                A web product demo to teach children about AI bias with their voices
                            </WorkGridItemUX>
                        </Container>

                    </SimpleGrid>

                    <br />

                    <Box align="center" my={4}>
                        <NextLink href="/uxWorks">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
                                See More of My UX Projects
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                    <br />
                    <br />

                <Section delay={0.6}>
                    <Box display={{ md: 'flex' }} maxW="3xl">
                        <Box flexGrow={1}>
                            <Heading as="h3" variant="section-title">
                                Data Science Projects
                            </Heading>
                            <br />
                        </Box>
                    </Box>
                    <br />
                    <SimpleGrid columns={[1, 1, 2]} gap={5}>

                        <Container maxW="lg">
                            <WorkGridItem id="accFairness" title="Accuracy & Fairness Analysis of an Automated Decision System" thumbnail={titanicThumb}>
                                An analysis of the trade-off between accuracy and fairness in a machine learning classifier (automated decision system)
                            </WorkGridItem>
                        </Container>

                        <Container maxW="lg">
                            <WorkGridItem id="underConstruction" title="Work In Progress..." thumbnail={underConstructionThumb}>
                                This  case study is under construction, please visit some of my other works in the meantime!
                            </WorkGridItem>
                        </Container>

                    </SimpleGrid>

                    <br />

                    <Box align="center" my={4}>
                        <NextLink href="/dataScienceWorks">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
                                My Data Science Projects
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <br />
                <br />
                    
                <Section delay={0.7}>

                    <Box display={{ md: 'flex' }} maxW="3xl">
                        <Box flexGrow={1}>
                            <Heading as="h3" variant="section-title">
                                Psychology Research Papers 
                            </Heading>
                            <br />
                        </Box>
                    </Box>
                    <br />
                    <SimpleGrid columns={[1, 1, 2]} gap={5}>

                        <Container maxW="lg">
                            <WorkGridItemPaper id="ICT" title="Student Experiences with ICT Learning Environments" thumbnail={ictThumb}>
                                A qualitative research paper exploring how adolescents experience information and communication technology (ICT) in post-pandemic classrooms
                            </WorkGridItemPaper>
                        </Container>

                        <Container maxW="lg">
                            <WorkGridItemPaper id="Siblings" title="Perspective Analysis of Sibling Relationships" thumbnail={siblingThumb}>
                                An analysis of a semi-structured interview featuring sibling relationships and its influence on how adolescents navigate cultural pressures and expectations
                            </WorkGridItemPaper>
                        </Container>

                    </SimpleGrid>

                    <br />

                    <Box align="center" my={4}>
                        <NextLink href="/PsychPapers">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
                                See More of My Papers
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <br />

            </Container>
        </Layout>
    )
}

export default Page