import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Brandon\'s Portfolio Site",
  description: "Home page for Brandon Lisonbee's portfolio site",
};

export default function Home() {
  return (
    <h1>This is the Portfolio Home Page</h1>
  );
}
