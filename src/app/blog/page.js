import PageLayout from '@/components/PageLayout';
import PageHeading from '@/components/PageHeading';
import styles from './blogpage.module.css';

export const metadata = {
  title: 'Blog',
};

function BlogPage() {
  return (
    <PageLayout>
      <section>
        <PageHeading>Blog</PageHeading>
        <p className={styles.intro}>
          A quiet room for now. Words arriving shortly.
        </p>
      </section>
    </PageLayout>
  );
}

export default BlogPage;
