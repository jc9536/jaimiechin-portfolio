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

        <Layout title="Sheepy">
            <br />
            <Title>
                Sheepy <Badge>July 2022</Badge>
            </Title>
            <Container maxW="max">

                <Section delay={0.3}>
                    <Image src={`/images/sheepyCaseStudy/matrix${useColorModeValue('', '_dark')}.jpg`} alt="MatrixCover" loading='eager' />

                    <Image src={`/images/sheepyCaseStudy/ProjectInfo${useColorModeValue('', '_dark')}.jpg`} alt="ProjectInfo" loading='eager' useMap='#projinfolinks' />
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
                    
                    <Image src={`/images/sheepyCaseStudy/Background${useColorModeValue('', '_dark')}.jpg`} overflow="hidden" alt="bg" loading='eager' />
                    <Image src={`/images/sheepyCaseStudy/Concept${useColorModeValue('', '_dark')}.jpg`} overflow="hidden" alt="Concept" loading='eager' />
                    <Image src={`/images/sheepyCaseStudy/Phases${useColorModeValue('', '_dark')}.jpg`} overflow="hidden" alt="Phases" loading='eager' />
                    <Image src={`/images/sheepyCaseStudy/Goals${useColorModeValue('', '_dark')}.jpg`} overflow="hidden" alt="Goals" loading='eager' />

                    <Image src={`/images/sheepyCaseStudy/MarketResearch${useColorModeValue('', '_dark')}.jpg`} alt="MarketResearch" loading='eager' useMap='#marketMap' id="marketresearch" />
                    <map name='marketMap'>
                        <area target="_blank" alt="Sviggum" title="Sviggum" href="https://pubmed.ncbi.nlm.nih.gov/30289029/" coords="1430,822,1640,864" shape="rect" />
                        <area target="_blank" alt="Sviggum2" title="Sviggum2" href="https://pubmed.ncbi.nlm.nih.gov/30289029/" coords="1294,870,1494,911" shape="rect" />
                        <area target="_blank" alt="Mindell" title="Mindell" href="https://pubmed.ncbi.nlm.nih.gov/19480226/" coords="326,1582,734,1627" shape="rect" />
                        <area target="_blank" alt="Mindell2" title="Mindell2" href="https://pubmed.ncbi.nlm.nih.gov/19480226/" coords="789,2395,1208,2439" shape="rect" />
                    </map>


                    <Image src={`/images/sheepyCaseStudy/UserNeeds${useColorModeValue('', '_dark')}.jpg`} alt="UserNeeds" useMap="#userMap" loading='eager' id="userneeds" />

                    <map name='userMap'>
                        <area shape="rect" coords="390,375, 1615,485" href="https://pubmed.ncbi.nlm.nih.gov/34343320/" alt="Shetty" target="_blank" />

                    </map>

                    <Image src={`/images/sheepyCaseStudy/UserSurvey${useColorModeValue('', '_dark')}.jpg`} alt="UserSurvey" useMap='#surveyMap' loading='eager' id="usersurvey" />
                    <map name='surveyMap'>
                        <area target="_blank" alt="survey" title="survey" href="/Parenting Bedtime Routines for Children Survey Design.pdf" coords="989,203,1123,240" shape="rect" />
                        <area target="_blank" alt="report" title="report" href="/SheepyResearchReport.pdf" coords="1649,284,1898,355" shape="rect" />
                    </map>
                        
                    <Image src={`/images/sheepyCaseStudy/UserInsights${useColorModeValue('', '_dark')}.jpg`} alt="UserInsights" loading='eager' />
                    <br />
                    <Image src={`/images/sheepyCaseStudy/Persona${useColorModeValue('', '_dark')}.jpg`} alt="Persona" id='persona' loading='eager' />
                    <Image src={`/images/sheepyCaseStudy/CompetitiveAnalysis${useColorModeValue('', '_dark')}.jpg`} alt="CompetitiveAnalysis" loading='eager' />
                    <br />
                    <Image src={`/images/sheepyCaseStudy/UserJourneyMap${useColorModeValue('', '_dark')}.jpg`} alt="UserJourneyMap" id='userjourneymap' loading='eager' />
                    <Image src={`/images/sheepyCaseStudy/Opportunity${useColorModeValue('', '_dark')}.jpg`} alt="Opportunity" loading='eager' />
                    <Image src={`/images/sheepyCaseStudy/FlowDiagram${useColorModeValue('', '_dark')}.jpg`} alt="FlowDiagram" id='flowdiagram' loading='eager' />
                    <Image src={`/images/sheepyCaseStudy/Lo-Fi_1${useColorModeValue('', '_dark')}.jpg`} alt="LoFi1" useMap="#loFiMap" id='lofi' loading='eager' />
                    <map name='loFiMap'>
                        <area shape="rect" coords="1400,340, 1900,380" href="https://developer.apple.com/design/human-interface-guidelines/platforms/designing-for-ios/" alt="designGuide" target="_blank" />
                    </map>


                    <AspectRatio maxW="100%" minH="450" ratio={16 / 9}>
                        <iframe style={{ border: "1px" }} width="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwB7P7UgN4heOPRmiyzDcxl%2FAssignment-06---Product-Persona-%2526-Wireframes%3Fpage-id%3D0%253A1%26node-id%3D0%253A1%26viewport%3D814%252C582%252C0.5%26scaling%3Dscale-down%26starting-point-node-id%3D15%253A367" allowFullScreen></iframe>
                    </AspectRatio>

                    <Image src={`/images/sheepyCaseStudy/Lo-Fi_2${useColorModeValue('', '_dark')}.jpg`} alt="LoFi2" id='lofi2' loading='eager' />
                    <Image src={`/images/sheepyCaseStudy/AlignmentGrid${useColorModeValue('', '_dark')}.jpg`} alt="AlignmentGrid" id='aligngrid' loading='eager' />
                    <Image src={`/images/sheepyCaseStudy/HiFi${useColorModeValue('', '_dark')}.jpg`} alt="HiFi" id='hifi' loading='eager' />
                    <Image src={`/images/sheepyCaseStudy/Prototype${useColorModeValue('', '_dark')}.jpg`} alt="Prototype" id='prototype' loading='eager' />

                    <AspectRatio maxW="100%" minH="450" ratio={16 / 9}>
                        <iframe style={{ border: "1px" }} width="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwB7P7UgN4heOPRmiyzDcxl%2FSheepy%3Fpage-id%3D57%253A618%26node-id%3D112%253A986%26viewport%3D2003%252C-1158%252C0.5%26scaling%3Dscale-down%26starting-point-node-id%3D112%253A986" allowFullScreen></iframe>
                    </AspectRatio>

                    <Image src={`/images/sheepyCaseStudy/Validation${useColorModeValue('', '_dark')}.jpg`} alt="Validation" useMap="#validationMap" id='validation' loading='eager' />
                    <map name='validationMap'>
                        <area shape="rect" coords="1420,1400, 1680,1440" href="https://digital.ahrq.gov/sites/default/files/docs/survey/systemusabilityscale%2528sus%2529_comp%255B1%255D.pdf" alt="designGuide" target="_blank" />
                        <area shape="rect" coords="870,1445, 1140,1485" href="https://digital.ahrq.gov/sites/default/files/docs/survey/systemusabilityscale%2528sus%2529_comp%255B1%255D.pdf" alt="designGuide2" target="_blank" />
                    </map>

                    <Image src={`/images/sheepyCaseStudy/Summary${useColorModeValue('', '_dark')}.jpg`} alt="Summary" id='summary' loading='eager' />

                </Section>
            </Container>

        </Layout>


    )


}

export default UXWork