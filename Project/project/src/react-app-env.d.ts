/// <reference types="react-scripts" />
declare module "@mui/material/styles" {
  interface Theme {
    pallete: {
      main: { [key in string] };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
