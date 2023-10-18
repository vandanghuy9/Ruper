import Link from "next/link";
const WhiteButton = ({ href, buttonText }) => {
  return (
    <Link href={href} className="button button-white">
      {buttonText}
    </Link>
  );
};
export default WhiteButton;
