import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const events = await octokit.activity.listPublicEventsForUser({
      username: "blissfulsaint",
      per_page: 5,
    });

    res.status(200).json(events.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
}