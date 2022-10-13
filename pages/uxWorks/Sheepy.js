import { Container, Badge, useColorModeValue, Image} from '@chakra-ui/react'
import { Title} from '../../components/uxWorks'
import Layout from '../../components/layouts/article'

const UXWork = () => {
    return (
        <Layout title="Sheepy">
            <br />
            <html>
            
            </html>

            <Container maxW="max">
                <Title>
                    Sheepy <Badge>July 2022</Badge>
                </Title>
         
                <Image src={`/images/sheepyCaseStudy/matrix${useColorModeValue('', '_dark')}.png`} alt="MatrixCover"/>
                <Image src='/images/sheepyCaseStudy/ProjectInfo.svg'/>
                <Image src={`/images/sheepyCaseStudy/Concept${useColorModeValue('', '_dark')}.png`} alt="Concept"/>
                <Image src={`/images/sheepyCaseStudy/Market Research${useColorModeValue('', '_dark')}.png`} alt="MarketResearch"/>
                <Image src={`/images/sheepyCaseStudy/User Needs${useColorModeValue('', '_dark')}.png`} alt="UserNeeds"/>
                <Image src={`/images/sheepyCaseStudy/Competitive Analysis${useColorModeValue('', '_dark')}.png`} alt="CompetitiveAnalysis"/>
                <Image src={`/images/sheepyCaseStudy/User Survey${useColorModeValue('', '_dark')}.png`} alt="UserSurvey"/>
                <Image src={`/images/sheepyCaseStudy/User Insights${useColorModeValue('', '_dark')}.png`} alt="UserInsights"/>
                <Image src={`/images/sheepyCaseStudy/Persona${useColorModeValue('', '_dark')}.png`} alt="Persona" id='persona'/>
                <Image src={`/images/sheepyCaseStudy/User Journey Map${useColorModeValue('', '_dark')}.png`} alt="UserJourneyMap"/>
                <Image src={`/images/sheepyCaseStudy/Opportunity${useColorModeValue('', '_dark')}.png`} alt="Opportunity"/>
                <Image src={`/images/sheepyCaseStudy/Flow Diagram${useColorModeValue('', '_dark')}.png`} alt="FlowDiagram"/>

            </Container>

        </Layout> 
    )
}

export default UXWork