'use client';

import { useEffect, useState } from "react";

export default function GitHubActivity() {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/github/activity")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setActivity(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recent GitHub Activity</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {activity.map((event: any) => (
            <li key={event.id}>
              {event.type} at <strong>{event.repo.name}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}