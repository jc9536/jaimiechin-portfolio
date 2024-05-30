import { Container, Badge, Heading, Text, Image, Box, Center, Link, Flex, Spacer, Code, UnorderedList, ListItem} from '@chakra-ui/react'
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

    const sketch = '/images/533_Assignment_5/sketch.jpg'
    const mushroomOBJ = '/images/533_Assignment_5/MarioMushroom.obj'
    const mushroomSTL = '/images/533_Assignment_5/MarioMushroom.stl'
    const goldMushroomSTL = '/images/533_Assignment_5/GoldenMushroom.stl'
    const goldMushroom3DM = '/images/533_Assignment_5/GoldenMushroom.3dm'
    const goldMushroom3MF = '/images/533_Assignment_5/GoldenMushroom.3mf'
    const mushroomLamp3MF = '/images/533_Assignment_5/MushroomLamp.3mf'
    const mushroomLampF3D = '/images/533_Assignment_5/MushroomLamp.f3d'
    const carousel_1 = ['/images/533_Assignment_5/blender.jpg', '/images/533_Assignment_5/MeshFaces.jpg', '/images/533_Assignment_5/fusionBase.jpg']
    const carousel_2 = ['/images/533_Assignment_5/crown.jpg', '/images/533_Assignment_5/align.jpg', '/images/533_Assignment_5/Orca.jpg', '/images/533_Assignment_5/mangled.jpg', '/images/533_Assignment_5/tree.jpg']
    const final_carousel = ['/images/533_Assignment_5/final.jpg', '/images/533_Assignment_5/clean.jpg', '/images/533_Assignment_5/final_2.jpg']
    const carousel_3 = ['/images/533_Assignment_5/lampBase.jpg', '/images/533_Assignment_5/lampModel.jpg', '/images/533_Assignment_5/lampModelHalf.jpg', '/images/533_Assignment_5/body_2.jpg', '/images/533_Assignment_5/body_3.jpg']
    const carousel_4 = ['/images/533_Assignment_5/body.jpg', '/images/533_Assignment_5/cap.jpg', '/images/533_Assignment_5/bottom.jpg',]
    const carousel_5 = ['/images/533_Assignment_5/lamp.jpg', '/images/533_Assignment_5/lamp_2.jpg', '/images/533_Assignment_5/lamp_3.jpg', '/images/533_Assignment_5/lamp_4.jpg']

    return (

        <Layout title="A5Meshes&Lamps">
            <br />
            <Title>
                Meshes & Lamps <Badge>April 2024</Badge>
            </Title>

            <Container maxW="container.xl" centerContent>
                <br />
                <br />
                <Section delay={0.3}>
                    <Heading as="h1" variant="page-title" size="3xl" mb={4} align="center">
                        Assignment 5: Getting Meshy & Lamps!
                    </Heading>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Assignment Details
                    </Heading>

                    <br />
                    <br />

                    <Text fontSize="xl">
                        <b>Part 1:</b> Modify the mesh of two STLs to produce a single printable STL. You may use whatever STLs you want, e.g. downloaded from Thingiverse or elsewhere! When exporting the STL from Rhino, it should pass all checks for rapid prototyping.
                    </Text>

                    <br />
                    <Text fontSize="xl">
                        <b>Part 2:</b> Please make (a start on) a lamp! Using your lamp innereds&apos; measurements as a point of departure, make a lamp that can be assembled around the innereds. You must make the lamp using digital fabrication techniques from prior weeks. You should be able to remove the lamp from the innereds again, so you cannot attach the lamp to the innereds with glue, fasteners, adhesive, etc.
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
                                        To be honest, I began this assignment in reverse order and completely forgot about Part 1 for most of the week. I began with looking through Thingaverse and Pinterest for ideas for lamps and decided to make a variation of a mushroom lamp.
                                    </Text>

                                    <br />
                                    <Text fontSize="xl">
                                        After finding a few existing projects on Thingaverse, I sketched out my ideas and made notes on my goals for this project. I decided that I really wanted to test out varying filament materials and play with transparent materials since the goal of the assignment was to make a lamp. 
                                    </Text>
                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 2: Modeling & Failing in Fusion 360
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
                                        I wanted to make a <b>Mario Mushroom</b> (Nintendo please don&apos;t copystrike me ԅ[ •́ ﹏├┬┴┬┴) so I began to model a simple Mushroom in <b>Blender</b>. I was not particularly concerned about creating the model to scale for now, since I knew I could scale it in Fusion360 later.
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        After exporting my model from Blender as an .stl, I needed to import it into Fusion360 to model and create the more technical parts of my design (innereds and screw mechanisms). 
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        However, I spent <b>DAYS</b> ˚‧º·(˃̣̣̥⌓˂̣̣̥)‧º·˚ trying to import my model into Fusion360.
                                    </Text>

                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <Flex align="center">
                        <Spacer />
                        <Meta>OBJ File</Meta>
                        <Link href={mushroomOBJ} download="MarioMushroom.obj">
                            MarioMushroom.obj <DownloadIcon mx="2px" />
                        </Link>

                        <Spacer />

                        <Meta>STL File</Meta>
                        <Link href={mushroomSTL} download="MarioMushroom.stl">
                            MarioMushroom.stl <DownloadIcon mx="2px" />
                        </Link>
                        <Spacer />
                    </Flex>

                    <br />

                    <Text fontSize="xl">
                        In the end, I had to remodel my Mushroom in Fusion360 instead. I was mainly running into an issue where my original model had too many faces and Fusion360 would crash before my .stl could be converted into a editable solid. I tried reducing the mesh, but then I would lose all the detail I wanted to keep. It ended up being easier to remodel the Mushroom in Fusion360, even if I had to lose some of the slopes and angles I had in my original model.
                    </Text>

                    <br />

                    <Text fontSize="xl">
                        When creating my Mushroom in Fusion360, I decided to focus on the outer design and function before I focused on the innereds (also because my lamp base didn&apos;t arrive yet (Ŏ艸Ŏ)). I focused on making sure the top and bottom could screw together, so that the bulb and lamp base could be replaced/removed in the future. Luckily, Fusion360 has a lovely &quot;screw&quot; function and with the help of this <Link href="https://www.youtube.com/watch?v=UWMlJ_kNNMU" isExternal={true}>Youtube Tutorial</Link>. I also wanted to make the bottom of the base removable so that the lamp cable could be removed, but the base of the lamp would still look neat (I haven&apos; gotten to this part yet, but it is planned!).
                    </Text>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 3: Panic! at Part One of the Assignment
                    </Heading>

                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">

                                <Text fontSize="xl">
                                    If I did&apos;t mention earlier, remodelling in Fusion360 also took another few days. So by this time, I had maybe one or two days to complete Part 1 of the assignment (╥╯⌒╰╥๑).
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    In order to save time, I used my original model created in Blender, and decided to make the Golden Mushroom from Mario. This was fine, considering I couldn&apos;t find a Golden Mushroom on Thingaverse that I liked and was true to the original design (again, Nintendo don&apos;t come after me (ㆆ ᴗ ㆆ)).
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
                        I ended up finding a <Link href="https://www.thingiverse.com/thing:1858601" isExternal={true}>Princess Peach Crown on Thingaverse</Link> (credits to Killonious) that I could use for the Golden Mushroom crown and imported both of these .stl files into Rhino.
                    </Text>

                    <br />

                    <Flex align="center">
                        <Spacer />
                        <Meta>STL File</Meta>
                        <Link href={goldMushroomSTL} download="GoldenMushroom.stl">
                            GoldenMushroom.stl <DownloadIcon mx="2px" />
                        </Link>

                        <Spacer />

                        <Meta>Rhino File</Meta>
                        <Link href={goldMushroom3DM} download="GoldenMushroom.3dm">
                            Box3MF.3mf <DownloadIcon mx="2px" />
                        </Link>
                        <Spacer />

                        <Meta>3MF File</Meta>
                        <Link href={goldMushroom3MF} download="GoldenMushroom.3mf">
                            GoldenMushroom.3mf <DownloadIcon mx="2px" />
                        </Link>
                        <Spacer />
                    </Flex>

                    <br />

                    <Text fontSize="xl">
                        I ended up not having to make too many edits to the meshes after some scaling, aligning, and rotating of the two meshes. I used the <Code colorScheme='yellow'>Join</Code> command to join the two meshes together into a single mesh to be printed.
                    </Text>

                    <br />

                    <Text fontSize="xl">
                        After importing into Orca Slicer, I edited some of the settings (<b>0.16mm High Quality Setting; Concentric Shells; Random Seam Alignment</b>) in order to achieve a quicker print. I <b>reduced the infill to 0%</b> and my final print took about <b>7 and a half hours</b>. HOWEVER, after I was finished with my print, I realized that I definitely needed to add supports, since the underside of my mushroom was mangled. This mushroom still could be saved with some sanding and a finishing spray, but I decided to print another mushroom <b>with Tree Supports</b> to see if I could ended up with a neater final product. 
                    </Text>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 4: Final Product & Reflection
                    </Heading>

                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">
                                <br />

                                <Text fontSize="xl">
                                    The tree supports definitely helped! The final product looks much neater! °˖✧◝(⁰▿⁰)◜✧˖°
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    Overall, I felt like I spent a lot of time moving from one file format to another. While I have more experience with Blender and feel more comfortable modeling meshes in Blender, it was a giant PAIN to import meshes into Fusion360. I was better off creating a simpler model in Fusion360 eventhough I would lose some of the detail I had in my original model. 
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
                                        <ImageCarousel images={final_carousel} height="350px" />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Text fontSize="xl">
                        For the next assignment, I am keeping in mind the next steps for my lamp model and need to make sure my lamp base has a good tolerance fit. I am excited to play with different materials once I finish my model and see which materials achieve the best lighting.
                    </Text>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 5: Measuring & Testing Lamp Parts 
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
                                    <ImageCarousel images={carousel_3} height="425px" />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">

                                    <Text fontSize="xl">
                                        For the next week I tested different lamp parts (base and bulb) and measured their sizes to compare how I would fit these parts within the model I had made. I had already designed the mushroom to have 3 main parts: <b>the body</b> (where the lamp parts and majority of the bulb would go), <b>the cap</b> (where the light part of the bulb would go), and a <b>detachable bottom</b> (for the wire to escape).
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        What I had to keep in mind was how big my print plate was (180mm x 180mm x 180mm) and needed to make sure I was not scaling my lamp to be so large that I could not print it. I ended up needing to disassemble my lamp base in order for it to fit.
                                    </Text>


                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <Flex align="center">
                        <Spacer />
                        <Meta>3MF File</Meta>
                        <Link href={mushroomLamp3MF} download="MushroomLamp.3mf">
                            MushroomLamp.3mf <DownloadIcon mx="2px" />
                        </Link>

                        <Spacer />

                        <Meta>Fusion 360 File</Meta>
                        <Link href={mushroomLampF3D} download="MushroomLamp.f3d">
                            MushroomLamp.f3d <DownloadIcon mx="2px" />
                        </Link>
                        <Spacer />
                    </Flex>

                    <br />

                    <Text fontSize="xl">
                        When creating the space in <b>the body</b> for the lamp parts and bulb, I ended up needing to create another part to keep the lamps parts from moving around inside. I designed this to be a press-fit section with a hole for the bulb to peek out from. Because my lamp base parts were square and my mushroom body was circular, I had to make sure the corners of the lamp base parts did not cut through the circular shape.
                    </Text>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 6: Print Settings & Filament Materials 
                    </Heading>
                    <br />
                    <br />

                    <Text fontSize="xl">
                        The real trouble with this project had to do with print settings since I was using different filament materials and I was printing relatively large pieces. I <b>reduced the acceleration by half</b> and that prevented my printer from tearing my prints apart. However, this would make my printing times very long due to the machine running slower. In order to counter balance this, I did a few things:
                    </Text>

                    <br />

                    <Center>
                        <UnorderedList spacing={5}>
                            <ListItem>
                                <Text fontSize="xl">
                                    Changed my nozzle to 0.4mm to 0.6mm
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">
                                    Printed at the 0.3mm layer height
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">
                                    Reduced infill to 10% Line
                                </Text>
                            </ListItem>
                        </UnorderedList>

                    </Center> 

                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">

                                <Text fontSize="xl">
                                    While this did make the layer lines on my pieces much more noticeable, I was content with the more reasonable printing times.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    The only piece I would reprint with higher quality settings would be the Mushroom Cap since with the clear filament, it was very apparent where the imperfections were.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    I would also consider making the infill 100% for the Mushroom Cap since you can see some of the infill pattern. Infill is necessary for the cap because of the screw threads structure, which needs support to print correctly. 
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
                                        h="500px"
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <ImageCarousel images={carousel_4} height="500px" />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 7: Final Product & Reflection
                    </Heading>

                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">
                                <br />

                                <Text fontSize="xl">
                                    Overall, I am happy with what I was able to accomplish, even if the quality of my print was not as high as I wanted it to be.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    For my first relatively large print, I was made aware of my machine&apos;s limitations and the relevant settings I needed to adjust and change for a cleaner print. 
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    I am relatively happy that I have a functional desk lamp, but I am not sure if I want to print larger piece on my printer given the smaller size that it is
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
                                        <ImageCarousel images={carousel_5} height="350px" />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Text fontSize="xl">
                        For the future, if I were to do this project again, I would increase the quality of the print and give the machine more time to run to print. However, given the current time frame for this project, I needed to optimize the print for time. I would also avoid using Matte PLA in the future as I ended up disliking the finish of my base. I would also want to experiment more with my clear filament as I have read multiple sources about sanding and polishing clear filament until it can look like glass.
                    </Text>

                    <br />
                    <br />

                    



                </Section>
            </Container>

        </Layout>


    )


}

export default Work