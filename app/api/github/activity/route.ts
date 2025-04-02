import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function GET() {
  try {
    const events = await octokit.activity.listPublicEventsForUser({
      username: "blissfulsaint",
      per_page: 5,
    });

    return NextResponse.json(events.data);
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
  }
}