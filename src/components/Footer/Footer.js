import { GitHub, Linkedin, Mail } from 'react-feather';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import styles from './Footer.module.css';
import Link from 'next/link';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.wrapper}>
      <MaxWidthWrapper className={styles.content}>
        <div className={styles.upper}>
          <div>
            {`© ${year} `}
            <span className={styles.brand}>shisinbin</span>
          </div>

          <nav className={styles.nav}>
            <Link href='/work'>Work</Link>
            <Link href='/work'>Blog</Link>
            <Link href='/work'>Contact</Link>
          </nav>

          <div className={styles.social}>
            <a
              href='https://github.com/shisinbin'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <GitHub size={20} />
            </a>
            <a
              href='https://linkedin.com/in/yourprofile'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <Linkedin size={20} />
            </a>
            <a href='mailto:hello@example.com' aria-label='Email'>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;
