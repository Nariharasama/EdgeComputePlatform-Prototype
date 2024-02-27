"use client";
import { useContext } from "react";
import { themeContext, themeDispatchContext } from "@/app/theme";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { Brightness4, Translate, Cached, Settings } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Dashboard({ children }) {
  const dispatch = useContext(themeDispatchContext);
  const theme = useContext(themeContext);
  const language = theme.language;
  const router = useRouter();
  return (
    <Box className={"h-[100%]"}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<Settings />}
      >
        <SpeedDialAction
          key="Mode"
          icon=<Brightness4 />
          onClick={() =>
            dispatch({
              type: "mode",
              content: theme.themeName === "dark" ? "light" : "dark",
            })
          }
          tooltipTitle={language === "ch" ? "模式" : "Mode"}
        />
        <SpeedDialAction
          key="Language"
          icon=<Translate />
          tooltipTitle={language === "ch" ? "语言" : "Language"}
          onClick={() => {
            dispatch({
              type: "language",
              content: language === "ch" ? "en" : "ch",
            });
          }}
        />
        <SpeedDialAction
          key="Device"
          icon=<Cached />
          tooltipTitle={language === "ch" ? "切换设备" : "Device"}
          onClick={() => {
            //Changing in devices
            router.push("../pcview/dashboard");
          }}
        />
      </SpeedDial>
      {children}
    </Box>
  );
}
