"use client";
import * as React from "react";
import { CardActions, CardContent, Alert, AlertTitle } from "@mui/material";
import { Button, Grid, Typography, Card } from "@mui/material";
import { useRouter } from "next/navigation";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useContext } from "react";
import {
  LanguageContext,
  LanguageDispatchContext,
} from "@/app/LanguageContext";
import { themeContext, themeDispatchContext } from "@/app/theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Privacy() {
  return (
    <div>
      <Alert severity="warning" variant="standard">
        <AlertTitle>版权警告 Privacy Notice</AlertTitle>
        禁止在未获版权拥有者许可的情况下对该原型页面的内容进行复制，转载以及用作其他商业用途。
        进入原型即表明同意该条款。
        <br />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Copy, reprint or any case of commercial usage without owner's permission
        of this prototype is strictly forbidden. Entering the prototype shows
        you accept and will follow the rule.
      </Alert>
    </div>
  );
}

function CardWords() {
  const router = useRouter();
  const language = useContext(LanguageContext);
  const dispatch = useContext(LanguageDispatchContext);
  const theme = useContext(themeContext);
  const themeDispatch = useContext(themeDispatchContext);
  return (
    <React.Fragment>
      <CardContent>
        <Typography className={"text-xl"} gutterBottom>
          {language === "ch"
            ? "欢迎使用边缘计算管理平台界面原型"
            : "Welcome to the prototype of Edge computing platform"}
        </Typography>
        <Typography className={"text-sm"} gutterBottom>
          {language === "ch"
            ? "该界面原型分为边缘端屏显和桌面端软件两部分,\n" +
              "使用时可以利用右下角的加号按钮切换当前页面。"
            : "Use the button located on bottom right to navigate between edge view and computer view."}
          <br />
          {language === "ch"
            ? "请使用显示器像素不小于1024px*640px的设备查看以获得最佳效果。"
            : "Please use a display device with more than 1024px*640px for better experience."}
        </Typography>
        <Privacy />
        <CardActions>
          <Grid container>
            <Grid
              item
              xs={2}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"center"}
            >
              <Button
                color="primary"
                onClick={() => router.push("./dashboard")}
                disableRipple
                className={"normal-case h-[32px]"}
              >
                {language === "ch" ? "进入原型" : "Confirm"}
              </Button>
            </Grid>
            <Grid
              item
              xs={7}
              display={"flex"}
              justifyContent={"right"}
              alignItems={"center"}
            >
              <ToggleButtonGroup
                value={theme.themeName}
                color="primary"
                className={"h-[32px]"}
                onChange={(event, newtheme) => {
                  if (newtheme !== null) {
                    themeDispatch({ type: newtheme });
                  }
                }}
                exclusive
              >
                <ToggleButton
                  value="light"
                  className={"normal-case"}
                  disableRipple
                >
                  <LightModeIcon />
                </ToggleButton>
                <ToggleButton
                  value="dark"
                  className={"normal-case"}
                  disableRipple
                >
                  <DarkModeIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid
              item
              xs={3}
              display={"flex"}
              justifyContent={"right"}
              alignItems={"center"}
            >
              <ToggleButtonGroup
                value={language}
                color="primary"
                className={"h-[32px]"}
                onChange={(event, newLanguage) => {
                  if (newLanguage !== null) {
                    dispatch({ type: newLanguage });
                  }
                }}
                exclusive
                aria-label="Platform"
              >
                <ToggleButton value="ch" disableRipple>
                  中文简体
                </ToggleButton>
                <ToggleButton
                  value="en"
                  className={"normal-case"}
                  disableRipple
                >
                  English
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </CardActions>
      </CardContent>
    </React.Fragment>
  );
}

export default function Home() {
  return (
    <Grid container className={"h-[600px]"}>
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card variant={"outlined"} className={"w-[720px] h-[280px]"}>
          <CardWords />
        </Card>
      </Grid>
    </Grid>
  );
}
