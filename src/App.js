import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routing />
      </div>
    </Router>
  );
}

export default App;
