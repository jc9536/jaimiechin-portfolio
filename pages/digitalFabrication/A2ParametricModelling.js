import { Container, Badge, Heading, Text, Image, Box, Center, Link, Code, Flex, Spacer } from '@chakra-ui/react'
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

    const chess = '/images/533_Assignment_2/chess.jpeg'
    const sketch = '/images/533_Assignment_2/sketch.jpg'
    const grasshopper = '/images/533_Assignment_2/ChessBox.gh'
    const files = '/images/533_Assignment_2/IllustratorFiles.zip'
    const carousel_1 = ['/images/533_Assignment_2/patternSlots.jpg', '/images/533_Assignment_2/Base.jpg', '/images/533_Assignment_2/side_1.jpg', '/images/533_Assignment_2/boxVector.jpg']
    const carousel_2 = ['/images/533_Assignment_2/pawnBake.jpg', '/images/533_Assignment_2/pawnEdit.jpg']
    const test = '/images/533_Assignment_2/test.jpg'
    const carousel_3 = ['/images/533_Assignment_2/box.jpg', '/images/533_Assignment_2/pieces.jpg']
    const final_carousel = ['/images/533_Assignment_2/final_1.jpg', '/images/533_Assignment_2/final_2.jpg']

    return (

        <Layout title="A1ModellingLaserCutting">
            <br />
            <Title>
                Parametric Model using Grasshopper <Badge>April 2024</Badge>
            </Title>

            <Container maxW="container.xl" centerContent>
                <br />
                <br />
                <Section delay={0.3}>
                    <Heading as="h1" variant="page-title" size="3xl" mb={4} align="center">
                        Assignment 2: Creating a Parametric Model using a Grasshopper Definition
                    </Heading>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Assignment Details
                    </Heading>

                    <br />
                    <br />

                    <Text fontSize="xl">
                        Create a parametric model using a grasshopper definition. Using your model, design parts to be laser cut that can be clipped together. <b>At least one of your parts should enable you to connect one of your pieces to another without use of glue or fasteners</b>. Your grasshopper definition should <b>allow you to vary the thickness of your materials</b>, and also vary other design parameters. Include notes in your grasshopper definition so it&apos;s clear what a user should input and bake.
                    </Text>

                    <br />
                    <Text fontSize="xl">
                        Laser cut your parts and construct your physical model. <b>Your physical model should contain at least 30 parts</b>.
                    </Text>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 1: Ideation & Sketching
                    </Heading>

                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box
                            flexShrink={0}
                            textAlign="center">
                            <Center>
                                <Box
                                    w="250px"
                                    h="250px"
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <Image src={chess} boxSize="250px" borderRadius='3xl' alt="trash" />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">
                                    <br />

                                    <Text fontSize="xl">
                                        I must be one of the few people on this Earth that has not watched <i>Queen&apos;s Gambit</i> until now. Inspired by the Netflix show, I wanted to challenge myself and make a chess set out of laser-cut cardboard. Something like this inspiration photo I found with slots to make sure the pieces don&apos;t fall over during gameplay.
                                    </Text>

                                    <br />
                                    <Text fontSize="xl">
                                        To be fair, I am not the best chess player, but I think my older brother would greatly appreciate my effort into making this!
                                    </Text>
                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">
                                <br />
                                <br />
                                <br />

                                <Text fontSize="xl">
                                    As with all of my projects, I like to start with a general sketch of my idea and the overall concept of what I would like to make. 
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    Here, I decided to make the chess box itself a jigsaw box that fits together so the pieces can be stored inside the box. I also made a note to make slots in the pattern so my chess pieces can slot in and stay upright during gameplay.
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
                                        w="600px"
                                        h="400px"
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <Image src={sketch} borderRadius='3xl' alt="sketch" />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 2: Grasshopper Definition & Vector Creation
                    </Heading>
                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box
                            flexShrink={0}
                            textAlign="center">
                            <Center>
                                <Box
                                    w="650px"
                                    h="375px"
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <ImageCarousel images={carousel_1} height="375px" />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">

                                    <Text fontSize="xl">
                                        The first thing I wanted to tackle was the chess pattern and box itself, since that was more straightforward compared to the individual chess pieces that would need some tweaking in Rhino.
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        I am anticipating making the tabs larger for a better fit with the box pieces, but that it a relatively simple edit with my Grasshopper definition where I can increase the tab widths.
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        I found that the <Code colorScheme='yellow'>RectangularArray</Code > component in Grasshopper to be extremely useful for creating grids and evenly spaced tabs!
                                    </Text>

                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">
                                <br />

                                <Text fontSize="xl">
                                    As I mentioned earlier, the chess pieces themselves needed to be further refined in Rhino. However, I did create some of the base elements like the <b>tab</b>, <b>stem</b>, and <b>divider</b> of each piece in Grasshopper so it was easier to make similar parts.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    I adjusted the length of the <b>stem</b> for different chess pieces and refined the shape using <Code colorScheme='yellow'>Curve</ Code> and <Code colorScheme='yellow'>CurveBoolean</Code>
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
                                        w="775px"
                                        h="375px"
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <ImageCarousel images={carousel_2} height="375px" />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>


                    <br/>
                    <Text fontSize="xl">
                        After baking and refining all of my pieces, I exported them as vectors and imported them into Adobe Illustrator. I ended up making <b>2 versions of the chess board pattern</b> because I was not sure what settings to use for engraving cardboard (or if it was even possible). After some duplication and adjusting of the varying pieces on to my cardboard sizes, I was ready to head to <b>The Mill</b> and cut out my pieces!
                    </Text>

                    <br />
                    <Flex align="center">
                        <Spacer />
                        <Meta>Grasshopper Definition</Meta>
                        <Link href={grasshopper} download="ChessBox.gh">
                            Grasshopper Definition File <DownloadIcon mx="2px" />
                        </Link>

                        <Spacer />

                        <Meta>Adobe Illustrator File</Meta>
                        <Link href={files} download="IllustratorFiles.zip">
                            Compressed Files <DownloadIcon mx="2px" />
                        </Link>
                        <Spacer />
                    </Flex>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 3: Test Prints & Engraving
                    </Heading>

                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box
                            flexShrink={0}
                            textAlign="center">
                            <Center>
                                <Box
                                    w="375px"
                                    h="300px"
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <Image src={test} h="300px" w="375px" borderRadius='3xl' alt="trash" />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">

                                    <Text fontSize="xl">
                                        The first thing I wanted to do was make a few test cuts and test engraving with the laser cutter, since I have never tried engraving cardboard before.
                                    </Text>

                                    <br />
                                    <Text fontSize="xl">
                                        I ended up using <b>50% speed</b>, <b>25% power</b>, <b>50% frequency</b> with the <i>Raster</i> setting for the engraving. Looking back, I could have used even less power since I noticed the integrity of the engraved portions start to wear out after cutting out the slots for the tabs.
                                    </Text>

                                    <br />
                                    <Text fontSize="xl">
                                        For the regular cuts, I defaulted to the settings I used for my last project:  I ended up using <b>25% speed</b>, <b>100% power</b>, and <b>50% frequency</b>.
                                    </Text>
                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <br />
                    <Text fontSize="xl">
                        I ended up not engraving the chess pieces as they have very small parts that may be destroyed of weakened due to the engraving process. Therefore, I would use a grey marker to color in half of the chess pieces instead!
                    </Text>

                    <br />
                    <Text fontSize="xl">
                        One mistake I did end up making was with my box slots. I ended up making them the exact same size as my tabs, so my cardboard pieces slipped out very easy! I ended up having to go back to my Grasshopper file and making the slots <i>2mm</i> smaller to ensure a snug fit for my pieces to stick together. 
                    </Text>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 4: Cutting Final Pieces & Finishing Touches 
                    </Heading>

                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">
                                <br />
                                <br />

                                <Text fontSize="xl">
                                    After making my Grasshopper adjustments, I cut out my final pieces and assembled the chess box itself. 
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    To be fair... the fit was not as seamless as I had hoped (most likely due to the varying cardboard types I used again). However, I was out of cardboard to make any additional pieces and decided to make this box work as best as I could.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    I also added some finishing touches and colored half of the chess pieces with a grey marker. 
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
                                        w="600px"
                                        h="400px"
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <ImageCarousel images={carousel_3} height="400px" />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 5: Final Product & Reflection
                    </Heading>
                    <br />
                    <br />

                    <Center>
                        <ImageCarousel images={final_carousel} height="800px" />
                    </Center>

                    <br />
                    <br />

                    <Text fontSize="xl">
                        Overall, this project really forced me to learn how to use Grasshopper and Rhino. I must admit that I don&apos;t particularly enjoy using Grasshopper and Rhino from this project, but I do understand the capabilities of the tools. I look forward to practicing more with these tools in order to improve, but for more simple pieces, I may turn back to using more simple interfaces for vectors (like Adobe Illustrator or Cuttle).
                    </Text>

                    <br />

                    <Text fontSize="xl">
                        Reflecting on my final product, I realized at the VERY end that I flipped the check pattern by accident T^T. I fixed the Adobe Illustrator file, so anyone who wants to make this in the future won&apos;t have an incorrect pattern like mine does!
                    </Text>


                </Section>
            </Container>

        </Layout>


    )


}

export default Work