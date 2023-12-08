import { Container, Badge, useColorModeValue, Image, List, Link, ListItem, AspectRatio } from '@chakra-ui/react'
import { Meta } from '../../components/dataScienceWorks'
import { Title } from '../../components/uxWorks'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { useEffect} from 'react'



const UXWork = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);

    return (

        <Layout title="DigiDubs">
            <br />
            <Title>
                Digi-Dubs <Badge>December 2023</Badge>
            </Title>
            <Container maxW="max">
                

                <Section delay={0.3}>
                    <Image src={`/images/DigiDubs/matrix${useColorModeValue('', '_dark')}.jpg`} alt="Cover" loading='eager' />
                    <Image src={`/images/DigiDubs/ProjectInfo${useColorModeValue('', '_dark')}.jpg`} alt="ProjectInfo" useMap='#projinfolinks' loading='eager' />
                    <map name="projinfolinks">
                        <area target="_parent" alt="BGResearch" title="BGResearch" href="#market" coords="127,308,538,407" shape="rect"/>
                        <area target="_parent" alt="UserResearch" title="UserResearch" href="#userSurvey" coords="567,307,833,406" shape="rect"/>
                        <area target="_parent" alt="Personas" title="Personas" href="#persona" coords="858,307,1065,408" shape="rect"/>
                        <area target="_parent" alt="Sketches" title="Sketches" href="#sketches" coords="1095,307,1526,408" shape="rect"/>
                        <area target="_parent" alt="SiteMap" title="SiteMap" href="#sitemap" coords="1551,305,1745,409" shape="rect"/>
                        <area target="_parent" alt="MidFi" title="MidFi" href="#midfi" coords="129,429,462,530" shape="rect"/>
                        <area target="_parent" alt="Testing" title="Testing" href="#testing" coords="489,428,837,528" shape="rect"/>
                        <area target="_parent" alt="HiFi" title="HiFi" href="#hifi" coords="864,430,1159,526" shape="rect"/>
                        <area target="_parent" alt="AlignmentGrid" title="AlignmentGrid" href="#alignment" coords="1187,429,1489,530" shape="rect"/>
                        <area target="_parent" alt="Prototype" title="Prototype" href="#prototype" coords="1515,428,1816,528" shape="rect"/>
                        <area target="_blank" alt="Destello" title="Destello" href="https://www.linkedin.com/in/rebeccadestello/" coords="100,844,381,876" shape="rect"/>
                        <area target="_blank" alt="Silva" title="Silva" href="https://www.linkedin.com/in/rafael-m-l-silva-19bb2030/?locale=en_US" coords="402,842,606,877" shape="rect"/>
                        <area target="_blank" alt="Chin" title="Chin" href="https://www.linkedin.com/in/jaimiechin/" coords="671,844,869,877" shape="rect"/>
                        <area target="_blank" alt="Hendrickson" title="Hendrickson" href="https://www.linkedin.com/in/jeff-hendrickson/" coords="890,841,1167,878" shape="rect"/>
                        <area target="_blank" alt="Zhao" title="Zhao" href="https://www.linkedin.com/in/anthea-zhao-35063bba/" coords="1185,843,1395,874" shape="rect"/>
                    </map>

                    <Image src={`/images/DigiDubs/Concept${useColorModeValue('', '_dark')}.jpg`} alt="Concept" id="background" loading='eager' />
                    <Image src={`/images/DigiDubs/MarketResearch${useColorModeValue('', '_dark')}.jpg`} alt="Market" useMap="#marketMap" id="market" loading='eager' />
                    <map name="marketMap">
                        <area target="_blank" alt="Drezner2017" title="Drezner2017" href="https://link.springer.com/chapter/10.1007/978-3-319-58527-7_9" coords="1256,890,1537,930" shape="rect"/>
                        <area target="_blank" alt="Rancour2019" title="Rancour2019" href="https://er.educause.edu/blogs/sponsored/2019/4/from-prospective-student-to-active-alumni-engagement-fosters-lifelong-support" coords="385,1553,676,1592" shape="rect"/>
                        <area target="_blank" alt="Gannod2010" title="Gannod2010" href="https://www.researchgate.net/publication/224207297_Increasing_alumni_engagement_through_the_capstone_experience" coords="1104,2290,1339,2324" shape="rect"/>
                        <area target="_blank" alt="2Gannod2010" title="2Gannod2010" href="https://www.researchgate.net/publication/224207297_Increasing_alumni_engagement_through_the_capstone_experience" coords="927,2338,1060,2378" shape="rect"/>
                    </map>


                    <Image src={`/images/DigiDubs/UserSurvey${useColorModeValue('', '_dark')}.jpg`} alt="UserS" id="userSurvey" loading='eager' />
                    <Image src={`/images/DigiDubs/UserNeeds${useColorModeValue('', '_dark')}.jpg`} alt="UserN" useMap="#researchmap" loading='eager' />
                    <map name="researchmap">
                        <area target="_blank" alt="InterviewQuestions" title="InterviewQuestions" href="https://docs.google.com/document/d/1gcB8bRBuxxgtir_IR_ctAz48v41LcuMke3XQ9OpPVCg/edit?usp=sharing" coords="968,228,1395,260" shape="rect"/>
                    </map>

                    <Image src={`/images/DigiDubs/Persona${useColorModeValue('', '_dark')}.jpg`} alt="Persona" id="persona" loading='eager' />
                    <Image src={`/images/DigiDubs/UserInsights${useColorModeValue('', '_dark')}.jpg`} alt="Insights" loading='eager' />
                    <Image src={`/images/DigiDubs/Opportunity${useColorModeValue('', '_dark')}.jpg`} alt="Opportunity" loading='eager' />
                    <Image src={`/images/DigiDubs/Sketches${useColorModeValue('', '_dark')}.jpg`} alt="Sketches" id="sketches" loading='eager' />
                    <Image src={`/images/DigiDubs/FlowMap${useColorModeValue('', '_dark')}.jpg`} alt="Flow" loading='eager' />
                    <Image src={`/images/DigiDubs/Sitemap${useColorModeValue('', '_dark')}.jpg`} alt="Sitemap" id="sitemap" loading='eager' />
                    <Image src={`/images/DigiDubs/MidFi${useColorModeValue('', '_dark')}.jpg`} alt="MidFi" id="midfi" loading='eager' />
                    <AspectRatio maxW="100%" minH="450" ratio={16 / 9}>
                        <iframe style={{ border: "1px" }} width="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHrZJTkWpCF61ibGrOUO4y6%2F518-D-Prototyping%3Fpage-id%3D30%253A196%26type%3Ddesign%26node-id%3D61-2129%26viewport%3D553%252C721%252C0.13%26t%3DUyfOawWbUKQE1AZw-1%26scaling%3Dscale-down%26starting-point-node-id%3D61%253A2129%26mode%3Ddesign" allowFullScreen></iframe>
                    </AspectRatio>

                    <Image src={`/images/DigiDubs/Testing${useColorModeValue('', '_dark')}.jpg`} alt="Testing" id="testing" loading='eager' />
                    <Image src={`/images/DigiDubs/Iterations${useColorModeValue('', '_dark')}.jpg`} alt="Iterations" id="iterations" loading='eager' />
                    <Image src={`/images/DigiDubs/HiFi${useColorModeValue('', '_dark')}.jpg`} alt="HiFi" id="hifi" loading='eager' />
                    <Image src={`/images/DigiDubs/AlignmentGrid${useColorModeValue('', '_dark')}.jpg`} alt="Align" id="alignment" loading='eager' />
                    <Image src={`/images/DigiDubs/Prototype${useColorModeValue('', '_dark')}.jpg`} alt="Ptototype" id="prototype" loading='eager' />
                    <AspectRatio maxW="100%" minH="450" ratio={16 / 9}>
                        <iframe style={{ border: "1px" }} width="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHrZJTkWpCF61ibGrOUO4y6%2F518-D-Prototyping%3Fpage-id%3D201%253A19454%26type%3Ddesign%26node-id%3D234-1728%26viewport%3D2369%252C80%252C0.57%26t%3DnVgzGni6q2XK0yCF-1%26scaling%3Dscale-down%26starting-point-node-id%3D234%253A1728%26show-proto-sidebar%3D1%26mode%3Ddesign" allowFullScreen></iframe>
                    </AspectRatio>

                    <br />
                    <br />
                    <br />

                    <Container centerContent maxW="max">
                        <List spacing={4}>
                            <ListItem>
                                <Meta>Video Demonstration</Meta>
                                <Link href="https://www.youtube.com/watch?v=LOV7WFqt8as" isExternal={true}>
                                    Use Case of Digi-Dubs <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>Project Documentation</Meta>
                                <Link href="https://docs.google.com/document/d/10-wd4jTXm05K-vjUjfNlScsE8Z5Tsg25DaNfIYc1Hf8/edit?usp=sharing" isExternal={true}>
                                    Written Documentation & Specification <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>Figma File</Meta>
                                <Link href="https://www.figma.com/file/HrZJTkWpCF61ibGrOUO4y6/518-D-Prototyping?type=design&node-id=201%3A19454&mode=design&t=ahP1qWlzGF53QrVp-1" isExternal={true}>
                                    Working Project File  <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                        </List>
                    </Container>

                    <Image src={`/images/DigiDubs/Summary${useColorModeValue('', '_dark')}.jpg`} alt="Summary" loading='eager' />

                </Section>
            </Container>

        </Layout>


    )


}

export default UXWork