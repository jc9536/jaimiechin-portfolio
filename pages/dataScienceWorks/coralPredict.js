import { Container, Badge, Link, List, ListItem, useColorModeValue, Image } from '@chakra-ui/react'
import { Title, Meta } from '../../components/dataScienceWorks'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { useEffect } from 'react'
import YearSlider from '../../components/YearsSlider'

const Work = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);

    const years = [1980, 1983, 1987, 1988, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    const displayedYears = [1980, 1988, 1995, 2001, 2007, 2013, 2019];
    const actualCatFolder = '/images/coralPredict/ActualCategorical';
    const predictedCatFolder = '/images/coralPredict/PredictedCategorical';
    const actualPerFolder = '/images/coralPredict/ActualPercent';
    const predictedPerFolder = '/images/coralPredict/PredictedPercent';

    return (

        <Layout title="Machine Learning: Predicting Coral Reef Bleaching Events">
            <br />
            <Title>
                Machine Learning: Predicting Coral Reef Bleaching Events <Badge>May 2023</Badge>
            </Title>

            <Container maxW="max">

                <Section delay={0.3}>
                    <Image src={`/images/coralPredict/matrix${useColorModeValue('', '_dark')}.jpg`} alt="title" loading='eager' />
                    <br />
                    <br />
                    <Container centerContent>
                        <List spacing={4}>
                            <ListItem>
                                <Meta>Report Document</Meta>
                                <Link href="https://docs.google.com/document/d/1VM--VfFCkmBhEQanDkKh7H68Zkv4VyXmNN9CkWZVVdw/edit?usp=sharing" isExternal={true}>
                                    Written Report on the Analysis <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>Analysis Source Code</Meta>
                                <Link href="https://github.com/jc9536/CoralBleaching" isExternal={true}>
                                    Github Repository <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                        </List>
                    </Container>
                    <br />
                    <Image src={`/images/coralPredict/ProjectInfo${useColorModeValue('', '_dark')}.jpg`} alt="projinfo" useMap='#info' loading='eager' />
                    <map name="info">
                        <area target="_blank" alt="Jaimie Chin" title="Jaimie Chin" href="https://www.linkedin.com/in/jaimiechin/" coords="435,921,671,962" shape="rect"/>
                        <area target="_blank" alt="Maro Aboelwafa" title="Maro Aboelwafa" href="https://www.linkedin.com/in/maro-aboelwafa-645309177/" coords="689,921,1002,962" shape="rect"/>
                        <area target="_parent" alt="Issue" title="Issue" href="#issue" coords="97,311,578,461" shape="rect"/>
                        <area target="_parent" alt="Cleaning" title="Cleaning" href="#cleaning" coords="716,317,1187,461" shape="rect"/>
                        <area target="_parent" alt="Model" title="Model" href="#model" coords="1323,315,1903,463" shape="rect"/>
                        <area target="_parent" alt="Evaluation" title="Evaluation" href="#evaluation" coords="466,494,843,641" shape="rect"/>
                        <area target="_parent" alt="Conclusion" title="Conclusion" href="#conclusion" coords="1080,493,1451,640" shape="rect"/>
                    </map>

                    <Image src={`/images/coralPredict/Issue${useColorModeValue('', '_dark')}.jpg`} alt="issue" id="issue" loading='eager' />

                    <Image src={`/images/coralPredict/Cleaning${useColorModeValue('', '_dark')}.jpg`} alt="cleaning" id="cleaning" loading='eager' />
                    <Image src={`/images/coralPredict/Cleaning_2${useColorModeValue('', '_dark')}.jpg`} alt="cleaning2" loading='eager' />
                    <Image src={`/images/coralPredict/Cleaning_3${useColorModeValue('', '_dark')}.jpg`} alt="cleaning3" loading='eager' />
                    <Image src={`/images/coralPredict/Cleaning_4${useColorModeValue('', '_dark')}.jpg`} alt="cleaning4" loading='eager' />
                    <Image src={`/images/coralPredict/Model${useColorModeValue('', '_dark')}.jpg`} alt="model" id="model" loading='eager' />
                    <Image src={`/images/coralPredict/Model_2${useColorModeValue('', '_dark')}.jpg`} alt="model2" loading='eager' />
                    <Image src={`/images/coralPredict/Model_3${useColorModeValue('', '_dark')}.jpg`} alt="model3" loading='eager' />
                    <Image src={`/images/coralPredict/Model_4${useColorModeValue('', '_dark')}.jpg`} alt="model4" loading='eager' />
                    <Image src={`/images/coralPredict/Evaluation${useColorModeValue('', '_dark')}.jpg`} alt="evaluation" id="evaluation" loading='eager' />
                    <Image src={`/images/coralPredict/Evaluation_2${useColorModeValue('', '_dark')}.jpg`} alt="evaluation2" loading='eager' />
                
                    <Image src={`/images/coralPredict/Map${useColorModeValue('', '_dark')}.jpg`} alt="map" id="map" loading='eager' />

                    <YearSlider
                        years={years}
                        displayedYears={displayedYears}
                        actualFolder={actualPerFolder}
                        predictedFolder={predictedPerFolder}
                    />

                    <Image src={`/images/coralPredict/Map_2${useColorModeValue('', '_dark')}.jpg`} alt="map2" loading='eager' />
                    <Image src={`/images/coralPredict/Map_3${useColorModeValue('', '_dark')}.jpg`} alt="map3" loading='eager' />
                    <Image src={`/images/coralPredict/Map_4${useColorModeValue('', '_dark')}.jpg`} alt="map4" loading='eager' />
                    <Image src={`/images/coralPredict/Map_5${useColorModeValue('', '_dark')}.jpg`} alt="map5" loading='eager' />

                    <YearSlider
                        years={years}
                        displayedYears={displayedYears}
                        actualFolder={actualCatFolder}
                        predictedFolder={predictedCatFolder}
                    />
                    
                    <Image src={`/images/coralPredict/Conclusion${useColorModeValue('', '_dark')}.jpg`} alt="Conclusion" id="conclusion" loading='eager' />
                </Section>
            </Container>

        </Layout>


    )


}

export default Work