"use client";
import NavigationButton from "@/app/navigation-button";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import Sidebar from "@/app/pcview/sidebar";
import Topbar from "@/app/pcview/topbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 6 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Data() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const placer = [
    { name: "设备管理", link: "/pcview/device" },
    { name: "设备详情", link: "/pcview/device/info" },
  ];
  const datacontent = [
    { id: 1, name: "预测模块" },
    { id: 2, name: "辨识模块" },
    { id: 3, name: "模型预测" },
    { id: 4, name: "颤振检测" },
    { id: 5, name: "寿命预测" },
    { id: 6, name: "故障诊断" },
  ];
  const router = useRouter();
  return (
    <NavigationButton target={"edgeview"}>
      <Box className={"h-full w-full flex"}>
        <Sidebar page={2}></Sidebar>
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
                  设备详情
                </Typography>
                <Typography className={"h-[40px] flex-none"} variant={"body1"}>
                  设备ID：A_001asbbk25
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Stack
                  direction={"row"}
                  className={"flex w-full"}
                  alignItems={"start"}
                  justifyContent={"center"}
                  spacing={2}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="预测模块" {...a11yProps(0)} />
                    <Tab label="辨识模块" {...a11yProps(1)} />
                    <Tab label="模型预测" {...a11yProps(2)} />
                    <Tab label="颤振检测" {...a11yProps(3)} />
                    <Tab label="寿命预测" {...a11yProps(4)} />
                    <Tab label="故障诊断" {...a11yProps(5)} />
                  </Tabs>
                  <Box className={"grow flex"}></Box>
                  <Button
                    variant={"text"}
                    startIcon={<SaveAltIcon />}
                    onClick={() => alert("该操作将删除设备")}
                  >
                    导出报告
                  </Button>
                  <Button
                    variant={"text"}
                    startIcon={<LockOutlinedIcon />}
                    onClick={() => router.push("/pcview/device/info/privacy")}
                  >
                    权限设置
                  </Button>
                  <Button
                    variant={"text"}
                    startIcon={<SettingsIcon />}
                    onClick={() => router.push("/pcview/device/info/rule")}
                  >
                    规则设置
                  </Button>
                  <Button
                    variant={"text"}
                    startIcon={<OpenInNewIcon />}
                    onClick={() => router.push("/pcview/data")}
                  >
                    数据记录
                  </Button>
                  <Button
                    variant={"text"}
                    startIcon={<DateRangeOutlinedIcon />}
                    onClick={() => router.push("/pcview/device/info/event")}
                  >
                    事件记录
                  </Button>
                  <Box className={"w-[8px]"}></Box>
                </Stack>
              </Box>
              {datacontent.map((c) => (
                <CustomTabPanel value={value} index={c.id - 1} key={c.id}>
                  显示{c.name}的数据
                </CustomTabPanel>
              ))}
            </Box>
          </Stack>
        </Box>
      </Box>
    </NavigationButton>
  );
}
