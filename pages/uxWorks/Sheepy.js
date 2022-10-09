import { Container, Badge, useColorModeValue} from '@chakra-ui/react'
import { Title, WorkImage} from '../../components/uxWorks'
import Layout from '../../components/layouts/article'

const uxWork = () => {
    const ProjInfo = `/images/sheepyCaseStudy/ProjectInfo${useColorModeValue('', '_dark')}.png`
    const Concept = `/images/sheepyCaseStudy/Concept${useColorModeValue('', '_dark')}.png`
    const MarketNeeds = `/images/sheepyCaseStudy/marketNeeds${useColorModeValue('', '_dark')}.png`
    return (
        <Layout title="Sheepy">
            <br />
            <Container maxW="max">
                <Title>
                    Sheepy <Badge>July 2022</Badge>
                </Title>
         
                <WorkImage src="/images/sheepyCaseStudy/matrix.png" alt="MatrixCover" />
                <WorkImage src={ProjInfo} alt="ProjectInformation" />
                <WorkImage src={Concept} alt="Concept" />
                <WorkImage src={MarketNeeds} alt="SheepyMarketNeeds" />

            </Container>
        </Layout>
    )
}

export default uxWork