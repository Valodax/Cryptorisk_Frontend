import Image from "next/image";
import territory13 from "../assets/Regions/13.png";
import territory14 from "../assets/Regions/14.png";
import territory15 from "../assets/Regions/15.png";
import territory16 from "../assets/Regions/16.png";
import territory17 from "../assets/Regions/17.png";
import territory18 from "../assets/Regions/18.png";
import territory19 from "../assets/Regions/19.png";

export default function Game() {
  return (
    <div className="relative left-[300px] scale-[70%]">
      <div className="absolute left-[-140px] bottom-[-125px]">
        <Image src={territory13} alt="territory13" />
      </div>
      <div className="absolute left-[] bottom-[-200px]">
        <Image src={territory14} alt="territory14" />
      </div>
      <div className="absolute left-[-80px] bottom-[-220px]">
        <Image src={territory15} alt="territory15" />
      </div>
      <div className="absolute left-[-18px] bottom-[-265px]">
        <Image src={territory16} alt="territory16" />
      </div>
      <div className="absolute left-[86px] bottom-[-335px]">
        <Image src={territory17} alt="territory17" />
      </div>
      <div className="absolute left-[-80px] bottom-[-340px]">
        <Image src={territory18} alt="territory18" />
      </div>
      <div className="absolute left-[16px] bottom-[-338px]">
        <Image src={territory19} alt="territory19" />
      </div>
    </div>
  );
}
