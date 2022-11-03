import { Container, Badge, Link, List, ListItem, useColorModeValue, Image} from '@chakra-ui/react'
import { Title, Meta } from '../../components/dataScienceWorks'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
                    <br />
                    <Container centerContent>
                        <List spacing={4}>
                            <ListItem>
                            <Meta>Report Document</Meta>
                                <Link href="https://docs.google.com/document/d/1nJ9Tq-DEd6lMLRWAt6ScEksPZso_DaTeHT7BRQzXzzQ/edit?usp=sharing">
                                    Written Report on the Analysis <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                            <Meta>Analysis Source Code</Meta>
                                <Link href="https://colab.research.google.com/drive/1r0mDtkyGYI-biOYHL9leV78jnvMQq32U?usp=sharing">
                                    Google Colab Notebook <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                            <Meta>ADS Source Code</Meta>
                                <Link href="https://www.kaggle.com/code/akshaypawar7/roc-auc-decision-boundary-for-titanic-survival">
                                    Pawar's Automated Decision System  <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                            <Meta>Competition Host</Meta>
                                <Link href="https://www.kaggle.com/c/titanic">
                                    Kaggle Competition  <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                        </List>
                    </Container>

                </Section>
            </Container>

        </Layout> 

        
    )
    
    
}

export default Work