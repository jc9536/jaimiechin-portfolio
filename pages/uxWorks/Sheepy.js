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

         
                <Image src={`/images/sheepyCaseStudy/matrix${useColorModeValue('', '_dark')}.png`} alt="MatrixCover"/>
                <Image src={`/images/sheepyCaseStudy/ProjectInfo${useColorModeValue('', '_dark')}.png`} alt="ProjectInfo" useMap='#projinfolinks'/>
                <map name='projinfolinks'>
                    <area shape="rect" coords="50,750,310,785" href ="https://www.linkedin.com/in/jasbrad/"  alt="JamesBradley" target="_blank" />
                    <area shape="rect" coords="0,200,310,305" href ="#marketresearch"  alt="marketResearchJump" target="_parent" />
                    <area shape="rect" coords="330,200,605,305" href ="#userneeds"  alt="userNeedsJump" target="_parent" />
                    <area shape="rect" coords="625,200,835,305" href ="#persona"  alt="personaJump" target="_parent" />
                    <area shape="rect" coords="860,200,1185,305" href ="#userjourneymap"  alt="userJourneyMapJump" target="_parent" />
                    <area shape="rect" coords="1205,200,1405,305" href ="#flowdiagram"  alt="sitemapJump" target="_parent" />

                    
                </map>
                
                <Image src={`/images/sheepyCaseStudy/Concept${useColorModeValue('', '_dark')}.png`} alt="Concept"/>
                <Image src={`/images/sheepyCaseStudy/Market Research${useColorModeValue('', '_dark')}.png`} alt="MarketResearch" id="marketresearch"/>
                <Image src={`/images/sheepyCaseStudy/User Needs${useColorModeValue('', '_dark')}.png`} alt="UserNeeds" id="userneeds"/>
                <Image src={`/images/sheepyCaseStudy/Competitive Analysis${useColorModeValue('', '_dark')}.png`} alt="CompetitiveAnalysis"/>
                <Image src={`/images/sheepyCaseStudy/User Survey${useColorModeValue('', '_dark')}.png`} alt="UserSurvey"/>
                <Image src={`/images/sheepyCaseStudy/User Insights${useColorModeValue('', '_dark')}.png`} alt="UserInsights"/>
                <br />
                <Image src={`/images/sheepyCaseStudy/Persona${useColorModeValue('', '_dark')}.png`} alt="Persona" id='persona'/>
                <br />
                <Image src={`/images/sheepyCaseStudy/User Journey Map${useColorModeValue('', '_dark')}.png`} alt="UserJourneyMap" id='userjourneymap'/>
                <Image src={`/images/sheepyCaseStudy/Opportunity${useColorModeValue('', '_dark')}.png`} alt="Opportunity"/>
                <Image src={`/images/sheepyCaseStudy/Flow Diagram${useColorModeValue('', '_dark')}.png`} alt="FlowDiagram" id='flowdiagram'/>

            </Container>

        </Layout> 

        
    )
    
    
}

export default UXWork