import Image from "next/image";
import WhiteButton from "../button/WhiteButton";
import { AiFillPlayCircle } from "react-icons/ai";
const VideoBanner = () => {
  return (
    <div className="block block-video">
      <div className="section-row">
        <div className="section-column left">
          <div className="section-column-wrap">
            <div className="block-widget-wrap">
              <div className="block-widget-video">
                <div className="video-thumb">
                  <Image
                    width={565}
                    height={635}
                    className="img-responsive"
                    src={"/banner/video-1.jpg"}
                    alt="Image Video"
                  ></Image>
                </div>
                <div className="video-wrap">
                  <div className="video">
                    <AiFillPlayCircle />
                  </div>
                  <div
                    className="content-video modal fade"
                    id="video-popup"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-body">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              className="embed-responsive-item"
                              src="https://www.youtube.com/embed/VQOJaYUPZR8"
                              id="video"
                              allowscriptaccess="always"
                              allow="autoplay"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-column right">
          <div className="section-column-wrap">
            <div className="block-widget-wrap">
              <div className="block-widget-video">
                <div className="video-text">
                  <h2 className="title">
                    From bottle <br></br>to chair
                  </h2>
                  <div className="description">
                    In our design and production processes, we are always
                    looking at where environmental thinking and economic
                    improvement intersect – resulting in minimal waste in every
                    aspect. The way we utilise PET Technology, emphasizes this
                    vision.
                  </div>
                  <WhiteButton href={"/"} buttonText={"OUR STORIES"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
