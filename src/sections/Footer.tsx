import logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex before:top-2 before:bottom-0 before:blur relative before:content[''] before:w-full before:bg-[linear-gradient(to_right, #F87BFF, #FB92CF, #FFDD9B, #C2F0B1, #2FD8FE)] before:absolute">
          <Image src={logo} alt="logo" width={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Help</Link>
          <Link href="#">careers </Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
      </div>
      <p className="mt-6">
        &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved
      </p>
    </footer>
  );
};
