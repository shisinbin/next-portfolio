import styles from './PageLayout.module.css';

function PageLayout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}

export default PageLayout;
