"use client";
import NavigationButton from "@/app/navigation-button";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Dashboard() {
  const router = useRouter();
  return (
    <NavigationButton target={"edgeview"}>
      <Stack
        className={"h-full w-full flex"}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography className={"h-[120px]"} variant="h4">
          登录以获取完整功能
        </Typography>
        <TextField variant={"outlined"} className={"w-1/5"} label="用户ID" />
        <Box className={"h-[32px]"} />
        <TextField variant={"outlined"} className={"w-1/5"} label="密码" />
        <Box className={"h-[24px]"} />
        <Link
          className={"cursor-pointer"}
          onClick={() => alert("随意输入即可进入原型")}
        >
          登录时遇到问题？
        </Link>
        <Box className={"h-[32px]"}></Box>
        <Stack className={"flex h-[48px]"} direction={"row"} spacing={4}>
          <Button
            variant={"outlined"}
            className={"w-[100px]"}
            onClick={() => router.push("/pcview/dashboard")}
          >
            登录
          </Button>
          <Button
            variant={"outlined"}
            endIcon={<OpenInNewIcon />}
            className={"w-[100px]"}
            onClick={() =>
              alert("随意输入即可进入原型，该按钮会打开外部注册网页")
            }
          >
            注册
          </Button>
        </Stack>
        <Box className={"h-[40px]"} />
      </Stack>
    </NavigationButton>
  );
}
