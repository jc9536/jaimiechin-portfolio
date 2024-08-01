import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem533 } from '../components/gridItemComponent'
import assign_1 from '../public/images/533_Assignment_1/thumbnail.jpg'
import assign_2 from '../public/images/533_Assignment_2/thumbnail.jpg'
import assign_3 from '../public/images/533_Assignment_3/thumbnail.jpg'
import assign_4 from '../public/images/533_Assignment_4/thumbnail.jpg'
import assign_5 from '../public/images/533_Assignment_5/thumbnail.jpg'
import assign_6 from '../public/images/533_Assignment_6/thumbnail.jpg'
import assign_7 from '../public/images/533_Assignment_7/thumbnail.jpg'
import assign_8 from '../public/images/533_Assignment_8/thumbnail.jpg'

const Works = () => {

    return (
        <Layout>
            <Container maxW="container.xl">
                <br />
                <Heading as="h3" fontSize={64} mb={4} align="center">
                    HCDE 533 - Digital Fabrication
                </Heading>

                <br />

                <SimpleGrid columns={[1, 1, 2]} spacing="60px">
                    <Section>
                        <WorkGridItem533 id="A8FinalProject" title="Assignment 8: Final Project" thumbnail={assign_8}>
                            Design and digitally fabricate an object of your choosing using the techniques you have learned in class
                        </WorkGridItem533>
                    </Section>

                    <Section>
                        <WorkGridItem533 id="A7FinalProjectProposal" title="Assignment 7: Final Project Proposal" thumbnail={assign_7}>
                            A proposal pitch for my final project
                        </WorkGridItem533>
                    </Section>

                    <Section>
                        <WorkGridItem533 id="A6Molding&Casting" title="Assignment 6: Molding & Casting" thumbnail={assign_6}>
                            Design and fabricate a 2-part (silicone) mold
                        </WorkGridItem533>
                    </Section>

                    <Section>
                        <WorkGridItem533 id="A5Meshes&Lamps" title="Assignment 5: Meshes & Lamps" thumbnail={assign_5}>
                            Modify the mesh of two STLs to produce a single printable STL
                        </WorkGridItem533>
                    </Section>

                    <Section>
                        <WorkGridItem533 id="A4SubtractiveManufacturing" title="Assignment 4: Subtractive Manufacturing" thumbnail={assign_4}>
                            Design a box that is made up of flat panels for an interference fit
                        </WorkGridItem533>
                    </Section>

                    <Section>
                        <WorkGridItem533 id="A3printing3D" title="Assignment 3: 3D Printing" thumbnail={assign_3}>
                            Configuring & Setting up the 3D printing process
                        </WorkGridItem533>
                    </Section>

                    <Section>
                        <WorkGridItem533 id="A2ParametricModelling" title="Assignment 2: Parametric Modelling with Grasshopper" thumbnail={assign_2}>
                            A cardboard laser-cut parametric model using a Grasshopper definition
                        </WorkGridItem533>
                    </Section>

                    <Section>
                        <WorkGridItem533 id="A1ModellingLaserCutting" title="Assignment 1: Modelling & Laser Cutting" thumbnail={assign_1}>
                            A laser-cut cardboard construction kit with 30+ press-fit parts
                        </WorkGridItem533>
                    </Section>

                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works