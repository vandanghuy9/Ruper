import Link from "next/link";
const WhiteButton = ({ link, buttonText }) => {
  return (
    <Link href={link} className="button button-white">
      {buttonText}
    </Link>
  );
};
export default WhiteButton;
