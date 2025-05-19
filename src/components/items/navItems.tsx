import { ChevronDown } from "lucide-react";

export function NavItemNone({ children: text }: { children: string }) {
  return (
    <button className=" flex flex-row py-simple600 px-[21px] items-center h-full w-fit">
      <span className=" text-2xl leading-6 font-medium text-gray">{text}</span>
    </button>
  );
}

export function NavItemExpandable({ children: text }: { children: string }) {
  return (
    <button className=" flex flex-row px-simple600 items-center h-full w-fit space-x-0.5">
      <span className=" text-2xl leading-6 font-medium text-gray">{text}</span>
      <ChevronDown></ChevronDown>
    </button>
  );
}
