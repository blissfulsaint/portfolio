import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex space-x-4 p-4">
      <Link href="/">
        <div>
          <Image
            id="propic"
            src="/images/propic.jpg"
            alt="Brandon Lisonbee profile picture"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </Link>
      <div id="socials" className="flex space-x-4 m-auto">
        <a href="https://www.facebook.com/brandon.lisonbee.3" target="_blank" rel="noopener noreferrer">
          <Image src="/images/facebook.webp" alt="Facebook Logo" width={30} height={30} />
        </a>
        <a href="https://www.linkedin.com/in/brandon-lisonbee/" target="_blank" rel="noopener noreferrer">
          <Image src="/images/linkedin.png" alt="LinkedIn Logo" width={30} height={30} />
        </a>
      </div>
    </header>
  );
};
