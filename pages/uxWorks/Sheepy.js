import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/uxWorks'
import Layout from '../../components/layouts/article'

const uxWork = () => {
    return (
        <Layout title="Sheepy">
            <br />
            <Container maxW="max">
                <Title>
                    Sheepy <Badge>July 2022</Badge>
                </Title>

                
                <WorkImage src="/images/sheepyCaseStudy/matrix.png" alt="MatrixCover" />

                <br />

                <Divider />
                <List ml={10} my={10}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Solo student project for NYU UX Design I (Researcher & Designer)</span>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <Meta>Timeline</Meta>
                        <span>July 2022 - August 2022 (4 weeks)</span>
                    </ListItem>
                    <br />
                    <ListItem>
                        <Meta>Mentor</Meta>
                        <Link href="https://www.linkedin.com/in/jasbrad/">
                            James Bradley <ExternalLinkIcon mx="2px" /> 
                        </Link>
                    </ListItem>
                    <br />
                    <ListItem>
                        <Meta>Components</Meta>
                        <span>Market & User Research / Competitive Analysis / Persona / User Flow & Sitemap / Lo-fi & Hi-fi Wireframes / Prototype / User Testing</span>
                        
                    </ListItem>
                </List>
                <Divider />

                <br />

                <WorkImage src="/images/sheepyCaseStudy/marketNeeds.png" alt="SheepyMarketNeeds" />

            </Container>
        </Layout>
    )
}

export default uxWork