import Image from "next/image";
import territory20 from "../assets/Regions/20.png";
import territory21 from "../assets/Regions/21.png";
import territory22 from "../assets/Regions/22.png";
import territory23 from "../assets/Regions/23.png";
import territory24 from "../assets/Regions/24.png";
import territory25 from "../assets/Regions/25.png";

export default function Game() {
  return (
    <div className="relative top-[486px] left-[256px] scale-[60%]">
      <div className="absolute bottom-[45px]">
        <button>
          <Image
            src={territory20}
            alt="territory20"
            onClick={console.log("NIGGER")}
          />
        </button>
      </div>
      <div className="absolute bottom-[172px] left-[127px]">
        <Image src={territory21} alt="territory21" />
      </div>
      <div className="absolute bottom-[22px] left-[176px]">
        <Image src={territory22} alt="territory22" />
      </div>
      <div className="absolute bottom-[3px] left-[246px]">
        <Image src={territory23} alt="territory23" />
      </div>
      <div className="absolute bottom-[-139px] left-[174px]">
        <Image src={territory24} alt="territory24" />
      </div>
      <div className="absolute left-[370px]">
        <Image src={territory25} alt="territory25" />
      </div>
    </div>
  );
}
