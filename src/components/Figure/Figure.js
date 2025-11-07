import styles from './Figure.module.css';

const SIZE_MAP = {
  xs: { maxWidth: '20ch' },
  small: { maxWidth: '40ch' },
  medium: { maxWidth: '60ch' },
  large: { maxWidth: '80ch' },
};

function Figure({ src, alt, caption, size = 'medium' }) {
  const maxWidth = SIZE_MAP[size];
  return (
    <figure className={styles.figure}>
      <img
        src={src}
        alt={alt}
        className={styles.image}
        style={maxWidth}
      />
      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  );
}

export default Figure;
