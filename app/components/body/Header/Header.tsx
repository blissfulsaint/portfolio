import styles from './Header.module.css'
import NavBar from "../NavBar/NavBar";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={`${styles.header} sticky top-0 z-10`}>
            <Link href='/' aria-label='BlissHub Home'>
                <Image 
                    src='/propic.jpg'
                    width={70}
                    height={70}
                    alt='Brandon Lisonbee headshot'
                    className='w-18 h-18 my-auto rounded-full'
                />
            </Link>
            <NavBar />
        </header>
    )
}