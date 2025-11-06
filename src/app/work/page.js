import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import Grid from '@/components/Grid';

import { getAllProjects } from '@/lib/projects';
import styles from './workpage.module.css';

export const metadata = {
  title: 'Work',
};

async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <Section>
      <SectionHeading>Work</SectionHeading>
      <p className={styles.intro}>
        Here&apos;s a collection of projects I&apos;ve worked on -
        some professional, some personal.
      </p>
      <Grid as='ul' className={styles.grid}>
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </Grid>
    </Section>
  );
}

export default WorkPage;
