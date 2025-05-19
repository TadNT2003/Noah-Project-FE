import { H1TagUnderlineRed } from "@/components/html/h1Tag";
import PTag from "@/components/html/pTag";
import { ButtonRedDoc } from "@/components/items/buttons";
import { Mail, User } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className=" flex flex-col justify-start items-end space-x-2.5 pl-side-large py-section"
    >
      <div className=" flex flex-row justify-start items-start space-x-simple400 w-full">
        <figure className=" flex flex-col w-fit h-fit px-[79px] pt-24 space-y-simple800">
          <Image
            src={"/"}
            alt=""
            width={394}
            height={394}
            className=" border-red border-2 rounded-full"
          ></Image>
          <div className=" flex flex-col space-y-simple400 items-start justify-start">
            <div className=" flex flex-row items-center space-x-1">
              <User size={32} color="#dc2626"></User>
              <span className=" text-2xl/8 font-semibold text-white">
                Nguyen Thanh Dat
              </span>
            </div>
            <div className=" flex flex-row items-center space-x-1">
              <Mail size={32} color="#dc2626"></Mail>
              <span className=" text-2xl/8 font-semibold text-white">
                ntdatwows2003@gmail.com
              </span>
            </div>
          </div>
        </figure>
        <div className=" flex flex-col items-center px-[78px] space-y-simple300">
          <div className=" flex flex-col">
            <H1TagUnderlineRed>About me</H1TagUnderlineRed>
            <PTag>
              I&apos;m a passionate fullstack developer with expertise in
              building modern web applications. With over 5 years of experience
              in the industry, I&apos;ve worked on a variety of projects ranging
              from small business websites to complex enterprise applications.
            </PTag>
            <PTag>
              My approach to development focuses on creating clean, maintainable
              code that delivers exceptional user experiences. I&apos;m
              constantly learning and adapting to new technologies to stay at
              the forefront of web development.
            </PTag>
            <div className=" flex py-simple600">
              <ButtonRedDoc>Download Resume</ButtonRedDoc>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
