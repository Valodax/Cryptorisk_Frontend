import Image from "next/image";
import NorthAmerica from "../components/NorthAmerica";
import SouthAmerica from "../components/SouthAmerica";
import Europe from "../components/Europe";
import Africa from "../components/Africa";
import Asia from "../components/Asia";
import Oceania from "../components/Oceania";
export default function Game() {
  return (
    <div className="static w-[1150px] h-[700px] border-2 ">
      <NorthAmerica />
      <SouthAmerica />
      <Europe />
      <Africa />
      <Asia />
      <Oceania />
    </div>

    //     <div>
    //   <Image src={territory00} alt="territory00" />
    // </div>
  );
}
