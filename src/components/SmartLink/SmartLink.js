import Link from 'next/link';
import { ArrowUpRight } from 'react-feather';
import styles from './SmartLink.module.css';
import clsx from 'clsx';

function SmartLink({ href, className, children }) {
  const isInternal = href.startsWith('/') || href.startsWith('#');
  return (
    <Link
      href={href}
      target={isInternal ? undefined : '_blank'}
      rel={isInternal ? undefined : 'noopener noreferrer'}
      className={clsx(styles.link, className)}
    >
      {children}
      {!isInternal && <ArrowUpRight className={styles.icon} />}
    </Link>
  );
}

export default SmartLink;
