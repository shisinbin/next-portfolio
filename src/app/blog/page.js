import PageLayout from '@/components/PageLayout';
import SectionHeading from '@/components/SectionHeading';
import styles from './blogpage.module.css';

export const metadata = {
  title: 'Blog',
};

function BlogPage() {
  return (
    <PageLayout>
      <section>
        <SectionHeading>Blog</SectionHeading>
        <p className={styles.intro}>
          A quiet room for now. Words arriving shortly.
        </p>
      </section>
    </PageLayout>
  );
}

export default BlogPage;
