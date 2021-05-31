import React from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";
import About from './About';
import Header from "./components/header";

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
        <Header />
      </Router>
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/" component={About} /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
