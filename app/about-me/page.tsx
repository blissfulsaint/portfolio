import { Metadata } from "next";
import { LayoutBand, Separator } from "blisskit-ui";

import Bio from "../components/Bio/Bio";
import Timeline from "../components/timeline/Timeline/Timeline";
import PageLink from "../components/PageLink/PageLink";

import Hero from "../components/Hero/Hero";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Brandon's background, experience, and interests!",
};

export default function Home() {
  return (
    <>
      <Hero title="About Me" imgSrc="/hiking.jpg" />
      <LayoutBand>
        <Separator size="xs" />
        <div className="grid grid-cols-1 md:grid-cols-[350px,1fr] gap-8">
          <Bio className="md:sticky top-[6em] self-start" />
          <Timeline />
        </div>
        <PageLink href='/' button className="m-auto">Return Home</PageLink>
      </LayoutBand>
    </>
  );
}
