import { Box, Center, Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}


const Layoout: React.FC<LayoutProps> = ({ children }) => {
    return (
            <Flex h="100vh">
                {/* サイドバー */}
                <Box bg="black" flexGrow={0} flexBasis={200}>
                    <Flex h="100%" direction="column" justify="space-around" alignItems={"center"} bg="green">
                        <Box color={'white'} fontSize={20}>Instagram</Box>
                        <Stack direction="column" bg={"red"} w="100%" spacing={40} flexGrow={0.6} alignItems={'center'} justify="start">
                            <Box color={'white'} fontSize={20}>ホーム</Box>
                            <Box color={'white'} fontSize={20}>検索</Box>
                            <Box color={'white'} fontSize={20}>発見</Box>
                            <Box color={'white'} fontSize={20}>リール動画</Box>
                            <Box color={'white'} fontSize={20}>メッセージ</Box>
                            <Box color={'white'} fontSize={20}>お知らせ</Box>
                            <Box color={'white'} fontSize={20}>作成</Box>
                            <Box color={'white'} fontSize={20}>プロフィール</Box>
                        </Stack>
                        <Box color={'white'}>その他</Box>
                    </Flex>
                </Box>
                {/* メインコンテンツ */}
                <Box bg={'blue'} flexGrow={1}>
                    {children}
                </Box>
            </Flex>
    );
}


export default Layoout;