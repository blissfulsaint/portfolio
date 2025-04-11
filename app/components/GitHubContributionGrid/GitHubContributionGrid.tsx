'use client';

import GitHubCalendar from 'react-github-calendar';

export default function GitHubContributionGrid() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg p-6">
      <h3 className="font-semibold mb-6 text-center">My GitHub Activity</h3>
      <GitHubCalendar username="blissfulsaint" />
    </div>
  );
}