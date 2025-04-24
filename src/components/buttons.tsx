import { ArrowRight, FileText } from "lucide-react";

export function ButtonRedDefault({ children: text }: { children: string }) {
  return (
    <button className=" px-simple600 py-simple300 flex flex-row items-center bg-red rounded-lg">
      <span className=" text-2xl leading-8 font-normal text-weaker-white">
        {text}
      </span>
    </button>
  );
}

export function ButtonBlackRed({ children: text }: { children: string }) {
  return (
    <button className=" px-simple600 py-simple300 flex flex-row items-center border-red border bg-dark rounded-lg">
      <span className=" text-2xl leading-8 font-normal text-weaker-white">
        {text}
      </span>
    </button>
  );
}

export function ButtonRedLeftarrow({ children: text }: { children: string }) {
  return (
    <button className=" px-simple600 py-simple300 flex flex-row space-x-0.5 items-center bg-red rounded-lg">
      <span className=" text-2xl leading-8 font-normal text-weaker-white">
        {text}
      </span>
      <ArrowRight width={"1.5rem"} height={"1.5rem"}></ArrowRight>
    </button>
  );
}

export function ButtonRedDoc({ children: text }: { children: string }) {
  return (
    <button className=" px-simple600 py-simple300 flex flex-row space-x-2 items-center  bg-red rounded-lg">
      <FileText width={"1.5rem"} height={"1.5rem"}></FileText>
      <span className=" text-2xl leading-8 font-normal text-weaker-white">
        {text}
      </span>
    </button>
  );
}
