import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/ux-grid-item'
import Layout from '../components/layouts/article'
import thumbSheepy from '../public/images/sheepyCaseStudy/sheepyThumbnail.png'
import starbucksThumb from '../public/images/StarbucksRedesign/thumbnail.png'
import { Script} from 'next/head'

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
                    <WorkGridItem id="underConstruction" title="Work In Progress..." thumbnail={starbucksThumb}>
                        This  case study is under construction, please visit some of my other works in the meantime!
                    </WorkGridItem>
                </Section>

            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works