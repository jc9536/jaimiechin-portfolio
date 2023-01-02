import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItemUX } from '../components/ux-grid-item'
import Layout from '../components/layouts/article'
import thumbSheepy from '../public/images/sheepyCaseStudy/sheepyThumbnail.png'
import  starbucksThumb from '../public/images/StarbucksRedesign/thumbnail.png'
const Works = () => {
    
    return (
        <Layout>
            <Container maxW="container.xl">
                <br />
                <Heading as="h3" fontSize={64} mb={4} align="center">
                    UX Case Studies
                </Heading>

                <br />

                <SimpleGrid columns={[1, 1, 2]} spacing="60px">
                    <Section>
                        <WorkGridItemUX id="Sheepy" title="Sheepy" thumbnail={thumbSheepy}>
                            A bedtime routine app for parents who lack information about the best child development practices
                        </WorkGridItemUX>
                    </Section>

                    <Section>
                        <WorkGridItemUX id="StarbucksRedesign" title="Starbucks Menu Redesign" thumbnail={starbucksThumb}>
                            This  case study is under construction, please visit some of my other works in the meantime!
                        </WorkGridItemUX>
                    </Section>

                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works