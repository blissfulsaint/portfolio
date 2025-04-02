'use client';

import { useEffect, useState } from "react";

export default function GitHubActivity() {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetch("/api/github/activity")
      .then((res) => res.json())
      .then((data) => setActivity(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recent GitHub Activity</h2>
      <ul>
        {activity.map((event: any) => (
          <li key={event.id}>
            {event.type} at <strong>{event.repo.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}