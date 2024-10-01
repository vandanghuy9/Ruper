import React from "react";
import NewsLetterForm from "../NewsLetterForm";
const UniqueNewsLetterBlock = () => {
  return (
    <div className="row sm-m-0">
      <div className="col-md-6 sm-m-b-50 sm-p-0">
        <div className="block block-newsletter layout-2 one-col align-left position-center">
          <NewsLetterForm
            title={"Join our email list."}
            description={"Sign up for the latest trends, products, and inspiration."}
          />
        </div>
      </div>
      <div className="col-md-6 sm-p-0"></div>
    </div>
  );
};

export default UniqueNewsLetterBlock;
