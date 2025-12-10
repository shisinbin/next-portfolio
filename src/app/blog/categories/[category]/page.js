import { getBlogPostsByCategory } from '@/lib/blog';
import styles from './blogcategoriespage.module.css';
import PageLayout from '@/components/PageLayout';
import PageHeading from '@/components/PageHeading';
import BlogSummaryCard from '@/components/BlogSummaryCard';
import { CATEGORIES } from '@/constants';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { category } = await params;
  return { title: `${category} / Blog` };
}

async function BlogCategoriesPage({ params }) {
  const { category } = await params;

  const label = CATEGORIES.find(
    (c) => c.value === category.toLowerCase()
  )?.label;
  if (!label) {
    notFound();
  }

  const posts = await getBlogPostsByCategory(category);

  const countText = `${posts.length} post${
    posts.length !== 1 ? 's' : ''
  }`;

  return (
    <PageLayout>
      <header className={styles.header}>
        <PageHeading>{label}</PageHeading>
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
