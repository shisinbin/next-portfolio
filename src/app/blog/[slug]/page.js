import PageHeading from '@/components/PageHeading';
import PageLayout from '@/components/PageLayout';
import { getBlogPostBySlug } from '@/lib/blog';
import { COMPONENT_MAP } from '@/lib/mdx-components';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import styles from './blogpostpage.module.css';
import SmartLink from '@/components/SmartLink';
import { ArrowLeft } from 'react-feather';

export async function generateMetadata({ params }) {
  const p = await params;
  const post = await getBlogPostBySlug(p.slug);

  if (!post) return { title: 'Blog not found' };

  const { title, description } = post.frontmatter;

  return { title, description };
}

async function BlogPostPage({ params }) {
  const p = await params;
  const post = await getBlogPostBySlug(p.slug);

  if (!post) notFound();

  const { frontmatter, content } = post;

  const humanisedDate = format(
    new Date(frontmatter.date),
    'MMMM do, yyyy'
  );

  return (
    <PageLayout>
      <div className={styles.readingWidth}>
        <nav className={styles.metaNav}>
          <SmartLink href='/blog' className={styles.backLink}>
            <ArrowLeft />
            Back to blog
          </SmartLink>
        </nav>
        <PageHeading
          subtitle={
            <>
              Published on <time>{humanisedDate}</time>
            </>
          }
        >
          {frontmatter.title}
        </PageHeading>

        <div className={styles.content}>
          <MDXRemote source={content} components={COMPONENT_MAP} />
        </div>
      </div>
    </PageLayout>
  );
}

export default BlogPostPage;
