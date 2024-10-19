"use client";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@utils/data";
import useGetParams from "@hooks/useGetParams";
const FooterBottom = () => {
  const homePageType = useGetParams("type");
  if (homePageType === "STYLISH")
    return (
      <div className="footer-bottom">
        <div className="section-padding">
          <div className="section-container">
            <div className="block-widget-wrap">
              <p className="copyright text-center">Copyright © 2022. All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    );
  if (homePageType === "UNIQUE")
    return (
      <div className="footer-bottom background-white no-border-top">
        <div className="section-padding">
          <div className="section-container">
            <div className="block-widget-wrap">
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-left">
                    <p className="copyright">Copyright © 2022. All Right Reserved</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-right">
                    <div className="block block-image">
                      <Image width={309} height={32} src={"/payments.png"} alt="payment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="footer-bottom">
      <div className="section-padding">
        <div className="section-container">
          <div className="block-widget-wrap">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-left">
                  <p className="copyright">Copyright © 2022. All Right Reserved</p>
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
