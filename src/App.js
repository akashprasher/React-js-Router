import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// Importing Pages
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Navbar from "./components/layout/navbar";
import NotFound from './components/pages/not-found';
import AddUser from "./components/users/AddUser";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/users/add" component={AddUser}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
