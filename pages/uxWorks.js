import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItemUX } from '../components/ux-grid-item'
import Layout from '../components/layouts/article'
import thumbSheepy from '../public/images/sheepyCaseStudy/sheepyThumbnail.png'
import starbucksThumb from '../public/images/StarbucksRedesign/thumbnail.png'
import dubsThumb from '../public/images/DigiDubs/thumbnail.png'
import thumbEmoTune from '../public/images/EmoTune/thumbnail.png'
import thumbLeilo from '../public/images/Leilo/thumbnail.png'
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
                        <WorkGridItemUX id="DigiDubs" title="Digi-Dubs" thumbnail={dubsThumb}>
                            An app to foster a greater sense of community at the University of Washington
                        </WorkGridItemUX>
                    </Section>

                    <Section>
                        <WorkGridItemUX id="EmoTune" title="EmoTune" thumbnail={thumbEmoTune}>
                            A web product demo to teach children about AI bias with their voices
                        </WorkGridItemUX>
                    </Section>

                    <Section>
                        <WorkGridItemUX id="Leilo" title="Leilo Website Redesign" thumbnail={thumbLeilo}>
                            A beverage company's website redesign to increase customer satisfaction by 86%
                        </WorkGridItemUX>
                    </Section>

                    <Section>
                        <WorkGridItemUX id="Sheepy" title="Sheepy" thumbnail={thumbSheepy}>
                            A children&apos;s bedtime routine app for parents
                        </WorkGridItemUX>
                    </Section>

                </SimpleGrid>

                <br />
                <br />

                <Heading as="h3" variant="section-title">
                    Archived Work
                </Heading>

                <br />

                <SimpleGrid columns={[1, 1, 2]} spacing="60px">

                    <Section>
                        <WorkGridItemUX id="StarbucksRedesign" title="Starbucks Redesign" thumbnail={starbucksThumb}>
                            A redesign of the beverage browsing experience within the Starbucks Mobile app
                        </WorkGridItemUX>
                    </Section>

                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works