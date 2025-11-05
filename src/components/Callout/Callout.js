import styles from './Callout.module.css';

function Callout({ children }) {
  return <div className={styles.callout}>{children}</div>;
}

export default Callout;
