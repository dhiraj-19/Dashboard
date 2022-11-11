import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DashBoardWrapper from "./Components/DashBoardWrapper";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5048E5",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DashBoardWrapper />
    </ThemeProvider>
  );
}

export default App;
