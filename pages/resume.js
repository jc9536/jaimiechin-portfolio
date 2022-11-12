import {Heading, Box, FormControl, Input, FormLabel, Button, CircularProgress, InputGroup, InputRightElement, Container, Link, useColorModeValue} from '@chakra-ui/react'
import React, {useState} from 'react'
import Layout from '../components/layouts/article'
import { userLogin } from '../components/utils/mockApi';
import ErrorMessage from '../components/ErrorMessage';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Resume = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility = () => setShowPassword(!showPassword);
    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true);
        try {
        await userLogin({ password });
        setIsLoggedIn(true);
        setIsLoading(false);
        } catch (error) {
        setError('Invalid password');
        setIsLoading(false);
        setPassword('');
        }
    }

    return (
        <Layout>
            <br/>
            <br/>
            <Container centerContent mt={150} mb={500}>
                <Box p={8} borderWidth={1} borderRadius={15} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} boxShadow="2xl">
                    {isLoggedIn ? (
                        <Box textAlign="center">
                        <Heading>Success!</Heading>
                        <Button
                        colorScheme="yellow"
                        variant="outline"
                        width="full"
                        mt={8}
                        onClick={() => setIsLoggedIn(false)}
                        >
                            <a href="/JaimieChinResume.pdf" download="Jaimie Chin - Resumé.pdf">Download the pdf <ExternalLinkIcon mx="2px" /> </a>
                            
                        </Button>
                    </Box>

                    ) : (
                        <>
                            <Box textAlign="center">
                                <Heading>Resumé Access</Heading>
                            </Box>
                                <Box my={4} textAlign="left">
                                    <form onSubmit={handleSubmit}>
                                        {error && <ErrorMessage message={error} />}
                                        <FormControl mt={6} isRequired>
                                            <FormLabel>Password</FormLabel>
                                            <InputGroup>

                                                <Input type={showPassword ? 'text' : 'password'} placeholder="*******" size="lg" onChange={event => setPassword(event.currentTarget.value)}/>
                                                <InputRightElement width='4.5rem'>
                                                    <Button h='1.75rem' size='sm' colorScheme="yellow" onClick={handlePasswordVisibility}>
                                                        {showPassword ? 'Hide' : 'Show'}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            
                                        </FormControl>
                                        <Button type="submit" colorScheme="yellow" variant="outline" width="full" mt={4}>
                                            {isLoading ? (
                                                <CircularProgress isIndeterminate size="24px" color="teal" />
                                            ) : (
                                                'Sign In'
                                            )}
                                        </Button>
                                    </form>
                                </Box>
                        </>
                    )}
                    
                </Box>
            </Container>

            <br/>
            <br/>

        </Layout>
    )
}

export default Resume