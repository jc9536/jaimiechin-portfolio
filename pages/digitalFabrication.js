import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem533 } from '../components/533-grid-item'
import underConstructionThumb from '../public/images/underConstruction.png'

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
                    <Section>
                        <WorkGridItem533 id="A1ModellingLaserCutting" title="Assignment 1: Modelling & Laser Cutting" thumbnail={underConstructionThumb}>
                            A laser-cut cardboard construction kit with 30+ press-fit parts in Rhino
                        </WorkGridItem533>
                    </Section>

                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works