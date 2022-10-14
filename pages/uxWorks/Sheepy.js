import { Container, Badge, useColorModeValue, Image} from '@chakra-ui/react'
import { Title} from '../../components/uxWorks'
import Layout from '../../components/layouts/article'
import {useEffect} from 'react'



const UXWork = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
      }, []);
    
    return (
        
        <Layout title="Sheepy">
            <br />

            <Container maxW="max">
                <Title>
                    Sheepy <Badge>July 2022</Badge>
                </Title>

         
                <Image src={`/images/sheepyCaseStudy/matrix.png`} alt="MatrixCover"/>
                <Image src={`/images/sheepyCaseStudy/ProjectInfo${useColorModeValue('', '_dark')}.png`} alt="ProjectInfo" useMap='#projinfolinks'/>
                <map name='projinfolinks'>
                    <area shape="rect" coords="100,845,350,885" href ="https://www.linkedin.com/in/jasbrad/"  alt="JamesBradley" target="_blank" />
                    <area shape="rect" coords="130,305,435,410" href ="#marketresearch"  alt="marketResearchJump" target="_parent" />
                    <area shape="rect" coords="460,305,725,410" href ="#userneeds"  alt="userNeedsJump" target="_parent" />
                    <area shape="rect" coords="750,305,960,410" href ="#persona"  alt="personaJump" target="_parent" />
                    <area shape="rect" coords="985,305,1305,410" href ="#userjourneymap"  alt="userJourneyMapJump" target="_parent" />
                    <area shape="rect" coords="1335,305,1525,410" href ="#flowdiagram"  alt="sitemapJump" target="_parent" />
                    <area shape="rect" coords="1555,305,1855,410" href =""  alt="loFiJump" target="_parent" />
                    <area shape="rect" coords="130,425,435,530" href =""  alt="alignGridJump" target="_parent" />
                    <area shape="rect" coords="460,425,635,530" href =""  alt="hiFiJump" target="_parent" />
                    <area shape="rect" coords="665,425,1010,530" href =""  alt="usabilityJump" target="_parent" />
                    

                    
                </map>
                
                <Image src={`/images/sheepyCaseStudy/Concept${useColorModeValue('', '_dark')}.png`} alt="Concept"/>
                <Image src={`/images/sheepyCaseStudy/MarketResearch${useColorModeValue('', '_dark')}.png`} alt="MarketResearch" id="marketresearch"/>
                <Image src={`/images/sheepyCaseStudy/UserNeeds${useColorModeValue('', '_dark')}.png`} alt="UserNeeds" id="userneeds"/>
                <Image src={`/images/sheepyCaseStudy/CompetitiveAnalysis${useColorModeValue('', '_dark')}.png`} alt="CompetitiveAnalysis"/>
                <Image src={`/images/sheepyCaseStudy/UserSurvey${useColorModeValue('', '_dark')}.png`} alt="UserSurvey"/>
                <Image src={`/images/sheepyCaseStudy/UserInsights${useColorModeValue('', '_dark')}.png`} alt="UserInsights"/>
                <br />
                <Image src={`/images/sheepyCaseStudy/Persona${useColorModeValue('', '_dark')}.png`} alt="Persona" id='persona'/>
                <br />
                <Image src={`/images/sheepyCaseStudy/UserJourneyMap${useColorModeValue('', '_dark')}.png`} alt="UserJourneyMap" id='userjourneymap'/>
                <Image src={`/images/sheepyCaseStudy/Opportunity${useColorModeValue('', '_dark')}.png`} alt="Opportunity"/>
                <Image src={`/images/sheepyCaseStudy/FlowDiagram${useColorModeValue('', '_dark')}.png`} alt="FlowDiagram" id='flowdiagram'/>

            </Container>

        </Layout> 

        
    )
    
    
}

export default UXWork