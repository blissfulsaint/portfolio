import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function GET() {
  try {
    const reposResponse = await octokit.repos.listForAuthenticatedUser({
      per_page: 100,
      affiliation: "owner,collaborator,organization_member",
    });

    const repos = reposResponse.data;

    const languageTotals: Record<string, number> = {};

    console.log("Using GitHub Token:", !!process.env.GITHUB_TOKEN);

    for (const repo of repos) {
      if (repo.fork) continue;
      console.log("Repo: ", repo.name, "Private?", repo.private)

      const langResponse = await octokit.repos.listLanguages({
        owner: repo.owner.login,
        repo: repo.name,
      });

      for (const [language, bytes] of Object.entries(langResponse.data)) {
        // Estimate lines of code (~60 bytes per line)
        const estimatedLines = Math.round((bytes as number) / 60);
        languageTotals[language] = (languageTotals[language] || 0) + estimatedLines;
      }
    }

    return NextResponse.json(languageTotals);
  } catch (error) {
    console.error("Error fetching languages:", error);
    return NextResponse.json({ message: "Failed to fetch languages" }, { status: 500 });
  }
}