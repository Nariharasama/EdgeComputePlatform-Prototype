"use client";
import NavigationButton from "@/app/navigation-button";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import Sidebar from "@/app/pcview/sidebar";
import Topbar from "@/app/pcview/topbar";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { themeContext, themeDispatchContext } from "@/app/theme";

export default function Preference() {
  const placer = [
    { name: "软件设置", link: "/pcview/setting" },
    { name: "偏好设置", link: "/pcview/setting/preference" },
  ];
  const dispatch = useContext(themeDispatchContext);
  const theme = useContext(themeContext);
  const themetrue = theme.themeName === "dark";

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
                  偏好设置
                </Typography>
                <Typography className={"h-[40px] flex-none"} variant={"body1"}>
                  修改软件的偏好设置
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
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="自动检查更新"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={themetrue}
                      onChange={() => {
                        dispatch({
                          type: "mode",
                          content:
                            theme.themeName === "dark" ? "light" : "dark",
                        });
                      }}
                    />
                  }
                  label="暗色模式"
                />
                <BasicSelect />
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </NavigationButton>
  );
}
function BasicSelect() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className={"w-[144px]"}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">语言设置</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="语言设置"
          onChange={handleChange}
        >
          <MenuItem value={10}>简体中文</MenuItem>
          <MenuItem value={20}>English</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
