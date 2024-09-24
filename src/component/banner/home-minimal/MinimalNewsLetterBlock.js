import React from "react";
import NewsLetterForm from "../NewsLetterForm";
const MinimalNewsLetterBlock = () => {
  return (
    <section className="section section-padding background-1 p-t-70 p-b-80 m-b-0">
      <div className="section-container">
        <div className="block block-newsletter layout-2 one-col m-b-15">
          <NewsLetterForm
            title={"Let's be friends"}
            description={"Sign up for the latest trends, products, and inspiration."}
          />
        </div>
      </div>
    </section>
  );
};

export default MinimalNewsLetterBlock;
