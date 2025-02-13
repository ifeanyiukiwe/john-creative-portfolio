import React from "react";
import Work1 from "../assets/work1.png";
import Work2 from "../assets/work2.png";
import Work3 from "../assets/work3.png";

function Works() {
  return (
    <div className="container mt-5">
      <h2 style={{ marginTop: "100px" }}>
        Designing Dashboards with usability in mind
      </h2>
      <div className="d-inline-flex align-items-center gap-4 mb-4">
        <button className="btn border-none rounded-pill px-3">2020</button>
        <p className="mb-0 text-muted">Dashboard, User Experience Design</p>
      </div>

      {/* Reusable Component for Each Section */}
      {[Work1, Work2, Work3].map((work, index) => (
        <div
          key={index}
          className="d-flex flex-column-reverse align-items-center gap-4 mb-5"
        >
          {/* Image Card */}
          <div
            className="card border-0 shadow-sm p-3"
            style={{ width: "400px" }}
          >
            <img
              src={work}
              alt={`Work Preview ${index + 1}`}
              className="card-img-top rounded"
              style={{ objectFit: "cover", height: "auto" }}
            />
          </div>

          {/* Text Content */}
          <div className="text-center px-3" style={{ maxWidth: "600px" }}>
            <p
              style={{
                fontFamily: "Heebo, sans-serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "23.5px",
                letterSpacing: "0px",
              }}
            >
              Creating a design from scratch requires a deep understanding of
              user needs and aesthetics. It starts with brainstorming ideas and
              sketching rough concepts to establish a strong foundation. By
              carefully selecting colors, typography, and layout, designers
              bring their vision to life with precision and creativity.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Works;
