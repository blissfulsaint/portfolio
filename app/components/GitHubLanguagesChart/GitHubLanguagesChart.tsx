'use client';

import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

export default function GitHubLanguagesBarChart() {
  const [data, setData] = useState<{ name: string; lines: number }[]>([]);

  useEffect(() => {
    fetch('/api/github/languages')
      .then((res) => res.json())
      .then((languageTotals) => {
        const sorted = Object.entries(languageTotals)
          .map(([name, lines]) => ({ name, lines: lines as number }))
          .sort((a, b) => b.lines - a.lines)
          .slice(0, 8); // top 8 languages

        setData(sorted);
      });
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Top Languages by Estimated LOC</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} label={{ value: 'Lines of Code', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="lines" fill="#8884d8" name="Lines of Code" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}