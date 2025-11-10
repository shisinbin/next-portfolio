import clsx from 'clsx';
import styles from './UnstyledButton.module.css';

function UnstyledButton({ children, className, ...delegated }) {
  return (
    <button className={clsx(styles.button, className)} {...delegated}>
      {children}
    </button>
  );
}
export default UnstyledButton;
