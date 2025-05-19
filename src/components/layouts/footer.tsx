import { siFacebook, siGithub, siGmail, siX } from "simple-icons";
import H2Tag from "../html/h2Tag";
import SocialLink from "../items/socialLink";
import { NavItemNone } from "../items/navItems";
import PTag from "../html/pTag";

export default function Footer() {
  return (
    <footer className=" flex flex-col pt-section pb-simple150 items-center space-y-2.5 bg-weaker-dark">
      <H2Tag>Nguyen Thanh Dat</H2Tag>
      <div className=" flex flex-row space-x-8 px-simple250 py-simple300">
        <SocialLink href="" icon={siGithub}></SocialLink>
        <SocialLink href="" icon={siFacebook}></SocialLink>
        <SocialLink href="" icon={siX}></SocialLink>
        <SocialLink href="" icon={siGmail}></SocialLink>
      </div>
      <nav className=" flex flex-row h-fit">
        <NavItemNone>Home</NavItemNone>
        <NavItemNone>About</NavItemNone>
        <NavItemNone>Projects</NavItemNone>
        <NavItemNone>Skills</NavItemNone>
        <NavItemNone>Contact</NavItemNone>
      </nav>
      <PTag className=" text-center">
        @ 2025 Nguyen Thanh Dat. All rights reserved
        <br />
        Built with Next.js and Tailwind
      </PTag>
    </footer>
  );
}
