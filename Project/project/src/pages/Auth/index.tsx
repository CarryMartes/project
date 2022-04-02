import { Button, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { Card, CardContent, Stack, Box } from "@mui/material";

interface WithThemeProps {
  primaryColor: string;
}
function useTheme() {
  return {
    name: "Hi",
  };
}

export function withAuth<T>(WrappedComponent: React.ComponentType<T>) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const authTheme = createTheme({
    palette: {
      primary: {
        main: "#00000",
      },
    },
    typography: {
      fontFamily: ["Roboto"].join(","),
      fontSize: 1,
    },
  });

  const ComponentWithTheme = (props: Omit<T, keyof WithThemeProps>) => {
    const themeProps = useTheme();
    return (
      <ThemeProvider theme={authTheme}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "100vh",
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "400px" },
              "& .MuiButton-root": { m: 1, p: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <Stack
              direction="row"
              sx={{ width: "100%", "& .MuiPaper-root": { width: "100%" } }}
            >
              <Button>Student</Button>
              <Button>Teacher</Button>
            </Stack>
            <Card>
              <CardContent>
                <WrappedComponent {...themeProps} {...(props as T)} />
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </ThemeProvider>
    );
  };

  ComponentWithTheme.displayName = displayName;

  return ComponentWithTheme;
}
