import { Code } from 'bright';
import styles from './CodeSnippet.module.css';

function CodeSnippet(props) {
  return (
    <Code
      {...props}
      theme='dracula-soft'
      className={styles.wrapper}
    />
  );
}

export default CodeSnippet;
