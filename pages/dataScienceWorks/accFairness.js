import { Container, Badge, Link, List, ListItem, useColorModeValue, Image } from '@chakra-ui/react'
import { Title, Meta } from '../../components/dataScienceWorks'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { useEffect } from 'react'

const Work = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);

    return (

        <Layout title="AccuracyFairness">
            <br />
            <Title>
                Accuracy & Fairness of an Automated Decision System <Badge>May 2022</Badge>
            </Title>

            <Container maxW="max">
                
                <Section delay={0.3}>
                    <Image src={`/images/accuracyFairnessProject/titleFrame${useColorModeValue('', '_dark')}.jpg`} alt="title" loading='eager' />
                    <br />
                    <br />
                    <Container centerContent>
                        <List spacing={4}>
                            <ListItem>
                                <Meta>Report Document</Meta>
                                <Link href="/FairnessAnalysis Report.pdf" isExternal={true}>
                                    Written Report on the Analysis <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>Analysis Source Code</Meta>
                                <Link href="https://colab.research.google.com/drive/1r0mDtkyGYI-biOYHL9leV78jnvMQq32U?usp=sharing" isExternal={true}>
                                    Google Colab Notebook <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>ADS Source Code</Meta>
                                <Link href="https://www.kaggle.com/code/akshaypawar7/roc-auc-decision-boundary-for-titanic-survival" isExternal={true}>
                                    Pawar&apos;s Automated Decision System  <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>Competition Host</Meta>
                                <Link href="https://www.kaggle.com/c/titanic" isExternal={true}>
                                    Kaggle Competition  <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                        </List>
                    </Container>
                    <br />
                    <Image src={`/images/accuracyFairnessProject/ProjectInfo${useColorModeValue('', '_dark')}.jpg`} alt="projinfo" useMap='#info' loading='eager' />
                    <map name="info">
                        <area target="_parent" alt="fairnessInML" href="#fairness" coords="97,314,669,464" shape="rect" />
                        <area target="_parent" alt="tradeoff" href="#tradeoff" coords="699,314,1296,459" shape="rect" />
                        <area target="_parent" alt="terms" href="#terms" coords="1328,313,1690,460" shape="rect" />
                        <area target="_parent" alt="background" href="#bg" coords="98,493,470,642" shape="rect" />
                        <area target="_parent" alt="visualizations" href="#visualizations" coords="503,491,964,641" shape="rect" />
                        <area target="_parent" alt="implementation" href="#implement" coords="996,491,1570,641" shape="rect" />
                        <area target="_parent" alt="outcomes" href="#outcomes" coords="1600,494,1964,641" shape="rect" />
                    </map>

                    <Image src={`/images/accuracyFairnessProject/Fairness${useColorModeValue('', '_dark')}.jpg`} alt="fairness" id="fairness" useMap='#fair' loading='eager' />
                    <map name="fair">
                        <area target="_blank" alt="fair" title="fair" href="https://link.springer.com/article/10.1007/s10287-022-00425-z#citeas" coords="716,791,1284,731" shape="rect" />
                    </map>

                    <Image src={`/images/accuracyFairnessProject/Tradeoff${useColorModeValue('', '_dark')}.jpg`} alt="tradeoff" id="tradeoff" loading='eager' />
                    <Image src={`/images/accuracyFairnessProject/Terms${useColorModeValue('', '_dark')}.jpg`} alt="terms" id="terms" loading='eager' />
                    <Image src={`/images/accuracyFairnessProject/Background${useColorModeValue('', '_dark')}.jpg`} alt="bground" id="bg" useMap='#backgroundMap' loading='eager' />
                    <map name="backgroundMap">
                        <area target="_blank" alt="pawar" title="pawar" href="https://www.kaggle.com/code/akshaypawar7/roc-auc-decision-boundary-for-titanic-survival" coords="886,537,1437,592" shape="rect" />
                        <area target="_blank" alt="rocAUC" title="rocAUC" href="https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc" coords="413,1933,1584,2066" shape="rect" />
                    </map>
                    <Image src={`/images/accuracyFairnessProject/DataFeatures${useColorModeValue('', '_dark')}.jpg`} alt="datafeatures" id="visualizations" loading='eager' />
                    <Image src={`/images/accuracyFairnessProject/CategoricalData${useColorModeValue('', '_dark')}.jpg`} alt="categoricalData" loading='eager' />
                    <Image src={`/images/accuracyFairnessProject/AgeFare${useColorModeValue('', '_dark')}.jpg`} alt="AgeFare" loading='eager' />
                    <Image src={`/images/accuracyFairnessProject/ExploratoryPlots${useColorModeValue('', '_dark')}.jpg`} alt="ExploratoryPlots" loading='eager' />
                    <Image src={`/images/accuracyFairnessProject/CorrelationMatrix${useColorModeValue('', '_dark')}.jpg`} alt="CorrelationMatrix" loading='eager' />
                    <Image src={`/images/accuracyFairnessProject/Implementation${useColorModeValue('', '_dark')}.jpg`} alt="Implementation" id="implement" loading='eager' />
                    <Image src={`/images/accuracyFairnessProject/Validation${useColorModeValue('', '_dark')}.jpg`} alt="Validation" loading='eager' />
                    <Image src={`/images/accuracyFairnessProject/Outcomes${useColorModeValue('', '_dark')}.jpg`} alt="Outcomes" id="outcomes" loading='eager' />
                    <Image src={`/images/accuracyFairnessProject/Conclusion${useColorModeValue('', '_dark')}.jpg`} alt="Conclusion" loading='eager' />
                </Section>
            </Container>

        </Layout>


    )


}

export default Work