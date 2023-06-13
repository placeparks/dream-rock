import { Flex, Box, Text, Image, Button, useBreakpointValue, VStack, SimpleGrid } from "@chakra-ui/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

export default function Scope() {
  const [cardIndex, setCardIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const fontSize = useBreakpointValue({ base: "30px", md: "26px", lg: "45px" });
  const Size = useBreakpointValue({ base: "12px", md: "20px", lg: "23px" });
const width= useBreakpointValue({base:"100%", md:"30%", lg:"40%"});
const gap= useBreakpointValue({base:"4rem", md:"20rem", lg:"20rem"});
const marginTop= useBreakpointValue({base:"-50px", md:"-130px", lg:"-130px"})
  const testimonials = [
    {
      name: "Content Creation & Development",
      imageCard: "./1.png",
      image: "./image 7.png",
      color: "blue.100",
    },
    {
name:"Animation Production",
      imageCard: "./2.png",
      color: "green.100",
    },
    {
      name: "Theatrical Shows & Live Experiences",
      imageCard: "./3.png",
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
        Our Scope of work & Services
        </Text>
        <Text align={"left"}>
        We pride ourselves on being a local company that can deliver full experiences from end to end. Our teams experience, passion, creativity and hard work is what our foundations are made of.
        </Text>
        <Button style={{backgroundColor:"#081354", color:"white"}}>Get a Quote</Button>
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
            h="80%"
            spacing={1}
            zIndex={1} // Add this line
          >
            <Box position="absolute" top={marginTop} zIndex={-1}> {/* Add this line */}
              <Image
                src={testimonial.image}
                objectFit="cover"
                style={{borderRadius:"20%"}}
                
              />
            </Box>
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
