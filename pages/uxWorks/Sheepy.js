import { Container, Badge, useColorModeValue, Image, AspectRatio} from '@chakra-ui/react'
import { Title} from '../../components/uxWorks'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { useEffect } from 'react'
import {Script} from 'next/head'



const UXWork = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);
    
    return (
        
        <Layout title="Sheepy">
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-P4NPYDG6ZT"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-P4NPYDG6ZT);
                `}
            </Script>
            <br />
            
            
            <Container maxW="max">
                <Title>
                    Sheepy <Badge>July 2022</Badge>
                </Title>

         
                <Image src={`/images/sheepyCaseStudy/matrix.png`} alt="MatrixCover"/>

                <Section delay={0.2}>

                    <Image src={`/images/sheepyCaseStudy/ProjectInfo${useColorModeValue('', '_dark')}.png`} alt="ProjectInfo" useMap='#projinfolinks'/>
                    <map name='projinfolinks'>
                        <area shape="rect" coords="100,845,350,885" href ="https://www.linkedin.com/in/jasbrad/"  alt="JamesBradley" target="_blank" />
                        <area shape="rect" coords="130,305,435,410" href ="#marketresearch"  alt="marketResearchJump" target="_parent" />
                        <area shape="rect" coords="460,305,725,410" href ="#usersurvey"  alt="userSurveyJump" target="_parent" />
                        <area shape="rect" coords="750,305,960,410" href ="#persona"  alt="personaJump" target="_parent" />
                        <area shape="rect" coords="985,305,1305,410" href ="#userjourneymap"  alt="userJourneyMapJump" target="_parent" />
                        <area shape="rect" coords="1335,305,1525,410" href ="#flowdiagram"  alt="sitemapJump" target="_parent" />
                        <area shape="rect" coords="1555,305,1855,410" href ="#lofi"  alt="loFiJump" target="_parent" />
                        <area shape="rect" coords="130,425,435,530" href ="#aligngrid"  alt="alignGridJump" target="_parent" />
                        <area shape="rect" coords="460,425,635,530" href ="#hifi"  alt="hiFiJump" target="_parent" />
                        <area shape="rect" coords="665,425,1010,530" href ="#prototype"  alt="usabilityJump" target="_parent" />
                        
                    </map>

                    <Image src={`/images/sheepyCaseStudy/Concept${useColorModeValue('', '_dark')}.png`} overflow="hidden" alt="Concept"/>
                    

                    <Image src={`/images/sheepyCaseStudy/MarketResearch${useColorModeValue('', '_dark')}.png`} alt="MarketResearch" useMap='#marketMap' id="marketresearch"/>
                    <map name='marketMap'>
                        <area shape="rect" coords="1075,360, 1725,1040" href ="https://www.tandfonline.com/doi/pdf/10.1080/17482631.2018.1527605?needAccess=true"  alt="Sviggum" target="_blank" />
                        <area shape="rect" coords="245,1130, 825,1800" href ="https://watermark.silverchair.com/sleep-32-5-599.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAAs4wggLKBgkqhkiG9w0BBwagggK7MIICtwIBADCCArAGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMUmPOIVNnOopKmOCIAgEQgIICgTInsbPx9QFs0WIN6xpRrZDD2P8OAeYO1ovadBWIdI_c9vGKXrD7P70DeLuHuUG5hIvqgyeT7dMttgiEjK0zXAsyEXclg3C7oWMonlbGefh5tw065MWo5xnKhI3lti1UNFwL56-jRjEwntSal2mXrTzwwBz3VOsW9VR0WNduR2BNHRdQo56PEH3om5ILGKjNsK6swwExyOgqE7OVireK1vlZZQhV-wOH7sclNIEiNEjb5r2r6fIqEh2TG9rnCBiNCtlGAEQ1UaqrBIT5-IecQ7G5G2AyCloHejhH2a7Z7n3ySsGNvXpOOejUSA4uJp3dYLmIuAmWm9mBV_Ci-X8CsIMsT37dvoRzuHJYVgj2FZQ90RrK0jkEdYu6INXaurRi7NoQHxt01-IOfPooPNxx7uO4Ky8RLo1R5JztLX3ie74AnzVYjsp3rXcKpEcWge9_ab92PiRtV4UhIrE1gFGomLnFmYQTImehCKxgyvzEhyM7tsaygA7YbQoLRSx_394cji6iwQvhmqM02XHjC9_LZtmq3xlCq6KuCiT3OYTDXDGYyRuN8SA4RwSs5mqXF88B-Rhv3SH2veBYByunvf1ENRjDx1EysbnOmkuTaWsjihvTIHYrLL_bL6CoLkB2poHX2YxyMQotbGZdtZLzO8FcSoJRmrnABVwu_0DtS25RPjJ_bIVIMWI7jghgf_A8nOEIbEQOTrJQymdZRrPoBUlGjT2UFcBk0S8rjOpJ0VYlb1CR_x5vYS9c1WgVrdmPDlBPW3RFHNT_gvG1VAPW4iwxtzSEvONZC4qf93DD-7M__ciR09LWhTbPt0Gj0KMWyeE3QIsrwZZA6cAcNbtFJmGxY2R6"  alt="Mindell_1" target="_blank" />
                        <area shape="rect" coords="575,1950, 1430,2550" href ="https://watermark.silverchair.com/sleep-32-5-599.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAAs4wggLKBgkqhkiG9w0BBwagggK7MIICtwIBADCCArAGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMUmPOIVNnOopKmOCIAgEQgIICgTInsbPx9QFs0WIN6xpRrZDD2P8OAeYO1ovadBWIdI_c9vGKXrD7P70DeLuHuUG5hIvqgyeT7dMttgiEjK0zXAsyEXclg3C7oWMonlbGefh5tw065MWo5xnKhI3lti1UNFwL56-jRjEwntSal2mXrTzwwBz3VOsW9VR0WNduR2BNHRdQo56PEH3om5ILGKjNsK6swwExyOgqE7OVireK1vlZZQhV-wOH7sclNIEiNEjb5r2r6fIqEh2TG9rnCBiNCtlGAEQ1UaqrBIT5-IecQ7G5G2AyCloHejhH2a7Z7n3ySsGNvXpOOejUSA4uJp3dYLmIuAmWm9mBV_Ci-X8CsIMsT37dvoRzuHJYVgj2FZQ90RrK0jkEdYu6INXaurRi7NoQHxt01-IOfPooPNxx7uO4Ky8RLo1R5JztLX3ie74AnzVYjsp3rXcKpEcWge9_ab92PiRtV4UhIrE1gFGomLnFmYQTImehCKxgyvzEhyM7tsaygA7YbQoLRSx_394cji6iwQvhmqM02XHjC9_LZtmq3xlCq6KuCiT3OYTDXDGYyRuN8SA4RwSs5mqXF88B-Rhv3SH2veBYByunvf1ENRjDx1EysbnOmkuTaWsjihvTIHYrLL_bL6CoLkB2poHX2YxyMQotbGZdtZLzO8FcSoJRmrnABVwu_0DtS25RPjJ_bIVIMWI7jghgf_A8nOEIbEQOTrJQymdZRrPoBUlGjT2UFcBk0S8rjOpJ0VYlb1CR_x5vYS9c1WgVrdmPDlBPW3RFHNT_gvG1VAPW4iwxtzSEvONZC4qf93DD-7M__ciR09LWhTbPt0Gj0KMWyeE3QIsrwZZA6cAcNbtFJmGxY2R6"  alt="Mindell_2" target="_blank" />
                    </map>


                    <Image src={`/images/sheepyCaseStudy/UserNeeds${useColorModeValue('', '_dark')}.png`} alt="UserNeeds" useMap="#userMap" id="userneeds"/>

                    <map name='userMap'>
                        <area shape="rect" coords="390,375, 1615,485" href ="https://pubmed.ncbi.nlm.nih.gov/34343320/"  alt="Shetty" target="_blank" />
                        
                    </map>

                    <Image src={`/images/sheepyCaseStudy/CompetitiveAnalysis${useColorModeValue('', '_dark')}.png`} alt="CompetitiveAnalysis"/>
                    <Image src={`/images/sheepyCaseStudy/UserSurvey${useColorModeValue('', '_dark')}.png`} alt="UserSurvey" useMap='#surveyMap' id="usersurvey"/>
                    <map name='surveyMap'>
                        <area shape="rect" coords="1000,200, 1225,240" href="/Parenting Bedtime Routines for Children Survey Design.pdf"  alt="survey" target="_blank" />
                        
                    </map>

                    <Image src={`/images/sheepyCaseStudy/UserInsights${useColorModeValue('', '_dark')}.png`} alt="UserInsights"/>
                    <br />
                    <Image src={`/images/sheepyCaseStudy/Persona${useColorModeValue('', '_dark')}.png`} alt="Persona" id='persona'/>
                    <br />
                    <Image src={`/images/sheepyCaseStudy/UserJourneyMap${useColorModeValue('', '_dark')}.png`} alt="UserJourneyMap" id='userjourneymap'/>
                    <Image src={`/images/sheepyCaseStudy/Opportunity${useColorModeValue('', '_dark')}.png`} alt="Opportunity"/>
                    <Image src={`/images/sheepyCaseStudy/FlowDiagram${useColorModeValue('', '_dark')}.png`} alt="FlowDiagram" id='flowdiagram'/>
                    <Image src={`/images/sheepyCaseStudy/Lo-Fi_1${useColorModeValue('', '_dark')}.png`} alt="LoFi1" useMap="#loFiMap" id='lofi'/>
                    <map name='loFiMap'>
                        <area shape="rect" coords="1400,340, 1900,380" href ="https://developer.apple.com/design/human-interface-guidelines/platforms/designing-for-ios/"  alt="designGuide" target="_blank" />
                    </map>
                    

                    <AspectRatio maxW="100%" minH="450" ratio={16 / 9}>
                        <iframe style={{border: "1px"}} width="100%"  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwB7P7UgN4heOPRmiyzDcxl%2FAssignment-06---Product-Persona-%2526-Wireframes%3Fpage-id%3D0%253A1%26node-id%3D0%253A1%26viewport%3D814%252C582%252C0.5%26scaling%3Dscale-down%26starting-point-node-id%3D15%253A367" allowFullScreen></iframe>
                    </AspectRatio>

                    <Image src={`/images/sheepyCaseStudy/Lo-Fi_2${useColorModeValue('', '_dark')}.png`} alt="LoFi2" id='lofi2'/>
                    <Image src={`/images/sheepyCaseStudy/AlignmentGrid${useColorModeValue('', '_dark')}.png`} alt="AlignmentGrid" id='aligngrid'/>
                    <Image src={`/images/sheepyCaseStudy/HiFi${useColorModeValue('', '_dark')}.png`} alt="HiFi" id='hifi'/>
                    <Image src={`/images/sheepyCaseStudy/Prototype${useColorModeValue('', '_dark')}.png`} alt="Prototype" id='prototype'/>

                    <AspectRatio maxW="100%" minH="450" ratio={16 / 9}>
                        <iframe style={{border: "1px"}} width="100%"  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwB7P7UgN4heOPRmiyzDcxl%2FSheepy%3Fpage-id%3D57%253A618%26node-id%3D112%253A986%26viewport%3D2003%252C-1158%252C0.5%26scaling%3Dscale-down%26starting-point-node-id%3D112%253A986" allowFullScreen></iframe>
                    </AspectRatio>

                    <Image src={`/images/sheepyCaseStudy/Validation${useColorModeValue('', '_dark')}.png`} alt="Validation" useMap="#validationMap" id='validation'/>
                    <map name='validationMap'>
                        <area shape="rect" coords="1420,1400, 1680,1440" href ="https://digital.ahrq.gov/sites/default/files/docs/survey/systemusabilityscale%2528sus%2529_comp%255B1%255D.pdf"  alt="designGuide" target="_blank" />
                        <area shape="rect" coords="870,1445, 1140,1485" href ="https://digital.ahrq.gov/sites/default/files/docs/survey/systemusabilityscale%2528sus%2529_comp%255B1%255D.pdf"  alt="designGuide2" target="_blank" />
                    </map>

                    <Image src={`/images/sheepyCaseStudy/Summary${useColorModeValue('', '_dark')}.png`} alt="Summary" id='summary'/>

                </Section>
            </Container>

        </Layout> 

        
    )
    
    
}

export default UXWork