"use client";
import NavigationButton from "@/app/navigation-button";
import {
  Box,
  Button,
  Checkbox,
  InputAdornment,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Sidebar from "@/app/pcview/sidebar";
import Topbar from "@/app/pcview/topbar";
import WarningIcon from "@mui/icons-material/Warning";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";

export default function Data() {
  const [select, setSelect] = useState(0);
  const placer = [{ name: "设备管理", link: "/device" }];
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
                  设备管理
                </Typography>
                <Typography className={"h-[40px] flex-none"} variant={"body1"}>
                  管理边缘设备查看设备工作状态并进行相关设定。
                </Typography>
              </Box>
            </Stack>
            <Box
              className={"w-full h-[60px] flex-none"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"right"}
              >
                <TextField
                  id="1"
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
                  label="筛选"
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
                >
                  <MenuItem key="devicename" value="devicename">
                    设备ID
                  </MenuItem>
                </TextField>
                <Button
                  variant={"text"}
                  color={"primary"}
                  endIcon={<AddIcon />}
                  disableRipple
                  onClick={() => router.push("device/add")}
                >
                  添加设备
                </Button>
                <Box className={"w-[16px] h-full"}></Box>
              </Stack>
            </Box>
            <Box className={"w-full grow h-[200px]"}>
              <DataTable handleselect={setSelect} route={router} />
            </Box>
            <Box
              className={"h-[56px] w-full flex"}
              sx={{ borderTop: 1, width: "0.5px", borderColor: "grey.500" }}
              alignItems={"center"}
            >
              <Stack
                direction={"row"}
                className={"w-full flex"}
                alignItems={"center"}
              >
                <Box className={"w-[16px]"}></Box>
                <Typography variant={"body1"}>
                  批量操作：已选择{select}个设备
                </Typography>
                <Box className={"grow"}></Box>
                <Button
                  variant={"text"}
                  color={"error"}
                  endIcon={<CloseIcon />}
                  onClick={() => alert("该操作将删除设备")}
                >
                  批量删除
                </Button>
                <Box className={"w-[16px]"}></Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </NavigationButton>
  );
}

function DataTable({ handleselect, route }) {
  const router = route;
  function createData(id, name, status, type) {
    return { id, name, status, type };
  }

  const rows = [
    createData(0, "Device_Name", "正常", "DeviceID0001"),
    createData(1, "Device_Name", "离线", "DeviceID0002"),
    createData(2, "Device_Name", "正常", "DeviceID0003"),
  ];
  var selectcontet = [];
  var selectnum = 0;
  for (let i = 0; i < rows.length; i++) {
    selectcontet.push(false);
  }
  const [selected, setSelected] = useState(selectcontet);
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === true) {
      selectnum += 1;
    }
  }
  handleselect(selectnum);
  return (
    <Box className={"h-full w-full overflow-hidden"}>
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
              <TableCell align="left">设备名称</TableCell>
              <TableCell align="left">设备状态</TableCell>
              <TableCell align="left">设备ID</TableCell>
              <TableCell align="left">操作</TableCell>
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
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">
                  <Stack
                    direction={"row"}
                    justifyContent={"left"}
                    className={"flex h-full"}
                    alignItems={"center"}
                  >
                    {row.status === "正常" ? (
                      <Button
                        variant={"text"}
                        color={"primary"}
                        disableRipple
                        onClick={() => router.push("/pcview/device/info")}
                      >
                        查看
                      </Button>
                    ) : (
                      <Button
                        variant={"text"}
                        color={"primary"}
                        onClick={() => router.push("./data/dataname-noaccess")}
                        disableRipple
                        disabled
                      >
                        查看
                      </Button>
                    )}
                    <Button
                      variant={"text"}
                      color={"primary"}
                      disableRipple
                      onClick={() => router.push("./data/dataname-withaccess")}
                    >
                      权限
                    </Button>
                    <Button
                      variant={"text"}
                      color={"primary"}
                      disableRipple
                      onClick={() => router.push("./data/dataname-withaccess")}
                    >
                      规则
                    </Button>
                    <Button variant={"text"} color={"error"} disableRipple>
                      删除
                    </Button>
                    {row.status === "离线" && (
                      <Stack
                        direction={"row"}
                        className={"h-full"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <WarningIcon color={"error"} />
                        <Typography color={"error"} variant={"body2"}>
                          设备离线
                        </Typography>
                      </Stack>
                    )}
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
