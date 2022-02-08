import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

import happy from "../public/mem_happy.png";

export default function CallToActionHero() {
  return (
    <Container maxW={"8xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 14 }}
        direction={{ base: "column", md: "row" }}
      >
        {/* Left side of hero page */}
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600}>
            <Text
              as={"span"}
              position={"relative"}
              bgGradient="linear(to-l, #7928CA,teal.400)"
              bgClip="text"
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              Hi, I am Mario Gordon
            </Text>
            <br />
            <Text
              as={"span"}
              color={"teal.400"}
              fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
              mt={5}
            >
              Software Developer
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"teal"}
              bg={"teal.400"}
              _hover={{ bg: "teal.500" }}
            >
              Know me
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              How It Works
            </Button>
          </Stack>
        </Stack>

        {/* Right side of hero page */}
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
          >
            <Image
              alt={"Hero Image Mario Gordon Portfolio"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
