import NoahIntro from "./_sections/noahIntro";
import PersonalHero from "./_sections/personalHero";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <NoahIntro></NoahIntro>
        <PersonalHero></PersonalHero>
      </main>
      <Footer></Footer>
    </div>
  );
}
