'use client';

import React from 'react';
import { Menu } from 'react-feather';
import clsx from 'clsx';
import NavLink from '@/components/NavLink';
import UnstyledButton from '@/components/UnstyledButton';
import MobileMenu from '@/components/MobileMenu';
import useScrollDirection from '@/hooks/useScrollDirection';
import styles from './Header.module.css';
import Logo from '../Logo';

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

  const { scrollDir, hasScrolled } = useScrollDirection({
    threshold: 50,
  });

  const headerClass = clsx(
    styles.wrapper,
    styles[scrollDir === 'down' ? 'headerHidden' : 'headerVisible'],
    hasScrolled && styles.headerScrolled
  );

  return (
    <header className={headerClass}>
      <div className={styles.mainHeader}>
        <Logo />

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
      </div>
    </header>
  );
}

export default Header;
