import { Metadata } from "next";
import { LayoutBand } from "blisskit-ui";
import GitHubContributionGrid from "./components/GitHubContributionGrid/GitHubContributionGrid";
import GitHubLanguagesChart from "./components/GitHubLanguagesChart/GitHubLanguagesChart";

export const metadata: Metadata = {
  title: "Home | Brandon\'s Portfolio Site",
  description: "Home page for Brandon Lisonbee's portfolio site",
};

export default function Home() {
  return (
    <LayoutBand>
      <h1 className="bg-customBlue">This is the Portfolio Home Page</h1>
      <GitHubContributionGrid />
      <GitHubLanguagesChart />
    </LayoutBand>
  );
}
