import { Container, Badge } from '@chakra-ui/react'
import { Title} from '../../components/digitalFabrication'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { useEffect } from 'react'

const Work = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);

    return (

        <Layout title="A1ModellingLaserCutting">
            <br />
            <Title>
                Laser Cut Press Fit Construction Kit <Badge>March 2024</Badge>
            </Title>

            <Container maxW="max">

                <Section delay={0.3}>
       
                </Section>
            </Container>

        </Layout>


    )


}

export default Work