import Image from "next/image";
import PTag from "../html/pTag";
import TechTag from "../items/techTag";
import ProjectLink from "../items/projectLink";
import { Code, ExternalLink } from "lucide-react";

export default function ProjectCard({
  name,
  discription,
  techologies,
}: {
  name: string;
  discription: string;
  techologies: string[];
}) {
  return (
    <div className=" flex flex-col border-[1px] border-stronger-gray rounded-2xl">
      <figure className=" w-full h-[200px]">
        <Image
          src={"/"}
          alt=""
          width={400}
          height={200}
          className="w-full h-full rounded-t-2xl"
        ></Image>
      </figure>
      <div className=" flex flex-col px-simple600 py-simple400">
        <div className=" flex flex-row justify-center items-center w-fit">
          <span className=" text-2xl/8 font-semibold text-weaker-white">
            {name}
          </span>
        </div>
        <PTag>{discription}</PTag>
        <div className=" flex flex-row flex-wrap space-x-1.5 gap-y-1.5">
          {techologies.map((item, index) => {
            return <TechTag key={index}>{item}</TechTag>;
          })}
        </div>
        <div className=" flex flex-row pt-simple400 pb-simple200 space-x-2.5">
          <ProjectLink icon={ExternalLink} href={""}>
            Demo
          </ProjectLink>
          <ProjectLink icon={Code} href={""}>
            Code
          </ProjectLink>
        </div>
      </div>
    </div>
  );
}
