import { Container, Badge, Image} from '@chakra-ui/react'
import { Title} from '../../components/dataScienceWorks'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import {useEffect} from 'react'

const Work = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
      }, []);
    
    return (
        
        <Layout title="AccuracyFairness">
            <br />

            <Container maxW="max">
                <Title>
                    Accuracy & Fairness of an Automated Decision System <Badge>May 2022</Badge>
                </Title>

         
                <Image src={`/images/sheepyCaseStudy/matrix.png`} alt="MatrixCover"/>

                <Section delay={0.2}>

                </Section>
            </Container>

        </Layout> 

        
    )
    
    
}

export default Work