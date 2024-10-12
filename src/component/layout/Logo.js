"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
const Logo = () => {
  const searchParams = useSearchParams();
  const homePageType = searchParams.get("type");
  return (
    <div className="site-logo">
      <Link href={"/"}>
        <Image
          width={400}
          height={79}
          src={homePageType === "SCANDINAVIAN" ? "/logo-white.png" : "/logo.png"}
          alt="Ruper – Furniture HTML Theme"
        />
      </Link>
    </div>
  );
};

export default Logo;
