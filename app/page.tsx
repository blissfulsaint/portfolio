import { Metadata } from "next";
import { LayoutBand, Separator } from "blisskit-ui";

import Hero from "./components/Hero/Hero";
import GitHubContributionGrid from "./components/GitHubContributionGrid/GitHubContributionGrid";
import GitHubLanguagesChart from "./components/GitHubLanguagesChart/GitHubLanguagesChart";
import Projects from "./components/Projects/Projects";

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
        <Separator size="xxs" />
        <GitHubContributionGrid />
        <Separator size="xs" />
        <GitHubLanguagesChart />
      </LayoutBand>
    </>
  );
}
