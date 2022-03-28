import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

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
        main: "",
      },
    },
  });

  const ComponentWithTheme = (props: Omit<T, keyof WithThemeProps>) => {
    const themeProps = useTheme();

    return (
        <ThemeProvider theme={authTheme}>
            <WrappedComponent {...themeProps} {...(props as T)} />
        </ThemeProvider>
    );
  };

  ComponentWithTheme.displayName = displayName;

  return ComponentWithTheme;
}
