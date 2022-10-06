import NextLink from 'next/link'
import {Heading, Box, Image, Link, Badge} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/uxWorks">
            <Link> UX Case Studies</Link>
        </NextLink>

        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="max" align="center" src={src} alt={alt}/>
)

export const Meta = ({ children }) => (
    <Badge colorScheme="yellow" mr={2}>
        {children}
    </Badge>
)
