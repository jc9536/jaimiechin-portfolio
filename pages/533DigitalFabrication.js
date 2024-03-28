import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
const Works = () => {

    return (
        <Layout>
            <Container maxW="container.xl">
                <br />
                <Heading as="h3" fontSize={64} mb={4} align="center">
                    HCDE 533 - Digital Fabrication
                </Heading>

                <br />

                <SimpleGrid columns={[1, 1, 2]} spacing="60px">

                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works