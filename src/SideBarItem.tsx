import { Box, Center, Flex, Heading, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { GrSearch } from "react-icons/gr";

export interface SideBarItemProps {
  icon: IconType;
  text: string;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({ icon, text }) => {
  return (
    <Box color={"white"} fontSize={20} padding={8}>
      <Stack direction="row" spacing={10} alignItems={"center"}>
        <Icon as={icon} w={25} h={25} color={"white"} />
        <Box>{text}</Box>
      </Stack>
    </Box>
  );
};
