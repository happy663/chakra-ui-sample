import { Box, Center, Flex, Heading, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { GrSearch, GrHome, GrSend } from "react-icons/gr";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { SideBarItem, SideBarItemProps } from "./SideBarItem";
interface LayoutProps {
  children: React.ReactNode;
}

const SideBarItemData: SideBarItemProps[] = [
  {
    icon: GrHome,
    text: "ホーム",
  },
  {
    icon: GrSearch,
    text: "検索",
  },
  {
    icon: RiCompassDiscoverLine,
    text: "発見",
  },
  {
    icon: BiMoviePlay,
    text: "リール動画",
  },
  {
    icon: GrSend,
    text: "メッセージ",
  },
  {
    icon: AiOutlineHeart,
    text: "お知らせ",
  },
  {
    icon: AiOutlinePlusSquare,
    text: "作成",
  },
];

const Layoout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex h="100vh">
      {/* サイドバー */}
      <Box
        bg="black"
        flexGrow={0.1}
        flexBasis={200}
        border={"solid"}
        borderColor={"white"}
        borderWidth={1}
      >
        <Flex
          h="100%"
          direction="column"
          justify="space-around"
          alignItems={"center"}
        >
          {" "}
          <Box color={"white"} fontSize={20}>
            Instagram
          </Box>
          <Stack
            direction="column"
            // bg={"red"}
            w="100%"
            spacing={35}
            flexGrow={0.6}
            alignItems={"flex-start"}
            justify="start"
          >
            {SideBarItemData.map((item) => (
              <SideBarItem icon={item.icon} text={item.text} />
            ))}
            <SideBarItem icon={GrSearch} text={"プロフィール"} />
          </Stack>
          <Box color={"white"}>その他</Box>
        </Flex>
      </Box>
      {/* メインコンテンツ */}
      <Box
        flexGrow={1}
        bg={"black"}
        border={"solid"}
        borderColor={"white"}
        borderWidth={0.5}
      >
        {children}
      </Box>
      <Box bg="black" flexGrow={0.5}></Box>
    </Flex>
  );
};

export default Layoout;
