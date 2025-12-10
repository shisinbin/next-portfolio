import clsx from 'clsx';
import styles from './Card.module.css';
import Link from 'next/link';

function Card({
  as: Component = 'article',
  href,
  imageSlot,
  footer,
  children,
  className,
  ...delegated
}) {
  const Wrapper = href ? 'a' : 'div';

  const Inner = (
    <div className={styles.inner}>
      {imageSlot}
      <div className={styles.content}>{children}</div>
    </div>
  );

  return (
    <Component
      className={clsx(styles.card, className)}
      {...delegated}
    >
      {href ? (
        <Link href={href} className={styles.linkWrapper}>
          {Inner}
        </Link>
      ) : (
        Inner
      )}
      {/* <Wrapper href={href} className={styles.inner}>
        {imageSlot}
        <div className={styles.content}>{children}</div>
      </Wrapper> */}

      {footer && <div className={styles.footer}>{footer}</div>}
    </Component>
  );
}

export default Card;
