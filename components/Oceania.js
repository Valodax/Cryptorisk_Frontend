import Image from "next/image";
import territory38 from "../assets/Regions/38.png";
import territory39 from "../assets/Regions/39.png";
import territory40 from "../assets/Regions/40.png";
import territory41 from "../assets/Regions/41.png";

export default function Game() {
  return (
    <div className="relative top-[405px] left-[665px] scale-[60%]">
      <div className="absolute top-[0px] left-[0px]">
        <Image src={territory38} alt="territory38" />
      </div>
      <div className="absolute top-[40px] left-[220px]">
        <Image src={territory39} alt="territory39" />
      </div>
      <div className="absolute top-[110px] left-[70px]">
        <Image src={territory40} alt="territory40" />
      </div>
      <div className="absolute top-[109px] left-[176px]">
        <Image src={territory41} alt="territory41" href="facebook.com" />
      </div>
    </div>
  );
}
