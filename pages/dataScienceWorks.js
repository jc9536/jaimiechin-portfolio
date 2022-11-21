import {Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/ds-grid-item'
import underConstructionThumb from '../public/images/underConstruction.png'
import titanicThumb from '../public/images/accuracyFairnessProject/titanicThumbnail.png'
import Head from 'next/head'

const Works = () => {
    <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P4NPYDG6ZT"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag(&apos; js&apos;, new Date());

            gtag(&apos;config&apos;, &apos;G-P4NPYDG6ZT&apos;);
        </script>
    </Head>
    return (
        <Layout>
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