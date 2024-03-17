"use client";
import { Avatar, Badge, Box, IconButton, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter } from "next/navigation";
export default function Sidebar({ page }) {
  const router = useRouter();
  return (
    <Stack
      className={"h-full w-[80px] flex "}
      direction={"column"}
      sx={{ borderRight: 1, width: "0.5opx", borderColor: "grey.500" }}
      alignItems={"center"}
    >
      <Box className={"w-full h-[16px] flex"}></Box>
      <Stack className={"flex"} direction={"column"} spacing={3}>
        <IconButton>
          {page === 1 ? (
            <HomeIcon className={"text-[32px]"} color={"primary"} />
          ) : (
            <HomeIcon
              className={"text-[32px]"}
              onClick={() => router.push("/pcview/dashboard")}
            />
          )}
        </IconButton>
        <IconButton>
          {page === 2 ? (
            <AccountTreeIcon className={"text-[32px]"} color={"primary"} />
          ) : (
            <AccountTreeIcon
              className={"text-[32px]"}
              onClick={() => router.push("/pcview/device")}
            />
          )}
        </IconButton>
        <IconButton>
          {page === 3 ? (
            <StorageIcon className={"text-[32px]"} color={"primary"} />
          ) : (
            <StorageIcon
              className={"text-[32px]"}
              onClick={() => router.push("/pcview/data")}
            />
          )}
        </IconButton>
        <IconButton>
          {page === 4 ? (
            <SettingsIcon className={"text-[32px]"} color={"primary"} />
          ) : (
            <SettingsIcon
              className={"text-[32px]"}
              onClick={() => router.push("/pcview/setting")}
            />
          )}
        </IconButton>
      </Stack>
      <Box className={"w-full h-full flex"}></Box>
      <Badge
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        color={"error"}
        variant="dot"
        overlap="circular"
      >
        <Avatar
          onClick={() => router.push("/pcview/setting/account")}
          className={"cursor-pointer"}
        >
          HU
        </Avatar>
      </Badge>
      <Box className={"w-full h-[32px] flex"}></Box>
    </Stack>
  );
}
