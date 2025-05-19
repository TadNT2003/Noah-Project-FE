import H1Tag from "@/components/html/h1Tag";
import H2Tag from "@/components/html/h2Tag";
import PTag from "@/components/html/pTag";
import { ButtonBlackRed, ButtonRedLeftarrow } from "@/components/items/buttons";
import SocialLink from "@/components/items/socialLink";
import { siFacebook, siGithub, siX } from "simple-icons";

export default function PersonalHero() {
  return (
    <section
      id="home"
      className=" flex flex-col px-[100px] py-section items-center justify-start bg-weaker-dark"
    >
      <div className=" flex flex-col space-x-[1px] px-[120px] w-fit h-fit items-center justify-start">
        <PTag textStyle=" text-weaker-red">
          Hello, hope you don&apos;t mind the above. My name is
        </PTag>
        <H1Tag>Nguyen Thanh Dat</H1Tag>
        <H2Tag textStyle=" text-weaker-red">Computer Scientist</H2Tag>
        <PTag textStyle=" text-center">
          I&apos;m a Computer Science major specializing in Artificial
          Intelligence and Software development. Experienced in building robust
          applications with modern techologies
        </PTag>
        <div className=" flex flex-row w-fit py-simple600 space-x-4">
          <ButtonRedLeftarrow href="/#projects">
            View my work
          </ButtonRedLeftarrow>
          <ButtonBlackRed>Contact me</ButtonBlackRed>
        </div>
      </div>
      <div className=" flex flex-row px-2.5 pt-simple600 space-x-simple800 justify-center">
        <SocialLink href="" icon={siGithub}></SocialLink>
        <SocialLink href="" icon={siFacebook}></SocialLink>
        <SocialLink href="" icon={siX}></SocialLink>
      </div>
    </section>
  );
}
