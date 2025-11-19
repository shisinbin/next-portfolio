import clsx from 'clsx';
import styles from './Card.module.css';

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

  return (
    <Component
      className={clsx(styles.card, className)}
      {...delegated}
    >
      <Wrapper href={href} className={styles.inner}>
        {imageSlot}
        <div className={styles.content}>{children}</div>
      </Wrapper>

      {footer && <div className={styles.footer}>{footer}</div>}
    </Component>
  );
}

export default Card;
