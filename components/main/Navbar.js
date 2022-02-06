import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-30 mx-auto w-full bg-slate-900 bg-opacity-90 shadow-md">
        <div className="container">
          <div className="flex items-center justify-between py-4 text-xs font-light font-Fira">
            <Link href="/">
              <a className="flex items-center">
                <Image src="/logo.svg" height="35" width="40" />
              </a>
            </Link>
            <div className="flex items-center justify-end space-x-10">
              <ul className="flex justify-center space-x-6">
                <li>
                  <Link href="">
                    <a className="flex items-center text-main-200">Whos Me.?</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a className="flex items-center text-main-200">
                      Experience
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a className="flex items-center text-main-200">Project</a>
                  </Link>
                </li>
              </ul>
              <button className=" py-2 px-4 text-main-200">
                angkomuhtar@gmail.com
              </button>
              <button className="rounded-sm border border-main-200 py-2 px-4 text-main-200 ">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
