import Link from 'next/link';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import { getAllProjects } from '@/lib/projects';
import styles from './workpage.module.css';

async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <Section>
      <SectionHeading>Work Page</SectionHeading>
      <p>
        Here&apos;s a collection of projects I&apos;ve worked on -
        some professional, some personal.
      </p>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/work/${project.slug}`}>
              <h2>{project.title}</h2>
              <p>{project.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default WorkPage;
