import React from "react"
import { Text, Box, useColorMode, Link, IconButton } from "@chakra-ui/core"
import Layout from "../components/layout"
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"

const Signup = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <Box fontSize="2xl" textAlign="center">
        <SignupForm />
      </Box>
    </Layout>
  )
}

export default Signup
