import PTag from "@/components/pTag";
import H1Tag, { H1TagUnderlineRed } from "@/components/h1Tag";
import {
  ButtonRedDefault,
  ButtonRedDoc,
  ButtonRedLeftarrow,
} from "@/components/buttons";
import ProjectLink from "@/components/projectLink";
import { ExternalLink, Moon, Settings } from "lucide-react";
import TechTag from "@/components/techTag";
import TechListItem from "@/components/techListItem";
import { NavItemExpandable, NavItemNone } from "@/components/navItems";
import { CountrySmallIcons, SmallIcons } from "@/components/smallIcons";
import SocialLink from "@/components/socialLink";
import { siFacebook, siGithub, siGmail, siX } from "simple-icons";

export default function Test() {
  // console.log(siGithub);
  return (
    <div>
      <H1Tag>H1 tagdfnnnnnnnnnnnnnnnnnnn</H1Tag>
      <PTag>
        slkfjalkfjsakfdfjklsslkdfjalflkskf
        <br />
        sdfsfkjsalfsjalfksf
      </PTag>
      <ButtonRedDefault>Authorize</ButtonRedDefault>
      <ButtonRedLeftarrow>Authorize</ButtonRedLeftarrow>
      <ButtonRedDoc>Download</ButtonRedDoc>
      <ProjectLink href="" icon={ExternalLink}>
        Demo
      </ProjectLink>
      <TechTag>Next.js</TechTag>
      <TechListItem>MongoDB</TechListItem>
      <div className=" h-16 flex flex-row">
        <NavItemNone>Docs</NavItemNone>
        <NavItemExpandable>Docs</NavItemExpandable>
      </div>
      <div className=" h-16 flex flex-row space-x-2.5">
        <SmallIcons icon={Moon}></SmallIcons>
        <SmallIcons icon={Settings}></SmallIcons>
        <CountrySmallIcons countryCode="GB"></CountrySmallIcons>
      </div>
      <div className=" flex flex-row space-x-2.5">
        <SocialLink href="" icon={siGithub}></SocialLink>
        <SocialLink href="" icon={siFacebook}></SocialLink>
        <SocialLink href="" icon={siX}></SocialLink>
        <SocialLink href="" icon={siGmail}></SocialLink>
      </div>
      <H1TagUnderlineRed>Check underline</H1TagUnderlineRed>
    </div>
  );
}
