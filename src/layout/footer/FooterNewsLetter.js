"use client";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
const FooterNewsLetter = () => {
  const defaultInfor = {
    email: "",
  };
  const [infor, setInfor] = useState(defaultInfor);
  const handleChange = (e) => {
    setInfor((prevInfor) => ({
      ...prevInfor,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="block block-newsletter">
      <h2 className="block-title">Newsletter</h2>
      <div className="block-content">
        <div className="newsletter-text">
          Enter your email below to be the first to know about new collections and product launches.
        </div>
        <form action="" method="post" className="newsletter-form">
          <input
            type="email"
            name="email"
            value={infor.email}
            size="40"
            placeholder="Email address"
            onChange={handleChange}
          />
          <span className="btn-submit">
            <FaRegEnvelope className="icon" />
            <input type="submit" value="Subscribe" />
          </span>
        </form>
      </div>
    </div>
  );
};

export default FooterNewsLetter;
