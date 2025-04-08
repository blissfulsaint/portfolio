'use client';

import GitHubCalendar from 'react-github-calendar';

export default function GitHubContributionGrid() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">My GitHub Activity</h2>
      <GitHubCalendar username="blissfulsaint" />
    </div>
  );
}