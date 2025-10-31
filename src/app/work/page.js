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
      <p>This is my work.</p>
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
