import React from "react";
import JohnLogo from "../assets/john.png";
import "./Contact.css";
import Arrow from "../assets/right-arrow.png";

function Contact() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh", // Allows content to expand instead of being fixed
        backgroundColor: "#f5f5f5",
        padding: "20px", // Prevents content from touching screen edges
      }}
    >
      <div
        id="main"
        className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-4 shadow"
        style={{
          width: "80%", // Default width for larger screens
          maxWidth: "90%", // Ensures better fit on smaller screens
          backgroundColor: "#fff",
          borderRadius: "20px",
          overflow: "auto", // Enables scrolling if content overflows
          padding: "20px",
          flexWrap: "wrap", // Allows stacking on smaller screens
        }}
      >
        {/* Left: Background Image Section */}
        <div
          className="contact-img flex-grow-1 w-100"
          style={{
            backgroundColor: "#EDF7FA",
            backgroundImage: `url(${JohnLogo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px", // Ensure visibility on small screens
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
            padding: "20px",
            flex: 1,
          }}
        ></div>

        {/* Right: Form Section */}
        <div
          className="form-info flex-grow-1 w-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "#fff",
            flex: 1,
            padding: "20px",
          }}
        >
          <div className="container">
            <h2 className="text-center" style={{ marginBottom: "40px" }}>
              Contact Us
            </h2>
            <form>
              <div className="row d-flex flex-lg-row flex-column gap-3">
                {/* First & Last Name Fields */}
                <div className="d-flex flex-lg-row flex-column gap-3">
                  <div className="col">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      id="firstName"
                      placeholder="Enter Your First Name"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      id="lastName"
                      placeholder="Enter Your Last Name"
                    />
                  </div>
                </div>

                {/* Email & Phone Number Fields */}
                <div className="d-flex flex-lg-row flex-column gap-3">
                  <div className="col">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control custom-input"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="number"
                      className="form-control custom-input"
                      id="phone"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="col">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control custom-input"
                    id="message"
                    rows="3"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div
                  className="mt-3 text-start d-flex gap-1 align-items-center"
                  style={{ height: "50px" }}
                >
                  Submit <img src={Arrow} alt="" width="14px" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
