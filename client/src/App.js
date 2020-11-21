import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Search from "./pages/Search";


function App() {


  return (
    <div>
      <Header />
      <HeroSection />
      <Search />
    </div>
  );
}

export default App;
