import clsx from 'clsx';
import styles from './PageHeading.module.css';

function PageHeading({
  children,
  subtitle,
  className,
  ...delegated
}) {
  if (!subtitle) {
    return (
      <h1 className={clsx(styles.heading, className)} {...delegated}>
        {children}
      </h1>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1
        className={clsx(styles.headingWithSubtitle, className)}
        {...delegated}
      >
        {children}
      </h1>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
}

export default PageHeading;
