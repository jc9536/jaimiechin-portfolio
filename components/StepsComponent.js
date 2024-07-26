import React, { useState } from 'react';
import {
    Box,
    Button,
    Flex,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useColorModeValue,
    Text,
    Container,
    useBreakpointValue
} from '@chakra-ui/react';

const StepsComponent = ({ steps, variant }) => {
    const [activeStep, setActiveStep] = useState(0); // Initialize activeStep to the first step
    const colorModeValue = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200'); // UseColorModeValue outside the return statement
    const isHorizontal = useBreakpointValue({ base: false, md: true });

    const handleNextStep = () => {
        setActiveStep(prevStep => Math.min(prevStep + 1, steps.length - 1));
    };

    const handlePrevStep = () => {
        setActiveStep(prevStep => Math.max(prevStep - 1, 0));
    };

    return (
        <>
            {isHorizontal ? (
                <HorizontalStepper steps={steps} activeStep={activeStep} colorModeValue={colorModeValue} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
            ) : (
                <VerticalStepper steps={steps} activeStep={activeStep} colorModeValue={colorModeValue} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
            )}
        </>
    );
};

function HorizontalStepper({ steps, activeStep, colorModeValue, handleNextStep, handlePrevStep }) {
    const fontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
    const padding = useBreakpointValue({ base: 1, md: 2 });
    const separatorColorActive = useColorModeValue('yellow.500', 'yellow.200');
    const separatorColorNotActive = useColorModeValue('gray.200', '#464445');

    return (
        <>
            <Container maxW="max">
                <Stepper size='lg' colorScheme='yellow' index={activeStep} display="flex" flexWrap="wrap" justifyContent="center">
                    {steps.map((step, index) => (
                        <Step key={index} flex="1" textAlign="center" mx={4} position="relative">
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                />
                            </StepIndicator>

                            <Box colorScheme='yellow' flexShrink='0' px={padding} maxW="200px">
                                <StepTitle fontSize={fontSize} isTruncated>{step.title}</StepTitle>
                                <StepDescription fontSize={fontSize} isTruncated>{step.description}</StepDescription>
                            </Box>

                            {index < steps.length - 1 && (
                                <StepSeparator
                                    orientation="horizontal"
                                    _after={{
                                        content: '""',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '100%',
                                        transform: 'translateY(-50%)',
                                        width: '20px',
                                        height: '2px',
                                        backgroundColor: index < activeStep ? separatorColorActive : separatorColorNotActive,
                                    }}
                                />
                            )}
                        </Step>
                    ))}
                </Stepper>

                {activeStep !== null && steps[activeStep].additionalText && (
                    <Box mt={4} bg={colorModeValue} p={4} borderRadius="md">
                        <Text textAlign="center" fontSize={fontSize}>{steps[activeStep].additionalText}</Text>
                    </Box>
                )}

                <Box mt={4} colorScheme='yellow' textAlign="center">
                    {activeStep > 0 && (
                        <Button mr={4} mt={4} colorScheme='yellow' onClick={handlePrevStep}>
                            Previous Step
                        </Button>
                    )}
                    {activeStep < steps.length - 1 && (
                        <Button colorScheme='yellow' mt={4} onClick={handleNextStep}>
                            Next Step
                        </Button>
                    )}
                </Box>

            </Container>

        </>
    );
}

function VerticalStepper({ steps, activeStep, colorModeValue, handleNextStep, handlePrevStep }) {
    const fontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
    const padding = useBreakpointValue({ base: 2, md: 4 });
    const separatorColorActive = useColorModeValue('yellow.500', 'yellow.200');
    const separatorColorNotActive = useColorModeValue('gray.200', '#464445');

    return (
        <Flex alignItems="flex-start">
            <Stepper orientation="vertical" size='lg' colorScheme='yellow' index={activeStep} mt={4} mr={8}>
                {steps.map((step, index) => (
                    <Step key={index} position="relative">
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <Flex alignItems="center" px={padding}>
                            <Box colorScheme='yellow' flexShrink='0'>
                                <StepTitle fontSize={fontSize} isTruncated>{step.title}</StepTitle>
                                <StepDescription fontSize={fontSize} isTruncated>{step.description}</StepDescription>
                            </Box>

                            {activeStep === index && steps[activeStep].additionalText && (
                                <Box ml={4} bg={colorModeValue} p={4} borderRadius="md">
                                    <Text textAlign="center" fontSize={fontSize}>{steps[activeStep].additionalText}</Text>
                                </Box>
                            )}

                            {activeStep === index && (
                                <Box ml={4}>
                                    <Flex flexDirection="column" alignItems="center">
                                        <Box mt={4} colorScheme='yellow' textAlign="center">
                                            {activeStep > 0 && (
                                                <Button mr={2} mb={2} colorScheme='yellow' onClick={handlePrevStep}>
                                                    Previous Step
                                                </Button>
                                            )}
                                            {activeStep < steps.length - 1 && (
                                                <Button colorScheme='yellow' mb={2} onClick={handleNextStep}>
                                                    Next Step
                                                </Button>
                                            )}
                                        </Box>
                                    </Flex>
                                </Box>
                            )}
                        </Flex>

                        {index < steps.length - 1 && (
                            <StepSeparator
                                orientation="vertical"
                                _after={{
                                    content: '""',
                                    position: 'absolute',
                                    left: '50%',
                                    top: '100%',
                                    transform: 'translateX(-50%)',
                                    height: '16px',
                                    width: '2px',
                                    backgroundColor: index < activeStep ? separatorColorActive : separatorColorNotActive,
                                }}
                            />
                        )}
                    </Step>
                ))}
            </Stepper>
        </Flex>
    );
}

export default StepsComponent;