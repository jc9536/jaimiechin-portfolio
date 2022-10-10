import { Container, Badge, useColorModeValue, Image} from '@chakra-ui/react'
import { Title} from '../../components/uxWorks'
import Layout from '../../components/layouts/article'

const UXWork = () => {
    return (
        <Layout title="Sheepy">
            <br />
            <Container maxW="max">
                <Title>
                    Sheepy <Badge>July 2022</Badge>
                </Title>
         
                <Image src={`/images/sheepyCaseStudy/PortfolioStack${useColorModeValue('', '_dark')}.png`} alt="MatrixCover" useMap="#mentor" width={1280} />
                <map name="mentor">
                    <area shape="rect" coords="120,1160,275,1195" href ="https://www.linkedin.com/in/jasbrad/"  alt="JamesBradley" target="_blank" /> 
                </map>

            </Container>
        </Layout>
    )
}

export default UXWork