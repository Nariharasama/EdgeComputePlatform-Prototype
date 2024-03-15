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
  const placer = [
    { name: "设备管理", link: "/pcview/device" },
    { name: "设备详情", link: "/pcview/device/info" },
    { name: "事件记录", link: "pcview/device/info/event" },
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
                  事件记录
                </Typography>
                <Typography className={"h-[40px] flex-none"} variant={"body1"}>
                  设备ID：A_001asbbk25
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
                  label="搜索事件"
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
                  label="事件类型"
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
                    事件类型
                  </MenuItem>
                </TextField>
                <TextField
                  select
                  id="2"
                  label="排序方式"
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
                    时间从新到旧
                  </MenuItem>
                </TextField>

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
                  批量操作：已选择{select}个事件
                </Typography>
                <Box className={"grow"}></Box>
                <Button
                  variant={"text"}
                  color={"error"}
                  endIcon={<CloseIcon />}
                  onClick={() => alert("该操作将删除事件")}
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
  function createData(id, name, time, type) {
    return { id, name, time, type };
  }

  const rows = [
    createData(0, "EventName", "202403160007", "错误"),
    createData(1, "EventName", "202403160007", "警告"),
    createData(2, "EventName", "202403160007", "错误"),
    createData(3, "EventName", "202403160007", "警告"),
    createData(4, "EventName", "202403160007", "警告"),
    createData(5, "EventName", "202403160007", "警告"),
    createData(6, "EventName", "202403160007", "警告"),
    createData(7, "EventName", "202403160007", "警告"),
    createData(8, "EventName", "202403160007", "警告"),
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
              <TableCell align="left">事件名称</TableCell>
              <TableCell align="left">上传时间</TableCell>
              <TableCell align="left">事件类型</TableCell>
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
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">
                  {row.type === "错误" ? (
                    <Typography color="error">{row.type}</Typography>
                  ) : (
                    <Typography className={"text-orange-400"}>
                      {row.type}
                    </Typography>
                  )}
                </TableCell>
                <TableCell align="left">
                  <Stack
                    direction={"row"}
                    justifyContent={"left"}
                    className={"flex h-full"}
                    alignItems={"center"}
                  >
                    <Button
                      variant={"text"}
                      color={"primary"}
                      disableRipple
                      onClick={() => router.push("/pcview/device/info/rule")}
                    >
                      前往规则
                    </Button>
                    <Button
                      variant={"text"}
                      color={"error"}
                      disableRipple
                      onClick={() => alert("该操作将删除事件")}
                    >
                      删除
                    </Button>
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
