import { Container, Badge, useColorModeValue, Image} from '@chakra-ui/react'
import { Title } from '../../components/uxWorks'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { useEffect} from 'react'



const UXWork = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);

    return (

        <Layout title="StarbucksRedesign">
            <br />
            <Title>
                Starbucks Redesign <Badge>August 2022</Badge>
            </Title>
            <Container maxW="max">
                

                <Section delay={0.3}>
                    <Image src={`/images/StarbucksRedesign/Cover${useColorModeValue('', '_dark')}.jpg`} alt="Cover" loading='eager' />
                    <Image src={`/images/StarbucksRedesign/ProjectInfo${useColorModeValue('', '_dark')}.jpg`} alt="ProjectInfo" useMap='#projinfolinks' loading='eager' />
                    <map name='projinfolinks'>
                        <area target="_parent" alt="Background" title="Background" href="#background" coords="130,308,406,405" shape="rect"/>
                        <area target="_parent" alt="MarketAnalysis" title="MarketAnalysis" href="#market" coords="436,307,784,406" shape="rect"/>
                        <area target="_parent" alt="CompetitiveAnalysis" title="CompetitiveAnalysis" href="#competitive" coords="812,308,1236,407" shape="rect"/>
                        <area target="_parent" alt="UserResearch" title="UserResearch" href="#user" coords="1266,308,1583,407" shape="rect"/>
                        <area target="_parent" alt="AffinityMap" title="AffinityMap" href="#affinity" coords="130,430,487,529" shape="rect"/>
                        <area target="_parent" alt="LoFi" title="LoFi" href="#lofi" coords="514,427,864,526" shape="rect"/>
                        <area target="_parent" alt="HiFi" title="HiFi" href="#hifi" coords="894,429,1093,526" shape="rect"/>
                        <area target="_parent" alt="Validation" title="Validation" href="#validation" coords="1121,429,1362,526" shape="rect"/>
                        <area target="_blank" alt="Member" title="Member" href="https://www.linkedin.com/in/michael-lee-4955699b/" coords="97,844,328,881" shape="rect"/>
                    </map>

                    <Image src={`/images/StarbucksRedesign/Concept${useColorModeValue('', '_dark')}.jpg`} alt="Concept" id="background" loading='eager' />
                    <Image src={`/images/StarbucksRedesign/MarketResearch${useColorModeValue('', '_dark')}.jpg`} alt="Market" useMap="#marketMap" id="market" loading='eager' />
                    <map name="marketMap">
                        <area target="_blank" alt="BusinessInsider" title="BusinessInsider" href="https://www.businessinsider.com/is-the-starbucks-app-down-mobile-order-outage-2022-5#:~:text=Starbucks%20CEO%20at%20the%20time,at%20company%2Downed%20US%20stores" coords="1311,488,1632,527" shape="rect"/>
                    </map>

                    <Image src={`/images/StarbucksRedesign/CompetitiveAnalysis${useColorModeValue('', '_dark')}.jpg`} alt="Compete" useMap="#compMap" id="competitive" loading='eager' />
                    <map name="compMap">
                        <area target="_blank" alt="CompNotes" title="CompNotes" href="/Competitor Analysis Starbucks.pdf" coords="1597,282,1901,321" shape="rect"/>
                    </map>

                    <Image src={`/images/StarbucksRedesign/UserResearch${useColorModeValue('', '_dark')}.jpg`} alt="User" id="user" loading='eager' />
                    <Image src={`/images/StarbucksRedesign/AffinityMap${useColorModeValue('', '_dark')}.jpg`} alt="AffinityMap" id="affinity" loading='eager' />
                    <Image src={`/images/StarbucksRedesign/Opportunity${useColorModeValue('', '_dark')}.jpg`} alt="Opportunity" loading='eager' />
                    <Image src={`/images/StarbucksRedesign/LoFi${useColorModeValue('', '_dark')}.jpg`} alt="LoFo" useMap="#lofiMap" id="lofi" loading='eager' />
                    <map name="lofiMap">
                        <area target="_blank" alt="StarbucksDesignSystem" title="StarbucksDesignSystem" href="https://creative.starbucks.com/" coords="1047,3392,1888,3436" shape="rect" />
                    </map>

                    <Image src={`/images/StarbucksRedesign/HiFi${useColorModeValue('', '_dark')}.jpg`} alt="HiFi" id="hifi" loading='eager' />
                    <Image src={`/images/StarbucksRedesign/Validation${useColorModeValue('', '_dark')}.jpg`} alt="Valid" id="validation" loading='eager' />
                    <Image src={`/images/StarbucksRedesign/Summary${useColorModeValue('', '_dark')}.jpg`} alt="Sum" loading='eager' />
                    <Image src={`/images/StarbucksRedesign/Reflection${useColorModeValue('', '_dark')}.jpg`} alt="Reflect" loading='eager' />

                </Section>
            </Container>

        </Layout>


    )


}

export default UXWork