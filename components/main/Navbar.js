import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-30 mx-auto w-full bg-slate-900/60 backdrop-blur-md shadow-md">
        <div className="container">
          <div className="flex items-center justify-between py-4 text-xs font-light font-Fira">
            <Link href="/">
              <a className="flex items-center" data-aos="zoom-out">
                <Image src="/logo.svg" height="35" width="40" />
              </a>
            </Link>
            <div className="flex items-center justify-end space-x-10">
              <ul className="flex justify-center space-x-6">
                <li data-aos="fade-down" data-aos-delay="250">
                  <Link href="#me">
                    <a className="flex items-center text-main-200 font-semibold">
                      Whos Me.?
                    </a>
                  </Link>
                </li>
                <li data-aos="fade-down" data-aos-delay="350">
                  <Link href="#exp">
                    <a className="flex items-center text-main-200 font-semibold">
                      Experience
                    </a>
                  </Link>
                </li>
                <li data-aos="fade-down" data-aos-delay="450">
                  <Link href="#project">
                    <a className="flex items-center text-main-200 font-semibold">
                      Project
                    </a>
                  </Link>
                </li>
              </ul>
              <a
                href="mailto:angkomuhtar@gmail.com"
                // target="_blank"
                className=" py-2 px-4 text-main-200 font-semibold"
                data-aos="fade-left"
                data-aos-delay="550"
              >
                angkomuhtar@gmail.com
              </a>
              <a
                href="/Mushawiruddin_Muhtar(Resume).PDF"
                download
                className="rounded-sm border border-main-200 py-2 px-4 text-main-200 font-semibold"
                data-aos="fade-left"
                data-aos-delay="650"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
