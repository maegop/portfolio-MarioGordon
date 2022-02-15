import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Img,
  useColorModeValue,
} from "@chakra-ui/react";

export default function CallToActionHero() {
  return (
    <Container maxW={"8xl"} mb={{ base: 10, md: 14 }}>
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
          <Text
            fontSize={"lg"}
            color={useColorModeValue("gray.500", "gray.300")}
          >
            Learning continuously about web development, serverless, and React /
            Next.js to build a faster web.
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
              //bg={"teal.400"}
              _hover={{ bg: "teal.500" }}
              bgGradient="linear(to-l, #7928CA,teal.400)"
            >
              Know me
            </Button>
            {/* <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              How It Works
            </Button> */}
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
          {/* <Box
            position={"relative"}
            height={"320px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
          ></Box> */}
          <Img
            alt={"Hero Image Portfolio Mario Gordon"}
            fit={"cover"}
            align={"right"}
            width={{ base: 250, md: 300 }}
            height={{ base: 260, md: 320 }}
            src={
              "https://affectionate-engelbart-c0321f.netlify.app/images/mem_happy.png"
            }
          />
        </Flex>
      </Stack>
    </Container>
  );
}
