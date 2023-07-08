import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={'About-Mantra'}>
      <div className="contact">
        <div>
          <img
            src="about.avif"
            alt=""
            className="contact-image"
            style={{ marginBottom: "1rem" }}
          />
        </div>
        <div className="contact-info">
          <span className="contact-heading">About Us</span>

          <span style={{ marginTop: "10px" }} className="about-info">
            Welcome to Mantra, your go-to destination for an exceptional online
            shopping experience. We are dedicated to providing high-quality
            products and outstanding service, ensuring your satisfaction every
            step of the way. With a curated selection of trusted brands and a
            user-friendly interface, we make shopping easy and enjoyable.
          </span>
          <span style={{ marginTop: "10px" }} className="about-info">
            At Mantra, we prioritize your needs. Our team is committed to
            delivering a seamless and secure shopping experience. From
            hassle-free ordering to prompt delivery and responsive customer
            support, we're here to assist you with anything you need.
          </span>
          <span style={{ marginTop: "10px" }} className="about-info">
            Trust and transparency are fundamental to our business. We protect
            your privacy and handle your personal information responsibly,
            following strict privacy policies and regulations.
          </span>
          <span style={{ marginTop: "10px" }} className="about-info">
            As technology advances, we stay ahead of the curve, offering
            innovative features and personalized recommendations. We value your
            feedback and continuously improve our platform to meet your evolving
            needs.
          </span>
          <span
            style={{ marginTop: "10px", marginBottom: "1rem" }}
            className="about-info"
          >
            Thank you for choosing Mantra. We're excited to be part of your
            shopping journey, providing excellence and integrity. Start
            exploring our extensive collection today and experience the mantra
            of exceptional online shopping!
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default About;
