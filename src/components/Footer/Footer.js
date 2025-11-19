import { GitHub, Linkedin, Mail } from 'react-feather';
import Link from 'next/link';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          {`© ${year} `}
          <span className={styles.brand}>shisinbin</span>
        </div>

        <nav className={styles.nav}>
          <Link href='/work'>Work</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/contact'>Contact</Link>
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
            href='https://www.linkedin.com/in/shivraj-binepal-95336325b/'
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
    </footer>
  );
}

export default Footer;
