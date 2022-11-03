import { Container, Badge, useColorModeValue, Image} from '@chakra-ui/react'
import { Title} from '../../components/uxWorks'
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

         
                <Image src={`/images/accuracyFairnessProject/titleFrame${useColorModeValue('', '_dark')}.png`} alt="title"/>

                <Section delay={0.2}>

                </Section>
            </Container>

        </Layout> 

        
    )
    
    
}

export default Work