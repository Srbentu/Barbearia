import Image from "next/image";
import {somar} from "@barba/core"

export default function Home() {
  return (
    <div>{somar(20,30)}</div>
  );
}
