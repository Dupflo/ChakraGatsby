import React from "react"
import {
  Flex,
  theme,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/core"
import NavBar from "../components/NavBar"
import Header from "../components/Header"

const breakpoints = ["360px", "768px", "1024px", "1440px"]
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const newTheme = {
  ...theme,
  breakpoints,
}

function Layout({ children, Component, pageProps }) {
  return (
    <ThemeProvider theme={newTheme}>
      <ColorModeProvider>
        <Flex direction="column" align="center" justify="center">
          <CSSReset />
          <Header />
          <Flex justify="center" align="center" w="100%" h="90vh">
            <ColorModeProvider>{children}</ColorModeProvider>
          </Flex>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default Layout
