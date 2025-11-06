import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import styles from './blogpage.module.css';

export const metadata = {
  title: 'Blog',
};

function BlogPage() {
  return (
    <Section>
      <SectionHeading>Blog Page</SectionHeading>
      <p>Blog goes here.</p>
    </Section>
  );
}

export default BlogPage;
