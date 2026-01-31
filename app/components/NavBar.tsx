"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function NavBar() {
  const navRef = useRef(null);

  useGSAP(() => {
    let lastScroll = 0;
    let hideTimer = null;

    const showNav = () => {};
  });
  return (
    <div className="w-full h-20 py-[43px] px-[73px] flex justify-between items-center ">
      <div>
        <span className="font-gopher font-medium text-[38px]">Lilac Template</span>
      </div>
      <div>
        <nav className="flex text-[21px] gap-10 p-[4px]">
          <ul className="p-2">Blog</ul>
          <ul className="p-2">Contact</ul>
        </nav>
      </div>
    </div>
  );
}
