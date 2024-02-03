"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useForm } from "react-hook-form";
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
  const onSubmit = (data) => console.log(data);
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
              </div>
              <div
                className={onActive === 1 ? "tab-pane fade show active" : "tab-pane fade"}
                id="additional-information"
                role="tabpanel">
                <table className="product-attributes">
                  <tbody>
                    <tr className="attribute-item">
                      <th className="attribute-label">Color</th>
                      <td className="attribute-value">{colors.map((i) => i + " ")}</td>
                    </tr>
                    <tr className="attribute-item">
                      <th className="attribute-label">Size</th>
                      <td className="attribute-value">{sizes.map((i) => i + " ")}</td>
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
                      1 review for <span>Bora Armchair</span>
                    </h2>
                    <ol className="comment-list">
                      <li className="review">
                        <div className="content-comment-container">
                          <div className="comment-container">
                            <Image
                              src="/user.jpg"
                              className="avatar"
                              height="60"
                              width="60"
                              alt="avatar"></Image>
                            <div className="comment-text">
                              <div className="rating small">
                                <AiFillStar size={20} color="feda00" />
                                <AiFillStar size={20} color="feda00" />
                                <AiFillStar size={20} color="feda00" />
                                <AiFillStar size={20} color="feda00" />
                                <AiFillStar size={20} color="feda00" />
                              </div>
                              <div className="review-author">Peter Capidal</div>
                              <div className="review-time">January 12, 2022</div>
                            </div>
                          </div>
                          <div className="description">
                            <p>good</p>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div id="review-form">
                    <div id="respond" className="comment-respond">
                      <span id="reply-title" className="comment-reply-title">
                        Add a review
                      </span>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        id="comment-form"
                        className="comment-form">
                        <p className="comment-notes">
                          <span id="email-notes">Your email address will not be published.</span>{" "}
                          Required fields are marked <span className="required">*</span>
                        </p>
                        <div className="comment-form-rating">
                          <label htmlFor="rating">Your rating</label>
                          <p className="stars">
                            <span>
                              <Link className="star-1" href="#">
                                1
                              </Link>
                              <Link className="star-2" href="#">
                                2
                              </Link>
                              <Link className="star-3" href="#">
                                3
                              </Link>
                              <Link className="star-4" href="#">
                                4
                              </Link>
                              <Link className="star-5" href="#">
                                5
                              </Link>
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
