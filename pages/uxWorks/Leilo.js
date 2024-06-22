import { Container, Badge, useColorModeValue, Image, AspectRatio, Link, List, ListItem, Box } from '@chakra-ui/react'
import { Title } from '../../components/uxWorks'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { useEffect } from 'react'
import { Meta } from '../../components/dataScienceWorks'
import { ExternalLinkIcon } from '@chakra-ui/icons'



const UXWork = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);

    return (

        <Layout title="Leilo">
            <br />
            <Title>
                Leilo Website Redesign <Badge>March 2024</Badge>
            </Title>
            <Container maxW="max">


                <Section delay={0.3}>
                    <Image src={`/images/Leilo/matrix${useColorModeValue('', '_dark')}.jpg`} alt="Cover" loading='eager' />
                    <Image src={`/images/Leilo/ProjectInfo${useColorModeValue('', '_dark')}.jpg`} alt="ProjectInfo" useMap='#projinfolinks' loading='eager' />
                    <map name="projinfolinks">
                        <area target="_parent" alt="Background" title="Background" href="#background" coords="129,306,420,410" shape="rect"/>
                        <area target="_parent" alt="User Research" title="User Research" href="#research" coords="447,308,714,409" shape="rect"/>
                        <area target="_parent" alt="Personas" title="Personas" href="#personas" coords="739,307,947,409" shape="rect"/>
                        <area target="_parent" alt="Information Architecture" title="Information Architecture" href="#infoarch" coords="975,308,1406,407" shape="rect"/>
                        <area target="_parent" alt="MidFi" title="MidFi" href="#midfi" coords="1433,305,1763,411" shape="rect"/>
                        <area target="_parent" alt="Usability Study" title="Usability Study" href="#usability" coords="131,428,479,529" shape="rect"/>
                        <area target="_parent" alt="Branding" title="Branding" href="#branding" coords="504,428,799,526" shape="rect"/>
                        <area target="_parent" alt="HiFi" title="HiFi" href="#hifi" coords="829,428,1129,529" shape="rect"/>
                        <area target="_parent" alt="AB Test" title="AB Test" href="#abtest" coords="1155,430,1348,527" shape="rect"/>
                        <area target="_blank" alt="Suzanne Boyd" title="Suzanne Boyd" href="https://www.linkedin.com/in/anthrotech/" coords="99,852,281,880" shape="rect"/>
                        <area target="_blank" alt="Rachel Zhong" title="Rachel Zhong" href="https://ruican-zhong.netlify.app/" coords="299,848,473,882" shape="rect"/>
                        <area target="_blank" alt="Jaimie Chin" title="Jaimie Chin" href="https://www.linkedin.com/in/jaimiechin/" coords="705,852,857,882" shape="rect"/>
                        <area target="_blank" alt="Crystal Torres" title="Crystal Torres" href="https://www.linkedin.com/in/bycrystaltorres/" coords="875,852,1051,882" shape="rect"/>
                        <area target="_blank" alt="Keenan Pereia" title="Keenan Pereia" href="https://www.linkedin.com/in/keenan-pereira/" coords="1067,852,1263,882" shape="rect"/>
                        <area target="_blank" alt="Ly Nguyen" title="Ly Nguyen" href="" coords="1277,850,1420,882" shape="rect"/>
                    </map>

                    <Image src={`/images/Leilo/Background${useColorModeValue('', '_dark')}.jpg`} alt="Background" id="background" loading='eager' />
                    <Image src={`/images/Leilo/UserResearch${useColorModeValue('', '_dark')}.jpg`} alt="UserResearch" id="research" loading='eager' />


                    <Image src={`/images/Leilo/Personas${useColorModeValue('', '_dark')}.jpg`} alt="Personas" id="personas" loading='eager' />
                    <Image src={`/images/Leilo/InfoArch${useColorModeValue('', '_dark')}.jpg`} alt="InfoArch" id="infoarch" loading='eager' />

                    <Image src={`/images/Leilo/MidFi${useColorModeValue('', '_dark')}.jpg`} alt="MidFi" id="midfi" loading='eager' />

                    <br />
                    <br />
                    
                    <Box borderRadius="3xl" overflow="hidden">

                        <AspectRatio maxW="100%" minH="400" ratio={16 / 9}>
                            <iframe style={{ border: "1px" }} width="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4cl150lAMeRb48ayWpDPhR%2FHCDE-537%253A-Leilo-Working-Document%3Fpage-id%3D70%253A1560%26node-id%3D89-2%26viewport%3D499%252C-358%252C0.15%26t%3DH7oblIoVGYHxaiiD-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D89%253A2%26content-scaling%3Dfixed" allowfullscreen></iframe>
                        </AspectRatio>

                    </Box>


                    <Image src={`/images/Leilo/UsabilityStudy${useColorModeValue('', '_dark')}.jpg`} alt="UsabilityStudy" id="usability" loading='eager' />
                    <Container centerContent maxW="max">
                        <List spacing={4}>
                            <ListItem>
                                <Meta>Leilo's Usability Testing Analysis</Meta>
                                <Link href="https://www.figma.com/board/3Qpc4qqEWFAEWHPBicLJ7R/Affinity-Diagram---Leilo's-Usability-Testing-Analysis?node-id=0-1&t=hv9qAfN9O5hnAaKT-1" isExternal={true}>
                                    Affinity Analysis <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                        </List>
                    </Container>
                    <br />

                    <Image src={`/images/Leilo/Branding${useColorModeValue('', '_dark')}.jpg`} alt="Branding" id="branding" loading='eager' />
                    <br />
                    <br />
                    <Container centerContent maxW="max">
                        <List spacing={4}>
                            <ListItem>
                                <Meta>Leilo Hi-Fi Assets</Meta>
                                <Link href="https://www.figma.com/design/4cl150lAMeRb48ayWpDPhR/HCDE-537%3A-Leilo-Working-Document?node-id=470-9226&m=dev" isExternal={true}>
                                    Components <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                        </List>
                    </Container>
                    <br />

                    


                    <Image src={`/images/Leilo/HiFi${useColorModeValue('', '_dark')}.jpg`} alt="HiFi" id="hifi" loading='eager' />

                    <br />
                    <br />

                    <Box borderRadius="3xl" overflow="hidden">

                        <AspectRatio maxW="100%" minH="450" ratio={16 / 9}>
                            <iframe style={{ border: "1px" }} width="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4cl150lAMeRb48ayWpDPhR%2FHCDE-537%253A-Leilo-Working-Document%3Fpage-id%3D470%253A9225%26node-id%3D478-9132%26viewport%3D212%252C166%252C0.03%26t%3DGg3iFDzNj5qic1Lc-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D478%253A9132%26content-scaling%3Dfixed" scrolling="no" allowFullScreen></iframe>
                        </AspectRatio>

                    </Box>

                    <Image src={`/images/Leilo/HiFi_2${useColorModeValue('', '_dark')}.jpg`} alt="HiFi2" id="hifi2" loading='eager' />
                    <Image src={`/images/Leilo/HiFi_3${useColorModeValue('', '_dark')}.jpg`} alt="HiFi3" id="hifi3" loading='eager' />
                    <Image src={`/images/Leilo/HiFi_4${useColorModeValue('', '_dark')}.jpg`} alt="HiFi4" id="hifi4" loading='eager' />
                    <Image src={`/images/Leilo/HiFi_5${useColorModeValue('', '_dark')}.jpg`} alt="HiFi5" id="hifi5" loading='eager' />
                    <Image src={`/images/Leilo/HiFi_6${useColorModeValue('', '_dark')}.jpg`} alt="HiFi6" id="hifi6" loading='eager' />
                    

                    <Image src={`/images/Leilo/ABTest${useColorModeValue('', '_dark')}.jpg`} alt="ABTest" id="abtest" loading='eager' />
                    <br />
                    <br />

                </Section>
            </Container>

        </Layout>


    )


}

export default UXWork