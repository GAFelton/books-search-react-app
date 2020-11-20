import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Search from "./pages/Search";


function App() {


  return (
    <div>
      <Nav />
      <Jumbotron />
      <Search />
    </div>
  );
}

export default App;
