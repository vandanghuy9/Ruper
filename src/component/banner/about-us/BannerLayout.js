import React from "react";

const BannerLayout = ({ children }) => {
  return (
    <section class="section section-padding m-b-70">
      <div class="section-container">{children}</div>
    </section>
  );
};

export default BannerLayout;
