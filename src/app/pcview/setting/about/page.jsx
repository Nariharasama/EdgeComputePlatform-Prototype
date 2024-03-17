"use client";
import NavigationButton from "@/app/navigation-button";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import Sidebar from "@/app/pcview/sidebar";
import Topbar from "@/app/pcview/topbar";
import * as React from "react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  const placer = [
    { name: "软件设置", link: "/pcview/setting" },
    { name: "帮助与支持", link: "/pcview/setting/about" },
  ];
  return (
    <NavigationButton target={"edgeview"}>
      <Box className={"h-full w-full flex"}>
        <Sidebar page={4}></Sidebar>
        <Box className={"h-full w-full flex flex-col"}>
          <Topbar place={placer} />
          <Stack className={"w-full flex  grow flex-col"} direction={"column"}>
            <Box className={"h-[32px] w-full flex-none"}></Box>
            <Stack className={"h-[88px] flex-none w-full"} direction={"row"}>
              <Box className={"w-[16px] h-full"}></Box>
              <Box>
                <Typography
                  className={"h-[48px] w-full text-left flex-none"}
                  variant={"h4"}
                >
                  支持与帮助
                </Typography>
                <Typography className={"h-[40px] flex-none"} variant={"body1"}>
                  获得相关帮助以及版本信息
                </Typography>
              </Box>
            </Stack>
            <Box className={"w-full h-[60px] flex-none"}></Box>
            <Stack
              className={"w-full grow flex"}
              direction={"row"}
              alignItems={"start"}
            >
              <Box className={"w-[16px] h-full flex"}></Box>
              <Stack className={"w-full h-full flex"} spacing={4}>
                <Stack direction={"row"} spacing={3} alignItems={"center"}>
                  <Typography>当前版本ver0.1.0-beta</Typography>
                  <Button variant={"outlined"}>检查版本更新</Button>
                </Stack>
                <Link
                  color="primary"
                  className={"cursor-pointer"}
                  onClick={() => alert("该操作将下载帮助文件")}
                >
                  使用说明（文档）
                </Link>
                <Link
                  color="primary"
                  className={"cursor-pointer"}
                  onClick={() => alert("该操作将打开支持链接")}
                >
                  技术支持（外部链接）
                </Link>
                <Link
                  color="primary"
                  className={"cursor-pointer"}
                  onClick={() =>
                    router.push(
                      "https://github.com/Nariharasama/EdgeComputePlatform-Prototype/issues",
                    )
                  }
                >
                  问题报告（Github）
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </NavigationButton>
  );
}
