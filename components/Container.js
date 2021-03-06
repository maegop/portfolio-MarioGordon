import { Flex, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Container({ children }) {
  return (
    <>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="5xl"
        px={3}
      >
        <Navbar />
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="5xl"
          w="100%"
        >
          {children} {/*  Content for each page */}
        </Flex>
      </Stack>
    </>
  );
}
