import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import useHandleCart from "../../hooks/useHandleCart";
import ProductImage from "./ProductImage";
import Link from "next/link";
import { FaFacebook, FaPinterest, FaTwitter, FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

const ProductInfo = ({ product }) => {
  const { price, discount, stocks, description, imageUrl, name } = product;
  let sizes = stocks.map((item) => item.size);
  sizes = sizes.filter((item, index) => sizes.indexOf(item) === index);
  let colors = stocks.map((item) => item.color);
  colors = colors.filter((item, index) => colors.indexOf(item) === index);
  const [quantity, setQuantity] = useState(1);
  const [attributes, setAttributes] = useState({ size: null, color: null });
  const { handleAddToCart } = useHandleCart();
  const handleQuantity = (action) => {
    if (action === "INC") {
      setQuantity((prev) => prev + 1);
    } else if (action === "DEC") {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };
  const handleAttributes = (e) => {
    setAttributes((prevAttributes) => ({ ...prevAttributes, [e.target.name]: e.target.value }));
  };
  const addToCart = (e) => {
    console.log(attributes);
    handleAddToCart(product, quantity, attributes);
    setQuantity(1);
  };
  return (
    <>
      <div className="product-images col-lg-7 col-md-12 col-12">
        <ProductImage thumbnails={imageUrl} />
      </div>
      <div className="product-info col-lg-5 col-md-12 col-12">
        <h1 className="title">{name}</h1>
        <span className="price">
          {discount > 0 && (
            <del aria-hidden="true">
              <span>${price}</span>
            </del>
          )}
          <ins>
            <span>${discount > 0 ? (price * discount) / 100 : price}</span>
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
                    {sizes.map((size, i) => (
                      <li key={i}>
                        <input
                          type="radio"
                          name="size"
                          id={size}
                          value={size}
                          onClick={handleAttributes}
                        />
                        <label htmlFor={size}>{size}</label>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="label">Color</td>
                <td className="attributes">
                  <ul className="colors">
                    {colors.map((color, i) => (
                      <li key={i}>
                        <input
                          type="radio"
                          name="color"
                          id={color}
                          value={color}
                          onClick={handleAttributes}
                        />
                        <label htmlFor={color} className={color}></label>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttons">
          <div className="add-to-cart-wrap">
            <div className="quantity">
              <button
                type="button"
                className="plus fs-2 fw-bold"
                onClick={(e) => {
                  handleQuantity("INC");
                }}>
                +
              </button>
              <span className="ps-5 pe-5 my-3 fs-2 fw-normal">{quantity}</span>
              <button
                type="button"
                className="minus fs-2 fw-bold"
                onClick={(e) => {
                  handleQuantity("DEC");
                }}>
                -
              </button>
            </div>
            <button className="btn-add-to-cart button" type="button" onClick={addToCart}>
              Add to cart
            </button>
          </div>
          <div className="btn-quick-buy" data-title="Wishlist">
            <button className="product-btn">Buy It Now</button>
          </div>
          <div className="btn-wishlist" data-title="Wishlist">
            <button className="product-btn">
              <span className="icon">
                <FaHeart size={20} />
              </span>
              Add to wishlist
            </button>
          </div>
          <div className="btn-compare" data-title="Compare">
            <button className="product-btn">
              <span className="icon">
                <IoIosGitCompare size={20} />
              </span>
              Compare
            </button>
          </div>
        </div>
        <div className="product-meta">
          <span className="sku-wrapper">
            SKU: <span className="sku">D2300-3-2-2</span>
          </span>
          <span className="posted-in">
            Category:{" "}
            <Link href={"/"} rel="tag">
              Furniture
            </Link>
          </span>
          <span className="tagged-as">
            Tags:{" "}
            <Link href={"/"} rel="tag">
              Hot
            </Link>
            <Link href={"/"} rel="tag">
              Trend
            </Link>
          </span>
        </div>
        <div className="social-share">
          <Link href={"#"} title="Facebook" target="_blank">
            <FaFacebook size={20} />
            Facebook
          </Link>
          <Link href={"#"} title="Twitter" target="_blank">
            <FaTwitter size={20} />
            Twitter
          </Link>
          <Link href={"#"} title="Pinterest" target="_blank">
            <FaPinterest size={20} />
            Pinterest
          </Link>
        </div>
      </div>
    </>
  );
};
export default ProductInfo;
