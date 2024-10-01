import Link from "next/link";
import Image from "next/image";
const CountdownSection = () => {
  return (
    <div className="block block-countdown">
      <div className="row">
        <div className="col-md-6">
          <div className="countdown-wrap">
            <h2 className="countdown-title">Deals of the day.</h2>
            <div className="countdown-content-wrap">
              <h2 className="product-title">
                <Link href="/shop">Dining Table</Link>
              </h2>
              <div className="product-price">$150.00</div>
              <div className="countdown">
                <div className="countdown-deal">
                  <div className="product-countdown">
                    <span className="countdown-content">
                      <span className="days">
                        <span className="countdown-amount">00</span>
                        <span className="countdown-text">day</span>
                      </span>
                      <span className="countdown-section hours">
                        <span className="countdown-amount">00</span>
                        <span className="countdown-text">hour</span>
                      </span>
                      <span className="countdown-section mins">
                        <span className="countdown-amount">00</span>
                        <span className="countdown-text">min</span>
                      </span>
                      <span className="countdown-section secs">
                        <span className="countdown-amount">00</span>
                        <span className="countdown-text">sec</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="countdown-button">
                <Link href="/shop">View Details</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="position-center">
            <div className="countdown-img">
              <Image width={720} height={393} src={"/banner/countdown-1.png"} alt="" />
              <div className="sub-img">
                <Image
                  className="animation-round"
                  width={105}
                  height={105}
                  src="/logo-intro.png"
                  alt=""
                />
                <Image
                  className="image-center"
                  width={17}
                  height={20}
                  src="/logo-intro-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
