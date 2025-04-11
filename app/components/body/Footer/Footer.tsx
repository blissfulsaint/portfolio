import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='mt-24'>
            <hr className={styles.footerborder}></hr>
            <div className='m-auto w-fit p-12'>
                <p className='block my-auto'>&copy; 2025 Brandon Lisonbee · Built with Next.js · Hosted on Vercel</p>
                <div className='flex flex-wrap gap-8 justify-center'>
                    <Link href='https://github.com/blissfulsaint' aria-label='Brandon Lisonbee on GitHub'>
                        <Image 
                            src='/github-white.png'
                            width={70}
                            height={70}
                            alt='GitHub logo'
                            className='w-14 h-14 my-auto'
                        />
                    </Link>
                    <Link href='https://www.linkedin.com/in/brandon-lisonbee/' aria-label='Brandon Lisonbee on LinkedIn'>
                        <Image 
                            src='/linkedin.png'
                            width={70}
                            height={70}
                            alt='LinkedIn logo'
                            className='w-14 h-14 my-auto'
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}