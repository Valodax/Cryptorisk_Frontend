import Image from "next/image";
import board from "../assets/risk.png";
export default function Game() {
    return (
        <div>
            <Image src={board} alt="Game Board" />
        </div>
    );
}
