import React from "react";
import sofa from "../assets/images/sofa.jpg";
import "../assets/css/about.css";
import "../App.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function About() {
  return (
    <>
      <div className="navbar-element">
        <Navbar />
      </div>
      <div className="about-container">
        <header className="about-header">
          <h1>About ValueMart Furniture</h1>
          <p>Creating spaces that inspire and elevate your lifestyle.</p>
        </header>

        <section className="about-mission">
          <div className="text-content">
            <h2>Our Mission</h2>
            <p>
              At ValueMart Furniture, we are passionate about turning your house
              into a home. Since our inception, we have focused on delivering
              quality furniture that blends comfort, durability, and style.
            </p>
            <p>
              Whether it's a cozy recliner for your living room or a
              sophisticated office chair, we are dedicated to meeting your
              unique tastes and budget.
            </p>
          </div>
          <div className="image-placeholder">
            <img src={sofa} alt="Mission Furniture" />
          </div>
        </section>

        <section className="about-values">
          <h2>Our Core Values</h2>
          <ul>
            <li>
              <strong>Quality:</strong> We source only the finest materials for
              our products.
            </li>
            <li>
              <strong>Customer Focus:</strong> Your satisfaction is our
              priority.
            </li>
            <li>
              <strong>Innovation:</strong> Bringing you cutting-edge designs and
              functionality.
            </li>
            <li>
              <strong>Sustainability:</strong> Committed to eco-friendly
              practices.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
