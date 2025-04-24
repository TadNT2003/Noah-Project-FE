import Image from "next/image";
import Link from "next/link";
import { SimpleIcon } from "simple-icons";

export default function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: SimpleIcon;
}) {
  return (
    <Link
      href={href}
      className=" aspect-square w-16 rounded-full bg-gray flex flex-row justify-center items-center"
    >
      <Image
        src={`https://cdn.simpleicons.org/${icon.slug}/000000`}
        alt={icon.title}
        width={48}
        height={48}
        className=" w-12 h-12"
      ></Image>
    </Link>
  );
}
