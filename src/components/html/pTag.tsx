export default function PTag({
  children: text,
  className,
  textStyle,
}: {
  children: React.ReactNode;
  className?: string;
  textStyle?: string;
}) {
  return (
    <div className={` w-fit py-simple300 ${className}`}>
      <p className={` ${textStyle}`}>{text}</p>
    </div>
  );
}
