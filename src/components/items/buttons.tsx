import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export function ButtonRedDefault({
  children: text,
  href,
}: {
  children: string;
  href?: string;
}) {
  return (
    <button className=" flex flex-row items-center bg-red rounded-lg">
      <Link className=" px-simple600 py-simple300 " href={href ? href : "/"}>
        <span className=" text-2xl leading-8 font-normal text-weaker-white">
          {text}
        </span>
      </Link>
    </button>
  );
}

export function ButtonBlackRed({
  children: text,
  href,
}: {
  children: string;
  href?: string;
}) {
  return (
    <button className=" flex flex-row items-center border-red border bg-dark rounded-lg">
      <Link className=" px-simple600 py-simple300 " href={href ? href : "/"}>
        <span className=" text-2xl leading-8 font-normal text-weaker-white">
          {text}
        </span>
      </Link>
    </button>
  );
}

export function ButtonRedLeftarrow({
  children: text,
  href,
}: {
  children: string;
  href?: string;
}) {
  return (
    <button className=" flex flex-row space-x-0.5 items-center bg-red rounded-lg">
      <Link
        className=" px-simple600 py-simple300 flex flex-row items-center space-x-0.5"
        href={href ? href : "/"}
      >
        <span className=" text-2xl leading-8 font-normal text-weaker-white">
          {text}
        </span>
        <ArrowRight width={"1.5rem"} height={"1.5rem"}></ArrowRight>
      </Link>
    </button>
  );
}

export function ButtonRedDoc({
  children: text,
  href,
}: {
  children: string;
  href?: string;
}) {
  return (
    <button className=" flex flex-row space-x-2 items-center  bg-red rounded-lg">
      <Link
        className=" px-simple600 py-simple300 flex flex-row items-center space-x-0.5"
        href={href ? href : "/"}
      >
        <FileText width={"1.5rem"} height={"1.5rem"}></FileText>
        <span className=" text-2xl leading-8 font-normal text-weaker-white">
          {text}
        </span>
      </Link>
    </button>
  );
}
