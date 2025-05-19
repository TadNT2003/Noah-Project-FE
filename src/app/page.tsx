import NoahIntro from "./_sections/noahIntro";
import PersonalHero from "./_sections/personalHero";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import AboutMe from "./_sections/aboutMe";
import MyProjects from "./_sections/myProjects";
import MySkills from "./_sections/mySkills";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <NoahIntro></NoahIntro>
        <PersonalHero></PersonalHero>
        <AboutMe></AboutMe>
        <MyProjects></MyProjects>
        <MySkills></MySkills>
      </main>
      <Footer></Footer>
    </div>
  );
}
