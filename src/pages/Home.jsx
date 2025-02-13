import React from "react";
import About from "./About";
import Blog from "./Blog";
import Works from "./Works";

function Home() {
  return (
    <div className="container">
      <h1 style={{ marginTop: "100px" }}></h1>
      <About />
      <Works />
      <Blog />
    </div>
  );
}

export default Home;
