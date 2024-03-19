import Image from "next/image";
// why are my commits not working
export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="loading..." width={40} height={40}></Image>
    </div>
  );
}
