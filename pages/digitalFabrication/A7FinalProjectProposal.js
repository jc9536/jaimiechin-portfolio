import {
    Container, Badge, Heading, Text, Box, Center, UnorderedList, ListItem, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Link
} from '@chakra-ui/react'
import { Title } from '../../components/digitalFabrication'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { useEffect } from 'react'
import ImageCarousel from '../../components/ImageCarousel'
import StepsComponent from '../../components/StepsComponent'

const Work = () => {

    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);

    const sketch = ['/images/533_Assignment_7/sketch.jpg', '/images/533_Assignment_7/sketch_1.jpg']
    const TaskSteps = [
        {
            title: 'Purchase',
            description: 'Buy Materials',
            additionalText: 'Buy all necessary materials from Bill of Materials from Amazon'
        },
        {
            title: 'Modeling',
            description: 'Model Pieces',
            additionalText: 'Modeling in Rhino (Parametric Flowers), Fusion360 (Fish, Leaves, Molds and Beads), and create laser cut SVGs'
        },
        {
            title: '3D Printing',
            description: 'Print Pieces',
            additionalText: 'Print tests and make modeling changes (iterate) if necessary'
        },
        {
            title: 'Molding',
            description: 'Mold Pieces',
            additionalText: 'Cast silicone molds for necessary components'
        },
        {
            title: 'Laser Cut',
            description: 'Cut Tags',
            additionalText: 'Head to the MILL and laser cut the tag component'
        },
        {
            title: 'Casting',
            description: 'Cast Pieces',
            additionalText: 'Cast components in Resin and Plaster'
        },
        {
            title: 'Assembly',
            description: 'Make Chimes',
            additionalText: 'Assemble each wind chime. Assemble different variations with different components.'
        },
        {
            title: 'Documentation',
            description: 'Document Process',
            additionalText: 'Document the process and publish to website.'
        }
    ]

    const TimeSteps = [
        {
            title: 'By Sat. May 18',
            description: 'Purchase',
            additionalText: 'Buy all necessary materials from Bill of Materials from Amazon'
        },
        {
            title: 'By Sun. May 19',
            description: 'Modeling',
            additionalText: 'Modeling in Rhino (Parametric Flowers), Fusion360 (Fish, Leaves, Molds and Beads), and create laser cut SVGs. Beads are last priority and will be sourced from Amazon if time does not permit.'
        },
        {
            title: 'By Wed. May 22nd',
            description: '3D Printing',
            additionalText: 'Print tests and make modeling changes (iterate) if necessary. This task may be ongoing depending on print times, but priority will be given to larger pieces. All iterations should be finished by Wed. May 22nd.'
        },
        {
            title: 'By Fri. May 24th',
            description: 'Molding',
            additionalText: 'Cast silicone molds for necessary components. Silicone should cure in about 6 hours, but should be left to set fully for 24 hours before casting materials.'
        },
        {
            title: 'By Sun. May 26th',
            description: 'Laser Cut',
            additionalText: 'Head to the MILL and laser cut the tag component. More time should be allotted due to unfamiliarity with laser cutting Balsa wood.'
        },
        {
            title: 'By Sun. May 26th',
            description: 'Casting',
            additionalText: 'Cast components in Resin and Plaster. Resin should be allowed to cure for 24 hours before removal from mold while plaster can be removed in about 6 hours.'
        },
        {
            title: 'Mon. May 27th',
            description: 'Assembly',
            additionalText: 'Assemble each wind chime. Assemble different variations with different components. Full day dedication may be needed for this task due to potential complexity of assembly.'
        },
        {
            title: 'Tue. May 28th',
            description: 'Documentation',
            additionalText: 'Document the process and publish to website. Pictures should be taken during the entire process and the write up should begin on Tuesday May 28th. Necessary changes may be made up until assignment due date on Wed. May 29th.'
        }
    ]

    return (
        <Layout title="A7FinalProjectProposal">
            <br />
            <Title>
                Final Project Proposal <Badge>May 2024</Badge>
            </Title>

            <Container maxW="full">
                <br />
                <br />
                <Section delay={0.3}>
                    <Heading as="h1" variant="page-title" size="3xl" mb={4} align="center">
                        Assignment 7: Final Project Proposal
                    </Heading>
                    <br />
                    <br />
                    <Heading as="h3" variant="section-title">
                        Assignment Details
                    </Heading>
                    <br />
                    <br />
                    <Text fontSize="xl">
                        Create a proposal pitch for your final project. Your pitch should include&#58;
                    </Text>
                    <br />
                    <Center>
                        <UnorderedList spacing={5}>
                            <ListItem>
                                <Text fontSize="xl">
                                    a concept, including concept sketches, intended use case, context
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">
                                    a breakdown of tasks (e.g. CAD modelling, 3d printing, casting, finishing)
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">
                                    a timeline with contingency plans
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">
                                    a Bill of Materials with sourcing schedule
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </Center>
                    <br />
                    <Text fontSize="xl">
                        Your proposal can be for any digitally fabricated object. Your plan must include several of the techniques we learned in class, e.g. Rhino, Grasshopper, Slicing, Printing, Casting, Rendering, etc.
                    </Text>
                    <br />
                    <br />
                    <Heading as="h3" variant="section-title">
                        Phase 1: Ideation & Sketching
                    </Heading>
                    <br />
                    <br />
                    <Box display={{ base: 'block', lg: 'flex' }}>
                        <Box flexGrow={1} display="inline-block" overflow="hidden">
                            <Box display="inline-block" overflow="hidden">
                                <br />
                                <Text fontSize="xl">
                                    <b>Concept&#58;</b> Wind chime set
                                </Text>
                                <br />
                                <Text fontSize="xl">
                                    <b>Intended Use Case&#58;</b> A set of components that can be assembled to form different wind chimes
                                </Text>
                                <br />
                                <Text fontSize="xl">
                                    <b>Context&#58;</b> Each component utilizes a different technique from the class
                                </Text>
                            </Box>
                        </Box>
                        <Box w={{ base: '100%', lg: '125px' }} h="20px" display="inline-block" overflow="hidden"></Box>
                        <Section delay={0.4}>
                            <Box flexShrink={0} textAlign="center">
                                <Center>
                                    <Box
                                        w={{ base: '100%', sm: '80%', md: '70%', lg: '888px' }}
                                        h={{ base: 'auto', lg: '555px' }}
                                        display="inline-block"
                                        overflow="hidden"
                                    >
                                        <ImageCarousel images={sketch} aspectRatio="16/10" />
                                    </Box>
                                </Center>
                            </Box>
                        </Section>
                    </Box>
                    <br />
                    <Heading as="h3" variant="section-title">
                        Phase 2: Task Breakdown
                    </Heading>
                    <br />
                    <br />
                    <StepsComponent steps={TaskSteps} variant='horizontal' />
                    <br />
                    <br />
                    <Heading as="h3" variant="section-title">
                        Phase 3: Timeline
                    </Heading>
                    <br />
                    <br />
                    <StepsComponent steps={TimeSteps} variant='horizontal' />
                    <br />
                    <br />
                    <Heading as="h3" variant="section-title">
                        Phase 4: Bill of Materials
                    </Heading>
                    <br />
                    <TableContainer >
                        <Table size='md' variant='striped' colorScheme='yellow'>
                            <TableCaption>Bill of Materials</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Item Name</Th>
                                    <Th>Approximate Quantity</Th>
                                    <Th>Source</Th>
                                    <Th>Link</Th>
                                    <Th>Est. Arrival</Th>
                                    <Th>Cost ($)</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Wood & Metal Filament</Td>
                                    <Td>1 spool of each</Td>
                                    <Td>Protopasta via Amazon</Td>
                                    <Td><Link isExternal href='https://www.amazon.com/ProtoPlant-Protopasta-Metallic-Metal-Filled-Composite/dp/B09SL1MPWM/ref=sr_1_3?crid=1D5YWNU8WO1W2&dib=eyJ2IjoiMSJ9.3k7aVjTd_Ql5mWAcFaPHlZJzK1qeRDue1tl9CwysxKuGaoSBW73xoJwoJBn2cTInywp4AogZ6oW0KyXgojLjKKWBGLyuLk8ygy4e4cl6ttIcofa1WbI0vodTg71Et9yv7tJp74K2VupoZjS5kMGUo9UyMlZE35c8zQKUiRHV60qhD8afjRXQWmIqxkzeH5w3KP1V5AwHHo8dwvWprpLVYh7YFuEcny_NC9tAHfgkB80.7l3uoLT-hS8vUjXoHisoa4mheqi32UN7PIkhSwTnG4g&dib_tag=se&keywords=metal%2Bcopper%2Bfilament&qid=1715820515&sprefix=metal%2Bcopper%2Bfilament%2Caps%2C144&sr=8-3&th=1'>Protopasta</Link></Td>
                                    <Td>2 Day Prime shipping</Td>
                                    <Td>$50</Td>
                                </Tr>
                                <Tr>
                                    <Td>Resin</Td>
                                    <Td>32 oz.</Td>
                                    <Td>Shabebe via Amazon</Td>
                                    <Td><Link isExternal href='https://www.amazon.com/Crystal-Non-Toxic-Scratching-Yellowing-Tumblers/dp/B086L1CDMT/ref=sr_1_5?crid=1987BVMMUE33M&dib=eyJ2IjoiMSJ9.GbKYEFqQ8D_5tfvRP9iXyG_4WTPBgeBXRWv9yNrR_dA3oHihUaT6zT50fb47HXpbAdFMtMSlfp6rqAu3Ge1sWqIgMRPCCXWii-8RyvMr-gMcf1MPpaJfu7PmNnyCLb11hW1kzNIpQfELfX-DMnXo5eZ-UsEJnC2TGVmXgkbOJ1tMGkDTdWGYBCu2csdGUL7NIQEDExSIES9THWcyV3296YdeVOLRD1D3C1Xh4XVYtTyDl637js5agcHyeebUKS2hP4zsEZZSNR3W4Z8RDB-VGeWmLkkpTUivL1P0_wfN33w.MT2qavlz7i5b32-dA8GiokjWpH8vin76SRkitxb8JoU&dib_tag=se&keywords=resin&qid=1715820772&sprefix=resin%2Caps%2C193&sr=8-5'>Shabebe</Link></Td>
                                    <Td>1 Day Prime shipping</Td>
                                    <Td>$15.29</Td>
                                </Tr>
                                <Tr>
                                    <Td>Plaster</Td>
                                    <Td>4 lbs.</Td>
                                    <Td>From Assignment 6</Td>
                                    <Td><Link isExternal href='https://www.amazon.com/10308-4-Pound-Interior-Plaster-Paris/dp/B000BQLT0S/ref=sr_1_5_pp?crid=2SHDVIA5IBKPJ&dib=eyJ2IjoiMSJ9.qMFiXq7ezeNTynHzLcYCUmtTf-MVuXsvI1wuAQ-3_oiI1Z8VhkG-u3XXOheTJSWzE0pMdWqR_MHSUmicMYEiV89DHRVP7uz2K0GrLMeOOGWYCD6E53syvYXFCmdzHS_nvYU1v6IZxxX4hHchXOnow-MqZGcwlt8o-sXJ-QuwehLO5hjShM-EWlyu3hIYjr9peaGsWPIecHNovPwcCFhHINsLxQ09v17zPw__IUK_yc_QxZy2eWQVSD3zu_CNqB4FvQGnrfx1X6cQICPTXiW-ZMpf7ZnBUya8qrkjqMabbi8.JjO6Zhvd10sl2th3AI7Rzn46kRi-AilhFo2DTNaHUUg&dib_tag=se&keywords=plaster&qid=1715820860&sprefix=plaster%2Caps%2C199&sr=8-5&th=1'>DAP</Link></Td>
                                    <Td>2 Day Prime shipping</Td>
                                    <Td>$8.37</Td>
                                </Tr>
                                <Tr>
                                    <Td>Silicone</Td>
                                    <Td>20.46 oz</Td>
                                    <Td>From Assignment 6</Td>
                                    <Td><Link isExternal href='https://www.amazon.com/dp/B07V5FFPWC?ref=nb_sb_ss_w_as-reorder_k5_1_4&amp=&crid=3R0GRT5D4284Z&amp=&sprefix=sili'>LET&apos;S RESIN</Link></Td>
                                    <Td>2 Day Prime shipping</Td>
                                    <Td>$8.37</Td>
                                </Tr>
                                <Tr>
                                    <Td>Fishing Line</Td>
                                    <Td>657 ft</Td>
                                    <Td>Acejoz via Amazon</Td>
                                    <Td><Link isExternal href='https://www.amazon.com/Fishing-Acejoz-Invisible-Hanging-Supports/dp/B08KZPHDPY/ref=sr_1_5?crid=EMB9YKCJ5M8O&dib=eyJ2IjoiMSJ9.mpxZsW398sqV3q5iJe6BOn4Gv_hCN38uS305MP6yhjR5v82n1JlckDrkCJY06MQxZTrQaP7J4siRu6aWICaRNgGdElf1CbhHk5Nnh_Tms49R8MYTOZ3sp1GLld0PjY-sFlYsaWeOgUUlPt63aciuNyFTP5ei72rdg2QkRKg2Xxp7bTUEIhrqttKJAbhOPxK-DPe3Akj0C7WFFpVn4LszkU3CdHI_TkouUrcCflbWwK36hwy3wFAkvMTHCYzloV6tS0g47sM5AdSZ_FdNX1nzHl7B7lZ1i5_emoIz9LYTmQI.3bJ7rqDCIAB2I_6-JlZwkjKp1CPHlpBL4i9mpDJXn80&dib_tag=se&keywords=fishing%2Bline&qid=1715820911&sprefix=fishing%2Blin%2Caps%2C200&sr=8-5&th=1'>Acejoz</Link></Td>
                                    <Td>1 Day Prime shipping</Td>
                                    <Td>$5.99</Td>
                                </Tr>
                                <Tr>
                                    <Td>Jewelry Findings</Td>
                                    <Td>560 pieces</Td>
                                    <Td>PandaHall via Amazon</Td>
                                    <Td><Link isExternal href='https://www.amazon.com/PH-PandaHall-Stainless-Findings-Earring/dp/B07V3WFKSW/ref=sr_1_5?crid=2699JJXHDE8R0&dib=eyJ2IjoiMSJ9.KwtqFIUD8CeTTWbHRoVWDIdKpxmlgc-Eb8n1FuE3nga3OQRSAVvvV5eixqsRtRFxlnEAAJnFLunBhPIwuKMD7Wx3LKsyC6WPeEmRggXPwgWn36vgXr2uTb7TnS8qt5GJs4q0wHoNMgDNdvc-VI92fS-BaoQF7ii5fgMZgkQ8GoaPmL2ToGLbtQ4cj6F9Cr3ueHWBOheQb8ELG6LWXJPYDeHiUxACpac01GANDj1yJ4herTArNQiinngPVoo9IEIFvtrP8y0h6nxhnkyZosGfEcG6ebXPCtd4Fsxqnmh3Jq4.LoKsLNHpG11YQ6RWYk-jU3HhhpZvl374-KnK0ktRGXo&dib_tag=se&keywords=jewelry+findings&qid=1715820996&sprefix=jewlery+finding%2Caps%2C258&sr=8-5'>PandaHall</Link></Td>
                                    <Td>1 Day Prime shipping</Td>
                                    <Td>$8.99</Td>
                                </Tr>
                                <Tr>
                                    <Td>Jewelry Pliers</Td>
                                    <Td>3 Types</Td>
                                    <Td>Shynek via Amazon</Td>
                                    <Td><Link isExternal href='https://www.amazon.com/Jewelry-Pliers-Shynek-Wrapping-Supplies/dp/B07ZGFK411/ref=sr_1_1?dib=eyJ2IjoiMSJ9.PwfiTnGv4krCwKYF4c-CMBpRoGZBDNpjuW7w5mYdYpzoEsACPUjpknLLK3j_GtbuMccher1FVj3aB8RUSTZLavaXNx94zLM8Qpoow6hOQPct_TPC4OK858J01-NxRWCTLeFAStf-RgzZRwJu6KZD8nQUiSSZWJveGtcf_hAXdVgTljvDWqO1RGCmdqyVByyK8LXG7BRRIKc8LUmXS6f7zD1IauPFKYU7n6nbiVV6WBUsFbBifq8yhvzUUX-rBYM3H-AkCwm-nbyK3rYz0aR9F42HRy-jHDOtC6QJw-gWFOQ.MOe4v3dOTiaP-RLZ4XyC4ZEdaTIN-H5_--fcCpWkaAI&dib_tag=se&keywords=jewelry%2Bpliers&qid=1715840641&sr=8-1&th=1'>Shynek</Link></Td>
                                    <Td>1 Day Prime shipping</Td>
                                    <Td>$7.99</Td>
                                </Tr>
                                <Tr>
                                    <Td>Balsa Wood</Td>
                                    <Td>18 pc (6in. x 6in. sheets)</Td>
                                    <Td>DIYDEC via Amazon</Td>
                                    <Td><Link isExternal href='https://www.amazon.com/DIYDEC-Basswood-Plywood-Unfinished-Architectural/dp/B0C6TNCRXP/ref=sr_1_7?crid=3I0BYTQV7PLBT&dib=eyJ2IjoiMSJ9.VODkzA8QlLdkXVonpNEVH8Cr1jRVCMErbCSYa9CJPhikzeeuCQFdUfL4HSsMLKBZ9japngxuErcKBaligWA2L-wrBJbaN0spn3cWrPgW2-gnQu6om9X9kjvqn7XoDG3UKq-iWpkVhl7v-vZjmKAR73F3ZEEH0LL5Sci2PJV5Fo9OfUnLXDRrNyBKMSDCXcUqkL_9-TZkyiVQ5I72xnGxBErmDUF6TmgnMFD5m81-AhuWebqqqWx5WKOkDMAMNyPSan0K8F9Iu0AfGiHKSKqJz7B80T5HvjCKCNXC7uD3ZQ4.6ZL_lwUbzVvx7fE97PAcZrVpwe3_HRVZX9F3yowep50&dib_tag=se&keywords=balsa%2Bwood&qid=1715840886&sprefix=Balsa%2Caps%2C180&sr=8-7&th=1'>DIYDEC</Link></Td>
                                    <Td>1 Day Prime shipping</Td>
                                    <Td>$7.99</Td>
                                </Tr>
                                <Tr>
                                    <Td>Glass Beads</Td>
                                    <Td>600 pcs</Td>
                                    <Td>NIUBIER via Amazon</Td>
                                    <Td><Link isExternal href='https://www.amazon.com/Crystal-Glass-Assorted-Rondelle-Container/dp/B0BRQ9J5BG/ref=sr_1_15?crid=2TZ4PPJ3KIKXJ&dib=eyJ2IjoiMSJ9.KtSFfaPAl4ko6qBlsB3f3moBBHZPhbvoIUj77aldvi_waBmDDlny8BXAsf68evkpD_FV-5JwF99C4lDJePbUQEoSaXRgp-tEVhPtIYF8FxUX-KiomlLBgD19d3jSwTZvzbbQx4ChFBPpN3x1prhaLFJuPgNNk7MFT5CnNQiDE3wB_acdOQjoCUnfLiuJHAaDTx6Z6wg-Kq-3Av6e07Gv6hCriM0wrGnr6SElt2WoKf0P3vle_R6ncpSB9HwjN-orEBY20f1wLOOxNcKx3uaA9It5ipOj4iXlgxRBPIuahK0.TEwKLWFHtNmxGOSrvHoAKcfF4IhVkgKn_8GMdVmeTyg&dib_tag=se&keywords=Glass%2Bbeads&qid=1715840810&sprefix=glass%2Bbead%2Caps%2C162&sr=8-15&th=1'>NIUBIER</Link></Td>
                                    <Td>1 Day Prime shipping</Td>
                                    <Td>$7.99</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <br />
                    <br />
                </Section>
            </Container>
        </Layout>
    )
}

export default Work