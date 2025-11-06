import Link from 'next/link';
import { ArrowUpRight } from 'react-feather';
import styles from './SmartLink.module.css';

function SmartLink({ href, children }) {
  const isInternal = href.startsWith('/') || href.startsWith('#');
  return (
    <Link
      href={href}
      target={isInternal ? undefined : '_blank'}
      rel={isInternal ? undefined : 'noopener noreferrer'}
      className={styles.link}
    >
      {children}
      {!isInternal && <ArrowUpRight className={styles.icon} />}
    </Link>
  );
}

export default SmartLink;
