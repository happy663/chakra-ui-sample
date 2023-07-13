import { Box, Flex, HStack, Image } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex direction={"column"} h={"100%"} alignItems={"center"}>
        <Box overflowX="scroll" whiteSpace="nowrap">
          <HStack spacing="25px">
            <Image
              borderRadius={"20px"}
              boxSize="75px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Image
              borderRadius={"20px"}
              boxSize="75px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Image
              borderRadius={"20px"}
              boxSize="75px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Image
              borderRadius={"20px"}
              boxSize="75px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Image
              borderRadius={"20px"}
              boxSize="75px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Image
              borderRadius={"20px"}
              boxSize="75px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </HStack>
        </Box>
        <Box color={"white"} flexGrow={1}></Box>
      </Flex>
    </>
  );
}

export default App;
