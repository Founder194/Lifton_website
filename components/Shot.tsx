import Image from "next/image";
import { PhoneFrame } from "./PhoneFrame";

// A real iPhone screenshot inside the phone frame.
export function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <PhoneFrame notch={false}>
      <Image src={src} alt={alt} fill sizes="270px" className="object-cover object-top" />
    </PhoneFrame>
  );
}
