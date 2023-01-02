import { Container, Badge, useColorModeValue, Image, AspectRatio } from '@chakra-ui/react'
import { Title } from '../../components/uxWorks'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { useEffect } from 'react'



const UXWork = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);

    return (

        <Layout title="StarbucksRedesign">
            <br />
            <br />


            <Container maxW="max">
                <Title>
                    Starbucks Redesign <Badge>August 2022</Badge>
                </Title>




                <Section delay={0.3}>
                    <Image src={`/images/StarbucksRedesign/Cover${useColorModeValue('', '_dark')}.jpg`} alt="Cover" />

                    <Image src={`/images/StarbucksRedesign/ProjectInfo${useColorModeValue('', '_dark')}.jpg`} alt="ProjectInfo" useMap='#projinfolinks' />
                    <map name='projinfolinks'>
                        <area shape="rect" coords="100,845,350,885" href="https://www.linkedin.com/in/jasbrad/" alt="JamesBradley" target="_blank" />
                        <area shape="rect" coords="130,305,435,410" href="#marketresearch" alt="marketResearchJump" target="_parent" />
                        <area shape="rect" coords="460,305,725,410" href="#usersurvey" alt="userSurveyJump" target="_parent" />
                        <area shape="rect" coords="750,305,960,410" href="#persona" alt="personaJump" target="_parent" />
                        <area shape="rect" coords="985,305,1305,410" href="#userjourneymap" alt="userJourneyMapJump" target="_parent" />
                        <area shape="rect" coords="1335,305,1525,410" href="#flowdiagram" alt="sitemapJump" target="_parent" />
                        <area shape="rect" coords="1555,305,1855,410" href="#lofi" alt="loFiJump" target="_parent" />
                        <area shape="rect" coords="130,425,435,530" href="#aligngrid" alt="alignGridJump" target="_parent" />
                        <area shape="rect" coords="460,425,635,530" href="#hifi" alt="hiFiJump" target="_parent" />
                        <area shape="rect" coords="665,425,1010,530" href="#prototype" alt="usabilityJump" target="_parent" />

                    </map>

                </Section>
            </Container>

        </Layout>


    )


}

export default UXWork