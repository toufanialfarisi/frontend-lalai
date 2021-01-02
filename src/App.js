import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import komponent material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./page/theme";
import Dashboard from "./page/index"

function App() {
  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={Dashboard}/>
        </Switch>
      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
