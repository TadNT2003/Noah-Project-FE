import { LucideIcon } from "lucide-react";
import TechListItem from "../items/techListItem";

export default function SkillCard({
  icon: Icon,
  field,
  techologies,
}: {
  icon: LucideIcon;
  field: string;
  techologies: string[];
}) {
  return (
    <div className=" flex flex-col px-simple600 py-simple400 bg-weaker-dark rounded-2xl">
      <div className=" flex justify-center items-center w-12 h-12 bg-red-800/25 rounded-full">
        <Icon color="#ef4444" size={32}></Icon>
      </div>
      <div className=" flex flex-row pt-simple300 w-fit">
        <span className=" text-2xl/8 font-semibold">{field}</span>
      </div>
      {techologies.map((item, index) => {
        return <TechListItem key={index}>{item}</TechListItem>;
      })}
    </div>
  );
}
