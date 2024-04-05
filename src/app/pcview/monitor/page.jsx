"use client";
import NavigationButton from "@/app/navigation-button";
import {
  Box,
  Button,
  Checkbox,
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
  TextField,
  Typography,
} from "@mui/material";
import Sidebar from "@/app/pcview/sidebar";
import Topbar from "@/app/pcview/topbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import WarningIcon from "@mui/icons-material/Warning";

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

export default function Monitor() {
  const [value, setValue] = useState(0);
  const [devicename, setName] = useState("设备名称1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const placer = [{ name: "设备监视", link: "/pcview/monitor" }];
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
        <Sidebar page={5}></Sidebar>
        <Box className={"h-full w-full flex flex-col"}>
          <Topbar place={placer} />
          <Box className={"w-full h-full flex"}>
            <Box
              className={"w-[480px] h-full"}
              sx={{ borderRight: 1, width: "0.5opx", borderColor: "grey.500" }}
            >
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"right"}
                className={"w-full h-[100px] flex"}
              >
                <Box className={"w-[16px]"}></Box>
                <TextField
                  id="outlined-basic"
                  label="搜索设备"
                  variant="outlined"
                  size={"small"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  select
                  id="2"
                  label="权限筛选"
                  variant="outlined"
                  size={"small"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FilterAltIcon />
                      </InputAdornment>
                    ),
                  }}
                  className={"w-[200px]"}
                  defaultValue="1"
                >
                  <MenuItem key="1" value="1">
                    所有
                  </MenuItem>
                  <MenuItem key="2" value="2">
                    只读
                  </MenuItem>
                  <MenuItem key="4" value="4">
                    读写
                  </MenuItem>
                  <MenuItem key="3" value="3">
                    我拥有的
                  </MenuItem>
                </TextField>
                <Box className={"w-[16px] h-full"}></Box>
              </Stack>
              <DataTable setName={setName} />
            </Box>
            <Stack
              className={"w-full flex  grow flex-col"}
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
                    设备监视{devicename}
                  </Typography>
                  <Typography
                    className={"h-[40px] flex-none"}
                    variant={"body1"}
                  >
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
                      startIcon={<SettingsIcon />}
                      onClick={() => router.push("/pcview/device/info/rule")}
                    >
                      规则设置
                    </Button>
                    <Button
                      variant={"text"}
                      startIcon={<InfoOutlinedIcon />}
                      onClick={() => router.push("/pcview/device/info/")}
                    >
                      设备详情
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
      </Box>
    </NavigationButton>
  );
}

function DataTable({ setName }) {
  function createData(id, name, privacy, ID) {
    return { id, name, privacy, ID };
  }

  const rows = [
    createData(1, "设备名称1", "只读", 29849184914),
    createData(2, "设备名称2", "拥有者", 210931039),
    createData(3, "设备名称3", "只读", 231312),
    createData(4, "设备名称4", "读写", "12019-2113"),
    createData(5, "设备名称5", "读写", "djqd921084"),
  ];
  const [select, setSelect] = useState(1);

  return (
    <Box className={"flex w-full overflow-hidden"}>
      <TableContainer sx={{ maxHeight: 1 }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="left">设备名称</TableCell>
              <TableCell align="left">权限</TableCell>
              <TableCell align="left">ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) =>
              row.id === select ? (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  onClick={() => {
                    setName(row.name);
                    setSelect(row.id);
                  }}
                  className={"cursor-pointer"}
                >
                  <TableCell align="left">
                    <Typography className={"text-blue-500"}>
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={"text-blue-500"}>
                      {row.privacy}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={"text-blue-500"}>
                      {row.ID}
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  onClick={() => {
                    setName(row.name);
                    setSelect(row.id);
                  }}
                  className={"cursor-pointer"}
                >
                  <TableCell align="left">
                    <Typography>{row.name}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography>{row.privacy}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography>{row.ID}</Typography>
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
