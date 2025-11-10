'use client';

import React from 'react';
import { Menu } from 'react-feather';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import UnstyledButton from '@/components/UnstyledButton';
import MobileMenu from '@/components/MobileMenu';
import NavLink from '@/components/NavLink';
import styles from './Header.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const dismissMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.mainHeader}>
        <div className={styles.logo}>Logo</div>

        <nav className={styles.desktopNav}>
          {links.map(({ href, label }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.mobileActions}>
          <UnstyledButton
            onClick={() => setIsMenuOpen(true)}
            className={styles.menuButton}
            aria-label='Open menu'
          >
            <Menu />
          </UnstyledButton>
        </div>

        <MobileMenu
          links={links}
          isOpen={isMenuOpen}
          onDismiss={dismissMenu}
        />
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
