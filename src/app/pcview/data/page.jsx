"use client";
import NavigationButton from "@/app/navigation-button";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  IconButton,
  InputAdornment,
  Link,
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
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Data() {
  const [select, setSelect] = useState(0);

  return (
    <NavigationButton target={"edgeview"}>
      <Box className={"h-full w-full flex"}>
        <Sidebar page={3}></Sidebar>
        <Box className={"h-full w-full flex flex-col"}>
          <Topbar />
          <Stack className={"w-full flex  grow flex-col"} direction={"column"}>
            <Box className={"h-[32px] w-full flex-none"}></Box>
            <Stack className={"h-[88px] flex-none w-full"} direction={"row"}>
              <Box className={"w-[16px] h-full"}></Box>
              <Box>
                <Typography
                  className={"h-[48px] w-full text-left flex-none"}
                  variant={"h4"}
                >
                  数据管理
                </Typography>
                <Typography className={"h-[40px] flex-none"} variant={"body1"}>
                  查看由边缘端上传的数据记录，管理并导出相关图表。
                </Typography>
              </Box>
            </Stack>
            <Box className={"w-full h-[60px] flex-none"}>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"right"}
              >
                <TextField
                  id="outlined-basic"
                  label="搜索数据"
                  variant="outlined"
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
                  label="选择设备"
                  variant="outlined"
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
                    设备名称
                  </MenuItem>
                </TextField>
                <TextField
                  select
                  id="3"
                  label="排序方式"
                  variant="outlined"
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
                    时间从新到旧
                  </MenuItem>
                  <MenuItem key="2" value="2">
                    时间从旧到新
                  </MenuItem>
                  <MenuItem key="3" value="3">
                    设备类型
                  </MenuItem>
                </TextField>
                <Box className={"w-[16px] h-full"}></Box>
              </Stack>
            </Box>
            <Box className={"w-full grow h-[200px] flex"}>
              <EventTable handleselect={setSelect} />
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
                  批量操作：已选择{select}条数据
                </Typography>
                <Box className={"grow"}></Box>
                <Button variant={"text"} endIcon={<SaveAltIcon />}>
                  批量导出
                </Button>
                <Button
                  variant={"text"}
                  color={"error"}
                  endIcon={<CloseIcon />}
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

function EventTable({ handleselect }) {
  function createData(id, name, time, device, privacy, select) {
    return { id, name, time, device, privacy, select };
  }

  const rows = [
    createData(0, "Data_Name01", "202403111838", "DeviceName01", 1, 0),
    createData(1, "Data_Name01", "202403111838", "DeviceName01", 1, 0),
    createData(
      2,
      "Data_Name01_NoAccess",
      "202403111838",
      "DeviceName01_NoAccess",
      0,
      0,
    ),
    createData(
      3,
      "Data_Name01_NoAccess",
      "202403111838",
      "DeviceName01_NoAccess",
      0,
      0,
    ),
    createData(
      4,
      "Data_Name01_NoAccess",
      "202403111838",
      "DeviceName01_NoAccess",
      0,
      0,
    ),
    createData(5, "Data_Name01", "202403111838", "DeviceName01s", 1, 0),
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
      <TableContainer sx={{ maxHeight: 1 }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              <TableCell align="left">数据名称</TableCell>
              <TableCell align="left">上传时间</TableCell>
              <TableCell align="left">上传设备</TableCell>
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
                      if (event.target.checked === true) {
                        setSelected(
                          selected.map((c, i) => {
                            if (i === row.id) {
                              return true;
                            } else {
                              return c;
                            }
                          }),
                        );
                      } else {
                        setSelected(
                          selected.map((c, i) => {
                            if (i === row.id) {
                              return false;
                            } else {
                              return c;
                            }
                          }),
                        );
                      }
                    }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.device}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">
                  <Stack
                    direction={"row"}
                    justifyContent={"left"}
                    className={"flex h-full"}
                    alignItems={"center"}
                  >
                    <Button variant={"text"} color={"primary"} disableRipple>
                      查看
                    </Button>
                    {row.privacy === 1 ? (
                      <Button variant={"text"} color={"primary"} disableRipple>
                        导出
                      </Button>
                    ) : (
                      <Button variant={"text"} disabled disableRipple>
                        导出
                      </Button>
                    )}
                    {row.privacy === 1 ? (
                      <Button variant={"text"} color={"error"} disableRipple>
                        删除
                      </Button>
                    ) : (
                      <Button variant={"text"} disabled disableRipple>
                        删除
                      </Button>
                    )}
                    {row.privacy === 0 ? (
                      <Stack
                        direction={"row"}
                        className={"h-full"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <WarningIcon color={"error"} />
                        <Typography color={"error"} variant={"body2"}>
                          没有查看权限
                        </Typography>
                      </Stack>
                    ) : (
                      <></>
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
