import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Container, Link, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

export const WorkGridItemUX = ({ children, id, title, thumbnail, innerShadowColor, dropShadowColor }) => (
    <Box w="100%" align="center">
        <NextLink href={`/uxWorks/${id}`} passHref>
            <LinkBox
                cursor="pointer"
                className="grid-item-container"
                borderRadius="48px"
                overflow="visible" // Ensure shadows are not clipped
                position="relative" // Ensure the LinkBox can handle relative positioning for shadows
            >
                <Box
                    className="image-container"
                    borderRadius="48px"
                    overflow="hidden"
                    position="relative"
                    filter={`drop-shadow(6px 6px 9px ${dropShadowColor})`}
                    boxShadow={`inset 3px 3px 18px ${innerShadowColor}, inset -6px -6px 9px ${innerShadowColor}`}
                    backgroundImage={`url(${thumbnail.src})`} // Access the src property of the imported image
                    backgroundSize="cover"
                    backgroundPosition="center"
                    w="100%" // Make the width responsive
                    pb="56.25%" // Use padding-bottom to maintain aspect ratio (16:9 aspect ratio)
                    mb={4}
                />
                <Text as='b' mt={4} fontSize={32}>
                    <NextLink href={`/uxWorks/${id}`} passHref>
                        <Link>{title}</Link>
                    </NextLink>
                </Text>
                <Container maxW="md">
                    <Text fontSize={18}>{children}</Text>
                </Container>
            </LinkBox>
        </NextLink>
    </Box>
);

export const WorkGridItem533 = ({ children, id, title, thumbnail, innerShadowColor, dropShadowColor }) => (
    <Box w="100%" align="center">
        <NextLink href={`/digitalFabrication/${id}`} passHref>
            <LinkBox
                cursor="pointer"
                className="grid-item-container"
                borderRadius="48px"
                overflow="visible" // Ensure shadows are not clipped
                position="relative" // Ensure the LinkBox can handle relative positioning for shadows
            >
                <Box
                    className="image-container"
                    borderRadius="48px"
                    overflow="hidden"
                    position="relative"
                    filter={`drop-shadow(6px 6px 9px ${dropShadowColor})`}
                    boxShadow={`inset 3px 3px 18px ${innerShadowColor}, inset -6px -6px 9px ${innerShadowColor}`}
                    backgroundImage={`url(${thumbnail.src})`} // Access the src property of the imported image
                    backgroundSize="cover"
                    backgroundPosition="center"
                    w="100%" // Make the width responsive
                    pb="56.25%" // Use padding-bottom to maintain aspect ratio (16:9 aspect ratio)
                    mb={4}
                />
                <Text as='b' mt={4} fontSize={32}>
                    <NextLink href={`/digitalFabrication/${id}`} passHref>
                        <Link>{title}</Link>
                    </NextLink>
                </Text>
                <Container maxW="md">
                    <Text fontSize={18}>{children}</Text>
                </Container>
            </LinkBox>
        </NextLink>
    </Box>
);

export const WorkGridItemPaper = ({ children, id, title, thumbnail, innerShadowColor, dropShadowColor }) => (
    <Box w="100%" align="center">
        <NextLink href={`/PsychPapers/${id}`} passHref>
            <LinkBox
                cursor="pointer"
                className="grid-item-container"
                borderRadius="48px"
                overflow="visible" // Ensure shadows are not clipped
                position="relative" // Ensure the LinkBox can handle relative positioning for shadows
            >
                <Box
                    className="image-container"
                    borderRadius="48px"
                    overflow="hidden"
                    position="relative"
                    filter={`drop-shadow(6px 6px 9px ${dropShadowColor})`}
                    boxShadow={`inset 3px 3px 18px ${innerShadowColor}, inset -6px -6px 9px ${innerShadowColor}`}
                    backgroundImage={`url(${thumbnail.src})`} // Access the src property of the imported image
                    backgroundSize="cover"
                    backgroundPosition="center"
                    w="100%" // Make the width responsive
                    pb="56.25%" // Use padding-bottom to maintain aspect ratio (16:9 aspect ratio)
                    mb={4}
                />
                <Text as='b' mt={4} fontSize={32}>
                    <NextLink href={`/PsychPapers/${id}`} passHref>
                        <Link>{title}</Link>
                    </NextLink>
                </Text>
                <Container maxW="md">
                    <Text fontSize={18}>{children}</Text>
                </Container>
            </LinkBox>
        </NextLink>
    </Box>
);

export const WorkGridItemDS = ({ children, id, title, thumbnail, innerShadowColor, dropShadowColor }) => (
    <Box w="100%" align="center">
        <NextLink href={`/dataScienceWorks/${id}`} passHref>
            <LinkBox
                cursor="pointer"
                className="grid-item-container"
                borderRadius="48px"
                overflow="visible" // Ensure shadows are not clipped
                position="relative" // Ensure the LinkBox can handle relative positioning for shadows
            >
                <Box
                    className="image-container"
                    borderRadius="48px"
                    overflow="hidden"
                    position="relative"
                    filter={`drop-shadow(6px 6px 9px ${dropShadowColor})`}
                    boxShadow={`inset 3px 3px 18px ${innerShadowColor}, inset -6px -6px 9px ${innerShadowColor}`}
                    backgroundImage={`url(${thumbnail.src})`} // Access the src property of the imported image
                    backgroundSize="cover"
                    backgroundPosition="center"
                    w="100%" // Make the width responsive
                    pb="56.25%" // Use padding-bottom to maintain aspect ratio (16:9 aspect ratio)
                    mb={4}
                />
                <Text as='b' mt={4} fontSize={32}>
                    <NextLink href={`/dataScienceWorks/${id}`} passHref>
                        <Link>{title}</Link>
                    </NextLink>
                </Text>
                <Container maxW="md">
                    <Text fontSize={18}>{children}</Text>
                </Container>
            </LinkBox>
        </NextLink>
    </Box>
);