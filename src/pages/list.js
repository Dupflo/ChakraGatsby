import React from "react"
import { Box, Image, Text, Flex, useColorMode, Divider } from "@chakra-ui/core"
import Layout from "../components/layout"
import icon from "../images/icon.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
const List = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: "gray.100", dark: "gray.700" }
  return (
    <Layout>
      <Flex
        maxW="1000px"
        w={["90vw", "90vw", "90vw", "70vw"]}
        direction={["column", "column", "row", "row"]}
        justify="center"
        bg={bgColor[colorMode]}
        boxShadow="md"
        rounded="lg"
        p="4"
      >
        <Flex align="center" mx="2">
          <Image src={icon} />
          <Box mx="4">
            <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
              Usability
            </Text>
            <Text as="h3" fontWeight="light" fontSize="lg">
              Sometimes the simples things are the hardest to find. So we
              created a new line for everday life.
            </Text>
          </Box>
        </Flex>
        <Divider orientation="vertical" borderColor="gray.300" my="2" />
        <Flex align="center" mx="2">
          <Image src={icon2} />
          <Box m="4">
            <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
              Parralax Effect
            </Text>
            <Text as="h3" fontWeight="light" fontSize="lg">
              Sometimes the simples things are the hardest to find. So we
              created a new line for everday life.
            </Text>
          </Box>
        </Flex>
        <Divider orientation="vertical" borderColor="gray.300" my="2" />
        <Flex align="center" mx="2">
          <Image src={icon3} />
          <Box mx="4">
            <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
              Unlimited Colors
            </Text>
            <Text as="h3" fontWeight="light" fontSize="lg">
              Sometimes the simples things are the hardest to find. So we
              created a new line for everday life.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default List
