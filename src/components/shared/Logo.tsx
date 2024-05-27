"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        alt="Logo"
        className="hidden cursor-pointer mx-4 sm:block"
        height="20"
        width="50"
        src="/images/logo.svg"
      />
    </Link>
  );
};

export default Logo;