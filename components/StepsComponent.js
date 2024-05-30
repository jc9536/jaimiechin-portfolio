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
    Text
} from '@chakra-ui/react';

const StepsComponent = ({ steps, variant }) => {
    const [activeStep, setActiveStep] = useState(0); // Initialize activeStep to the first step
    const colorModeValue = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200'); // UseColorModeValue outside the return statement

    const handleNextStep = () => {
        setActiveStep(prevStep => Math.min(prevStep + 1, steps.length - 1));
    };

    const handlePrevStep = () => {
        setActiveStep(prevStep => Math.max(prevStep - 1, 0));
    };

    return (
        <>
            {variant === 'horizontal' ? (
                <HorizontalStepper steps={steps} activeStep={activeStep} colorModeValue={colorModeValue} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
            ) : (
                <VerticalStepper steps={steps} activeStep={activeStep} colorModeValue={colorModeValue} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
            )}
        </>
    );
};

function HorizontalStepper({ steps, activeStep, colorModeValue, handleNextStep, handlePrevStep }) {
    return (
        <>
            <Stepper size='lg' colorScheme='yellow' index={activeStep}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <Box colorScheme='yellow' flexShrink='0'>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>

            {activeStep !== null && steps[activeStep].additionalText && (
                <Box mt={4} bg={colorModeValue} p={4} borderRadius="md">
                    <Text textAlign="center">{steps[activeStep].additionalText}</Text>
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
        </>
    );
}

function VerticalStepper({ steps, activeStep, colorModeValue, handleNextStep, handlePrevStep }) {
    return (
        <Flex alignItems="flex-start">
            <Stepper orientation="vertical" size='lg' colorScheme='yellow' index={activeStep} mt={4} mr={8}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <Flex alignItems="center">
                            <Box colorScheme='yellow' flexShrink='0'>
                                <StepTitle>{step.title}</StepTitle>
                                <StepDescription>{step.description}</StepDescription>
                            </Box>

                            {activeStep === index && steps[activeStep].additionalText && (
                                <Box ml={4} bg={colorModeValue} p={4} borderRadius="md">
                                    <Text textAlign="center">{steps[activeStep].additionalText}</Text>
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

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </Flex>
    );
}

export default StepsComponent;
