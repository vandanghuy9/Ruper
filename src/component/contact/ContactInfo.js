import React from "react";
import { BsLamp } from "react-icons/bs";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <section className="section section-padding m-b-70">
      <div className="section-container">
        <div className="block block-contact-info">
          <div className="block-widget-wrap">
            <div className="info-icon">
              <BsLamp size={6} />
            </div>
            <div className="info-title">
              <h2>Need Help?</h2>
            </div>
            <div className="info-items">
              <div className="row">
                <div className="col-md-4 sm-m-b-30">
                  <div className="info-item">
                    <div className="item-tilte">
                      <h2>Phone</h2>
                    </div>
                    <div className="item-content">810.222.5439</div>
                  </div>
                </div>
                <div className="col-md-4 sm-m-b-30">
                  <div className="info-item">
                    <div className="item-tilte">
                      <h2>Customer Service</h2>
                    </div>
                    <div className="item-content">
                      <p>Monday to Friday</p>
                      <p>8:00am – 4:00pm Sydney, NSW time (UTC +10)</p>
                      <p>Saturday and Sunday closed</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-item">
                    <div className="item-tilte">
                      <h2>Returns</h2>
                    </div>
                    <div className="item-content small-width">
                      For information on Returns and Refunds, please click{" "}
                      <Link href="facebook.com/not.danghuyvan" target="_blank">
                        here.
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
