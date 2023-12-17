'use client'
import Image from "next/image";
import { footer } from "../../utils/data";
import Link from "next/link";
import { useState } from "react";
import FooterBottom from "./FooterBottom";
const Footer = () => {
  const defaultInfor = {
    email: "",
  };
  const [infor, setInfor] = useState(defaultInfor);
  const handleChange = (e) => {
    setInfor((prevInfor) => ({
      ...prevInfor,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="footer">
        <div className="section-padding">
          <div className="section-container">
            <div className="block-widget-wrap">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="block block-image">
                    <Image
                      width={100}
                      height={20}
                      src={"/logo.png"}
                      alt="logo"
                    />
                  </div>
                </div>
                {footer.map((item, index) => (
                  <div key={index} className="col-lg-3 col-md-6">
                    <div className="block block-menu">
                      <h2 className="block-title">{item.title}</h2>
                      <div className="block-content">
                        <ul>
                          {item.content.map((content, index) => (
                            <li key={index}>
                              <Link href={content.href}>{content.desc}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-lg-3 col-md-6">
                  <div className="block block-newsletter">
                    <h2 className="block-title">Newsletter</h2>
                    <div className="block-content">
                      <div className="newsletter-text">
                        Enter your email below to be the first to know about new
                        collections and product launches.
                      </div>
                      <form action="" method="post" className="newsletter-form">
                        <input
                          type="email"
                          name="email"
                          value={infor.email}
                          size="40"
                          placeholder="Email address"
                          onChange={handleChange}
                        />
                        <span className="btn-submit">
                          <input type="submit" value="Subscribe" />
                        </span>
                      </form>
                    </div>
                  </div>

                  <div className="block block-image">
                    <Image
                      width={400}
                      height={79}
                      src={"/payments.png"}
                      alt="payment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <FooterBottom />
      </div>
    </>
  );
};
export default Footer;
