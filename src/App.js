import { useState, useEffect } from "react";
import "./App.css";

function App() {

  return (
    <div className="App">
      <input type="file" accept="image/*" capture="environment" />
      <input type="file" accept="image/*" />
    </div>
  );
}

export default App;
