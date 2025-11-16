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
        <SectionHeading>Blog Page</SectionHeading>
        <p>Blog goes here.</p>
      </section>
    </PageLayout>
  );
}

export default BlogPage;
