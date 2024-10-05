import React from "react";

const BannerLayout = ({ children }) => {
  return (
    <section className="section section-padding m-b-70">
      <div className="section-container">{children}</div>
    </section>
  );
};

export default BannerLayout;
