import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import komponent material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./page/theme";
import Dashboard from "./page/index"
import DataProvider from "./components/DataProvider"

function App() {
  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <DataProvider>
      <Router>
        <Switch>
          <Route path="/" component={Dashboard}/>
        </Switch>
      </Router>
      </DataProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
