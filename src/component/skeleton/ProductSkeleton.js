import Image from "next/image";
const ProductSkeleton = () => {
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
        <div className="card" aria-hidden="true">
          <Image
            src={"/skeleton.jpg"}
            className="card-img-top"
            alt="..."
            width={600}
            height={600}
          />
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
