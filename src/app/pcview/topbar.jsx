"use client";
import { Box, Breadcrumbs, IconButton, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Unstable_Grid2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Topbar() {
  return (
    <Box
      sx={{ borderBottom: 1, width: "0.5px", borderColor: "grey.500" }}
      className={"w-full h-[48px] flex"}
      alignItems={"center"}
    >
      <Grid
        container
        className={"w-full h-full flex"}
        alignItems={"center"}
        direction={"row"}
        spacing={1.25}
      >
        <Grid
          xs={4}
          className={"flex"}
          alignItems={"center"}
          justifyContent={"left"}
        >
          <Box className={"w-[16px] flex"}></Box>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className={"flex"}
          >
            <Typography>主页</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid xs></Grid>
        <Grid
          xs={3}
          className={"flex"}
          alignItems={"center"}
          justifyContent={"right"}
        >
          <IconButton
            size={"small"}
            onClick={() => alert("该操作将最小化窗口")}
          >
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={() => alert("该操作将关闭窗口")} size={"small"}>
            <CloseIcon />
          </IconButton>
          <Box className={"w-[6px] flex"}></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
