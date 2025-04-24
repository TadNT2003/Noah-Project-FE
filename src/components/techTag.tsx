export default function TechTag({ children: text }: { children: string }) {
  return (
    <div className=" flex flex-row w-fit items-center px-simple200 py-simple150 rounded-lg bg-stronger-gray">
      <span className=" text-base leading-6 font-normal text-red">{text}</span>
    </div>
  );
}
