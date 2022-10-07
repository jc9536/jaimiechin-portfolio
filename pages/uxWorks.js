import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/ux-grid-item'
import Layout from '../components/layouts/article'
import thumbSheepy from '../public/images/sheepyCaseStudy/sheepyThumbnail.png'
import underConstructionThumb from '../public/images/underConstruction.png'

const Works = () => {
    return (
        <Layout>
        <Container maxW="container.xl">
            <br />
            <Heading as="h3" fontSize={64} mb={4} align="center">
                UX Case Studies
            </Heading>

            <br />

            <SimpleGrid columns ={[1, 1, 2]} spacing="65px">
                <Section>
                    <WorkGridItem id="Sheepy" title="Sheepy" thumbnail={thumbSheepy}>
                        A bedtime routine app for parents who lack information about the best child development practices
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id="underConstruction" title="Work In Progress..." thumbnail={underConstructionThumb}>
                        This  case study is under construction, please visit some of my other works in the meantime!
                    </WorkGridItem>
                </Section>

            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works