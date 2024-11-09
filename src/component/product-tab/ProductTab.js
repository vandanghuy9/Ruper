"use client";
import { MdOutlineRateReview } from "react-icons/md";
import Link from "next/link";
import { Fragment, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Comment from "./Comment";
import { saveProductReviews } from "@services/productService";
import { errorNoti, successNoti } from "@utils/notification/notification";
const tabs = [
  {
    id: 0,
    href: "description",
    content: "Description",
  },
  {
    id: 1,
    href: "additional-information",
    content: "Additional information",
  },
  {
    id: 2,
    href: "reviews",
    content: "Reviews",
  },
];
const ProductTab = ({ product }) => {
  const [onActive, setOnActive] = useState(1);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const { stocks } = product;
  let sizes = stocks.map((item) => item.size);
  sizes = sizes.filter((item, index) => sizes.indexOf(item) === index);
  let colors = stocks.map((item) => item.color);
  colors = colors.filter((item, index) => colors.indexOf(item) === index);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      author: null,
      email: null,
      comment: null,
    },
  });
  const onSubmit = async (data) => {
    if (rating === 0) {
      return errorNoti("Please give this product a rating");
    }
    saveProductReviews({
      productId: product._id,
      ...data,
      rating,
    })
      .then((res) => {
        successNoti(res.message);
      })
      .catch((error) => {
        errorNoti(error.response.data.message);
      });
  };
  return (
    <div className="product-tabs">
      <div className="section-padding">
        <div className="section-container p-l-r">
          <div className="product-tabs-wrap">
            <ul className="nav nav-tabs" role="tablist">
              {tabs.map(({ id, href, content }, i) => (
                <li key={i} className="nav-item">
                  <Link
                    className={onActive === id ? "nav-link active" : "nav-link"}
                    href={"#" + href}
                    onClick={(e) => setOnActive(id)}>
                    {content}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="tab-content">
              <div
                className={onActive === 0 ? "tab-pane fade show active" : "tab-pane fade"}
                id="description"
                role="tabpanel">
                <p>{product.description}</p>
              </div>
              <div
                className={onActive === 1 ? "tab-pane fade show active" : "tab-pane fade"}
                id="additional-information"
                role="tabpanel">
                <table className="product-attributes">
                  <tbody>
                    <tr className="attribute-item">
                      <th className="attribute-label">Color</th>
                      <td className="attribute-value">
                        {colors.map((i) => (
                          <Fragment key={i}>{i + " "}</Fragment>
                        ))}
                      </td>
                    </tr>
                    <tr className="attribute-item">
                      <th className="attribute-label">Size</th>
                      <td className="attribute-value">
                        {sizes.map((i) => (
                          <Fragment key={i}>{i + " "}</Fragment>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className={onActive === 2 ? "tab-pane fade show active" : "tab-pane fade"}
                id="reviews"
                role="tabpanel">
                <div id="reviews" className="product-reviews">
                  <div id="comments">
                    <h2 className="reviews-title">
                      {product?.comment?.length} {product.comment.length > 1 ? "reviews" : "review"}
                      for
                      <span> {product.name}</span>
                    </h2>
                    <ol className="comment-list">
                      {product?.comment?.map((item, index) => (
                        <Comment key={index} comment={item} />
                      ))}
                    </ol>
                  </div>
                  <div id="review-form">
                    <div id="respond" className="comment-respond">
                      <span id="reply-title" className="comment-reply-title">
                        <MdOutlineRateReview size={26} />
                        Add a review
                      </span>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        id="comment-form"
                        className="comment-form">
                        <p className="comment-notes">
                          <span id="email-notes">Your email address will not be published.</span>
                          Required fields are marked
                          <span className="required">*</span>
                        </p>
                        <div className="comment-form-rating">
                          <label htmlFor="rating">Your rating</label>
                          <p className="stars">
                            <span>
                              {[...Array(5)].map((star, i) => {
                                const currentRating = i + 1;
                                return (
                                  <AiFillStar
                                    key={i}
                                    color={
                                      currentRating <= (hover || rating) ? "#fcad02" : "#868686"
                                    }
                                    onMouseEnter={() => setHover(currentRating)}
                                    onMouseLeave={() => setHover(null)}
                                    onClick={() => {
                                      setRating(currentRating);
                                    }}
                                  />
                                );
                              })}
                            </span>
                          </p>
                        </div>
                        <p className="comment-form-comment">
                          <textarea
                            {...register("comment", { required: true })}
                            placeholder="Your Reviews *"
                            cols="45"
                            rows="8"></textarea>
                        </p>
                        <div className="content-info-reviews">
                          <p className="comment-form-author">
                            <input
                              {...register("author", { required: true })}
                              placeholder="Name *"
                              size="30"
                            />
                          </p>
                          <p className="comment-form-email">
                            <input
                              placeholder="Email *"
                              size="30"
                              {...register("email", { required: true })}
                            />
                          </p>
                          <p className="form-submit">
                            <input
                              name="submit"
                              type="submit"
                              id="submit"
                              className="submit"
                              value="Submit"
                            />
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
