import { Metadata } from "next";
import { LayoutBand, Separator } from "blisskit-ui";

import PageLink from "../components/PageLink/PageLink";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore ",
};

export default function Portfolio() {
  return (
    <>
      <Hero title="Brandon Lisonbee's Portfolio" imgSrc="/stacked-waves-haikei.png" />
      <LayoutBand>
        <Separator size="xs" />
        <Projects />
        <PageLink href='/' button className="m-auto">Return Home</PageLink>
      </LayoutBand>
    </>
  );
}
