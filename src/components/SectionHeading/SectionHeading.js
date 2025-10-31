import styles from './SectionHeading.module.css';

function SectionHeading({ children }) {
  return <h2 className={styles.heading}>{children}</h2>;
}

export default SectionHeading;
