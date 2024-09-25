import Image from "next/image";
import Link from "next/link";
const CategoryBannerItem = ({ item }) => {
  const {
    link,
    img: { width, height },
    image,
    title,
  } = item;
  return (
    <div className="cat-item">
      <div className="cat-image">
        <Link href={link}>
          <Image width={width} height={height} src={image} alt="Product Category" />
        </Link>
      </div>
      <div className="cat-title">
        <Link href={link}>
          <h3>{title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default CategoryBannerItem;
