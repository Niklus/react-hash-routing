import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  const [route, setRoute] = useState(window.location.hash);

  const handleRouteChange = () => {
    setRoute(window.location.hash);
  };

  window.addEventListener("hashchange", handleRouteChange);

  return (
    <>
      <Header />
      <div>{route === "" && <Home />}</div>
      <div>{route === "#home" && <Home />}</div>
      <div>{route === "#about" && <About />}</div>
      <div>{route === "#contact" && <Contact />}</div>
    </>
  );
}

export default App;
