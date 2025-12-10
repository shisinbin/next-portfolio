import { ArrowRight } from 'react-feather';
import styles from './BlogSummaryCard.module.css';
import Link from 'next/link';
import clsx from 'clsx';

// Old approach - don't need to use this because
// I'm not overwriting any existing styles
// const borderStyles = {
//   true: {
//     '--blog-summary-card-padding': '25px 32px',
//     '--blog-summary-card-border': '1px solid var(--gray-300)',
//   },
//   false: {
//     '--blog-summary-card-padding': '0',
//     '--blog-summary-card-border': 'none',
//   },
// };

function BlogSummaryCard({
  slug,
  title,
  description,
  date,
  includeBorder = false,
}) {
  const borderBoolean = includeBorder === true;

  const wrapperClass = clsx(
    styles.wrapper,
    borderBoolean === true ? styles.wrapperWithBorder : ''
  );

  return (
    <article className={wrapperClass}>
      <Link href={`/blog/${slug}`} className={styles.headingLink}>
        <span>{title}</span>
      </Link>
      <p className={styles.description}>{description}</p>
      <Link href={`/blog/${slug}`} className={styles.readMoreLink}>
        Read more
        <ArrowRight size={18} className={styles.icon} />
      </Link>
    </article>
  );
}

export default BlogSummaryCard;
