import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/ds-grid-item'
import underConstructionThumb from '../public/images/underConstruction.png'

const Works = () => {
    return (
        <Layout>
        <Container maxW="container.xl">

        <br />

        <Heading as="h3" fontSize={64} mb={4} align="center">
            Data Science Projects
        </Heading>

        <br />

        <SimpleGrid columns ={[1, 1, 2]} spacing="128px">
            <Section>
                <WorkGridItem id="WIP_1" title="Work In Progress..." thumbnail={underConstructionThumb}>
                This project is under construction, please visit some of my other works in the meantime!
                </WorkGridItem>
            </Section>

            <Section>
                <WorkGridItem id="WIP_2" title="Work In Progress..." thumbnail={underConstructionThumb}>
                    This project is under construction, please visit some of my other works in the meantime!
                </WorkGridItem>
            </Section>

        </SimpleGrid>
    </Container>
    </Layout>
    )
}

export default Works