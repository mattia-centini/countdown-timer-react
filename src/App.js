import React, { useEffect, useState } from "react";
import "./App.css";
import Clock from "./Clock";

function App() {
  //HOOKS

  const [year] = useState(new Date().getFullYear());

  return (
    <div className="App">
      <Clock year={year} />
    </div>
  );
}

export default App;
