import Image from "next/image";

import territory26 from "../assets/Regions/26.png";
import territory27 from "../assets/Regions/27.png";
import territory28 from "../assets/Regions/28.png";
import territory29 from "../assets/Regions/29.png";
import territory30 from "../assets/Regions/30.png";
import territory31 from "../assets/Regions/31.png";
import territory32 from "../assets/Regions/32.png";
import territory33 from "../assets/Regions/33.png";
import territory34 from "../assets/Regions/34.png";
import territory35 from "../assets/Regions/35.png";
import territory36 from "../assets/Regions/36.png";
import territory37 from "../assets/Regions/37.png";

export default function Game() {
  return (
    <div className="relative top-[50px] left-[480px] scale-[60%]">
      <div className="absolute top-[7px] left-[0px]">
        <Image src={territory26} alt="territory26" />
      </div>
      <div className="absolute top-[34px] left-[178px]">
        <Image src={territory27} alt="territory27" />
      </div>
      <div className="absolute top-[1px] left-[283px]">
        <Image src={territory28} alt="territory28" />
      </div>
      <div className="absolute top-[3px] left-[362px]">
        <Image src={territory29} alt="territory29" />
      </div>
      <div className="absolute top-[138px] left-[282px]">
        <Image src={territory30} alt="territory30" />
      </div>
      <div className="absolute top-[302px] left-[272px]">
        <Image src={territory31} alt="territory31" />
      </div>
      <div className="absolute top-[320px] left-[440px]">
        {" "}
        <Image src={territory32} alt="territory32" />
      </div>
      <div className="absolute top-[234px] left-[-53px]">
        <Image src={territory33} alt="territory33" />
      </div>
      <div className="absolute top-[316px] left-[148px]">
        <Image src={territory34} alt="territory34" />
      </div>
      <div className="absolute top-[387px] left-[-187px]">
        <Image src={territory35} alt="territory35" />
      </div>
      <div className="absolute top-[450px] left-[59px]">
        <Image src={territory36} alt="territory36" />
      </div>
      <div className="absolute top-[478px] left-[204px]">
        <Image src={territory37} alt="territory37" />
      </div>
    </div>
  );
}
