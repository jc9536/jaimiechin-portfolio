import { Container, Badge, useColorModeValue} from '@chakra-ui/react'
import { Title, WorkImage} from '../../components/UXworks'
import Layout from '../../components/layouts/article'

const UXWork = () => {
    return (
        <Layout title="Sheepy">
            <br />
            <Container maxW="max">
                <Title>
                    Sheepy <Badge>July 2022</Badge>
                </Title>
         
                <WorkImage src="/images/sheepyCaseStudy/matrix.png" alt="MatrixCover" />
                <WorkImage src={`/images/sheepyCaseStudy/ProjectInfo${useColorModeValue('', '_dark')}.png`} alt="ProjectInformation" />
                <WorkImage src={`/images/sheepyCaseStudy/Concept${useColorModeValue('', '_dark')}.png`} alt="Concept" />
                <WorkImage src={`/images/sheepyCaseStudy/marketNeeds${useColorModeValue('', '_dark')}.png`} alt="SheepyMarketNeeds" />

            </Container>
        </Layout>
    )
}

export default UXWork