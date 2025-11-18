import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import PageLayout from '@/components/PageLayout';
import SectionHeading from '@/components/SectionHeading';
import { getProjectBySlug } from '@/lib/projects';
import { COMPONENT_MAP } from '@/lib/mdx-components';
import styles from './projectpage.module.css';
import Link from 'next/link';
import { ArrowLeft, CornerLeftUp } from 'react-feather';
import SmartLink from '@/components/SmartLink';
import NextProject from '@/components/NextProject';

export async function generateMetadata({ params }) {
  const p = await params;
  const project = await getProjectBySlug(p.slug);

  if (!project) return { title: 'Project not found' };

  const { title, description } = project.frontmatter;

  return { title, description };
}

async function ProjectPage({ params }) {
  const p = await params;

  const project = await getProjectBySlug(p.slug);

  if (!project) notFound();

  const { frontmatter, content } = project;

  const humanisedDate = format(
    new Date(frontmatter.date),
    'MMMM do, yyyy'
  );

  return (
    <PageLayout>
      <section>
        <nav className={styles.metaNav}>
          <SmartLink href='/work' className={styles.backLink}>
            <ArrowLeft />
            Back to all projects
          </SmartLink>
        </nav>
        <SectionHeading>{frontmatter.title}</SectionHeading>
        <p className={styles.date}>
          Last updated on <time>{humanisedDate}</time>
        </p>
        <div className={styles.content}>
          <MDXRemote source={content} components={COMPONENT_MAP} />
        </div>
        <NextProject slug={frontmatter.next} />
      </section>
    </PageLayout>
  );
}

export default ProjectPage;
