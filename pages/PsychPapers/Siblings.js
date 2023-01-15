import { Container, Badge, useColorModeValue, Image, Button, Box, AspectRatio } from '@chakra-ui/react'
import { Title } from '../../components/PsychPapers'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { DownloadIcon } from '@chakra-ui/icons'

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
                    <AspectRatio minH="1125" ratio={16 / 9}>
                        <iframe style={{ position: "absolute" }} width="100%" src="/FinalAssignment.pdf" allowFullScreen></iframe>
                    </AspectRatio>
                    <Box textAlign="center">
                        <Button
                            colorScheme="yellow"
                            maxW="md"
                            mt={8}
                        >
                            <a href="/FinalAssignment.pdf" download="/FinalAssignment.pdf">Download the pdf <DownloadIcon mx="2px" /> </a>

                        </Button>
                    </Box>
                </Section>
            </Container>

        </Layout>
    )
}

export default Work