import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={'Policy'}>
      <div className="Privacy">
        <div style={{ marginTop: "1rem" }}>
          <img src="privacy.jpg" alt="" className="contact-image" />
        </div>
        <div className="" style={{ marginTop: "1rem" }}>
          <span className="contact-heading">Privacy</span>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1: Data Collection and Usage
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We, as an ecommerce website, collect certain personal
                  information from our users for the purpose of processing their
                  orders and providing a personalized shopping experience. The
                  information we collect may include names, email addresses,
                  shipping addresses, payment details, and browsing behavior. We
                  assure you that this information will be used solely for the
                  purpose of order fulfillment, customer support, and improving
                  our services. We do not sell or share this information with
                  third parties unless explicitly authorized or required by law.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2: Security Measures
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Protecting the security of our users' personal information is
                  of utmost importance to us. We employ industry-standard
                  security measures to safeguard against unauthorized access,
                  alteration, disclosure, or destruction of personal data. These
                  measures include encrypted communication channels, secure
                  storage systems, access controls, and regular security audits.
                  However, it is important to note that no method of
                  transmission over the internet or electronic storage is 100%
                  secure, and we cannot guarantee absolute security.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3: Cookies and Tracking Technologies
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  To enhance user experience and provide personalized services,
                  we may use cookies and similar tracking technologies. Cookies
                  are small data files stored on a user's device that enable us
                  to recognize and remember certain information. We may use
                  cookies for purposes such as remembering user preferences,
                  analyzing website traffic and usage patterns, and delivering
                  targeted advertisements. Users can manage their cookie
                  preferences through their browser settings, and can opt out of
                  targeted advertising by adjusting their ad preferences.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  4: Third-Party Services
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  In order to provide a seamless shopping experience, we may
                  engage third-party services and vendors. These may include
                  payment processors, shipping companies, customer support
                  platforms, and marketing partners. While we carefully select
                  our partners, we cannot be held responsible for the privacy
                  practices of these third parties. We encourage users to review
                  the privacy policies of these providers separately, as their
                  practices may differ from ours.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  5:Updates and Communication
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We reserve the right to update or modify this privacy policy
                  at any time. Any changes made will be reflected on this page,
                  and we encourage users to review the policy periodically. In
                  the event of significant changes that may affect user rights
                  or the handling of personal information, we will provide
                  notice through prominent means, such as email or website
                  notifications. By continuing to use our website after such
                  changes are made, users indicate their acceptance of the
                  updated privacy policy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
