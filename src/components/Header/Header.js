import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import styles from './Header.module.css';
import Link from 'next/link';

import NavLink from '../NavLink';

function Header() {
  return (
    <header>
      <MaxWidthWrapper as='nav' className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/about'>About</NavLink>
          </li>
          <li>
            <NavLink href='/work'>Work</NavLink>
          </li>
          <li>
            <NavLink href='/blog'>Blog</NavLink>
          </li>
          <li>
            <NavLink href='/contact'>Contact</NavLink>
          </li>
        </ul>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
