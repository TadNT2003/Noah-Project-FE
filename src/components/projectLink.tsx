import { LucideIcon } from "lucide-react";
import Link from "next/link";

export default function ProjectLink({
  children: text,
  icon: Icon,
  href,
}: {
  children: string;
  icon: LucideIcon;
  href: string;
}) {
  return (
    <Link
      href={href}
      className=" px-simple200 py-simple150 flex flex-row w-fit space-x-2.5 items-center border-red border bg-dark rounded-sm"
    >
      <Icon width={"1.125rem"} height={"1.125rem"}></Icon>
      <span className=" text-lg leading-7 font-normal text-weaker-white">
        {text}
      </span>
    </Link>
  );
}
