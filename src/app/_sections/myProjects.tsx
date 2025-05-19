import { H1TagUnderlineRed } from "@/components/html/h1Tag";
import PTag from "@/components/html/pTag";
import ProjectCard from "@/components/layouts/projectCard";

export default function MyProjects() {
  return (
    <section
      id="projects"
      className=" flex flex-col px-[100px] py-section space-y-simple600 bg-weaker-dark"
    >
      <div className=" flex flex-col items-center px-[120px]">
        <H1TagUnderlineRed>My Projects</H1TagUnderlineRed>
        <PTag className=" text-center">
          Here are some of my personal projects. Each projects reflects my
          journey in tackling obstacles of an aspect in software development
        </PTag>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-simple800">
        <ProjectCard
          name="E-Commerce Platform"
          discription={
            "A full-featured e-commerce platform with product management, cart functionality, and payment processing."
          }
          techologies={["Next.js", "Typescript", "MongoDB"]}
        ></ProjectCard>
        <ProjectCard
          name="Task Management App"
          discription={
            "A collaborative task management app with real-time updates and team workspaces."
          }
          techologies={["React", "Node.js", "PostgreSQL"]}
        ></ProjectCard>
        <ProjectCard
          name="Finance Dashboard"
          discription={
            "An interactive dashboard for tracking personal finances with data visualization and budget planning."
          }
          techologies={["Next.js", "Nest.js", "MS SQL"]}
        ></ProjectCard>
        <ProjectCard
          name="Social Media Platform"
          discription={
            "A social networking platform with user profiles, posts, comments, and real-time notifications."
          }
          techologies={["Next.js", "GraphQL", "MongoDB"]}
        ></ProjectCard>
        <ProjectCard
          name="AI Content Generator"
          discription={
            "An interactive dashboard for tracking personal finances with data visualization and budget planning."
          }
          techologies={["FastAPI", "Python", "TensorFlow"]}
        ></ProjectCard>
        <ProjectCard
          name="Real Estate Marketplace"
          discription={
            "A platform for listing and searching properties with advanced filtering and map integration."
          }
          techologies={["Node.js", "React", "Google Maps API"]}
        ></ProjectCard>
      </div>
    </section>
  );
}
