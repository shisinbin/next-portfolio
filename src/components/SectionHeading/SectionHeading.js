import styles from './SectionHeading.module.css';

function SectionHeading({ children, ...delegated }) {
  return (
    <h2 className={styles.heading} {...delegated}>
      {children}
    </h2>
  );
}

export default SectionHeading;
