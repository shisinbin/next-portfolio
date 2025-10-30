import styles from './MaxWidthWrapper.module.css';

const VALID_TAGS = [
  'div',
  'main',
  'aside',
  'header',
  'footer',
  'article',
  'section',
  'nav',
];

function MaxWidthWrapper({
  as: Tag = 'div',
  className = '',
  children,
}) {
  if (!VALID_TAGS.includes(Tag)) {
    console.warn(
      `Invalid tag "${Tag}" used in MaxWidthWrapper. Defaulting to <div>.`
    );
    Tag = 'div';
  }

  return (
    <Tag className={`${styles.wrapper} ${className}`}>{children}</Tag>
  );
}

export default MaxWidthWrapper;
