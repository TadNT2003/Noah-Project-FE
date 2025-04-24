export default function PTag({
  children: text,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={` w-fit py-simple300 ${className}`}>
      <p>{text}</p>
    </div>
  );
}
