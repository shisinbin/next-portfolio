import { ArrowRight } from 'react-feather';
import styles from './BlogSummaryCard.module.css';
import Link from 'next/link';

function BlogSummaryCard({ slug, title, description, date }) {
  return (
    <article>
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
