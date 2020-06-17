import React from "react"
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  useColorMode,
  Image,
  IconButton,
} from "@chakra-ui/core"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
)

const Header = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = { light: "gray.300", dark: "gray.600" }
  const textColor = { light: "black", dark: "gray.100" }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      w="full"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Box>
          <Image h="4vh" src={Logo} alt="Logo of Chakra-ui" />
        </Box>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"} ml="5px">
          Chakra UI
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
      >
        <MenuItems>
          <Link to="/">Home</Link>
        </MenuItems>
        <MenuItems>
          <Link to="/card">Card</Link>
        </MenuItems>
        <MenuItems>
          <Link to="/list">List</Link>
        </MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          <Link to="/form">Sign In / Up</Link>
        </Button>
        <IconButton
          rounded="full"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? "moon" : "sun"}
          ml="10px"
        >
          Change Color Mode
        </IconButton>
      </Box>
    </Flex>
  )
}

export default Header
