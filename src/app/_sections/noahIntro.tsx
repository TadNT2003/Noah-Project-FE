import H1Tag from "@/components/html/h1Tag";
import PTag from "@/components/html/pTag";
import { ButtonBlackRed, ButtonRedDefault } from "@/components/items/buttons";
import Image from "next/image";

export default function NoahIntro() {
  return (
    <section
      id="noah-intro"
      className=" flex flex-col px-side-large pb-section items-center justify-start"
    >
      <figure>
        <Image
          src="/noah-logo-only-black.png"
          alt=""
          height={584}
          width={584}
          className=" object-fill"
        ></Image>
      </figure>
      <H1Tag className=" text-center" textStyle=" text-red">
        Welcome to NOAH, Wanderers of the Web
      </H1Tag>
      <PTag className=" text-center">
        For those who stumbles upon this grace
        <br />
        What is thine wish, thine desire
        <br />
        To awaken, this power beyond
      </PTag>
      <div className=" flex flex-row w-fit pt-simple600 space-x-4">
        <ButtonRedDefault>Register</ButtonRedDefault>
        <ButtonBlackRed>Access</ButtonBlackRed>
      </div>
    </section>
  );
}
