import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <div>
          <img src="contact.webp" alt="" className="contact-image" />
        </div>
        <div className="contact-info">
          <span className="contact-heading">Contact Us</span>

          <span style={{marginTop:"10px"}}>
            For Any Query info about Product Feel Free to Call Anytime
          </span>
          <span>
            <i class="fa-solid fa-message"></i>
            www.help@matra.com
          </span>
          <span>
            <i class="fa-solid fa-phone"></i>012-3456657
          </span>
          <span>
            <i class="fa-solid fa-headphones"></i>1800-0000-0000(Toll-Free)
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
