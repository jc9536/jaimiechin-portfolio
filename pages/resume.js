import { Heading, Box, FormControl, Input, FormLabel, Button, CircularProgress, InputGroup, InputRightElement, AspectRatio, useColorModeValue, Center, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Layout from '../components/layouts/article'
import { userLogin } from '../components/utils/mockApi';
import ErrorMessage from '../components/ErrorMessage';
import { DownloadIcon } from '@chakra-ui/icons';

const Resume = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility = () => setShowPassword(!showPassword);
    const background = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');
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
            <br />
            <br />

            {isLoggedIn ? (
                <Box p={8} borderWidth={1} borderRadius={15} bg={background} boxShadow="2xl">
                    <Box textAlign="center">
                        <Heading>Success!</Heading>
                        <br />
                        <AspectRatio minH="1125" ratio={16 / 9}>
                            <iframe style={{ border: "1px" }} width="100%" src="/JaimieChinResume.pdf" allowFullScreen></iframe>
                        </AspectRatio>
                        <Button
                            colorScheme="yellow"
                            variant="outline"
                            maxW="md"
                            mt={8}
                            onClick={() => setIsLoggedIn(false)}
                        >
                            <a href="/JaimieChinResume.pdf" download="Jaimie Chin - Resumé.pdf">Download the pdf <DownloadIcon mx="2px" /> </a>

                        </Button>
                    </Box>
                </Box>

            ) : (
                <>
                    <Center mt={150} mb={150}>
                        <Box p={8} borderWidth={1} borderRadius={15} bg={background} boxShadow="2xl" maxW="lg">
                            <Box textAlign="center">
                                <Heading>Resumé Access</Heading>
                            </Box>
                            <Box my={4} textAlign="left">
                                <form onSubmit={handleSubmit}>
                                    {error && <ErrorMessage message={error} />}
                                    <FormControl mt={6} isRequired>
                                        <FormLabel>Password</FormLabel>
                                        <InputGroup size="md">

                                            <Input type={showPassword ? 'text' : 'password'} placeholder="*******" pr="4.5rem" onChange={event => setPassword(event.currentTarget.value)} />
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
                            <Box textAlign="center">
                                <Text fontSize="xs" color="grey">*Please request resume access via email* </Text>
                            </Box>
                        </Box>
                    </Center>
                </>
            )}
        </Layout>
    )
}
export default Resume