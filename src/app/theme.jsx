"use client";
import { Noto_Sans_SC } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useReducer } from "react";
import { CssBaseline } from "@mui/material";

const notoSans = Noto_Sans_SC({ subsets: ["latin"] });
const themecore = createTheme({
  typography: { fontFamily: notoSans.style.fontFamily },
  palette: { mode: "light" },
});
const initialtheme = {
  themeName: "light",
  core: themecore,
  language: "ch",
};

export const themeContext = createContext(null);
export const themeDispatchContext = createContext(null);
function themeRuducer(currentTheme, action) {
  switch (action.type) {
    //change mode
    case "mode": {
      switch (action.content) {
        //light mode reducer
        case "light": {
          return {
            ...currentTheme,
            themeName: "light",
            core: createTheme({
              typography: { fontFamily: notoSans.style.fontFamily },
              palette: { mode: "light" },
            }),
          };
        }
        //dark mode reducer
        case "dark": {
          return {
            ...currentTheme,
            themeName: "dark",
            core: createTheme({
              typography: { fontFamily: notoSans.style.fontFamily },
              palette: { mode: "dark" },
            }),
          };
        }
      }
      break;
    }
    //change language
    case "language": {
      switch (action.content) {
        //To Chinese
        case "ch": {
          return {
            ...currentTheme,
            language: "ch",
          };
        }
        //to English
        case "en": {
          return {
            ...currentTheme,
            language: "en",
          };
        }
      }
      break;
    }
    default: {
      throw Error("Not supported theme option.");
    }
  }
}

//theme themeNavi(dispatch)

export default function ThemeContextProvider({ children }) {
  const [theme, themeNavi] = useReducer(themeRuducer, initialtheme);
  return (
    <themeContext.Provider value={theme}>
      <themeDispatchContext.Provider value={themeNavi}>
        <ThemeProvider theme={theme.core}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </themeDispatchContext.Provider>
    </themeContext.Provider>
  );
}
