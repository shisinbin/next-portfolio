import { getBlogPostsByCategory } from '@/lib/blog';
import styles from './blogcategoriespage.module.css';
import PageLayout from '@/components/PageLayout';
import PageHeading from '@/components/PageHeading';
import BlogSummaryCard from '@/components/BlogSummaryCard';
import { CATEGORY_MAP } from '@/constants';
import { notFound } from 'next/navigation';
import SmartLink from '@/components/SmartLink';

export async function generateMetadata({ params }) {
  const { category } = await params;

  const categoryValue =
    typeof category === 'string' ? category.toLowerCase() : '';
  const cat = CATEGORY_MAP[categoryValue];
  if (!cat) {
    notFound();
  }

  return { title: `${cat.label} // Blog` };
}

async function BlogCategoriesPage({ params }) {
  const { category } = await params;

  const categoryValue =
    typeof category === 'string' ? category.toLowerCase() : '';
  const cat = CATEGORY_MAP[categoryValue];
  if (!cat) {
    notFound();
  }

  const posts = await getBlogPostsByCategory(category);
  const postsLength = posts.length;

  const countText = `${postsLength} post${
    posts.length !== 1 ? 's' : ''
  }`;

  if (postsLength === 0) {
    return (
      <PageLayout>
        <p>
          There are no posts for this category yet.
          <br />
          <SmartLink href='/blog'>Back to blog</SmartLink>
        </p>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <header className={styles.header}>
        <PageHeading>{cat.label}</PageHeading>
        <span className={styles.count}>{countText}</span>
      </header>
      <div className={styles.mainGridArea}>
        {posts.map(({ slug, title, description }) => (
          <BlogSummaryCard
            key={slug}
            slug={slug}
            title={title}
            description={description}
            includeBorder={true}
          />
        ))}
      </div>
    </PageLayout>
  );
}

export default BlogCategoriesPage;
