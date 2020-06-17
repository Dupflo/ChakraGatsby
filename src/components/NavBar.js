import React from "react"
import {
  Flex,
  Stack,
  PseudoBox,
  useColorMode,
  IconButton,
  Box,
  Image,
} from "@chakra-ui/core"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = { light: "gray.300", dark: "gray.600" }
  const textColor = { light: "black", dark: "gray.100" }
  return (
    <Flex
      w="100vw"
      bg={bgColor[colorMode]}
      align="center"
      color={textColor[colorMode]}
      justify="center"
      align="center"
      fontSize={["md", "lg", "xl", "xl"]}
      h="7vh"
      boxShadow="md"
      p={2}
    >
      <Flex w={["100vw", "100vw", "80vw", "80vw"]} justify="space-around">
        <Box>
          <Image h="4vh" src={Logo} alt="Logo of Chakra-ui" />
        </Box>
        <Stack
          spacing={8}
          color={textColor[colorMode]}
          justify="center"
          align="center"
          isInline
        >
          <PseudoBox position="relative">
            <Link to="/">Home</Link>
          </PseudoBox>
          <PseudoBox position="relative">
            <Link to="/form">Form</Link>
          </PseudoBox>
          <PseudoBox position="relative">
            <Link to="/card">Card</Link>
          </PseudoBox>
          <PseudoBox position="relative">
            <Link to="/list">List</Link>
          </PseudoBox>
        </Stack>
        <Box>
          <IconButton
            rounded="full"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? "moon" : "sun"}
          >
            Change Color Mode
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Navbar
