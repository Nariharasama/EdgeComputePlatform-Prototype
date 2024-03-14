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
  Snackbar,
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
import CircularProgress from "@mui/material/CircularProgress";

export default function Add() {
  const [select, setSelect] = useState(0);
  const placer = [
    { name: "设备管理", link: "../device" },
    { name: "添加设备", link: "../device/add" },
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
                  添加设备
                </Typography>
                <Typography className={"h-[40px] flex-none"} variant={"body1"}>
                  寻找网络中的设备并进行连接。
                </Typography>
              </Box>
            </Stack>
            <Box className={"w-full h-[60px] flex-none"}>
              <Stack
                direction={"row"}
                spacing={1}
                alignItems={"center"}
                justifyContent={"left"}
              >
                <Box className={"w-[8px] h-full"}></Box>
                <Typography variant={"body2"}>当前网络中的设备: </Typography>
                <Box className={"w-[16px] h-full"}></Box>
                <CircularProgress size={24} />
                <Typography variant={"body2"}>正在搜寻设备</Typography>
              </Stack>
            </Box>
            <Box className={"w-full grow h-[200px]"}>
              <DataTable handleselect={setSelect} />
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

function DataTable({ handleselect }) {
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
      <Button size="small" onClick={handleClose}>
        前往设备
      </Button>
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
  //sort and choose
  function createData(id, name, type) {
    return { id, name, type };
  }

  const rows = [
    createData(0, "Device_Name", "a00121ffa"),
    createData(1, "Device_Name", "chaasc092e"),
    createData(2, "Device_Name", "0289dan90"),
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
              <TableCell align="left">设备ID</TableCell>
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
                <TableCell align="center">
                  <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    className={"flex h-full"}
                    alignItems={"center"}
                  >
                    <Button
                      variant={"text"}
                      onClick={handleClick}
                      disableRipple
                    >
                      添加
                    </Button>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      message="设备添加成功"
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
