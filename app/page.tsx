import { Metadata } from "next";
import { LayoutBand, CardLink, Separator } from "blisskit-ui";

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
        <Separator size="xs" />
        <h3 className="font-semibold mb-6 text-center">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          <CardLink title="BlissKit-UI" textClassName="bg-primaryColor" imgSrc="/blisskit-ui.png" />
          <CardLink title="Valley Music Club" textClassName="bg-primaryColor" imgSrc='/vmc.jpeg' />
          <CardLink title="Style Stage SASS" textClassName="bg-primaryColor" imgSrc="/stylestage.png" />
        </div>
        <Separator size="xxs" />
        <GitHubContributionGrid />
        <Separator size="xs" />
        <GitHubLanguagesChart />
      </LayoutBand>
    </>
  );
}
