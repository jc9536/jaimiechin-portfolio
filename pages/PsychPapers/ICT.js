import { Container, Badge, useColorModeValue, Image, AspectRatio } from '@chakra-ui/react'
import { Title} from '../../components/PsychPapers'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { useEffect } from 'react'

const Work = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);

    return (

        <Layout title="StudentExperiencesICTLearning">
            <br />
            <Title>
                Student Experiences with ICT Learning Environments <Badge>December 2022</Badge>
            </Title>

            <Container maxW="max">

                <Section delay={0.3}>
                    <Image src={`/images/ICTPaper/titleFrame${useColorModeValue('', '_dark')}.jpg`} alt="title" loading='eager' />
                    <AspectRatio maxW="100%" minH="1185" ratio={16 / 9}>
                        <iframe style={{ border: "1px" }} width="100%" src="/FinalPaper.pdf" allowFullScreen></iframe>
                    </AspectRatio>
                </Section>
            </Container>

        </Layout>


    )


}

export default Work