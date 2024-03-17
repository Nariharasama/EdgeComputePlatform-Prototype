"use client";
import NavigationButton from "@/app/navigation-button";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import Sidebar from "@/app/pcview/sidebar";
import Topbar from "@/app/pcview/topbar";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { BarChart, LineChart } from "@mui/x-charts";
import * as React from "react";
import { useRouter } from "next/navigation";

export default function DataWithAceess() {
  const router = useRouter();
  const placer = [
    { name: "数据管理", link: "../data" },
    { name: "数据详情DataName(no access)", link: "./data/dataname-noaccess" },
  ];
  return (
    <NavigationButton target={"edgeview"}>
      <Box className={"h-full w-full flex"}>
        <Sidebar page={3}></Sidebar>
        <Box className={"h-full w-full flex flex-col"}>
          <Topbar place={placer} />
          <Stack
            className={"w-full flex  grow flex-col overflow-scroll"}
            direction={"column"}
          >
            <Box className={"h-[32px] w-full flex-none"}></Box>
            <Stack className={"h-[88px] flex-none w-full"} direction={"row"}>
              <Box className={"w-[16px] h-full"}></Box>
              <Box>
                <Typography
                  className={"h-[48px] w-full text-left flex-none"}
                  variant={"h4"}
                >
                  数据详情DataSet_noAccess
                </Typography>
                <Typography className={"h-[40px] flex-none"} variant={"body1"}>
                  上传设备：Default_Device01_private 上传时间：202403100017
                </Typography>
              </Box>
            </Stack>
            <Box className={"w-full h-[60px] flex-none"}>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"right"}
                className={"flex"}
              >
                <Box className={"grow h-full"}></Box>
                <Button
                  variant={"text"}
                  endIcon={<OpenInNewIcon />}
                  onClick={() => router.push("pcview/device")}
                >
                  设备详情
                </Button>
                <Button variant={"text"} endIcon={<SaveAltIcon />} disabled>
                  数据导出
                </Button>
                <Button
                  variant={"text"}
                  endIcon={<InfoOutlinedIcon />}
                  onClick={() => router.push("/pcview/device/info/privacy")}
                >
                  权限设置
                </Button>
                <Button
                  variant={"text"}
                  color={"error"}
                  endIcon={<CloseIcon />}
                  onClick={() => alert("该操作将删除数据文件")}
                >
                  删除数据
                </Button>
                <Box className={"w-[16px]"}></Box>
              </Stack>
            </Box>
            <Alert
              severity="error"
              variant="standard"
              className={"w-full h-[80px]"}
            >
              <AlertTitle>没有操作权限</AlertTitle>
              您没有读取或导出该数据的权限，请向设备管理方申请权限。更多信息请至权限设置或设备详情页。
            </Alert>
          </Stack>
        </Box>
      </Box>
    </NavigationButton>
  );
}
