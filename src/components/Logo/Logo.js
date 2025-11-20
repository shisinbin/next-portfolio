// import {
//   Syne,
//   Space_Grotesk,
//   Krona_One,
//   Archivo_Black,
//   Unica_One,
//   Playwrite_CZ,
// } from 'next/font/google';
import { Playwrite_CZ } from 'next/font/google';
import styles from './Logo.module.css';
import Link from 'next/link';

// const syne = Syne({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800'],
// });

// const spaceGrotesk = Space_Grotesk({
//   subsets: ['latin'],
//   weight: ['700'],
// });

// const kronaOne = Krona_One({
//   subsets: ['latin'],
//   weight: ['400'],
// });
// const archivoBlack = Archivo_Black({
//   subsets: ['latin'],
//   weight: ['400'],
// });
// const unicaOne = Unica_One({
//   subsets: ['latin'],
//   weight: ['400'],
// });
const playwrite = Playwrite_CZ({
  subsets: ['latin'],
});

function Logo() {
  return (
    <Link
      href='/'
      className={`${styles.logo} ${playwrite.className}`}
    >
      ssb
    </Link>
  );
}

export default Logo;
