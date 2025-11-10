'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './NavLink.module.css';

function NavLink({ children, href, ...delegated }) {
  const pathname = usePathname();
  const isActive =
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={clsx(styles.navLink, isActive && styles.active)}
      {...delegated}
    >
      {children}
    </Link>
  );
}

export default NavLink;
