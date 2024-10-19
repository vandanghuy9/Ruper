"use client";
import { footer, menu } from "@utils/data";
import Link from "next/link";
import { socialLinks } from "@utils/data";
const UniqueFooter = () => {
  return (
    <div className="site-footer background four-columns">
      <div className="section-padding">
        <div className="section-container">
          <div className="block-widget-wrap">
            <div className="row">
              <div className={`col-lg-3 col-md-6 column-1`}>
                <div className={`block block-menu m-b-20`}>
                  <h2 className="block-title">{footer[0].title}</h2>
                  <div className="block-content">
                    <ul>
                      {footer[0].content.map((content, index) => (
                        <li key={index}>
                          <Link href={content.href}>{content.desc}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
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
              <div className={`col-lg-3 col-md-6 column-2`}>
                <div className={`block block-menu`}>
                  <h2 className="block-title">Categories</h2>
                  <div className="block-content">
                    <ul>
                      {menu.map(({ category, key }) => (
                        <li key={key}>
                          <Link href={`/shop?category=${key}`}>{category}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 col-md-6 column-3`}>
                <div className={`block block-menu`}>
                  <h2 className="block-title">{footer[1].title}</h2>
                  <div className="block-content">
                    <ul>
                      {footer[1].content.map((content, index) => (
                        <li key={index}>
                          <Link href={content.href}>{content.desc}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 column-4">
                <div className="block block-map">
                  <h2 className="block-title">Visit Our Store</h2>
                  <div className="block-content">
                    <iframe
                      src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                      aria-label="London Eye, London, United Kingdom"
                      className="entered exited lazyloaded"></iframe>
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

export default UniqueFooter;
