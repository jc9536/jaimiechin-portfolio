import React, { useState } from 'react';
import { Box, Image, Flex, IconButton} from '@chakra-ui/react';
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";

const ImageCarousel = ({ images, height }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <Box position="relative" overflow="hidden" borderRadius="3xl" height={height}>
            <Flex
                width="100%"
                transform={`translateX(-${currentIndex * 100}%)`}
                transition="transform 0.5s"
                justifyContent="space-between"
            >
                {images.map((image, index) => (
                    <Image key={index} src={image} alt={`image-${index}`} flexShrink={0} width="100%" height={height} borderRadius="md" />
                ))}
            </Flex>
            <IconButton
                onClick={handlePrev}
                position="absolute"
                left={0}
                top="50%"
                transform="translateY(-50%)"
                aria-label="Previous"
                colorScheme='gray'
                icon={<TiArrowLeftThick fontSize="1.75rem" />}
                variant="ghost"
            />
            <IconButton
                onClick={handleNext}
                position="absolute"
                right={0}
                top="50%"
                transform="translateY(-50%)"
                aria-label="Next"
                colorScheme='gray'
                icon={<TiArrowRightThick fontSize="1.75rem" />}
                variant="ghost"
            />
            <Flex justify="center" position="absolute" bottom={4} left={0} right={0}>
                {images.map((_, index) => (
                    <Box
                        key={index}
                        w="8px"
                        h="8px"
                        borderRadius="full"
                        bg={index === currentIndex ? 'yellow.400' : 'gray.200'}
                        mx={1}
                    />
                ))}
            </Flex>
        </Box>
    );
};

export default ImageCarousel;


