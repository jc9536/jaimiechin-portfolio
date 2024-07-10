import { Container, Badge, Heading, Text, Box, Center, Link, Flex, Spacer } from '@chakra-ui/react'
import { Title } from '../../components/digitalFabrication'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { useEffect } from 'react'
import { Meta } from '../../components/dataScienceWorks'
import { DownloadIcon } from '@chakra-ui/icons'
import ImageCarousel from '../../components/ImageCarousel'

const Work = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);

    const sketch = ['/images/533_Assignment_7/sketch.jpg', '/images/533_Assignment_7/sketch_1.jpg']
    const component3MF = '/images/533_Assignment_8/WindChimeComponents.3mf'
    const lotusGH = '/images/533_Assignment_8/Lotus.gh'
    const lotusSTL = '/images/533_Assignment_8/LotusBoxMold.stl'
    const carousel_1 = ['/images/533_Assignment_8/Fish.jpg', '/images/533_Assignment_8/FishMold_1.jpg', '/images/533_Assignment_8/FishMold.jpg']
    const carousel_2 = ['/images/533_Assignment_8/LotusGrasshopper.jpg', '/images/533_Assignment_8/LotusMold.jpg', '/images/533_Assignment_8/Orca.jpg']
    const carousel_3 = ['/images/533_Assignment_8/Fishes.jpg', '/images/533_Assignment_8/Lotuses.jpg', '/images/533_Assignment_8/LotusMoldCast.jpg']
    const carousel_4 = ['/images/533_Assignment_8/YinYangFish.jpg', '/images/533_Assignment_8/Flower.jpg', '/images/533_Assignment_8/Crane.jpg',]
    const carousel_5 = ['/images/533_Assignment_8/LaserTags.jpg', '/images/533_Assignment_8/Tags.jpg',]
    const final = ['/images/533_Assignment_8/CopperFish.jpg', '/images/533_Assignment_8/BlueFish.jpg', '/images/533_Assignment_8/RedLotus.jpg', '/images/533_Assignment_8/WhiteLotus.jpg']

    return (
        <Layout title="A8FinalProject">
            <br />
            <Title>
                Final Project <Badge>May 2024</Badge>
            </Title>
            <Container maxW="max">
                <br />
                <br />
                <Section delay={0.3}>
                    <Heading as="h1" variant="page-title" size="3xl" mb={4} align="center">
                        Final Project: Wind Chimes
                    </Heading>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Assignment Details
                    </Heading>

                    <br />
                    <br />

                    <Text fontSize="xl">
                        Design and digitally fabricate an object of your choosing using the techniques you have learned in class. It can be any kind of object with any kind of intended audience, but it must follow the plan you presented in proposal week.
                    </Text>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 1: Ideation & Sketching
                    </Heading>

                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">
                                <br />
                                <br />
                                <Text fontSize="xl">
                                    From <Link href="https://www.jaimiechin.com/digitalFabrication/A7FinalProjectProposal" isExternal={true}>Assignment 7</Link>, I wanted to make a Wind Chime set. The idea behind this was to fabricate a set of components that can be assembled to form different variations of a wind chime.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    After some thinking, I decided to focus on fabricating the larger components (Lotus Flower and Fish), and source the smaller beads and tubes for the sake of time.
                                </Text>

                            </Box>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box
                                flexShrink={0}
                                textAlign="center">
                                <Center>
                                    <Box
                                        w={{ base: '100%', md: '900px' }}
                                        h={{ base: '250px', md: '500px' }}
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <ImageCarousel images={sketch} height={{ base: '250px', md: '500px' }} />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 2: Modeling the Fish in Fusion 360
                    </Heading>
                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box
                            flexShrink={0}
                            textAlign="center">
                            <Center>
                                <Box
                                    w={{ base: '100%', md: '675px' }}
                                    h={{ base: '300px', md: '425px' }}
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <ImageCarousel images={carousel_1} height={{ base: '300px', md: '425px' }} />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">

                                    <Text fontSize="xl">
                                        I made a model of my fish sketch in Fusion360. This was relatively straight forward process and I knew that I needed to leave a hole at the top to thread through the component.
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        What was difficult for the fish component, was the creation of the mold (that I ended up not using) since the inside the the fish is hollow. So technically I made a half mold and an internal half mold. I ended up not using this mold just because it printed so well in different materials (Copper PLA).
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        I ended up printing a smaller version of the mold and decided to make keychains out of the smaller casts.
                                    </Text>

                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Flex align="center">
                        <Spacer />
                        <Meta>3MF File</Meta>
                        <Link href={component3MF} download="WindChimeComponents.3mf">
                            WindChimeComponents.3mf <DownloadIcon mx="2px" />
                        </Link>
                        <Spacer />
                    </Flex>

                    <br />


                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 3: Parametric Lotus Flower
                    </Heading>

                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">

                                <Text fontSize="xl">
                                    The next thing I had to tackle was creating a parametric lotus flower in Grasshopper.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    As I have said before: <b>I hate Rhino/Grasshopper</b>. So this was probably the most mentally exhausting part of the fabricating process. Luckily there is a lovely <Link href="https://youtu.be/_3_7sDce6ME?si=hiMJYi2ZfbQDbodF" isExternal={true}>Youtube Tutorial</Link> on how to do this that I followed, altered and layered in order to create the lotus flower mesh.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    For the lotus flower mold, I considered creating a one piece mold for ease. So I modeled a circular mold box for the lotus flower.
                                </Text>
                            </Box>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box
                                flexShrink={0}
                                textAlign="center">
                                <Center>
                                    <Box
                                        w={{ base: '100%', md: '775px' }}
                                        h={{ base: '300px', md: '450px' }}
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <ImageCarousel images={carousel_2} height={{ base: '300px', md: '450px' }} />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>


                    <br />

                    <Flex align="center">
                        <Spacer />
                        <Meta>Grasshopper File</Meta>
                        <Link href={lotusGH} download="Lotus.gh">
                            Lotus.gh <DownloadIcon mx="2px" />
                        </Link>

                        <Spacer />

                        <Meta>STL File</Meta>
                        <Link href={lotusSTL} download="LotusBoxMold.stl">
                            LotusBoxMold.stl <DownloadIcon mx="2px" />
                        </Link>
                        <Spacer />
                    </Flex>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 4: Printing the Models and Molds
                    </Heading>

                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">
                                <br />

                                <Text fontSize="xl">
                                    After modeling, I 3D printed some test models to make sure my print settings provided the best final print.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    I ended up having to customize some of the tree supports for both the fish model and the lotus model and lowering the print speed in order for both prints to print smoothly.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    However, I realized that while my models printed fine in PLA, other materials did not result in the same flawless print. In fact, printing in copper PLA proved to be the most difficult, since there were many strings of filament on the final product that needed to be cleaned off.
                                </Text>

                            </Box>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box
                                flexShrink={0}
                                textAlign="center">
                                <Center>
                                    <Box
                                        w={{ base: '100%', md: '650px' }}
                                        h={{ base: '300px', md: '450px' }}
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <ImageCarousel images={carousel_3} height={{ base: '300px', md: '450px' }} />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Text fontSize="xl">
                        After printing in multiple materials, I found that the most visually appealing and durable prints for the fish was Wood PLA and Copper PLA. The lotus flower had the best print with Clear PLA and Silk PLA. The lotus flower print had very thin petals on certain points that would not be durable in brittle Copper PLA.
                    </Text>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 5: Wooden Tags
                    </Heading>
                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box
                            flexShrink={0}
                            textAlign="center">
                            <Center>
                                <Box
                                    w={{ base: '100%', md: '525px' }}
                                    h={{ base: '300px', md: '600px' }}
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <ImageCarousel images={carousel_4} height={{ base: '300px', md: '600px' }} />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">

                                    <Text fontSize="xl">
                                        One of the components I wanted to include for the wind chimes is a wooden tag that would catch wind. I created a general tag shape in Rhino and exported the SVG into Adobe InDesign. For each of the designs on the tag, I ended up tracing real-life images in Procreate and exporting them as SVGs into Adobe InDesign for layout organization.
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        I went to the MILL and did a few test prints in order to achieve the best engraving (raster) results. The most optimal results included <b>60% speed and 55% Power</b> for the Raster and <b>10% Speed, 15% Power, 50% Frequency</b> for the vector cutting. I ended up making multiples of the tags, just because they turned out so well.
                                    </Text>

                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 6: Getting a Professional Finish
                    </Heading>

                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">
                                <br />

                                <Text fontSize="xl">
                                    I wanted to achieve a more polished finish for my components, so I experimented with sanding, polishing, and staining my components.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    I first started with my Copper PLA fish prints because I wanted to achieve two different finishes. I wanted to oxidize one print to achieve a green/blue patina and polish the other print to achieve a shiny copper finish.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    The lotus flower prints already had a visual appeal from the Clear PLA, so I decided to leave those prints be since they were also more fragile than the fish components.
                                </Text>

                            </Box>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box
                                flexShrink={0}
                                textAlign="center">
                                <Center>
                                    <Box
                                        w={{ base: '100%', md: '700px' }}
                                        h={{ base: '300px', md: '450px' }}
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <ImageCarousel images={carousel_5} height={{ base: '300px', md: '450px' }} />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Text fontSize="xl">
                        I had to sand the Copper PLA prints, which took <b>FOREVER</b>. I started with 200 grit sandpaper to remove as much of the layer lines as possible then progressively moved to 400 grit, 800 grit, and 1200 grit. I ended up buying a sanding attachment for my rotary tool and that helped quicken the sanding process. In order to expose more of the copper particles in the print, I went over the sanded print with some fine steel wool.
                    </Text>

                    <br />

                    <Text fontSize="xl">
                        I cleaned the prints with some copper polish and was happy with the result. For one of the prints, I decided to add a patina, so I applied a salt and vinegar solution on the exposed print and left it exposed to ammonia vapors in order to achieve a more blue patina.
                    </Text>

                    <br />

                    <Text fontSize="xl">
                        For the wooden tags, I noticed that they looked a bare and too pristine, so I went over them with a chestnut wood stain and wiped off the excess to distress the wood texture on the balsa.
                    </Text>

                    <br />

                    <Text fontSize="xl">
                        Happy with the finishes, I sprayed a satin finish top-coat over all of my components in order to make them resistant to the weather and preserve the finishes.
                    </Text>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 7: Assembly and Conclusion
                    </Heading>
                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box
                            flexShrink={0}
                            textAlign="center">
                            <Center>
                                <Box
                                    w={{ base: '100%', md: '600px' }}
                                    h={{ base: '400px', md: '800px' }}
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <ImageCarousel images={final} height={{ base: '400px', md: '800px' }} />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">

                                    <Text fontSize="xl">
                                        Once all of my components were ready, it was time to assemble the the wind chimes. This was a more tedious process since I had to assemble the chimes vertically and test (with a fan) the chime-ability.
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        Using beads, fishing line, eyepins and metal tubes, I assembled segments of chimes and attached them to the components. I ended up recycling some old christmas ornament bells and attaching those to add to the overall sound of the wind chimes.
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        Overall, I felt as though I was able to incorporate many of the things I have learned during this quarter and apply them to this final project.
                                    </Text>

                                    <br />
                                    <Text fontSize="xl">
                                        Making more than one item was quite taxing, but I enjoyed the process of envisioning an idea and bringing it to life. I ended up not using all of the components I had intended for this project, but I think I tried to achieve the best composition for the final project I envisioned.
                                    </Text>
                                    <br />

                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <br />
                    <br />
                </Section>
            </Container>
        </Layout>
    )
}

export default Work
