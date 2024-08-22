import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const TestimonialItem = ({ content, img, name }) => {
  return (
    <div className="testimonial-wrap slick-wrap">
      <div className="slick-sliders">
        <div className="testimonial-content">
          <div className="item">
            <div className="testimonial-item">
              <div className="rating">
                <AiFillStar color="#f5bf1c" />
                <AiFillStar color="#f5bf1c" />
                <AiFillStar color="#f5bf1c" />
                <AiFillStar color="#f5bf1c" />
                <AiFillStar color="#f5bf1c" />
              </div>
              <div className="testimonial-excerpt">{content}</div>
            </div>
            <div className="testimonial-image image-position-top">
              <div className="thumbnail">
                <Image width={62} height={62} src={img} alt="" />
              </div>
              <div className="testimonial-info">
                <h2 className="testimonial-customer-name">{name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
