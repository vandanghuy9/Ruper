import { AiFillStar } from "react-icons/ai";
const ProductInfo = ({ price, discount, stocks, description }) => {
  return (
    <>
      <h1 className="title"></h1>
      <span className="price">
        {discount > 0 && (
          <del aria-hidden="true">
            <span>${price}</span>
          </del>
        )}
        <ins>
          <span>${discount > 0 ? price * discount : price}</span>
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
        <p>{description}</p>
      </div>
      <div className="variations">
        <table cellSpacing={0}>
          <tbody>
            <tr>
              <td className="label">Size</td>
              <td className="attributes">
                <ul className="text">
                  {stocks[0].size.map((size, i) => (
                    <li key={i}>
                      <span>{size}</span>
                    </li>
                  ))}
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
