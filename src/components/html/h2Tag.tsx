export default function H2Tag({
  children: text,
  className,
  textStyle,
}: {
  children: string;
  className?: string;
  textStyle?: string;
}) {
  return (
    <div className={` w-fit py-simple400 ${className}`}>
      <h2 className={` ${textStyle}`}>{text}</h2>
    </div>
  );
}
