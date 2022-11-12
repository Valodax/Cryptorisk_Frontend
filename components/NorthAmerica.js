import Image from "next/image";
import svg from "../assets/Regions/0.svg";
import svg2 from "../assets/map.svg";
import territory0 from "../assets/Regions/0.png";
import territorysvg0 from "../assets/Regions/0.svg";
import territory1 from "../assets/Regions/1.png";
import territory2 from "../assets/Regions/2.png";
import territory3 from "../assets/Regions/3.png";
import territory4 from "../assets/Regions/4.png";
import territory5 from "../assets/Regions/5.png";
import territory6 from "../assets/Regions/6.png";
import territory7 from "../assets/Regions/7.png";
import territory8 from "../assets/Regions/8.png";

export default function Game() {
  return (
    <div className="relative left-[-185px] top-[46px] scale-[60%]">
      <div className="absolute left-[0px] top-[0px]">
        <Image src={territory0} alt="territory0" />
      </div>
      <div className="absolute left-[174px] top-[12px]">
        <Image src={territory1} alt="territory1" />
      </div>
      <div className="absolute left-[310px] top-[-40px]">
        <Image src={territory2} alt="territory2" />
      </div>
      <div className="absolute left-[151px] top-[167px]">
        <Image src={territory3} alt="territory3" />
      </div>
      <div className="absolute left-[285px] top-[193px]">
        <Image src={territory4} alt="territory4" />
      </div>
      <div className="absolute left-[422px] top-[185px]">
        <Image src={territory5} alt="territory5" />
      </div>
      <div className="absolute left-[147px] top-[291px]">
        <Image src={territory6} alt="territory6" />
      </div>
      <div className="absolute left-[239px] top-[313px]">
        <Image src={territory7} alt="territory7" />
      </div>
      <div className="absolute left-[156px] top-[391px]">
        <Image src={territory8} alt="territory8" />
      </div>
      <div className="absolute left-[500px] top-[391px]"></div>
      <div></div>
    </div>
  );
}
