import { Dot } from "lucide-react";

export default function TechListItem({ children: text }: { children: string }) {
  return (
    <div className=" flex flex-row items-center w-fit pr-simple300 py-simple200">
      <Dot strokeWidth={"6px"} color="#dc2626"></Dot>
      <span className=" text-lg leading-7 font-normal text-white">{text}</span>
    </div>
  );
}
