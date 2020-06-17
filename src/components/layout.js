import React from "react"
import {
  Flex,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/core"
import Navbar from "../components/NavBar"

function Layout({ children, Component, pageProps }) {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <Flex direction="column" align="center" justify="center">
          <CSSReset />
          <NavBar />
          <Flex justify="center" align="center" w="100%" h="93vh">
            <ColorModeProvider>{children}</ColorModeProvider>
          </Flex>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default Layout
