"use client";
import NavigationButton from "@/app/navigation-button";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
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
import * as React from "react";

export default function Data() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [select, setSelect] = useState(0);
  const placer = [
    { name: "设备管理", link: "/pcview/device" },
    { name: "设备详情", link: "/pcview/device/info" },
    { name: "权限设定", link: "/pcview/device/info/privacy" },
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
                  权限设置
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
                  label="搜索用户ID"
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
                <Button
                  variant={"text"}
                  color={"primary"}
                  endIcon={<AddIcon />}
                  disableRipple
                  onClick={handleClickOpen1}
                >
                  添加权限许可
                </Button>
                <New
                  handleClose={handleClose1}
                  router={router}
                  open={open1}
                  type={"new"}
                />
                <Box className={"w-[16px] h-full"}></Box>
              </Stack>
            </Box>
            <Box className={"w-full grow h-[200px]"}>
              <DataTable
                handleselect={setSelect}
                route={router}
                handleopen={handleClickOpen2}
              />
              <New
                handleClose={handleClose2}
                router={router}
                open={open2}
                type={"change"}
              />
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

function DataTable({ handleselect, route, handleopen }) {
  const router = route;
  function createData(id, name, privacy, userid) {
    return { id, name, privacy, userid };
  }

  const rows = [
    createData(0, "Administrator", "拥有者", "hushengyua831"),
    createData(1, "User_Name", "只读", "userid829e"),
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
              <TableCell align="left">用户</TableCell>
              <TableCell align="left">权限</TableCell>
              <TableCell align="left">用户ID</TableCell>
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
                <TableCell align="left">{row.privacy}</TableCell>
                <TableCell align="left">{row.userid}</TableCell>
                <TableCell align="left">
                  <Stack
                    direction={"row"}
                    justifyContent={"left"}
                    className={"flex h-full"}
                    alignItems={"center"}
                  >
                    {row.privacy !== "拥有者" ? (
                      <Button variant={"text"} color={"error"} disableRipple>
                        删除
                      </Button>
                    ) : (
                      <Button variant={"text"} disabled disableRipple>
                        删除
                      </Button>
                    )}
                    <Button
                      variant={"text"}
                      color={"primary"}
                      disableRipple
                      onClick={handleopen}
                    >
                      设置
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

function New({ open, handleClose, router, type }) {
  if (type === "new") {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle>添加权限用户</DialogTitle>
        <DialogContent>
          <DialogContentText>输入用户id以添加权限</DialogContentText>
          <Stack direction={"column"} alignItems={"center"} spacing={2}>
            <TextField
              autoFocus
              required
              label="用户ID"
              fullWidth
              variant="standard"
            />
            <BasicSelect />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleClose}>添加</Button>
        </DialogActions>
      </Dialog>
    );
  }
  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"sm"}>
      <DialogTitle>修改权限用户</DialogTitle>
      <DialogContent>
        <DialogContentText>更改该用户的权限</DialogContentText>
        <Stack direction={"column"} alignItems={"start"} spacing={2}>
          <Typography>用户id：9128ejzazbx</Typography>
          <BasicSelect />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={handleClose}>修改</Button>
      </DialogActions>
    </Dialog>
  );
}

function BasicSelect() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className={"w-full"}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">权限</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="权限"
          onChange={handleChange}
        >
          <MenuItem value={10}>只读</MenuItem>
          <MenuItem value={20}>读写</MenuItem>
          <MenuItem value={30}>拥有者（这将交付设备的所有权）</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
