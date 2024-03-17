"use client";
import NavigationButton from "@/app/navigation-button";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import Sidebar from "@/app/pcview/sidebar";
import Topbar from "@/app/pcview/topbar";
import * as React from "react";
import { useRouter } from "next/navigation";

export default function Setting() {
  const router = useRouter();
  const placer = [{ name: "软件设置", link: "/pcview/setting" }];
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
                  软件设置
                </Typography>
                <Typography className={"h-[40px] flex-none"} variant={"body1"}>
                  管理平台的各种设置。
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
              <Stack className={"w-full h-full flex"} spacing={2}>
                <Link
                  color="primary"
                  className={"cursor-pointer"}
                  onClick={() => router.push("/pcview/setting/preference")}
                >
                  偏好设置
                </Link>
                <Link
                  color="primary"
                  className={"cursor-pointer"}
                  onClick={() => router.push("/pcview/setting/account")}
                >
                  管理账户
                </Link>
                <Link
                  color="primary"
                  className={"cursor-pointer"}
                  onClick={() => router.push("/pcview/setting/plugin")}
                >
                  功能商城
                </Link>
                <Link
                  color="primary"
                  className={"cursor-pointer"}
                  onClick={() => router.push("/pcview/setting/about")}
                >
                  技术支持与帮助
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </NavigationButton>
  );
}
