import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
export default function NotFound() {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="page-404">
                  <div className="content-page-404">
                    <div className="title-error">404</div>
                    <div className="sub-title">Oops! That page can not be found.</div>
                    <div className="sub-error">
                      We are really sorry but we can not seem to find the page you were looking for.
                    </div>
                    <Link className="button" href="/">
                      Back The Homepage
                      <IoArrowForward size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
