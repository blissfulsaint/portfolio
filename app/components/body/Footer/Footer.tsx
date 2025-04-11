import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='mt-24'>
            <hr className={styles.footerborder}></hr>
            <div className='m-auto w-fit flex flex-wrap gap-2 p-12'>
                <p className='block my-auto'>&copy; 2025 Brandon Lisonbee · Built with Next.js · Hosted on Vercel</p>
            </div>
        </footer>
    )
}