import { Flex, Box, Text, Image, Button, useBreakpointValue, VStack, SimpleGrid } from "@chakra-ui/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { getByPlaceholderText } from "@testing-library/react";

export default function Events() {
  const [cardIndex, setCardIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const fontSize = useBreakpointValue({ base: "30px", md: "26px", lg: "45px" });
  const Size = useBreakpointValue({ base: "12px", md: "20px", lg: "23px" });
const width= useBreakpointValue({base:"100%", md:"30%", lg:"30%"});
const gap= useBreakpointValue({base:"4rem", md:"20rem", lg:"20rem"});
const height= useBreakpointValue({base:"60%", md:"80%", lg:"80%"});

  const testimonials = [
    {
      name: "Birthday",
      imageCard: "./cake.png",
      image: "./boy.png",
      color: "blue.100",
    },
    {
name:<>Wedding<br />Anniversary</>,
      imageCard: "./calender.png",
      image: "./girl.png",
      color: "green.100",
    },
    {
      name: "Weddings",
      imageCard: "./ring.png",
      image: "./cat.png",
      color: "yellow.300",
    },
  ];

  const updateCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % testimonials.length);
  };

  const onNextClick = () => {
    clearInterval(intervalId);
    if (cardIndex < testimonials.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      setCardIndex(0);
    }
    const id = setInterval(updateCard, 3000);
    setIntervalId(id);
  };

  const onPrevClick = () => {
    clearInterval(intervalId);
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setCardIndex(testimonials.length - 1);
    }
    const id = setInterval(updateCard, 3000);
    setIntervalId(id);
  };

  return (
    <Flex pt="5rem" pb="3rem" gap={gap}  direction={flexDirection} alignItems="center">
      <VStack align="start" w={width}>
        <Text fontWeight={700} color="#081354" fontSize={fontSize} align={"left"}>
          Create Your Events by Categories
        </Text>
        <Text align={"left"}>
          Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent
          elementum commodo.
        </Text>
      </VStack>
      <SimpleGrid columns={3} spacing={10} >
        {testimonials.map((testimonial, index) => (
          <VStack
            key={index}
            align="center"
            p={4}
            borderRadius="xl"
            w="110%"
            bg={testimonial.color}
            position="relative"
            h={height}
            spacing={1}
          >
            <Image
              src={testimonial.image}
              boxSize="100px"
              borderRadius="full"
              position="absolute"
              top="-50px"
              objectFit="cover"
            />
            <Box pt="50px">
              <Image boxSize="40%" w="70" src={testimonial.imageCard}/>
              <Text fontWeight={700} fontSize={Size}>
                {testimonial.name}
              </Text>
            </Box>
          </VStack>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
