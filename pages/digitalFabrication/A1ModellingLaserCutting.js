import { Container, Badge, Heading, Text, Image, Box, Center, Link, AspectRatio} from '@chakra-ui/react'
import { Title} from '../../components/digitalFabrication'
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

    const trash_img = '/images/533_Assignment_1/trash_can _1.jpeg'
    const sketch = '/images/533_Assignment_1/sketch.jpg'
    const vector = '/images/533_Assignment_1/vector.jpg'
    const iter_1 = '/images/533_Assignment_1/TrashBin_Iter_1.svg'
    const files = '/images/533_Assignment_1/IllustratorFiles.zip'
    const sample = '/images/533_Assignment_1/sample.jpg'
    const carousel_1 = ['/images/533_Assignment_1/printSettings.jpg', '/images/533_Assignment_1/notches.jpg', '/images/533_Assignment_1/lasercut.jpg']
    const complete = ['/images/533_Assignment_1/completed.jpg', '/images/533_Assignment_1/completedBag.jpg']

    return (

        <Layout title="A1ModellingLaserCutting">
            <br />
            <Title>
                Laser Cut Press Fit Construction Kit <Badge>March 2024</Badge>
            </Title>

            <Container maxW="container.xl" centerContent>
                <br />
                <br />
                <Section delay={0.3}>
                    <Heading as="h1" variant="page-title" size="3xl" mb={4} align="center">
                        Assignment 1: Modelling & Laser Cutting 30 Instances of One Unique Part
                    </Heading>

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
                                    <Image src={trash_img} boxSize="250px" borderRadius='3xl' alt="trash" />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">
                                    <br />
                                    <br />
                    
                                    <Text fontSize="xl">
                                        In planning to create this laser cut kit, I wanted to create something I needed and reuse some cardboard boxes I had lying around. I did some initial research on Pinterest and Google to find some inspiration and landed on creating a recycled trash bin from cardboard boxes.
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
                                    I created a general sketch of the trash can and the general parts I needed to structure the bin and the lid to the bin. 
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    One of my beginning concerns is procuring enough cardboard to create test pieces and the final product itself. I decided to structure my bin to be smaller than I intended to be sure I could create a final product.
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
                                        <Image src={sketch} borderRadius='3xl' alt="sketch"/>
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 2: Vector Creation
                    </Heading>
                    <br />
                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box
                            flexShrink={0}
                            textAlign="center">
                            <Center>
                                <Box
                                    w="500px"
                                    h="400px"
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <Image src={vector} borderRadius='3xl' alt="vector" />
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">
                                    <br />
                                    <Meta>Vector File</Meta>
                                    <Link href={iter_1} download="TrashBin_Iter_1.svg">
                                        First Vector Iteration <DownloadIcon mx="2px" />
                                    </Link>

                                    <br />
                                    <br />

                                    <Text fontSize="xl">
                                        I created a vector in 
                                        <Link href="https://cuttle.xyz/" isExternal={true}> cuttle.xyz </Link>
                                         with some of the preliminary measurements I made in the sketch. I decided to make the notches <b>1mm</b> smaller than intended to account for the laser burning off additional material.
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        One of my concerns with the first iteration are the number of notches I decided to make in the cardboard which may have an impact on the durability and integrity of the cardboard. 

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
                                <br />
                                <br />

                                <Text fontSize="xl">
                                    I also decided to create a notch sample vector with the two different sized notches in order to help me determine which notch width (<b>1mm</b> or <b>2mm</b>) would ensure a snug fit.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    I was also prepared to reduce the number of notches on the base and supports if the cardboard&apos;s integrity/durability was compromised.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    Unfortunately, I realized I only had enough material to cut the final base and support pieces. So the notch sample was imperative for me to identify if the cardboard was durable enough to have as many cuts as I had intended it to.
                                </Text>

                                <br />
                                <br /> 

                                <Meta>Adobe Illustrator File</Meta>
                                <Link href={files} download="IllustratorFiles.zip">
                                    Compressed Files <DownloadIcon mx="2px" />
                                </Link>
                            </Box>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box
                                flexShrink={0}
                                textAlign="center">
                                <Center>
                                    <Box
                                        w="250px"
                                        h="600px"
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <Image src={sample} borderRadius='3xl' alt="sketch" />
                                    </ Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>

                    <Heading as="h3" variant="section-title">
                        Phase 3: Notch Testing with Samples
                    </Heading>
                    <br />
                    <br />

                    
                    <Box display={{ lg: 'flex' }}>
                        <Box
                            flexShrink={0}
                            textAlign="center">
                            <Center>
                                <Box
                                    w="550px"
                                    h="375px"
                                    display="inline-block"
                                    overflow="hidden"
                                >
                                    <ImageCarousel images={carousel_1} height="375px"/>
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">

                                    <Text fontSize="xl">
                                        After prepping my material (old Amazon boxes and recycling boxes) and taking note of the sizes of my material, I went to <b>The Mill</b>!
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        Since I was using different types of cardboard for recycling, it was important for me to print my test pieces and try different settings for each type of cardboard.
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        I ended up using <u><b>25% speed</b>, <b>100% power</b>, and <b>50% frequency</b> for my Amazon boxes</u> and <u><b>20% speed</b>, <b>100% power</b>, and <b>75% frequency</b></u> for my other cardboard material since it was sturdier.
                                    </Text>
                                </Box>
                            </Box>
                        </Section>
                    </Box>

                    <br />
                    <br />

                    <Heading as="h3" variant="section-title">
                        Phase 4: Cutting & Assembly
                    </Heading>
                    <br />

                    <br />

                    <Box display={{ lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">

                                <Text fontSize="xl">
                                    I spent the day at The Mill and cut out all of my pieces. I only ended up having enough cardboard for the bin itself and not the lid unfortunately.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    One of the things I noticed was how the thickness of my cardboard was not consistent. Therefore some parts were cut cleanly while others were not cut all the way through.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    The inconsistency of the cardboard also made the entire assembly process more tedious than it should be! Some pieces fit together perfectly without any issues while others were too thick and required more finesse and force.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    Regardless, the whole assembly process was a <b>nightmare</b>. I had cut about <b>56 total pieces</b> and had slot in the notches so they fit seamlessly within one another. This took me about <b>3 hours total</b> and by the time I was half way through, I noticed the integrity of the cardboard start to deteriorate.
                                </Text>

                                <br />

                                <Text fontSize="xl">
                                    I also started to cheat a bit and <b>cut out notches for some of the thicker cardboard I was unable to account for</b>. In the future, I should make chamfers in my notches to make the assembly process a whole lot smoother.
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
                                        w="300px"
                                        h="525px"
                                        display="inline-block"
                                        overflow="hidden"
                                        borderRadius="3xl"
                                    >
                                        <AspectRatio maxW="100%" minH="450" ratio={9 / 16}>
                                            <iframe style={{ border: "1px" }} width="100%" src="/images/533_Assignment_1/cutting.mp4" allowFullScreen></iframe>
                                        </AspectRatio>
                                        
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
                        <ImageCarousel images={complete} height="800px" />
                    </Center>

                    <br />
                    <br />

                    <Text fontSize="xl">
                        Overall, I learned a lot from this experience on the importance of measuring your materials thoroughly and correctly. If I were to fo this project again, I would reduce the number of parts for assembly and challenge myself to make a more complex figure, since this is essentially a bin made from relatively simple rectangular shapes.
                    </Text>

                    <br />

                    <Text fontSize="xl">
                        If I had more time and material, I would certainly made the lid I intended for this bin and also re-cut some of the panels and supports since some of the pieces were falling apart by the end of my assembly.
                    </Text>

                    <br />
                    <br />

                    <Text fontSize="4xl" align="center" >
                        The Final Test...
                    </Text>

                    <br />
                    <br />


                    <Box display={{ lg: 'flex' }}>
                        <Box
                            flexShrink={0}
                            textAlign="center">
                            <Center>
                                <Box
                                    w="650px"
                                    h="370px"
                                    display="inline-block"
                                    overflow="hidden"
                                    borderRadius="3xl"
                                >
                                    <AspectRatio maxW="100%" minH="370" ratio={16 / 9}>
                                        <iframe style={{ border: "1px" }} width="100%" src="/images/533_Assignment_1/shakeTest.mp4" allowFullScreen></iframe>
                                    </AspectRatio>
                                </ Box>
                            </Center>
                        </Box>

                        <Box w="125px" h="20px" display="inline=block" overflow="hidden"></Box>

                        <Section delay={0.4}>

                            <Box flexGrow={1} display="inline-block" overflow="hidden">
                                <Box display="inline-block" overflow="hidden">

                                    <Text fontSize="xl">
                                        Surprisingly, it <b>survived the shake test</b>!
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        However, I am sure that some of the panels are less secure and will fall out if I handle it carelessly.
                                    </Text>

                                    <br />

                                    <Text fontSize="xl">
                                        Overall, I am happy with what I was able to accomplish! I was able to function the laser machine with no issues and learned a lot of the importance of measuring and planning projects for the future. The only problem I still have is the smell of singed cardboard unfortunately!
                                    </Text>
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