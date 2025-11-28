import styles from './GridSpan.module.css';

function GridSpan({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default GridSpan;
