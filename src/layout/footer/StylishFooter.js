"use client";
import Image from "next/image";
import { footer } from "@utils/data";
import Link from "next/link";
import FooterNewsLetter from "./FooterNewsLetter";
import { socialLinks } from "@utils/data";

const StylishFooter = () => {
  return (
    <div className="footer three-columns">
      <div className="section-padding">
        <div className="section-container">
          <div className="block-widget-wrap">
            <div className="row">
              <div className="col-lg-4 column-left">
                <div className="column-wrap">
                  <div className="row">
                    {footer.map((item, index) => (
                      <div key={index} className={`col-lg-6 ${index === 0 ? "md-b-20" : ""}`}>
                        <div className={`block block-menu ${index === 0 ? "md-b-20" : ""}`}>
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
                  </div>
                </div>
              </div>
              <div className="col-lg-4 column-center">
                <div className="column-wrap">
                  <div className="block block-image m-b-20">
                    <Image width={100} height={20} src={"/logo.png"} alt="logo" />
                  </div>
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
              <div className="col-lg-4 column-right">
                <div className="column-wrap">
                  <FooterNewsLetter />
                  <div className="block block-image">
                    <Image width={400} height={79} src={"/payments.png"} alt="payment" />
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

export default StylishFooter;
