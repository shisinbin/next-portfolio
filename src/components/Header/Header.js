import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import styles from './Header.module.css';

import NavLink from '@/components/NavLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

function Header() {
  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper as='nav'>
        <ul className={styles.navList}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <NavLink href={href}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
