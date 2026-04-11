import { useState } from "react";

import "./App.css";
import Display from "./components/DisplayCV";
import AddDetails from "./components/AddDetails";

function App() {
  return (
    <>
      <AddDetails></AddDetails>
      <Display></Display>
    </>
  );
}

export default App;
