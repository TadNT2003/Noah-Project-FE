export default function H1Tag({ children: text }: { children: string }) {
  return (
    <div className=" w-fit py-simple600">
      <h1>{text}</h1>
    </div>
  );
}

export function H1TagUnderlineRed({ children: text }: { children: string }) {
  return (
    <div className=" relative w-fit py-simple600">
      <h1>{text}</h1>
      <div
        className=" absolute bottom-0 w-32 h-[5px] bg-red"
        style={{ left: "calc(50% - 4rem)" }}
      ></div>
    </div>
  );
}
