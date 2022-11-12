import {Heading, Box, FormControl, Input, FormLabel, Button, CircularProgress, Text, InputGroup, InputRightElement, Container, Link} from '@chakra-ui/react'
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
                <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                    {isLoggedIn ? (
                        <Box textAlign="center" minW={425}>
                        <Heading>Success!</Heading>
                        <Button
                        colorScheme="yellow"
                        variant="outline"
                        width="full"
                        mt={8}
                        onClick={() => setIsLoggedIn(false)}
                        >
                            <Link href="https://www.figma.com/proto/x4BxTXMZrYrLVqhFnGuEgG/Resum%C3%A9---Jaimie-Chin?page-id=0%3A1&node-id=1%3A2&viewport=668%2C468%2C1&scaling=min-zoom" isExternal>
                            Resumé Link <ExternalLinkIcon mx="2px" />
                            </Link>
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