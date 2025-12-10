// import Image from 'next/image';
import styles from './Figure.module.css';

const MAX_WIDTHS = {
  xs: '20ch',
  small: '40ch',
  medium: '60ch',
  large: '80ch',
  full: '100%',
};

function Figure({ src, alt, caption, size = 'medium' }) {
  const maxWidth = MAX_WIDTHS[size] || '60ch';
  const isVideo = src.endsWith('.mp4');

  return (
    <figure className={styles.figure}>
      {/* <div className={styles.imageWrapper}>
        <Image src={src} alt={alt} fill className={styles.image} />
      </div> */}
      {isVideo ? (
        <video
          preload='metadata'
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={styles.media}
          style={{
            '--media-max-width': maxWidth,
          }}
          role='img'
          aria-label={alt}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          loading='lazy'
          className={styles.media}
          style={{
            '--media-max-width': maxWidth,
          }}
        />
      )}
      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  );
}

export default Figure;
