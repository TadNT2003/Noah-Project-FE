import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function NavItemNone({
  children: text,
  href,
}: {
  children: string;
  href?: string;
}) {
  return (
    <button className=" flex flex-row py-simple600 px-[21px] items-center h-full w-fit">
      <Link href={href ? href : "/"}>
        <span className=" text-2xl leading-6 font-medium text-gray">
          {text}
        </span>
      </Link>
    </button>
  );
}

export function NavItemExpandable({
  children: text,
  href,
}: {
  children: string;
  href?: string;
}) {
  return (
    <button className=" flex flex-row px-simple600 items-center h-full w-fit space-x-0.5">
      <Link href={href ? href : "/"}>
        <span className=" text-2xl leading-6 font-medium text-gray">
          {text}
        </span>
        <ChevronDown></ChevronDown>
      </Link>
    </button>
  );
}
