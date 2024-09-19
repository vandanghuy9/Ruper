import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const WhiteButton = ({ href, buttonText }) => {
  return (
    <Link href={href} className="button button-white">
      {buttonText}
      <IoIosArrowRoundForward size={25} />
    </Link>
  );
};
export default WhiteButton;
