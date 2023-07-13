import { Box, Flex, HStack, Image } from "@chakra-ui/react";

function App() {
  const SideBarItemData = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <Flex direction={"column"} h={"100%"} alignItems={"center"}>
        <Box overflowX="scroll" whiteSpace="nowrap">
          <HStack spacing="25px">
            {SideBarItemData.map(() => (
              <Image
                borderRadius={"20px"}
                boxSize="75px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            ))}
          </HStack>
        </Box>
        <Box color={"white"} flexGrow={1}></Box>
      </Flex>
    </>
  );
}

export default App;
