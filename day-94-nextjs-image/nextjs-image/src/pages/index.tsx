import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/Button";
import FancyButton from "@/components/FancyButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <FancyButton>Click Me</FancyButton>
      {/* <Image
        src="https://images.unsplash.com/photo-1680169253819-1226894ebd87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="Dog"
        fill
        style={{ objectFit: "cover" }}
      ></Image> */}
    </div>
  );
}
