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

        <Layout title="EmoTune">
            <br />
            <Title>
                EmoTune <Badge>December 2023</Badge>
            </Title>
            <Container maxW="max">
                

                <Section delay={0.3}>
                    <Image src={`/images/EmoTune/matrix${useColorModeValue('', '_dark')}.jpg`} alt="Cover" loading='eager' />
                    <Image src={`/images/EmoTune/ProjectInfo${useColorModeValue('', '_dark')}.jpg`} alt="ProjectInfo" useMap='#projinfolinks' loading='eager' />
                    <map name="projinfolinks">
                        <area target="_parent" alt="bg" title="bg" href="#background" coords="265,310,674,406" shape="rect"/>
                        <area target="_parent" alt="motive" title="motive" href="#motive" coords="724,307,988,408" shape="rect"/>
                        <area target="_parent" alt="midfi" title="midfi" href="#midfi" coords="1039,309,1367,408" shape="rect"/>
                        <area target="_parent" alt="design" title="design" href="#designsys" coords="1419,306,1714,406" shape="rect" />
                        <area target="_parent" alt="demo" title="demo" href="#demo" coords="477,440,776,539" shape="rect"/>
                        <area target="_parent" alt="hifi" title="hifi" href="#hifi" coords="827,440,1127,539" shape="rect"/>
                        <area target="_parent" alt="test" title="test" href="#testing" coords="1177,440,1523,541" shape="rect"/>
                        <area target="_blank" alt="SayaminduDasgupta" title="SayaminduDasgupta" href="https://unmad.in/" coords="99,845,496,884" shape="rect"/>
                        <area target="_blank" alt="AayushiDangol" title="AayushiDangol" href="https://www.linkedin.com/in/aayushi-dangol/" coords="521,844,818,884" shape="rect"/>
                        <area target="_blank" alt="JaimieChin" title="JaimieChin" href="https://www.linkedin.com/in/jaimiechin/" coords="869,844,1104,878" shape="rect"/>
                        <area target="_blank" alt="ChloeYu" title="ChloeYu" href="https://www.linkedin.com/in/yuexinyu/" coords="1127,843,1313,882" shape="rect"/>
                    </map>

                    <Image src={`/images/EmoTune/Background${useColorModeValue('', '_dark')}.jpg`} alt="Background" id="background" loading='eager' />
                    <Image src={`/images/EmoTune/Motivation${useColorModeValue('', '_dark')}.jpg`} alt="Motive" id="motive" loading='eager' />


                    <Image src={`/images/EmoTune/Challenges${useColorModeValue('', '_dark')}.jpg`} alt="Challenges" id="challenges" loading='eager' />
                    <Image src={`/images/EmoTune/Goals${useColorModeValue('', '_dark')}.jpg`} alt="Goals" id="goals" loading='eager' />

                    <Image src={`/images/EmoTune/Sitemap${useColorModeValue('', '_dark')}.jpg`} alt="Sitemap" id="sitemap" loading='eager' />
                    <Image src={`/images/EmoTune/MidFi${useColorModeValue('', '_dark')}.jpg`} alt="MidFi" id="midfi" loading='eager' />
                    <Image src={`/images/EmoTune/DesignSystem${useColorModeValue('', '_dark')}.jpg`} alt="DesignSys" id="designsys" loading='eager' />
                    <Image src={`/images/EmoTune/Demo${useColorModeValue('', '_dark')}.jpg`} alt="Demo" id="demo" loading='eager' />
                    <Container centerContent maxW="max">
                        <List spacing={4}>
                            <ListItem>
                                <Meta>Webpage Demo Link</Meta>
                                <Link href="https://jc9536.github.io/DRGAIBiasforChildren/#/" isExternal={true}>
                                    EmoTune Demo for Mobile Devices <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                        </List>
                    </Container>
                    <br />

                    <Box borderRadius="3xl" overflow="hidden" width="100%">
                        <AspectRatio maxW="100%" ratio={16 / 10.6}>
                            <iframe
                                style={{ border: "none", width: "100%", height: "100%" }}
                                src="https://jc9536.github.io/DRGAIBiasforChildren/#/"
                                allow="camera *; microphone *"
                                scrolling="no"
                                allowFullScreen
                            ></iframe>
                        </AspectRatio>
                    </Box>
                    
                    
                    <Image src={`/images/EmoTune/HiFi${useColorModeValue('', '_dark')}.jpg`} alt="HiFi" id="hifi" loading='eager' />

                    <Image src={`/images/EmoTune/Testing${useColorModeValue('', '_dark')}.jpg`} alt="Testing" id="testing" loading='eager' />
                    <Image src={`/images/EmoTune/Reflection${useColorModeValue('', '_dark')}.jpg`} alt="Reflect" id="reflect" loading='eager' />

                    <br />
                    <br />
                    <br />

                </Section>
            </Container>

        </Layout>


    )


}

export default UXWork