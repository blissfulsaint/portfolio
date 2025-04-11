import { Metadata } from "next";
import { LayoutBand, CardLink, Separator } from "blisskit-ui";

import Hero from "./components/Hero/Hero";
import GitHubContributionGrid from "./components/GitHubContributionGrid/GitHubContributionGrid";
import GitHubLanguagesChart from "./components/GitHubLanguagesChart/GitHubLanguagesChart";
import FeaturedWorks from "./components/FeaturedWorks/FeaturedWorks";

export const metadata: Metadata = {
  title: "Home | Brandon\'s Portfolio Site",
  description: "Home page for Brandon Lisonbee's portfolio site",
};

export default function Home() {
  return (
    <>
      <Hero title="Welcome to BlissHub!" imgSrc="/hiking.jpg" />
      <LayoutBand>
        <Separator size="xs" />
        <FeaturedWorks />
        <Separator size="xxs" />
        <GitHubContributionGrid />
        <Separator size="xs" />
        <GitHubLanguagesChart />
      </LayoutBand>
    </>
  );
}
