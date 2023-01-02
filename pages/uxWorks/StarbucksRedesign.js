import { Container, Badge, useColorModeValue, Image} from '@chakra-ui/react'
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
                        <area target="_parent" alt="Background" title="Background" href="" coords="130,308,409,407" shape="rect"/>
                        <area target="_parent" alt="AppAnalysis" title="AppAnalysis" href="" coords="436,308,710,407" shape="rect"/>
                        <area target="_parent" alt="UserResearch" title="UserResearch" href="" coords="743,310,1059,407" shape="rect"/>
                        <area target="_parent" alt="MarketResearch" title="MarketResearch" href="" coords="1088,309,1436,404" shape="rect"/>
                        <area target="_parent" alt="AffinityMapping" title="AffinityMapping" href="" coords="1464,310,1821,404" shape="rect"/>
                        <area target="_parent" alt="LoFi" title="LoFi" href="" coords="130,427,478,528" shape="rect"/>
                        <area target="_parent" alt="HiFi" title="HiFi" href="" coords="510,428,708,528" shape="rect"/>
                        <area target="_parent" alt="Validation" title="Validation" href="" coords="738,428,978,528" shape="rect"/>
                        <area target="_blank" alt="Member" title="Member" href="https://www.linkedin.com/in/michael-lee-4955699b/" coords="98,846,330,883" shape="rect"/>
                    </map>

                </Section>
            </Container>

        </Layout>


    )


}

export default UXWork