"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="site-logo">
      <Link href={"/"}>
        <Image width={400} height={79} src="/logo.png" alt="Ruper – Furniture HTML Theme" />
      </Link>
    </div>
  );
};

export default Logo;
