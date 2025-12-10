import PageLayout from '@/components/PageLayout';
import PageHeading from '@/components/PageHeading';
import styles from './blogpage.module.css';
import { getAllBlogPosts } from '@/lib/blog';
import BlogSummaryCard from '@/components/BlogSummaryCard';
import Link from 'next/link';
import { CATEGORIES } from '@/constants';

export const metadata = {
  title: 'Blog',
};

async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <PageLayout>
      <h1 className={styles.visuallyHidden}>shisinbin's Blog</h1>

      <div className={styles.mainGrid}>
        {/* Newest posts */}
        <section className={styles.newest}>
          <h2 className={styles.sectionHeading}>Latest Posts</h2>
          <div className={styles.newestContainer}>
            {posts.map(({ slug, title, description, date }) => (
              <BlogSummaryCard
                key={slug}
                slug={slug}
                title={title}
                description={description}
                date={date}
              />
            ))}
          </div>
        </section>

        {/* Categories/Tags */}
        <nav
          className={styles.categories}
          aria-label='Blog categories'
        >
          <h2 className={styles.sectionHeading}>
            Browse by Category
          </h2>

          <div className={styles.tagsContainer}>
            {CATEGORIES.map(({ value, label }) => (
              <Link
                href={`/blog/categories/${value}`}
                key={value}
                className={styles.tagLink}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Featured posts */}
        <section className={styles.featured}>
          <h2 className={styles.sectionHeading}>Featured Posts</h2>

          <ol className={styles.featuredList}>
            <li>
              <Link href='#' className={styles.featuredLink}>
                This pretty cool post
              </Link>
            </li>
            <li>
              <Link href='#' className={styles.featuredLink}>
                This amazing post
              </Link>
            </li>
            <li>
              <Link href='#' className={styles.featuredLink}>
                This so-so post
              </Link>
            </li>
          </ol>
        </section>
      </div>
    </PageLayout>
  );
}

export default BlogPage;
