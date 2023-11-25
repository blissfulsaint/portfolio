import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-purple-500 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link href="/">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/portfolio/">
            <div>Portfolio</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};