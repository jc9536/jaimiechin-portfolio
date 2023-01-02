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
import thumbSheepy from '../public/images/sheepyCaseStudy/sheepyThumbnail.png'
import starbucksThumb from '../public/images/StarbucksRedesign/thumbnail.png'
import { WorkGridItem } from '../components/ds-grid-item'
import underConstructionThumb from '../public/images/underConstruction.png'
import titanicThumb from '../public/images/accuracyFairnessProject/titanicThumbnail.png'


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
                                I&apos;m currently an undergraduate researcher in Applied Psychology focused in analyzing positive development interventions.
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
                            <WorkGridItemUX id="Sheepy" title="Sheepy" thumbnail={thumbSheepy}>
                                A bedtime routine app for parents who lack information about the best child development practices
                            </WorkGridItemUX>
                        </Container>

                        <Container maxW="lg">
                            <WorkGridItemUX id="StarbucksRedesign" title="Starbucks Menu Redesign" thumbnail={starbucksThumb}>
                                This  case study is under construction, please visit some of my other works in the meantime!
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

            </Container>
        </Layout>
    )
}

export default Page