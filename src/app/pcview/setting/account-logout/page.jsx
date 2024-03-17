"use client";
import NavigationButton from "@/app/navigation-button";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Sidebar from "@/app/pcview/sidebar";
import Topbar from "@/app/pcview/topbar";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LoginIcon from "@mui/icons-material/Login";
import * as React from "react";
import { useRouter } from "next/navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function AccountLogOut() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const placer = [
    { name: "软件设置", link: "/pcview/setting" },
    { name: "账户设置", link: "/pcview/setting/account" },
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
                  账户信息
                </Typography>
                <Typography className={"h-[40px] flex-none"} variant={"body1"}>
                  登录账户以获取操作权限。
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
                <Stack className={"w-full h-full flex"} spacing={2}>
                  <Stack
                    direction={"row"}
                    className={"flex w-full h-[40px]"}
                    alignItems={"center"}
                    spacing={2}
                  >
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                    <Typography variant={"h6"}>访客</Typography>
                    <Typography variant={"body1"} className={"text-red-600"}>
                      未登录
                    </Typography>
                  </Stack>
                  <Box className={"h-[16px] w-full"}></Box>
                  <Stack
                    direction={"row"}
                    className={"flex w-full"}
                    alignItems={"start"}
                    spacing={2}
                  >
                    <Button
                      variant={"text"}
                      endIcon={<OpenInNewIcon />}
                      onClick={() => alert("该操作将打开浏览器界面")}
                    >
                      注册账号
                    </Button>
                    <Button
                      variant={"text"}
                      endIcon={<LoginIcon />}
                      onClick={handleClickOpen}
                    >
                      登录账号
                    </Button>
                    <Login
                      handleClose={handleClose}
                      router={router}
                      open={open}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </NavigationButton>
  );
}

function Login({ open, handleClose, router }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>登录账号</DialogTitle>
      <DialogContent>
        <DialogContentText>登录账号以获得权限</DialogContentText>
        <TextField
          autoFocus
          required
          label="用户ID"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          label="密码"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={() => router.push("/pcview/setting/account")}>
          登录
        </Button>
      </DialogActions>
    </Dialog>
  );
}
