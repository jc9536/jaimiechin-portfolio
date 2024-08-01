import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Container, Link, Text, LinkBox, LinkOverlay, useColorMode } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer" className="grid-item-container">
            <Image src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy" />

            <LinkOverlay href={href} target="_blank">
                <Text mt={3}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={16}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItemUX = ({ children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
        <NextLink href={`/uxWorks/${id}`}>
            <LinkBox cursor="pointer" className="grid-item-container">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur" />

                <Text as='b' mt={4} fontSize={32}>
                    <NextLink href={`/uxWorks/${id}`}>
                        <Link>{title}</Link>
                    </NextLink>
                </Text>

                <Container maxW="md">
                    <Text fontSize={18}>{children}</Text>
                </Container>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => {
    const { colorMode } = useColorMode()
    const dropShadowColor = colorMode === 'light' ? '#CCBCA7' : '#190933'

    return (
        <Global
            styles={`
                .grid-item-thumbnail {
                    border-radius: 48px;
                }
                .grid-item-container {
                    border-radius: 48px;
                    filter: drop-shadow(0 4px 8px ${dropShadowColor});
                }
            `}
        />
    )
}
