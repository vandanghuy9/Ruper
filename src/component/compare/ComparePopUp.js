"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCompareProducts } from "@services/productService";
import { AiFillStar } from "react-icons/ai";
import { useShopProduct } from "@context/ShopProductContext";
const ComparePopUp = () => {
  const { comparePopUpActive, handleCloseComparePopUp, currentCompareProduct } = useShopProduct();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchCompareProducts = (id) => {
      getCompareProducts(id).then((res) => {
        setProducts(res);
      });
    };
    if (currentCompareProduct !== "") {
      fetchCompareProducts(currentCompareProduct);
    }
  }, [currentCompareProduct]);
  return (
    <div className={`compare-popup ${comparePopUpActive ? "active" : ""}`}>
      <div className="compare-popup-inner">
        <div className="compare-table">
          <div className="compare-table-inner">
            <Link
              href="#"
              id="compare-table-close"
              className="compare-table-close"
              onClick={handleCloseComparePopUp}>
              <span className="compare-table-close-icon"></span>
            </Link>
            <div className="compare-table-items">
              <table id="product-table" className="product-table">
                <thead>
                  <tr>
                    <th>
                      <Link href="#" className="compare-table-settings">
                        Compare
                      </Link>
                    </th>
                    {products?.map(({ _id, name }) => (
                      <th key={_id}>
                        <Link href={`/product/${_id}`}>{name}</Link>
                        <span className="remove">remove</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-image">
                    <td className="td-label">Image</td>
                    {products?.map(({ _id, imageUrl }) => (
                      <td key={_id}>
                        <Link href={`/product/${_id}`}>
                          <Image width="600" height="600" src={imageUrl[0]} alt="image" />
                        </Link>
                      </td>
                    ))}
                  </tr>
                  <tr className="tr-sku">
                    <td className="td-label">SKU</td>
                    {products?.map(({ _id, sku }) => (
                      <td key={_id}>{sku}</td>
                    ))}
                  </tr>
                  <tr className="tr-rating">
                    <td className="td-label">Rating</td>
                    {products?.map(({ _id, comment }) => (
                      <td key={_id}>
                        <div>
                          <span style={{ width: "80%" }}>
                            <AiFillStar color="#fcad02" />
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="tr-price">
                    <td className="td-label">Price</td>
                    {products?.map(({ _id, price, discount }) => {
                      if (discount)
                        return (
                          <td key={_id}>
                            <del>
                              <span className="amount">${price}</span>
                            </del>
                            <ins>
                              <span className="amount">
                                ${Math.ceil((price * (100 - discount)) / 100)}
                              </span>
                            </ins>
                          </td>
                        );
                      return (
                        <td key={_id}>
                          <span className="amount">${price}</span>
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="tr-add-to-cart">
                    <td className="td-label">Add to cart</td>
                    {products?.map(({ _id }) => (
                      <td key={_id}>
                        <div data-title="Add to cart">
                          <Link href="#" className="button">
                            Add to cart
                          </Link>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="tr-description">
                    <td className="td-label">Description</td>
                    {products?.map(({ _id, description }) => (
                      <td key={_id}>{description}</td>
                    ))}
                  </tr>
                  <tr className="tr-content">
                    <td className="td-label">Content</td>
                    {products?.map(({ _id, description }) => (
                      <td key={_id}>{description}</td>
                    ))}
                  </tr>
                  <tr className="tr-dimensions">
                    <td className="td-label">Dimensions</td>
                    {products?.map(({ _id }) => (
                      <td key={_id}>N/A</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePopUp;
