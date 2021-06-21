import React from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  return (
    <React.Fragment>
      <Router>
        <Home />
      </Router>
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/" component={About} /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
