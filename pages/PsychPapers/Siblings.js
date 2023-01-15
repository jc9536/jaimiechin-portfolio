import { Container, Badge, useColorModeValue, Image, AspectRatio } from '@chakra-ui/react'
import { Title } from '../../components/PsychPapers'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Work = () => {

    return (

        <Layout title="Siblings">
            <br />
            <Title>
                Perspective Analysis of Sibling Relationships <Badge>December 2022</Badge>
            </Title>

            <Container maxW="max">

                <Section delay={0.3}>
                    <Image src={`/images/SiblingPaper/titleFrame${useColorModeValue('', '_dark')}.jpg`} alt="title" loading='eager' />
                    <AspectRatio maxW="100%" minH="1185" ratio={16 / 9}>
                        <iframe style={{ border: "1px" }} width="100%" src="/FinalAssignment.pdf" allowFullScreen></iframe>
                    </AspectRatio>
                </Section>
            </Container>

        </Layout>


    )


}

export default Work