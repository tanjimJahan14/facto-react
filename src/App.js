import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TrustedBy from "./components/TrustedBy";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <TrustedBy />
    </div>
  );
}

export default App;
