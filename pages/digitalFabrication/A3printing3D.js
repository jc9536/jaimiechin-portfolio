import {
    Container, Badge, Heading, Text, Image, Box, Center, Link, Table, Code,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    Spacer} from '@chakra-ui/react'
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

    const printer = '/images/533_Assignment_3/printer.jpg'
    const part2 = ['/images/533_Assignment_3/cubes.jpg', '/images/533_Assignment_3/cube.jpg', '/images/533_Assignment_3/tubes.jpg', '/images/533_Assignment_3/spiral.jpg', '/images/533_Assignment_3/cylinder.jpg']
    const zip = '/images/533_Assignment_3/CubeCylinder.zip'
    const part3 = ['/images/533_Assignment_3/sketch.jpg', '/images/533_Assignment_3/CrabClipSVG.jpg', '/images/533_Assignment_3/rhino.jpg', '/images/533_Assignment_3/orca.jpg', '/images/533_Assignment_3/draft.jpg']
    const CrabClipSVG = '/images/533_Assignment_3/CrabClip_new.svg'
    const CrabClipSTL = '/images/533_Assignment_3/CrabClip.stl'
    const CrabClip3MF = '/images/533_Assignment_3/CrabClip.3mf'
    const iter = ['/images/533_Assignment_3/CrabClipIter.jpg', '/images/533_Assignment_3/CrabClipPrintPlates.jpg', '/images/533_Assignment_3/compare.jpg', '/images/533_Assignment_3/finals.jpg']
    const gif = '/images/533_Assignment_3/shakeTest.gif'

    return (

        <Layout title="A3printing3D">
            <br />
            <Title>
                Getting Started with 3D Printing <Badge>April 2024</Badge>
            </Title>

            <Container maxW="max">
                <br />
                <br />
                <Section delay={0.3}>
                    <Heading as="h1" variant="page-title" size="3xl" mb={4} align="center">
                        Assignment 3: 3D Printing!
                    </Heading>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Part 1: Setting Up the 3D Printer
                    </Heading>

                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box
                            flexShrink={0}
                            textAlign="center">
                            <Center>
                                <Box
                                    w="475px"
                                    h="300px"
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <Image src={printer} w="475px" h="300px" borderRadius='3xl' alt="printer" />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">
                                    <br />

                                    <Text fontSize="xl">
                                        The 3D printer I have and will be using for my subsequent projects is the <b>Bambu Labs A1 Mini</b>. Luckily for me, the A1 Mini comes ready to print straight out of the box has an easy extruder swap system, and has auto bed-leveling, so I was fortunate enough to just clean the textured bed plate and plop it onto the bed!
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        Since the A1 mini has auto bed-leveling, I decided to print a different bed leveling protocol specifically made for Bambu Lab printers. Overall, I saw no issues with the auto bed-leveling feature!
                                    </Text>
                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Heading as="h3" variant="section-title">
                        Part 2: Observing & Adjusting Print Settings
                    </Heading>
                    <br />
                    <br />

                    <Box display={{ base: 'block', lg: 'flex' }}>
                        <Box flexShrink={0} textAlign="center">
                            <Center>
                                <Box
                                    w={{ base: '100%', sm: '80%', md: '70%', lg: '600px' }}
                                    h={{ base: 'auto', lg: '400px' }}
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <ImageCarousel images={part2} aspectRatio="3/2" />
                                </Box>
                            </Center>
                        </Box>

                        <Box w={{ base: '100%', lg: '125px' }} h="20px" display="inline-block" overflow="hidden"></Box>

                        <Section delay={0.4}>
                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">
                                    <Text fontSize="xl">
                                        I first made a simple 20mm cube and 30mm cylinder in Rhino. Given that they were simple shapes, they were simple to form and export as <b>.stl</b> files with no issues. I created a simple square/circle and used the <Code colorScheme='yellow'>ExtrudeCrv</Code> command to create the 3D objects.
                                    </Text>
                                    <br />
                                    <Center>
                                        <Meta>STL Files</Meta>
                                        <Link href={zip} download="CubeCylinder.zip">
                                            Compressed File <DownloadIcon mx="2px" />
                                        </Link>
                                    </Center>
                                    <br />
                                    <br />
                                    <Text fontSize="xl">
                                        Since I was using a Bambu Lab 3D printer, I opted to use <b>Orca Slicer</b> instead of Cura since Orca is optimized for Bambu Lab printers. I was able to do a quick Google Search to find the equivalent settings and used Orca to configure and produce the G-code for my printer.
                                    </Text>
                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <br />
                    <Text fontSize="xl">
                        When measuring my final pieces, I noted that my pieces were generally within 0.2mm print error margin, so I knew my settings were functional for future projects.
                    </Text>
                    <br />
                    <TableContainer>
                        <Table size='md' variant='striped' colorScheme='yellow'>
                            <TableCaption>Table of Configurations & Settings</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Configuration</Th>
                                    <Th>Orca Equivalent</Th>
                                    <Th>Print Duration</Th>
                                    <Th>L x W x H (mm)</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>&quot;Low Quality&quot; 2cm Cube</Td>
                                    <Td>0.28mm Draft Extra Draft</Td>
                                    <Td>11m 46s</Td>
                                    <Td>19.92 x 19.85 x 20.11</Td>
                                </Tr>
                                <Tr>
                                    <Td>&quot;Standard Quality&quot; 2cm Cube</Td>
                                    <Td>0.20mm Standard</Td>
                                    <Td>15m 50s</Td>
                                    <Td>19.80 x 20.00 x 20.10</Td>
                                </Tr>
                                <Tr>
                                    <Td>&quot;Super Quality&quot; 2cm Cube</Td>
                                    <Td>0.12 High Quality</Td>
                                    <Td>26m 54s</Td>
                                    <Td>19.95 x 19.93 x 20.05</Td>
                                </Tr>
                                <Tr>
                                    <Td>&quot;Standard Quality&quot; 2cm Concentric Top/Bottom Cube</Td>
                                    <Td>0.20mm Standard with Concentric Top & Bottom Faces</Td>
                                    <Td>15m 53s</Td>
                                    <Td>19.92 x 19.93 x 20.03</Td>
                                </Tr>
                                <Tr>
                                    <Td>Single Extrusion 3cm Tube</Td>
                                    <Td>0.20mm Standard Spiralize Outer Contour 0.4 Wall Thickness</Td>
                                    <Td>11m 55s</Td>
                                    <Td> 29.90 x 29.9 x 30.00</Td>
                                </Tr>
                                <Tr>
                                    <Td>Double Extrusion & Random Z-Seam Alignment 3cm Tube</Td>
                                    <Td>0.20mm Standard Spiralize Outer Contour 0.8 Wall Thickness</Td>
                                    <Td>11m 46s</Td>
                                    <Td>29.96 x 29.96 x 30.02</Td>
                                </Tr>
                                <Tr>
                                    <Td>Spiralize Outer Contour 3cm Cylinder</Td>
                                    <Td>0.20mm Standard Spiralize Outer Contour Smooth Spiral</Td>
                                    <Td>12m 50s</Td>
                                    <Td>30.00 x 30.00 x 30.00</Td>
                                </Tr>
                                <Tr>
                                    <Td>Supported & Side Printed 3cm Cylinder</Td>
                                    <Td>0.20mm Standard with Tree Supports</Td>
                                    <Td>25m 23s</Td>
                                    <Td>29.95 x 29.95 x 30.02</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    
                    <br />


                    <Heading as="h3" variant="section-title">
                        Part 3: Designing Clips
                    </Heading>
                    <br />
                    <br />

                    <Box display={{ base: 'block', lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">
                                <Text fontSize="xl">
                                    When I think of clips, I think of claw clips -- specifically in the shape of a crab&apos;s claws. I sketched out the shape of a crab and more specifically, the claw that uses a &quot;flexible&quot; circular center to open and close. I referenced this circular pattern from other clip designs I saw from
                                    <Link isExternal={true} href="https://makerworld.com/en/"> Maker World</Link>.
                                </Text>
                                <br />
                                <Text fontSize="xl">
                                    I imported my sketch as a reference in
                                    <Link isExternal={true} href="https://cuttle.xyz/"> Cuttle</Link> (I tried Rhino and lost my mind for 3 hours before I went back to Cuttle) and recreated my sketch into a <b>.svg</b>. I created different variations of the same claw clip by rotating the claw and positioning them at different angles.
                                </Text>
                                <br />

                                <Text fontSize="xl">
                                    I then imported my SVG into Rhino and used <Code colorScheme='yellow'>PlanarSrf</Code> to create a surface to extrude (I find that this makes a much cleaner model in the slicer). I used <Code colorScheme='yellow'>ExtrudeCrv</Code> to extrude my surface and make it three-dimensional. Then, I exported my my file as an STL.
                                </Text>
                            </Box>
                        </Box>

                        <Box w={{ base: '100%', lg: '125px' }} h="20px" display="inline-block" overflow="hidden"></Box>

                        <Section delay={0.4}>
                            <Box flexShrink={0} textAlign="center">
                                <Center>
                                    <Box
                                        w={{ base: '100%', sm: '80%', md: '70%', lg: '600px' }}
                                        h={{ base: 'auto', lg: '450px' }}
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <ImageCarousel images={part3} aspectRatio="4/3" />
                                    </Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Text fontSize="xl">
                        I imported my STL into Orca and decided to use a draft setting to observe the first iteration of my claw clip. This meant I was running my machine relatively quick at 200mm per second and printing with a 0.28mm layer height. This would take about 12 minutes to print a single claw clip!
                    </Text> 

                    <br />

                    <Text fontSize="xl">
                        For my first iteration, I realized that I made my clip much too thick! The thickness reduced the flexibility of my clip, which made it difficult to open and close the clip. I also realized that I needed to flip my claws so that the area where you would push down to open the claw faces the outside (easier to push) rather than the inside.
                    </Text>

                    <br />
                    <Flex align="center">
                        <Spacer />
                        <Meta>SVG File</Meta>
                        <Link href={CrabClipSVG} download="CrabClip_new.svg">
                            CrabClip.svg<DownloadIcon mx="2px" />
                        </Link>

                        <Spacer />

                        <Meta>STL File</Meta>
                        <Link href={CrabClipSTL} download="CrabClip.stl">
                            CrabClip.stl <DownloadIcon mx="2px" />
                        </Link>
                        <Spacer />

                        <Meta>3mf File</Meta>
                        <Link href={CrabClip3MF} download="CrabClip.3mf">
                            CrabClip.3mf <DownloadIcon mx="2px" />
                        </Link>
                        <Spacer />
                    </Flex>

                    <br />

                    <Box display={{ base: 'block', lg: 'flex' }}>
                        <Box flexShrink={0} textAlign="center">
                            <br />
                            <Center>
                                <Box
                                    w={{ base: '100%', sm: '80%', md: '70%', lg: '525px' }}
                                    h={{ base: 'auto', lg: '375px' }}
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <ImageCarousel images={iter} aspectRatio="7/5" />
                                </Box>
                            </Center>
                        </Box>

                        <Box w={{ base: '100%', lg: '125px' }} h="20px" display="inline-block" overflow="hidden"></Box>

                        <Section delay={0.4}>
                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">
                                    <br />
                                    <Text fontSize="xl">
                                        I went back to Cuttle and flipped the claws. I went into Rhino and extruded less (from 10mm to 5mm). I imported the new STL into Orca and did another test print with the same draft settings. The second iteration was able to open and close much more easily, but still retained its shape! Now I just needed to print out 15 of these crab clips!
                                    </Text>
                                    <br />
                                    <Text fontSize="xl">
                                        Orca Slicer allows you to create multiple plates and orient your object for each plate, so I made each of the print plates have a different variation of my crab clip. I decided to use the <b>0.20mm Standard Quality</b> setting to compromise print time and quality of print. This meant each plate would take about <b>1 hour</b> to print (3 hours total).
                                    </Text>
                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <Heading as="h3" variant="section-title">
                        Final Product & Shake Test
                    </Heading>

                    <br />
                    <br />

                    <Text fontSize="xl">
                        Overall, I had a lot of fun physically creating a product from a sketch! I have to admit that using Rhino is still a frustrating experience for me, I much rather create a more complex figure in Blender or Fusion360 with moving parts, but for the sake of learning, I wanted to push myself to learn and use Rhino. 
                    </Text>

                    <br />
                    <br />

                    <Text fontSize="4xl" align="center" >
                        The Final Test...
                    </Text>

                    <br />
                    <br />

                    <Text fontSize="xl">
                        The crab clip <b>survived the shake test</b>!
                    </Text>

                    <br />

                    <Text fontSize="xl">
                        If I had more time, I would have made a third iteration of my crab clip the extended the portion where you would push down to open the clip, to make it easier to push. I also wanted to orient the claws so that the cardboard can be held in a different position. However, speaking about holding carboard:
                    </Text>

                    <br />

                    <Text fontSize="xl">
                        Overall, I am happy with what I was able to accomplish! I ended up laser cutting some fishes out of cardboard for my shake test to match the crab clip theme and the crabs held the fish with no issue!
                    </Text>

                    <br />
                    <br />


                </Section>
            </Container>

        </Layout>


    )


}

export default Work