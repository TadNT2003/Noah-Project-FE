import { LucideIcon } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

export function SmallIcons({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <button className=" w-8 h-8 border-2 rounded-lg border-weaker-white flex flex-row justify-center items-center">
      <Icon color="#f3f4f6"></Icon>
    </button>
  );
}

export function CountrySmallIcons({ countryCode }: { countryCode: string }) {
  return (
    <button className=" w-8 h-8 border-2 rounded-lg border-weaker-white flex flex-row justify-center items-center">
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
        title="English"
      ></ReactCountryFlag>
    </button>
  );
}
