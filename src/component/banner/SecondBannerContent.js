import Link from "next/link";
import WhiteButton from "../button/WhiteButton";

const SecondBannerContent = ({ bannerTitle, desc, buttonText, link }) => {
  return (
    <>
      <Link className="link-title" href={link}>
        <h3 className="title-banner">{bannerTitle}</h3>
      </Link>
      <div className="banner-image-description">{desc}</div>
      {buttonText !== "" && <WhiteButton href={link} buttonText={buttonText} />}
    </>
  );
};
export default SecondBannerContent;
