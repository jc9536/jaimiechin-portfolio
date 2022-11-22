import {Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/ds-grid-item'
import underConstructionThumb from '../public/images/underConstruction.png'
import titanicThumb from '../public/images/accuracyFairnessProject/titanicThumbnail.png'
import {Script} from 'next/head'

const Works = () => {
    return (
        <Layout>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-P4NPYDG6ZT', 'auto');
          ga('send', 'pageview');
        `}
            </Script>
            <Script
                src="https://www.google-analytics.com/analytics.js"
                strategy="afterInteractive"
            />
        <Container maxW="container.xl">

        <br />

        <Heading as="h3" fontSize={64} mb={4} align="center">
            Data Science Projects
        </Heading>

        <br />

        <SimpleGrid columns ={[1, 1, 2]} spacing="65px">
            <Section>
                <WorkGridItem id="accFairness" title="Accuracy & Fairness Analysis of an Automated Decision System" thumbnail={titanicThumb}>
                    An analysis of the trade-off between accuracy and fairness in a machine learning classifier (automated decision system)
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