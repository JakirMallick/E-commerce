import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>About Us</h1>
        <p>Your go-to place for the best products</p>
      </div>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to our eCommerce store! We started this journey in 2020 with a
          vision to provide the best online shopping experience. Our store
          offers a wide range of products from various categories including
          electronics, fashion, home appliances, and more. We believe in quality
          and customer satisfaction.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to offer the best quality products at affordable prices
          while ensuring a seamless shopping experience. We aim to become the
          most trusted online store by continuously improving our services and
          product offerings.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Head of Marketing</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Mike Johnson</h3>
            <p>Chief Technology Officer</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have any questions or concerns? We're always ready to help! Contact us
          at support@ecommerce.com or call us at (123) 456-7890.
        </p>
      </section>
    </div>
  );
};

export default About;
