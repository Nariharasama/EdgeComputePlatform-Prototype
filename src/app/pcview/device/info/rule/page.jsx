"use client";
import NavigationButton from "@/app/navigation-button";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  MenuItem,
  Snackbar,
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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

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

export default function Rule() {
  const [select, setSelect] = useState(0);
  const [value, setValue] = useState(0);
  function createData(id, name, type, value) {
    return { id, name, type, value };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const placer = [
    { name: "设备管理", link: "/pcview/device" },
    { name: "设备详情", link: "/pcview/device/info" },
    { name: "规则管理", link: "/pcview/device/info/rule" },
  ];
  const tabledata = [
    [
      createData(0, "轴向切宽", "单值", "1.00"),
      createData(1, "径向切宽", "单值", "3.00"),
      createData(2, "切削方向", "布尔", "逆铣"),
    ],
    [
      createData(0, "采样频率X", "单值", "10240"),
      createData(1, "采样频率Y", "单值", "10240"),
      createData(2, "截止频率X", "单值", "1500"),
      createData(3, "截止频率Y", "单值", "1500"),
    ],
    [
      createData(0, "Prediction Horizon", "单值", "15"),
      createData(1, "Control Horizon", "单值", "10"),
      createData(2, "Integral Action", "布尔", "True"),
    ],
    [
      createData(0, "采样频率X", "单值", "10240"),
      createData(1, "采样频率Y", "单值", "10240"),
      createData(2, "截止频率X", "单值", "1500"),
      createData(3, "截止频率Y", "单值", "1500"),
    ],
    [
      createData(0, "采样频率X", "单值", "10240"),
      createData(1, "采样频率Y", "单值", "10240"),
      createData(2, "截止频率X", "单值", "1500"),
      createData(3, "截止频率Y", "单值", "1500"),
    ],
    [
      createData(0, "轴向切宽", "单值", "1.00"),
      createData(1, "径向切宽", "单值", "3.00"),
      createData(2, "切削方向", "布尔", "逆铣"),
    ],
    [
      createData(0, "输入电压", "区间", "(-0.00005,0.00005)"),
      createData(1, "输入灵敏度", "单值", "80000"),
      createData(2, "灵敏度单位", "选项", "mVelts/mMeter"),
    ],
  ];
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
                  规则设置
                </Typography>
                <Typography className={"h-[40px] flex-none"} variant={"body1"}>
                  设备ID：A_001asbbk25
                </Typography>
              </Box>
            </Stack>
            <Box className={"flow flex-col flex w-full h-full"}>
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
                    <Tab label="通道设置" {...a11yProps(6)} />
                  </Tabs>
                  <Box className={"grow flex"}></Box>
                  <Button
                    variant={"text"}
                    startIcon={<OpenInNewIcon />}
                    onClick={() => alert("该操作将下载预设文件")}
                  >
                    导出预设
                  </Button>
                  <Button
                    variant={"text"}
                    startIcon={<SaveAltIcon />}
                    onClick={() => alert("该操作将从本地提取预设文件")}
                  >
                    使用预设
                  </Button>
                  <Box className={"w-[8px]"}></Box>
                </Stack>
              </Box>
              <Box className={"w-full grow"}>
                <DataTable
                  handleselect={setSelect}
                  datacontent={tabledata[value]}
                  key={value}
                />
              </Box>
              <Box
                className={"h-[56px] w-full flex"}
                sx={{
                  borderTop: 1,
                  width: "0.5px",
                  borderColor: "grey.500",
                }}
                alignItems={"center"}
              >
                <Stack
                  direction={"row"}
                  className={"w-full flex"}
                  alignItems={"center"}
                >
                  <Box className={"w-[16px]"}></Box>
                  <Typography variant={"body1"}>
                    批量操作：已选择{select}条规则
                  </Typography>
                  <Box className={"grow"}></Box>
                  <Button
                    variant={"text"}
                    endIcon={<OpenInNewIcon />}
                    onClick={() => alert("该操作将导出所选的规则预设")}
                  >
                    批量导出
                  </Button>
                  <Box className={"w-[16px]"}></Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </NavigationButton>
  );
}

function ChangeRule({ type }) {
  switch (type) {
    case "单值": {
      return (
        <TextField variant="outlined" size={"small"} className={"w-[160px]"} />
      );
    }
    case "布尔": {
      return (
        <TextField
          select
          variant="outlined"
          size={"small"}
          className={"w-[160px]"}
        >
          <MenuItem key="devicename" value="devicename">
            选项
          </MenuItem>
        </TextField>
      );
    }
    case "区间": {
      return (
        <Stack direction={"row"} alignItems={"center"}>
          <TextField variant="outlined" size={"small"} className={"w-[80px]"} />
          <Typography>-</Typography>
          <TextField variant="outlined" size={"small"} className={"w-[78px]"} />
        </Stack>
      );
    }
    case "选项": {
      return (
        <TextField
          select
          variant="outlined"
          size={"small"}
          className={"w-[160px]"}
        >
          <MenuItem key="devicename" value="devicename">
            选项
          </MenuItem>
        </TextField>
      );
    }
  }
}
function DataTable({ handleselect, datacontent }) {
  //snackbar
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  const rows = datacontent;
  var selectcontent = [];
  var selectnum = 0;
  for (let i = 0; i < rows.length; i++) {
    selectcontent.push(false);
  }
  const [selected, setSelected] = useState(selectcontent);
  //sort and choose

  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === true) {
      selectnum += 1;
    }
  }
  handleselect(selectnum);
  return (
    <Box className={"h-full w-full overflow-hidden grow"}>
      <TableContainer sx={{ maxHeight: 1, width: 1 }}>
        <Table aria-label="simple table" stickyHeader className={"w-full"}>
          <TableHead className={"w-full"}>
            <TableRow className={"w-full"}>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  onChange={(event) => {
                    setSelected(
                      selected.map(() => {
                        return event.target.checked;
                      }),
                    );
                  }}
                />
              </TableCell>
              <TableCell align="left">参数名称</TableCell>
              <TableCell align="left">值类型</TableCell>
              <TableCell align="left">值</TableCell>
              <TableCell align="center">操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={selected[row.id]}
                    onChange={(event) => {
                      setSelected(
                        selected.map((c, i) => {
                          if (i === row.id) {
                            return event.target.checked;
                          } else {
                            return c;
                          }
                        }),
                      );
                    }}
                  />
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.value}</TableCell>
                <TableCell align="center">
                  <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    className={"flex h-full"}
                    alignItems={"center"}
                  >
                    <ChangeRule type={row.type} />
                    <Button
                      variant={"text"}
                      onClick={handleClick}
                      disableRipple
                    >
                      修改
                    </Button>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      message="规则修改成功"
                      action={action}
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
