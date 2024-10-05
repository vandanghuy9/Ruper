import React from "react";
import NewsLetterForm from "../NewsLetterForm";
const MinimalNewsLetterBlock = () => {
  return (
    <div className="block block-newsletter layout-2 one-col m-b-15">
      <NewsLetterForm
        title={"Let's be friends"}
        description={"Sign up for the latest trends, products, and inspiration."}
      />
    </div>
  );
};

export default MinimalNewsLetterBlock;
