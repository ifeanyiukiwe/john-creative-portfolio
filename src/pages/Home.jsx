import React from "react";
import About from "./About";
import Blog from "./Blog";
import Works from "./Works";
import Contact from "./Contact";

function Home() {
  return (
    <div className="container">
      <h1 style={{ marginTop: "100px" }}></h1>
      <About />
      <Works />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home;
