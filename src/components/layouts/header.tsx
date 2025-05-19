import Image from "next/image";
import NavBarTop from "./navBarTop";
import { CountrySmallIcons, SmallIcons } from "../items/smallIcons";
import { Moon, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className=" flex flex-row justify-between h-16 sticky top-0 z-10 border-b-2 border-b-stronger-gray bg-black">
      <div className=" flex flex-row h-full">
        <figure className=" h-full w-fit py-simple200 px-section">
          <Image
            src="/noah-high-resolution-logo-transparent.png"
            alt={""}
            width={239}
            height={48}
            className=" object-contain h-full w-full"
          ></Image>
        </figure>
        <NavBarTop
          navPage={[["Home"], ["About"], ["Projects"], ["Skills"], ["Contact"]]}
        ></NavBarTop>
      </div>
      <div className=" flex flex-row items-center w-fit space-x-2.5 px-section">
        <CountrySmallIcons countryCode="GB"></CountrySmallIcons>
        <SmallIcons icon={Settings}></SmallIcons>
        <SmallIcons icon={Moon}></SmallIcons>
      </div>
    </header>
  );
}
