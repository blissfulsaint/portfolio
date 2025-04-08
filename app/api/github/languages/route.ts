import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// const privateOctokit = new Octokit({
//   auth: process.env.PRIVATE_GITHUB_TOKEN,
// });

export async function GET() {
  try {
    const reposResponse = await octokit.request('GET /user/repos?page=1&per_page=1000', { type: 'owner' });

    // const privateRepo = await privateOctokit.request('GET /repos/blissfulsaint/htdocs/languages', {
    //   owner: 'blissfulsaint',
    //   repo: 'htdocs',
    // })
    
    const repos = reposResponse.data;

    const languageTotals: Record<string, number> = {};

    for (const repo of repos) {
      if (repo.fork) continue;

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

    // *** This implementation needs improvement in the future, it will suffice for now ***
    // for (const [language, bytes] of Object.entries(privateRepo.data)) {
    //   // Estimate lines of code (~60 bytes per line)
    //   const estimatedLines = Math.round((bytes as number) / 60);
    //   languageTotals[language] = (languageTotals[language] || 0) + estimatedLines;
    // }

    return NextResponse.json(languageTotals);
  } catch (error) {
    console.error("Error fetching languages:", error);
    return NextResponse.json({ message: "Failed to fetch languages" }, { status: 500 });
  }
}