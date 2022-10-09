import { Container, Badge, Link, List, ListItem, Divider, useColorModeValue} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/uxWorks'
import Layout from '../../components/layouts/article'

const uxWork = () => {
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

export default uxWork