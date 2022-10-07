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
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({href, path, children}) => {
    const active = path == href 
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return(
        <NextLink href={href}>
            <Link
                href={href}
                p={2}
                bg={active ? 'gold': undefined}
                color={active ? '#202023': inactiveColor}>
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
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter:'blur(10px'}}
        zIndex={1}
        {...props}>
            <Container 
            display="flex"
            p={2} 
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

                        <LinkItem href="/uxWorks" path={path}>
                            UX Work
                        </LinkItem>

                        <LinkItem href="/dataScienceWorks" path={path}>
                            Data Science Works
                        </LinkItem>

                        <LinkItem href='https://drive.google.com/file/d/1myPWLixIG3AvOCIZ2_YKOWHVKUVlX60g/view?usp=sharing' path={path}>
                            Resumé
                        </LinkItem>

                        <LinkItem href="/aboutMe" path={path}>
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
                                    <NextLink href="https://drive.google.com/file/d/1myPWLixIG3AvOCIZ2_YKOWHVKUVlX60g/view?usp=sharing" passHref>
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