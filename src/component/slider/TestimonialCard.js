import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
const TestimonialCard = ({ content, img, name, title }) => {
  return (
    <div className="testimonial-content">
      <div className="item">
        <div className="testimonial-item">
          <div className="testimonial-icon">
            <div className="rating">
              <AiFillStar color="#f5bf1c" />
              <AiFillStar color="#f5bf1c" />
              <AiFillStar color="#f5bf1c" />
              <AiFillStar color="#f5bf1c" />
              <AiFillStar color="#f5bf1c" />
            </div>
            <span className="icon-quote">
              <FaQuoteRight />
            </span>
          </div>
          <h2 className="testimonial-title">{title}</h2>
          <div className="testimonial-excerpt">{content}</div>
        </div>
        <div className="testimonial-image image-position-top">
          <div className="thumbnail">
            <Image width={62} height={62} src={img} alt="testimonial" />
          </div>
          <div className="testimonial-info">
            <h2 className="testimonial-customer-name">{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
