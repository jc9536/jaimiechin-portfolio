import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItemPaper } from '../components/gridItemComponent'
import Layout from '../components/layouts/article'
import ictThumb from '../public/images/ICTPaper/ICTThumbnail.jpg'
import siblingThumb from '../public/images/SiblingPaper/SiblingThumbnail.jpg'
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
                        <WorkGridItemPaper id="ICT" title="Student Experiences with ICT Learning Environments" thumbnail={ictThumb} innerShadowColor='rgba(204, 188, 167, 0.25)' dropShadowColor='rgba(204, 188, 167, 0.4)'>
                            A qualitative research paper exploring how adolescents experience information and communication technology (ICT) in post-pandemic classrooms
                        </WorkGridItemPaper>
                    </Section>

                    <Section>
                        <WorkGridItemPaper id="Siblings" title="Perspective Analysis of Sibling Relationships" thumbnail={siblingThumb} innerShadowColor='rgba(204, 188, 167, 0.25)' dropShadowColor='rgba(204, 188, 167, 0.4)'>
                            An analysis of a semi-structured interview featuring sibling relationships and its influence on how adolescents navigate cultural pressures and expectations
                        </WorkGridItemPaper>
                    </Section>

                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works