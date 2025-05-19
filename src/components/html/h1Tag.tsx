export default function H1Tag({
  children: text,
  className,
  textStyle,
}: {
  children: string;
  className?: string;
  textStyle?: string;
}) {
  return (
    <div className={` w-fit py-simple600 ${className}`}>
      <h1 className={` ${textStyle}`}>{text}</h1>
    </div>
  );
}

export function H1TagUnderlineRed({
  children: text,
  className,
  textStyle,
}: {
  children: string;
  className?: string;
  textStyle?: string;
}) {
  return (
    <div className={` relative w-fit py-simple600 ${className}`}>
      <h1 className={` ${textStyle}`}>{text}</h1>
      <div
        className=" absolute bottom-0 w-32 h-[5px] bg-red"
        style={{ left: "calc(50% - 4rem)" }}
      ></div>
    </div>
  );
}
