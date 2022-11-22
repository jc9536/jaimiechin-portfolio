import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/ux-grid-item'
import Layout from '../components/layouts/article'
import thumbSheepy from '../public/images/sheepyCaseStudy/sheepyThumbnail.png'
import starbucksThumb from '../public/images/StarbucksRedesign/thumbnail.png'
import {Head, Script} from 'next/head'

const Works = () => {
    <Head>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-P4NPYDG6ZT"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-P4NPYDG6ZT);
                `}
        </Script>
    </Head>
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