import { Metadata } from "next";
import { LayoutBand, CardLink } from "blisskit-ui";

import Hero from "./components/Hero/Hero";
import GitHubContributionGrid from "./components/GitHubContributionGrid/GitHubContributionGrid";
import GitHubLanguagesChart from "./components/GitHubLanguagesChart/GitHubLanguagesChart";

export const metadata: Metadata = {
  title: "Home | Brandon\'s Portfolio Site",
  description: "Home page for Brandon Lisonbee's portfolio site",
};

export default function Home() {
  return (
    <>
      <Hero title="Welcome to BlissHub!" imgSrc="/hiking.jpg" />
      <LayoutBand>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          <CardLink title="Example" textClassName="bg-blue-500" />
          <CardLink title="Example" textClassName="bg-blue-500" />
          <CardLink title="Example" textClassName="bg-blue-500" />
        </div>
        <GitHubContributionGrid />
        <GitHubLanguagesChart />
      </LayoutBand>
    </>
  );
}
