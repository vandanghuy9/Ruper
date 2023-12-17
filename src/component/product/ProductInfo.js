import { AiFillStar } from "react-icons/ai";
const ProductInfo = () => {
  return (
    <>
      <h1 className="title"></h1>
      <span className="price">
        <del aria-hidden="true">
          <span>$100.00</span>
        </del>
        <ins>
          <span>$90.00</span>
        </ins>
      </span>
      <div className="rating">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <div className="review-count">
          3 <span>reviews</span>
        </div>
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="variations">
        <table cellSpacing={0}>
          <tbody>
            <tr>
              <td className="label">Size</td>
              <td className="attributes">
                <ul className="text">
                  <li>
                    <span>L</span>
                  </li>
                  <li>
                    <span>M</span>
                  </li>
                  <li>
                    <span>S</span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="label">Color</td>
              <td className="attributes">
                <ul className="colors">
                  <li>
                    <span className="color-1"></span>
                  </li>
                  <li>
                    <span className="color-2"></span>
                  </li>
                  <li>
                    <span className="color-3"></span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductInfo;
