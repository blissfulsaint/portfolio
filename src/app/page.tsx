import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="light">
      <Header />
      <Nav />
      <main>
        <div id="aboutme" className="flex flex-wrap max-w-5xl mx-auto justify-center items-center my-16">
          <Image className='m-10 rounded' src="/images/propic.jpg" alt="Brandon Lisonbee's picture" width={300} height={300} />
          <div className="picinfo max-w-md mx-4 text-left">
            <h1 className="text-3xl font-bold">Hello! I'm Brandon Lisonbee</h1>
            <p className="mt-4">
              The purpose of this site is to provide a place to display my professional portfolio. This site will likely always be in production, but it should give some insight to my skills as a Web Developer and Designer.
            </p>
            <p className="mt-4">
              On the portfolio page, there are a variety of projects - each with at least one link. I am responsible for at least half of the work done on each of these projects. Some only have a GitHub link, which usually means I have not found a way to host the project yet. Check back periodically for more updates!
            </p>
          </div>
        </div>

        <Link href="/portfolio">
          <div className="button block text-center mx-auto mt-8 cursor-pointer bg-purple-500 py-2 px-4 w-fit rounded-full hover:bg-blue-100 hover:text-blue-900">
            View My Portfolio!
          </div>
        </Link>

        <img src="/images/resume.png" alt="resume" className="block mx-auto my-8 rounded" />
      </main>
      <Footer />
    </div>
  )
}
