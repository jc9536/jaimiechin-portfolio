import { Box, Center, ButtonGroup, IconButton, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaEnvelope, FaLinkedin  } from 'react-icons/fa'

const Footer = () => {
    return (
        <Box align="center" opacity={0.85} fontSize="sm">
            <Center size="sm">
                <Stack justify="space-between" direction="row" align="center">
                    <ButtonGroup variant="ghost">
                        <IconButton as="a" target='_blank' href="https://github.com/jc9536?tab=repositories" aria-label="GitHub" colorScheme='yellow' icon={<FaGithub fontSize="1.75rem" />} />
                        <IconButton as="a" href="mailto: chinjaimie@gmail.com" aria-label="Gmail" colorScheme='yellow' icon={<FaEnvelope fontSize="1.75rem" />} />
                        <IconButton as="a" target='_blank' href="https://www.linkedin.com/in/jaimie-chin-a38511236/" aria-label="Linkedin" colorScheme='yellow' icon={<FaLinkedin fontSize="1.75rem" />} />
                    </ButtonGroup>
                </Stack>
            </Center>
            <br />
            &copy; {new Date().getFullYear()} Jaimie Chin. All Rights Reserved
        </Box>
    )
}

export default Footer