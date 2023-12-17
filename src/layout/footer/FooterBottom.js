"use client";
import Link from "next/link";
import { socialLinks } from "../../utils/data";
const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="section-padding">
        <div className="section-container">
          <div className="block-widget-wrap">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-left">
                  <p className="copyright">
                    Copyright © 2022. All Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-right">
                  <div className="block block-social">
                    <ul className="social-link">
                      {socialLinks.map((item, index) => (
                        <li key={index}>
                          <Link href={item.href}>{item.icon}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterBottom;
