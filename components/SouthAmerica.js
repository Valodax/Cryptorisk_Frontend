import Image from "next/image";
import territory9 from "../assets/Regions/9.png";
import territory10 from "../assets/Regions/10.png";
import territory11 from "../assets/Regions/11.png";
import territory12 from "../assets/Regions/12.png";

export default function Game() {
  return (
    <div className="relative top-[343px] right-[-33px] scale-[60%]">
      <div className="absolute top-[72px] left-[20px]">
        <Image src={territory9} alt="territory9" />
      </div>
      <div className="absolute top-[140px] left-[7px]">
        <Image src={territory10} alt="territory10" />
      </div>
      <div className="absolute top-[125px] left-[67px]">
        <Image src={territory11} alt="territory11" />
      </div>
      <div className="absolute top-[280px] left-[72px]">
        <Image src={territory12} alt="territory12" />
      </div>
    </div>
  );
}
