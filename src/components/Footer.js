import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue, useBreakpointValue, Icon, IconButton, Input
  } from "@chakra-ui/react";
  import { HiLocationMarker } from "react-icons/hi";
  import {BiMailSend} from 'react-icons/bi'
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    )
  }
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
  }
  
  export default function LargeWithAppLinksAndSocial() {
    const iconSize = useBreakpointValue({ base: "40px", md: "22px" });
    return (
      <div>
      <Box
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} alignItems="stretch">
            <Stack align={"flex-start"} style={{textAlign:"left"}}>
              <ListHeader>Productions & IP</ListHeader>
              <Link href={"#"}>Azooz & Jude</Link>
              <Link href={"#"}>Lulwah’s</Link>
  
            </Stack>
  
            <Stack align={"flex-start"} style={{textAlign:"left"}}>
              <ListHeader>Quick Links</ListHeader>
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>Shows & Events</Link>
              <Link href={"#"}>Services & Products</Link>
              <Link href={"#"}>Contact Us</Link>

            </Stack>
  
            <Stack align={"flex-start"} style={{textAlign:"left"}}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Contact US</Link>
              <Link href={"#"}>Our Works</Link>
              <Link href={"#"}>Career</Link>
              <Link href={"#"}>Privacy Policy</Link>

            </Stack>
            <Stack align={'flex-start'}>
            <ListHeader>Subscribe</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
            <Text style={{fontSize:"12px", textAlign:"left"}}>Gravida sed justo, justo, id est et. Amet tristique convallis sed porttitor nullam eu ut. Duis et odio aliquam bibendum. Metus et lectus id viverra fringilla magna morbi. </Text>

          </Stack>
          
       
          </SimpleGrid>
        </Container>
      </Box>
      <hr/>
      </div>
    )
  }