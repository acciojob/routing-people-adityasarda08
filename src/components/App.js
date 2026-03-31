import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Userlist from "./Userlist";
import Userdetails from "./Userdetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/users/:id" element={<Userdetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;