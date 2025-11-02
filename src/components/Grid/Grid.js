import clsx from 'clsx';
import styles from './Grid.module.css';

function Grid({ children, as = 'div', className, ...delegated }) {
  const Component = as;
  return (
    <Component
      className={clsx(styles.grid, className)}
      {...delegated}
    >
      {children}
    </Component>
  );
}

export default Grid;
