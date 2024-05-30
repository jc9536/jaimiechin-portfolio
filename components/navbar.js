import Logo from './logo'
import NextLink from 'next/link'
import {
    Container, 
    Box, 
    Link, 
    Stack,
    Heading,
    Flex,
    Menu, 
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'

const LinkItem = ({href, path, isExternal, children}) => {
    const active = path == href 
    const inactiveColor = useColorModeValue('#333132', 'whiteAlpha.900')
    return(
        <NextLink href={href}>
            <Link
                href={href}
                p={2}
                bg={active ? 'gold': undefined}
                color={active ? '#333132' : inactiveColor}
                borderRadius={active ? 'lg' : 'none'}
                isExternal={isExternal}>
                    {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="full"
        p="0.5%"
            bg={useColorModeValue('#ffffff40', 'whiteAlpha.200')}
        style={{backdropFilter:'blur(10px'}}
        zIndex={1}
        {...props}>
            <Container 
            display="flex"
            p={0.5} 
            maxW="container.xl"
            wrap="wrap"
            align="center"
            justify="space-between">

                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'normal'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base:'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0}}>

                        <LinkItem href="/uxWorks" path={path} isExternal={false}>
                            UX Work
                        </LinkItem>

                        <LinkItem href="/dataScienceWorks" path={path} isExternal={false}>
                            Data Science Works
                        </LinkItem>
                    
                        <LinkItem href="/PsychPapers" path={path} isExternal={false}>
                            Psychology Research Papers
                        </LinkItem>
                    
                        <LinkItem href="/digitalFabrication" path={path} isExternal={false}>
                            HCDE 533
                        </LinkItem>

                        <LinkItem href='/resume' path={path} isExternal={false}>
                            Resumé
                        </LinkItem>

                        <LinkItem href="/aboutMe" path={path} isExternal={false}>
                            About Me
                        </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                        <Box ml={2} display ={{base: 'inline-block', md:'none'}}>
                            <Menu>
                                <MenuButton 
                                    as={IconButton}
                                    icon={<HamburgerIcon />} 
                                    variant="outline" 
                                    aria-label="Options" />
                                
                                <MenuList>
                                    <NextLink href="/" passHref>
                                        <MenuItem as={Link}>Home</MenuItem>
                                    </NextLink>
                                    <NextLink href="/uxWorks" passHref>
                                        <MenuItem as={Link}>UX Works</MenuItem>
                                    </NextLink>
                                    <NextLink href="/dataScienceWorks" passHref>
                                        <MenuItem as={Link}>Data Science Works</MenuItem>
                                    </NextLink>
                                    <NextLink href="/PsychPapers" passHref>
                                        <MenuItem as={Link}>Psychology Research Papers</MenuItem>
                                    </NextLink>
                                    <NextLink href="/digitalFabrication" passHref>
                                        <MenuItem as={Link}>HCDE 533</MenuItem>
                                    </NextLink>
                                    <NextLink href="/resume" passHref>
                                        <MenuItem as={Link}>Resumé</MenuItem>
                                    </NextLink>
                                    <NextLink href="/aboutMe" passHref>
                                        <MenuItem as={Link}>About Me</MenuItem>
                                    </NextLink>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
            </Container>
        </Box>
    )
}

export default Navbar