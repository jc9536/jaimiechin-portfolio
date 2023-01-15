import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItemPaper } from '../components/paper-grid-item'
import Layout from '../components/layouts/article'
import ictThumb from '../public/images/ICTPaper/ICTThumbnail.png'
import siblingThumb from '../public/images/SiblingPaper/SiblingThumbnail.png'
const Works = () => {
    
    return (
        <Layout>
            <Container maxW="container.xl">
                <br />
                <Heading as="h3" fontSize={64} mb={4} align="center">
                    Psychology Research Papers
                </Heading>

                <br />

                <SimpleGrid columns={[1, 1, 2]} spacing="60px">
                    <Section>
                        <WorkGridItemPaper id="ICT" title="Student Experiences with ICT Learning Environments" thumbnail={ictThumb}>
                            A qualitative research paper exploring how adolescents experience information and communication technology (ICT) in post-pandemic classrooms
                        </WorkGridItemPaper>
                    </Section>

                    <Section>
                        <WorkGridItemPaper id="Siblings" title="Perspective Analysis of Sibling Relationships" thumbnail={siblingThumb}>
                            An analysis of a semi-structured interview featuring sibling relationships and its influence on how adolescents navigate cultural pressures and expectations
                        </WorkGridItemPaper>
                    </Section>

                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works