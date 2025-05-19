export default function H2Tag({ children: text }: { children: string }) {
  return (
    <div className=" w-fit py-simple400">
      <h2>{text}</h2>
    </div>
  );
}
