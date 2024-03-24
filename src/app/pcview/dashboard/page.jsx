"use client";
import NavigationButton from "@/app/navigation-button";
import Sidebar from "@/app/pcview/sidebar";
import Topbar from "@/app/pcview/topbar";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  LinearProgress,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import WarningIcon from "@mui/icons-material/Warning";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const placer = [{ name: "主页", link: "./dashboard" }];
  const router = useRouter();
  return (
    <NavigationButton target={"edgeview"}>
      <Stack className={"h-full flex"} direction={"row"}>
        <Sidebar page={1}></Sidebar>
        <Box className={"h-full w-full"}>
          <Topbar place={placer} />
          <Box className={"w-full relative"}>
            <Typography
              className={"top-[32px] left-[16px] absolute"}
              variant={"h4"}
            >
              边缘设备管理平台
            </Typography>
            <Typography
              className={"top-[80px] left-[16px] absolute"}
              variant={"body1"}
            >
              欢迎回来！在这里您可以浏览您的设备状况，查看数据，点击相关内容即可快速跳转至详细信息。
              <br />
              更多提示请至设置-技术支持与帮助。
            </Typography>
            <Card
              className={"top-[160px] left-[16px] absolute w-[600px] h-[120px]"}
              variant={"outlined"}
            >
              <CardContent>
                <Box className={"h-[64px]"}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"start"}
                  >
                    <Box>
                      <Typography variant={"h5"}>设备一览</Typography>
                      <Typography variant={"body2"} color={"grey.500"}>
                        设备在线状态
                      </Typography>
                    </Box>
                    <IconButton>
                      <OpenInNewIcon
                        onClick={() => router.push("/pcview/device")}
                      />
                    </IconButton>
                  </Stack>
                </Box>
                <Stack
                  direction={"row"}
                  className={"flex h-[28px]"}
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant={"body2"}>50%</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={50}
                    className={"w-[200px] h-[8px]"}
                  />
                  <Typography variant={"body2"}>Group1</Typography>
                  <Typography variant={"body2"}>
                    在线设备：24 设备总数：48
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            <Card
              className={"top-[300px] left-[16px] absolute w-[600px] h-[260px]"}
              variant={"outlined"}
            >
              <CardContent>
                <Box className={"h-[64px]"}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"start"}
                  >
                    <Box>
                      <Typography variant={"h5"}>事件记录</Typography>
                      <Typography variant={"body2"} color={"grey.500"}>
                        设备事件记录，更多记录请至设备界面查看
                      </Typography>
                    </Box>
                    <IconButton>
                      <OpenInNewIcon
                        onClick={() => router.push("/pcview/data")}
                      />
                    </IconButton>
                  </Stack>
                </Box>
                <EventTable />
              </CardContent>
            </Card>
            <Card
              className={
                "top-[160px] right-[96px] absolute w-[320px] h-[280px] "
              }
              variant={"outlined"}
            >
              <CardContent>
                <Box className={"h-[84px]"}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"start"}
                  >
                    <Box>
                      <Typography variant={"h5"}>快捷链接</Typography>
                      <Typography variant={"body2"} color={"grey.500"}>
                        自定义链接点击右侧设置按钮
                      </Typography>
                    </Box>
                    <IconButton>
                      <SettingsIcon
                        onClick={() => router.push("/pcview/setting")}
                      />
                    </IconButton>
                  </Stack>
                </Box>
                <Stack direction={"column"} spacing={1}>
                  <Link
                    className={"cursor-pointer"}
                    onClick={() => router.push("/pcview/setting/plugin")}
                  >
                    功能商城
                  </Link>
                  <Link
                    className={"cursor-pointer"}
                    onClick={() => router.push("/pcview/setting/account")}
                  >
                    账号设置
                  </Link>
                  <Link
                    className={"cursor-pointer"}
                    onClick={() => router.push("/pcview/device/info/rule")}
                  >
                    修改规则
                  </Link>
                  <Link
                    className={"cursor-pointer"}
                    onClick={() => router.push("/pcview/setting/about")}
                  >
                    帮助和支持
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Stack>
    </NavigationButton>
  );
}

function EventTable() {
  function createData(name, device, time) {
    return { name, device, time };
  }
  const rows = [
    createData("Eventname_Default01", "DeviceName01", "202403111838"),
    createData("Eventname_Default02", "DeviceName01", "202403111838"),
    createData("Eventname_Default03", "DeviceName01", "202403111838"),
    createData("Eventname_Default03", "DeviceName01", "202403111838"),
    createData("Eventname_Default03", "DeviceName01", "202403111838"),
    createData("Eventname_Default03", "DeviceName01", "202403111838"),
    createData("Eventname_Default03", "DeviceName01", "202403111838"),
  ];
  return (
    <Box className={"h-[160px] w-[560px]"}>
      <TableContainer sx={{ maxHeight: 1 }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>事件名称</TableCell>
              <TableCell align="left">设备名称</TableCell>
              <TableCell align="right">触发时间</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                <TableCell component="th" scope="row">
                  <Stack direction={"row"} alignItems={"center"}>
                    <WarningIcon color={"warning"} fontSize={"small"} />
                    {row.name}
                  </Stack>
                </TableCell>
                <TableCell align="left">{row.device}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
