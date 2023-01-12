import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainMenu from "./components/MainMenu/MainMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Results from "./components/results/Results";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <MainMenu />
      <Home />
      <Results />
      <Footer />
    </Router>
  );
}

export default App;
