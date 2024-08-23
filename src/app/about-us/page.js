import FirstBannerSection from "@component/banner/about-us/FirstBannerSection";
import SecondBannerSection from "@component/banner/about-us/SecondBannerSection";
import BannerLayout from "@component/banner/about-us/BannerLayout";
import FeatureSection from "@component/feature/FeatureSection";
import ThirdBannerSection from "@component/banner/about-us/ThirdBannerSection";
import Testimonial from "@component/slider/Testimonial";
import BrandCarousel from "@component/slider/BrandCarousel";

export const metadata = {
  title: "About Us",
};

const AboutUsPage = () => {
  return (
    <div className="page-about-us">
      <FirstBannerSection />
      <SecondBannerSection />
      <BannerLayout>
        <FeatureSection isNoBorder={true} />
      </BannerLayout>
      <ThirdBannerSection />
      <Testimonial />
      <BrandCarousel />
    </div>
  );
};

export default AboutUsPage;
