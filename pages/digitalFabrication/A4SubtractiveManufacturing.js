import { Container, Badge, Heading, Text, Image, Box, Center, Link, Flex, Spacer } from '@chakra-ui/react'
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

    const sketch = '/images/533_Assignment_4/sketch.jpg'
    const testSTL = '/images/533_Assignment_4/InterferenceTest.stl'
    const test3MF = '/images/533_Assignment_4/InterferenceTest.3mf'
    const carousel_1 = ['/images/533_Assignment_4/testSlicer.jpg', '/images/533_Assignment_4/testPrint.jpg']
    const carousel_2 = ['/images/533_Assignment_4/boxModel.jpg', '/images/533_Assignment_4/boxSlicer.jpg']
    const modelSTL = '/images/533_Assignment_4/BoxSTL.stl'
    const model3MF = '/images/533_Assignment_4/Box3MF.3mf'
    const sugar = '/images/533_Assignment_4/sugar.gif'
    const final_carousel = ['/images/533_Assignment_4/final_1.jpg', '/images/533_Assignment_4/final_2.jpg', '/images/533_Assignment_4/final_3.jpg']

    return (

        <Layout title="A4SubtractiveManufacturing">
            <br />
            <Title>
                Subtractive Manufacturing <Badge>April 2024</Badge>
            </Title>

            <Container maxW="container.xl" centerContent>
                <br />
                <br />
                <Section delay={0.3}>
                    <Heading as="h1" variant="page-title" size="3xl" mb={4} align="center">
                        Assignment 4: Designing a Box with Interference Fit
                    </Heading>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Assignment Details
                    </Heading>

                    <br />
                    <br />

                    <Text fontSize="xl">
                        Design a box that is made up of flat panels with fingerjoints/boxjoints, tabs, or another joining method design for sheet material. Your panels and all tabs need to be 3d printed, but you cannot 3D print the box in one piece. Design for an interference fit, that is, when you press the panels together they should join tightly and not need additional fasteners and screws. 
                    </Text>

                    <br />
                    <Text fontSize="xl">
                        <b>Furthermore, they should provide a close enough fit that your resulting box can hold something like sugar without leaking.</b>
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
                                    w="450px"
                                    h="300px"
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <Image src={sketch} w="450px" h="300px" borderRadius='3xl' alt="sketch" />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">

                                    <Text fontSize="xl">
                                        Having done something similar for <Link href="/digitalFabrication/A2ParametricModelling">Assignment 2</Link>, I wanted to challenge myself and attempt to try different techniques with 3D printing.
                                    </Text>

                                    <br />
                                    <Text fontSize="xl">
                                        As usual, I start all of projects with a general sketch with notes on how I envision the final product. From Assignment 2, I learned that it&apos;s best if you design the box sides first, then the bottom/top. This is mainly because when you design the tabs, you also have to account for material thickness and fit tolerance. So I aimed for my tabs to be about <b>20mm</b>, but I also needed to find out my fit tolerance to design the fitting of the tabs.
                                    </Text>
                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 2: Tolerance Test 
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
                                    h="425px"
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <ImageCarousel images={carousel_1} height="425px" />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">

                                    <Text fontSize="xl">
                                        I decided to design and print out a tolerance test first. I planned on making my panel thickness <b>10mm</b> (I learned that the thinner the material, the less tolerance there is), and designed a simple test by increasing the gap by 0.05mm. I also planned on making a sliding top, so I knew I needed a larger gap for lid.
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        From my tolerance test, I found that a tight fit for my panels would be <b>0.05mm - 0.10mm</b> tolerance. A looser, but snug fit for my sliding lid would be <b>0.10mm - 0.15mm</b>. I was also aware that my machine tends to print with a <b>-0.20mm error rate</b>, which I needed to account for in my design.
                                    </Text>

                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <Flex align="center">
                        <Spacer />
                        <Meta>STL File</Meta>
                        <Link href={testSTL} download="InterferenceTest.stl">
                            InterferenceTest.stl <DownloadIcon mx="2px" />
                        </Link>

                        <Spacer />

                        <Meta>3MF File</Meta>
                        <Link href={test3MF} download="InterferenceTest.3mf">
                            InterferenceTest.3mf <DownloadIcon mx="2px" />
                        </Link>
                        <Spacer />
                    </Flex>
                    
                    <br />

                    <Text fontSize="xl">
                        I also made a note of the settings I used to print my tolerance test, as I would need to use the same settings to achieve the most similar results. I used the <b>0.20mm standard</b> settings for my machine in Orca, but slowed down the <b>inner wall speed to 100mm/s and outer wall speed to 150mm/s</b>, in order for a more accurate outline for my tabs and gaps.
                    </Text>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 3: Model Creation
                    </Heading>

                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">

                                <Text fontSize="xl">
                                    As I mentioned earlier, I started by modelling the side panels and making the sides fit into one another first before working on the bottom panels. I must admit, I did cheat a little bit and used <b>Autodesk Fusion 360</b> instead of Rhino, just to try a different program an see if I liked it better <b>*spoiler*</b> I think Fusion 360 is superior (˵ ¬ᴗ¬˵)
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    When modelling, I wrote down the sizes of my tabs and gaps (which is <b>SO</b> much easier to figure out in Fusion 360), so I could use/adjust them later for the lid and bottom panel.
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
                                        h="450px"
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <ImageCarousel images={carousel_2} height="450px" />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                </Box>


                <br />
                <Text fontSize="xl">
                    I decided to print out one of each short panel and long panel to see if those pieces fit before moving on and designing the bottom panel and finally the lid. This way, I can also use my calipers to confirm the error rate of my tolerance tabs to make a better fit.  
                </Text>
                
                <br />
                
                <Flex align="center">
                    <Spacer />
                    <Meta>STL File</Meta>
                    <Link href={modelSTL} download="BoxSTL.stl">
                        BoxSTL.stl <DownloadIcon mx="2px" />
                    </Link>

                    <Spacer />

                    <Meta>3MF File</Meta>
                    <Link href={model3MF} download="Box3MF.3mf">
                        Box3MF.3mf <DownloadIcon mx="2px" />
                    </Link>
                    <Spacer />
                </Flex>
                
                <br />
                
                <Text fontSize="xl">
                    I ended up not having to make any test pieces/prototypes by using this method which saved me time and filament! For the side panels and bottom panel, they each took roughly <b>45 - 60 min</b> to print.
                </Text>
                
                <br />
                
                <Text fontSize="xl">
                    The longest print was the lid, where I wanted to experiment with a text engraving and a figurine that would act as a knob to slide the lid on and off. This print took <b>8 hours and 30 min</b> mainly because of the filament color changes for the engraving and figurine. I decided to use a <b>lightning infill at 10%</b> to help reduce print time by about 30 min. 
                </Text>

                <br />
                <br />

                    <Heading as="h3" variant="section-title">
                        Phase 4: Sugar Test
                    </Heading>

                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">
                                <br />

                                <Text fontSize="xl">
                                    After making all of my pieces, it was time for the sugar test. I contemplated using brown sugar instead of white sugar, because the sugar particles are larger (ʃƪ¬‿¬)
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    To be fair however, I decided to buy a bag of white sugar for this and conduct the test with white sugar. From the video, you can see that there was no leaking apart from a few specks (although that may have been from my sugar pour mishap a few moments earlier).
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
                                        w="650px"
                                        h="350px"
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <Image src={sugar} w="650px" h="350px" borderRadius='3xl' alt="ShakeTestGIF" />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Text fontSize="xl">
                        However, I noticed that because I treated this box horribly since its creation (dropping it a few times, taking the pieces apart and putting them back together, etc.), the pieces don&apos;t fit as good as they used to and I have been noticing larger gaps in the bottom.
                    </Text>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 5: Reflection
                    </Heading>
                    <br />
                    <br />

                    <Center>
                        <ImageCarousel images={final_carousel} height="800px" />
                    </Center>

                    <br />
                    <br />

                    <Text fontSize="xl">
                        Overall, this project taught me the significance of making pieces as you go in order to save your materials and affirm your measurements (since there are margins of error with 3D printing -- especially at higher speeds). 
                    </Text>

                    <br />

                    <Text fontSize="xl">
                        I also learned that PLA is not indestructible and can certainly warp from abuse. I don&apos;t think my box can pass the white sugar test anymore after I abused it, but I did test it when brown sugar and it still passed that one!
                    </Text>


                </Section>
            </Container>

        </Layout>


    )


}

export default Work