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
          I'm not the best writer, clearly, but maybe I might have
          something to say in future, whether it be on web
          development, my past experience, or something else entirely.
          So let's leave this open for now and we'll see what happens.
        </p>
      </section>
    </PageLayout>
  );
}

export default BlogPage;
