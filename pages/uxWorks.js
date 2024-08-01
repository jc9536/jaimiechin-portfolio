import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItemUX } from '../components/gridItemComponent'
import Layout from '../components/layouts/article'
import thumbSheepy from '../public/images/sheepyCaseStudy/sheepyThumbnail.jpg'
import starbucksThumb from '../public/images/StarbucksRedesign/thumbnail.jpg'
import dubsThumb from '../public/images/DigiDubs/thumbnail.jpg'
import thumbEmoTune from '../public/images/EmoTune/thumbnail.jpg'
import thumbLeilo from '../public/images/Leilo/thumbnail.jpg'
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
                        <WorkGridItemUX id="DigiDubs" title="Digi-Dubs" thumbnail={dubsThumb} innerShadowColor='rgba(167, 142, 215, 0.25)' dropShadowColor='rgba(167, 142, 215, 0.60)'>
                            An app to foster a greater sense of community at the University of Washington
                        </WorkGridItemUX>
                    </Section>

                    <Section>
                        <WorkGridItemUX id="EmoTune" title="EmoTune" thumbnail={thumbEmoTune} innerShadowColor='rgba(229, 182, 142, 1)' dropShadowColor='rgba(229, 182, 142, 0.65)'>
                            A web product demo to teach children about AI bias with their voices
                        </WorkGridItemUX>
                    </Section>

                    <Section>
                        <WorkGridItemUX id="Leilo" title="Leilo Website Redesign" thumbnail={thumbLeilo} innerShadowColor='rgba(14, 30, 77, 0.8)' dropShadowColor='rgba(14, 30, 77, 0.65)'>
                            A beverage company's website redesign to increase customer satisfaction by 86%
                        </WorkGridItemUX>
                    </Section>

                    <Section>
                        <WorkGridItemUX id="Sheepy" title="Sheepy" thumbnail={thumbSheepy} innerShadowColor='rgba(204, 188, 158, 0.4)' dropShadowColor='rgba(204, 188, 158, 0.75)'>
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