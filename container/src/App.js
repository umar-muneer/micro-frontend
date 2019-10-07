import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-content">
        <Main />
      </div>
    </div>
  );
}

export default App;
