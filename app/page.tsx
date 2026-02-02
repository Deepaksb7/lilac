import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="pb-[126px] bg-[#e5e0da]">
      <Section4 />
      </div>
      <div className="pb-[126px] bg-[#e5e0da]">
      <Section5 />
      </div>
      <div className="py-[126px] ">
      <Section6 />
      </div>

      {/* <Section7 />
      <Section8 />
      <Section9 />
      <Section10 /> */}
    </main>
  );
}
