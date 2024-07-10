import { useState, useEffect } from 'react';
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, AspectRatio, useColorMode, useColorModeValue, Tooltip, IconButton, HStack } from '@chakra-ui/react';
import { FaPlay, FaPause } from 'react-icons/fa';

const YearSlider = ({ years, displayedYears, actualFolder, predictedFolder }) => {
    const tickYears = years.filter(year => !displayedYears.includes(year));
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const { colorMode } = useColorMode();
    const [isPlaying, setIsPlaying] = useState(false);

    const pauseColor = useColorModeValue('#86C0E2', '#FFB9A3');
    const playColor = useColorModeValue('#FFB9A3', '#86C0E2');
    const sliderColor = isPlaying ? playColor : pauseColor;

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setSelectedYear(prevYear => {
                    const currentIndex = years.indexOf(prevYear);
                    return years[(currentIndex + 1) % years.length];
                });
            }, 1000);
        } else if (!isPlaying && interval) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handleSliderChange = (value) => {
        const closestYear = years.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
        setSelectedYear(closestYear);
    };

    const getMarkPosition = (year) => {
        const minYear = years[0];
        const maxYear = years[years.length - 1];
        return ((year - minYear) / (maxYear - minYear)) * 100;
    };

    return (
        <Box width="100%" padding={4}>
            <Box display="flex" justifyContent="center" mt={4}>
                <Box
                    borderRadius="2xl" // Increased border radius for more rounded corners
                    overflow="hidden"
                    border="2px"
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    boxShadow="lg"
                    width="100%" // Adjust width as needed
                    maxW="100%"
                    mb={8}
                >
                    <AspectRatio ratio={32 / 11} width="100%" maxH="400px" height="100%">
                        <Box display="flex" width="100%">
                            <AspectRatio ratio={16 / 11} width="50%">
                                <Box
                                    as="img"
                                    src={`${actualFolder}/${selectedYear}.jpg`}
                                    alt={`Actual Categorical ${selectedYear}`}
                                    objectFit="cover"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 'inherit'
                                    }}
                                />
                            </AspectRatio>
                            <AspectRatio ratio={16 / 11} width="50%">
                                <Box
                                    as="img"
                                    src={`${predictedFolder}/${selectedYear}.jpg`}
                                    alt={`Predicted Categorical ${selectedYear}`}
                                    objectFit="cover"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 'inherit'
                                    }}
                                />
                            </AspectRatio>
                        </Box>
                    </AspectRatio>
                </Box>
            </Box>
            <Slider
                defaultValue={years[0]}
                min={Math.min(...years)}
                max={Math.max(...years)}
                step={1}
                onChange={handleSliderChange}
                value={selectedYear}
                mt={4}
            >
                {displayedYears.map((year) => (
                    <SliderMark key={year} value={year} mt="2" ml="-4" fontSize="sm">
                        {year}
                    </SliderMark>
                ))}
                {tickYears.map((year) => (
                    <Box
                        key={year}
                        position="absolute"
                        left={`calc(${getMarkPosition(year)}% - 1px)`}
                        height="10px"
                        borderLeft="1.5px solid"
                        borderColor={useColorModeValue('gray.500', 'gray.200')}
                        top="50%"
                        transform="translateY(-10%)"
                    />
                ))}
                <SliderTrack>
                    <SliderFilledTrack bg={sliderColor} />
                </SliderTrack>
                <Tooltip hasArrow label={selectedYear} bg={sliderColor} color="gray.700" placement="top">
                    <SliderThumb bg={sliderColor} />
                </Tooltip>
            </Slider>
            <HStack mt={10} justifyContent="center">
                <IconButton
                    icon={isPlaying ? <FaPause /> : <FaPlay />}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    onClick={() => setIsPlaying(!isPlaying)}
                    bg={isPlaying ? playColor : pauseColor}
                    color="white"
                    _hover={{ bg: isPlaying ? playColor : pauseColor }}
                />
            </HStack>
        </Box>
    );
};

export default YearSlider;