import { Metadata } from "next";
import { LayoutBand, Separator } from "blisskit-ui";

import Hero from "./components/Hero/Hero";
import GitHubContributionGrid from "./components/GitHubContributionGrid/GitHubContributionGrid";
import GitHubLanguagesChart from "./components/GitHubLanguagesChart/GitHubLanguagesChart";
import Projects from "./components/Projects/Projects";
import PageLink from "./components/PageLink/PageLink";

export const metadata: Metadata = {
  title: "Home | BlissHub",
  description: "Home page for BlissHub - Brandon Lisonbee's portfolio site",
};

export default function Home() {
  return (
    <>
      <Hero title="Welcome to BlissHub!" subtitle="Brandon Lisonbee's Software Engineering Portfolio Site" imgSrc="/hiking.jpg" />
      <LayoutBand>
        <Separator size="xs" />
        <Projects featured />
        <PageLink href='/portfolio' button className="mx-auto mt-4">View Full Portfolio</PageLink>
        <Separator size="xxs" />
        <GitHubContributionGrid />
        <Separator size="xs" />
        <GitHubLanguagesChart />
      </LayoutBand>
    </>
  );
}
