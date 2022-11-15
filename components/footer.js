import { Box, Image, HStack, Center, useColorModeValue } from '@chakra-ui/react'
import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaEnvelope  } from 'react-icons/fa'

const Footer = () => {
    return (
        <Box align="center" opacity={0.85} fontSize="sm">
            <Center size="sm">
                <Stack justify="space-between" direction="row" align="center">
                    <ButtonGroup variant="ghost">
                        <IconButton as="a" target='_blank' href="https://github.com/jc9536?tab=repositories" aria-label="GitHub" icon={<FaGithub fontSize="1.75rem" />} />
                        <IconButton as="a" href="mailto: jc9536@nyu.edu" aria-label="Gmail" icon={<FaEnvelope fontSize="1.75rem" />} />
                    </ButtonGroup>
                </Stack>
            </Center>
                

            
            <br />
            &copy; {new Date().getFullYear()} Jaimie Chin. All Rights Reserved
        </Box>
    )
}

export default Footer