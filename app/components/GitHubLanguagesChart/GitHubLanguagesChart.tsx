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
  Cell
} from 'recharts';

export default function GitHubLanguagesBarChart() {
  const [data, setData] = useState<{ name: string; lines: number }[]>([]);

  const COLORS = [
    "#6366f1", // indigo
    "#10b981", // emerald
    "#f59e0b", // amber
    "#ef4444", // red
    "#3b82f6", // blue
    "#a855f7", // violet
    "#14b8a6", // teal
    "#f97316", // orange
  ];

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
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6">
      <h3 className="font-semibold mb-6 text-center">Top Languages by Estimated Lines of Code</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 30, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" allowDecimals={false} />
          <YAxis type="category" dataKey="name" />
          <Tooltip
            formatter={(value: number) => `${value.toLocaleString()} lines`}
            labelFormatter={(label: string) => `Language: ${label}`}
            labelClassName='text-black'
          />
          <Bar dataKey="lines" name="Lines of Code">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 text-center">
        *Based on estimated lines of code (1 line ≈ 60 bytes). Data pulled from public and private repositories I own.
      </p>
    </div>
  );
}