import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import { getProjectBySlug } from '@/lib/projects';

export async function generateMetadata({ params }) {
  const p = await params;
  const project = await getProjectBySlug(p.slug);

  if (!project) return { title: 'Project not found' };

  const { title, description } = project.frontmatter;

  return { title, description };
}

async function ProjectPage({ params }) {
  const p = await params;
  console.log('params', p);

  const project = await getProjectBySlug(p.slug);

  if (!project) notFound();

  const { frontmatter, content } = project;

  return (
    <Section>
      <SectionHeading>{frontmatter.title}</SectionHeading>
      <time>{frontmatter.date}</time>
      <div>
        <MDXRemote source={content} />
      </div>
    </Section>
  );
}

export default ProjectPage;
