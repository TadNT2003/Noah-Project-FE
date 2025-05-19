import { H1TagUnderlineRed } from "@/components/html/h1Tag";
import PTag from "@/components/html/pTag";
import SkillCard from "@/components/layouts/skillCard";
import {
  CodeXml,
  Cpu,
  Database,
  PanelsTopLeft,
  Server,
  Waypoints,
} from "lucide-react";

export default function MySkills() {
  return (
    <section
      id="skills"
      className=" flex flex-col px-[100px] py-section space-y-simple600"
    >
      <div className=" flex flex-col items-center px-[120px]">
        <H1TagUnderlineRed>My Skills</H1TagUnderlineRed>
        <PTag className=" text-center">
          I&apos;ve worked with a variety of technologies in the software
          development world. Here are some of my main areas of experience
        </PTag>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-simple800">
        <SkillCard
          icon={PanelsTopLeft}
          field={"Frontend Development"}
          techologies={[
            "React",
            "Next.js",
            "Typescript",
            "Tailwind CSS",
            "SASS",
          ]}
        ></SkillCard>
        <SkillCard
          icon={Server}
          field={"Backend Development"}
          techologies={[
            "Node.js",
            "Nest.js",
            "Java Spring Boot",
            "REST API",
            "Postman",
          ]}
        ></SkillCard>
        <SkillCard
          icon={Database}
          field={"Database"}
          techologies={[
            "MS SQL",
            "MySQL",
            "MongoDB",
            "Oracle",
            "Object-Relational Mapping",
          ]}
        ></SkillCard>
        <SkillCard
          icon={CodeXml}
          field={"DevOps"}
          techologies={[
            "Git",
            "CI/CD",
            "Github Action",
            "Docker",
            "Dev container",
          ]}
        ></SkillCard>
        <SkillCard
          icon={Cpu}
          field={"Artificial Intelligence"}
          techologies={[
            "Neural Network",
            "Natural Language Processing",
            "Numpy",
            "Pytorch",
            "Tensorflow",
          ]}
        ></SkillCard>
        <SkillCard
          icon={Waypoints}
          field={"Network Infrastruture"}
          techologies={["SSH", "DDNS", "Proxy - VPN", "Cloudflare", "NGINX"]}
        ></SkillCard>
      </div>
    </section>
  );
}
