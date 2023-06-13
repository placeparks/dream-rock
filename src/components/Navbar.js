import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  
  
  const linksData = [
    { name: "Show & Events", href: "/SecondPage" },
    { name: "About", href: "/ThirdPage" },
    ];
  
  export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const NavLink = ({ children, href }) => (
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={href}
      >
        {children}
      </Link>
    );
  
    const HomeButton = ({ children, href }) => {
      const path = window.location.pathname;
      return path === "/SecondPage" || path === "/ForthPage" || path === "/ThirdPage"  ? (
        <NavLink children={children} href={href} />
      ) : null;
    };
  
    return (
      <>
        <Box bg={useColorModeValue("white", "gray.800")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                <img src='./logo.png' alt=""/>
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {linksData.map(link => (
                  <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
                ))}
                <Menu>
                  <MenuButton rounded={"md"} cursor={"pointer"}>
                    Services & Products&#9660;
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} href="/forthPage">UI/UX Designs</MenuItem>
                   
                  </MenuList>
                </Menu>             
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
              <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
  <Button
  as={'a'}
  display={'inline-flex'} // This line makes the button visible on all screen sizes
  fontSize={'sm'}
  fontWeight={600}
  color={'white'}
  bg={'blue.400'}
  href={'#'}
  _hover={{
    bg: 'blue.300',
  }}>
  Create Your Event
</Button>


        </Stack>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {linksData.map(link => (
                  <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
                ))}
                <Menu>
                 <MenuButton rounded={"md"} cursor={"pointer"}>
                    Services&#9660;
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} href="/fifthPage">UI/UX Designs</MenuItem>
                    </MenuList>
                    <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.400'}
            href={'#'}
            _hover={{
              bg: 'blue.300',
            }}>
           Create Your Event
          </Button>
        </Stack>
                </Menu>
                
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }
  