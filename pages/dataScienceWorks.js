import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/ds-grid-item'
import titanicThumb from '../public/images/accuracyFairnessProject/titanicThumbnail.jpg'
import coralThumb from '../public/images/coralPredict/coralThumbnail.jpg'

const Works = () => {
    return (
        <Layout>
            <Container maxW="container.xl">

                <br />

                <Heading as="h3" fontSize={64} mb={4} align="center">
                    Data Science Projects
                </Heading>

                <br />

                <SimpleGrid columns={[1, 1, 2]} spacing="60px">

                    <Section>
                        <WorkGridItem id="coralPredict" title="Machine Learning: Predicting Coral Reef Bleaching Events" thumbnail={coralThumb}>
                            Training a Stacked Regressor (random forests, gradient boosting, neural networks) to improve coral bleaching prediction accuracy
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="accFairness" title="Accuracy & Fairness Analysis of an Automated Decision System" thumbnail={titanicThumb}>
                            An analysis of the trade-off between accuracy and fairness in a machine learning classifier (automated decision system)
                        </WorkGridItem>
                    </Section>

                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works