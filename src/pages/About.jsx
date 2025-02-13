import React from "react";
import JohnLogo from "../assets/john.png";
import About1 from "../assets/about1.png";
import About2 from "../assets/about2.png";
import About3 from "../assets/about3.png";
import Work4 from "../assets/work4.png";
import "./About.css";

function About() {
  return (
    <div className="container-fluid mt-5">
      <div className="container" id="main">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-8 text-center text-lg-start">
            <h1 className="mt-5">
              Hi, I am John, <br />
              Creative Technologist
            </h1>
            <p className="mt-3">
              John is a passionate creative technologist who blends design and
              technology to craft seamless digital experiences. With a keen eye
              for aesthetics and a strong technical foundation, he brings
              innovative ideas to life through interactive solutions. His work
              bridges creativity and functionality, transforming concepts into
              engaging user experiences.
            </p>
            <button className="btn mt-5" style={{ width: "250px" }}>
              Download Resume
            </button>
          </div>

          <div className="col-lg-4 text-center" id="img">
            <img
              src={JohnLogo}
              alt="John image"
              className="img-fluid rounded-circle"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-5 py-4"
        style={{ backgroundColor: "#EDF7FA" }}
      >
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-between gap-4">
            <div className="flex-grow-1">
              <small>Recent posts</small>
              <div className="info bg-light p-3">
                <h5 className="mb-2">
                  Making a design system from <br />
                  scratch
                </h5>
                <div className="d-flex justify-content-around align-items-center px-3">
                  <p className="mb-0">12 Feb 2020</p>
                  <span
                    className="border-end border-2 mx-3"
                    style={{ height: "20px" }}
                  ></span>
                  <p className="mb-0">Design Pattern</p>
                </div>
                <p>
                  Creating a design from scratch requires a deep understanding
                  of user needs and aesthetics. It starts with brainstorming
                  ideas and sketching rough concepts to establish a strong
                  foundation. By carefully selecting colors, typography, and
                  layout, designers bring their vision to life with precision
                  and creativity. The process involves continuous iteration and
                  refinement to ensure a seamless and engaging user experience.
                </p>
              </div>
            </div>

            <div className="flex-grow-1">
              <small
                className="d-flex justify-content-end"
                style={{ color: "#00A8CC" }}
              >
                View All
              </small>
              <div className="info bg-light p-3">
                <h5>
                  Creating pixel-perfect icons in
                  <br />
                  Figma
                </h5>
                <div className="d-flex justify-content-around align-items-center px-3">
                  <p className="mb-0">12 Feb 2020</p>
                  <span
                    className="border-end border-2 mx-3"
                    style={{ height: "20px" }}
                  ></span>
                  <p className="mb-0">Figma, icon Design</p>
                </div>
                <p>
                  Designing pixel-perfect icons in Figma requires a keen eye for
                  detail and a deep understanding of user needs. The process
                  begins with brainstorming and sketching rough ideas to create
                  a strong foundation. By carefully refining shapes, colors, and
                  proportions, designers ensure clarity and visual harmony.
                  Through continuous iteration and precision adjustments, icons
                  are crafted to be both aesthetically pleasing and highly
                  functional across different interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <small className="d-block mb-3">Featured Works</small>

        <div className="row row-cols-1 row-cols-lg-1 g-4">
          {/* First Card */}
          <div className="col">
            <div
              className="card border-0 d-flex flex-column flex-lg-row align-items-center align-items-lg-start pb-3"
              style={{ borderBottom: "1px solid lightgray" }}
            >
              <div className="flex-shrink-0">
                <img
                  src={About1}
                  alt="First about image"
                  className="rounded-3"
                  style={{ width: "400px", height: "auto", objectFit: "cover" }}
                />
              </div>

              <div className="card-body flex-grow-1">
                <h6 className="card-title">Designing Dashboards</h6>
                <div className="d-flex align-items-center gap-3">
                  <button
                    className="rounded-pill px-3"
                    style={{
                      backgroundColor: "navy",
                      color: "white",
                      border: "none",
                    }}
                  >
                    2020
                  </button>
                  <small className="text-muted">Dashboard</small>
                </div>
                <p className="card-text mt-2">
                  A well-designed dashboard provides a clear and intuitive
                  overview of key metrics, helping users make informed decisions
                  at a glance. By using a balanced layout, data visualization,
                  and interactive elements, dashboards enhance usability and
                  efficiency.
                </p>
              </div>
            </div>
            <div className="border"></div>
          </div>

          <div className="col">
            <div
              className="card border-0 d-flex flex-column flex-lg-row align-items-center align-items-lg-start pb-3"
              style={{ borderBottom: "1px solid lightgray" }}
            >
              <div className="flex-shrink-0">
                <img
                  src={About2}
                  alt="Second about image"
                  className="rounded-3"
                  style={{ width: "400px", height: "auto", objectFit: "cover" }}
                />
              </div>

              <div className="card-body flex-grow-1">
                <h6 className="card-title">Vibrant Portrait of 2020</h6>
                <div className="d-flex align-items-center gap-3">
                  <button
                    className="rounded-pill px-3"
                    style={{
                      backgroundColor: "navy",
                      color: "white",
                      border: "none",
                    }}
                  >
                    2020
                  </button>
                  <small className="text-muted">Dashboard</small>
                </div>
                <p className="card-text mt-2">
                  A well-designed dashboard provides a clear and intuitive
                  overview of key metrics, helping users make informed decisions
                  at a glance. By using a balanced layout, data visualization,
                  and interactive elements, dashboards enhance usability and
                  efficiency.
                </p>
              </div>
            </div>
            <div className="border"></div>
          </div>

          <div className="col">
            <div
              className="card border-0 d-flex flex-column flex-lg-row align-items-center align-items-lg-start pb-3"
              style={{ borderBottom: "1px solid lightgray" }}
            >
              <div className="flex-shrink-0">
                <img
                  src={About3}
                  alt="Third about image"
                  className="rounded-3"
                  style={{ width: "400px", height: "auto", objectFit: "cover" }}
                />
              </div>

              <div className="card-body flex-grow-1">
                <h6 className="card-title">36 Days of Malaysian Type</h6>
                <div className="d-flex align-items-center gap-3">
                  <button
                    className="rounded-pill px-3"
                    style={{
                      backgroundColor: "navy",
                      color: "white",
                      border: "none",
                    }}
                  >
                    2020
                  </button>
                  <small className="text-muted">Dashboard</small>
                </div>
                <p className="card-text mt-2">
                  A well-designed dashboard provides a clear and intuitive
                  overview of key metrics, helping users make informed decisions
                  at a glance. By using a balanced layout, data visualization,
                  and interactive elements, dashboards enhance usability and
                  efficiency.
                </p>
              </div>
            </div>
            <div className="border"></div>
          </div>
          <div className="col">
            <div
              className="card border-0 d-flex flex-column flex-lg-row align-items-center align-items-lg-start pb-3"
              style={{ borderBottom: "1px solid lightgray" }}
            >
              <div className="flex-shrink-0">
                <img
                  src={Work4}
                  alt="Third about image"
                  className="rounded-3"
                  style={{ width: "400px", height: "auto", objectFit: "cover" }}
                />
              </div>

              <div className="card-body flex-grow-1">
                <h6 className="card-title">Designing Dashboards</h6>
                <div className="d-flex align-items-center gap-3">
                  <button
                    className="rounded-pill px-3"
                    style={{
                      backgroundColor: "navy",
                      color: "white",
                      border: "none",
                    }}
                  >
                    2020
                  </button>
                  <small className="text-muted">Dashboard</small>
                </div>
                <p className="card-text mt-2">
                  A well-designed dashboard provides a clear and intuitive
                  overview of key metrics, helping users make informed decisions
                  at a glance. By using a balanced layout, data visualization,
                  and interactive elements, dashboards enhance usability and
                  efficiency.
                </p>
              </div>
            </div>
            <div className="border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
