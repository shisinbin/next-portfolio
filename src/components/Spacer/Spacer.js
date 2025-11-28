import styles from './Spacer.module.css';

function Spacer({ axis, size }) {
  const spacerWidth = axis === 'vertical' ? '1px' : `${size}px`;
  const spacerHeight = axis === 'horizontal' ? '1px' : `${size}px`;

  return (
    <span
      className={styles.spacer}
      style={{
        '--spacer-width': spacerWidth,
        '--spacer-height': spacerHeight,
      }}
    />
  );
}

export default Spacer;
