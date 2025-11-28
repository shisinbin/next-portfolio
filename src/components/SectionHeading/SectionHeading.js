import clsx from 'clsx';
import styles from './SectionHeading.module.css';

function SectionHeading({ children, className, ...delegated }) {
  return (
    <h2 className={clsx(styles.heading, className)} {...delegated}>
      {children}
    </h2>
  );
}

export default SectionHeading;
