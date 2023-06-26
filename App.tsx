import { Groups } from "@screens/Groups";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
