import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './../styles/App.css';
import Userlist from "./Userlist";
import Userdetails from "./Userdetails";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Userlist} />
          <Route path="/users/:id" component={Userdetails } />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
