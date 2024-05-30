import NextLink from 'next/link'
import Image from 'next/image'
import {Box, Container, Link, Text, LinkBox, LinkOverlay} from '@chakra-ui/react'
import {Global} from '@emotion/react'

export const GridItem = ({children, href, title, thumbnail}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
                alt={title}
                className="grid0item-thumbnail"
                placeholder="blur"
                loading="lazy" />

            <LinkOverlay href={href} target="_blank">
                <Text mt={3}>{title}</Text>
            </LinkOverlay>   
            <Text fontSize={16}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem533= ({children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
        <NextLink href={`/digitalFabrication/${id}`}>
            <LinkBox cursor="pointer">
                <Image 
                    src={thumbnail} 
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"/>

                    <Text as='b' mt={4} fontSize={32}>

                        <NextLink href={`/digitalFabrication/${id}`}>
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

export const GridItemStyle =() => (
    <Global
        styles={`
            .grid-item-thumbnail {
                border-radius: 12px;
            }  
        `}
    />
)