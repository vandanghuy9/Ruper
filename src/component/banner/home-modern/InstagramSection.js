import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
const InstagramSection = () => {
  return (
    <div className="block block-instagram">
      <div className="block-widget-wrap">
        <div className="block-title">
          <h2>Let's Be Friends!</h2>
        </div>
        <div className="block-content">
          <div className="row">
            <div className="col-md-6 left sm-m-b">
              <Link className="instagram" href="https://www.instagram.com/vandanghuy9">
                <Image width={690} height={690} src="/banner/instagram-1.jpg" alt="Image Slider" />
                <FaInstagram className="icon" size={30} />
              </Link>
            </div>
            <div className="col-md-6 right">
              <div className="row">
                <div className="col-md-6 sm-m-b">
                  <Link className="instagram" href="https://www.instagram.com/vandanghuy9">
                    <Image
                      width={690}
                      height={690}
                      src="/banner/instagram-2.jpg"
                      alt="Image Slider"
                    />
                    <FaInstagram className="icon" size={30} />
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link className="instagram" href="https://www.instagram.com/vandanghuy9">
                    <Image
                      width={690}
                      height={690}
                      src="/banner/instagram-3.jpg"
                      alt="Image Slider"
                    />
                    <FaInstagram className="icon" size={30} />
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 sm-m-b">
                  <Link className="instagram" href="https://www.instagram.com/vandanghuy9">
                    <Image
                      width={690}
                      height={690}
                      src="/banner/instagram-4.jpg"
                      alt="Image Slider"
                    />
                    <FaInstagram className="icon" size={30} />
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link className="instagram" href="https://www.instagram.com/vandanghuy9">
                    <Image
                      width={690}
                      height={690}
                      src="/banner/instagram-5.jpg"
                      alt="Image Slider"
                    />
                    <FaInstagram className="icon" size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
