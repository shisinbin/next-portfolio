import PageLayout from '@/components/PageLayout';
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
    <PageLayout>
      <section aria-labelledby='work-title'>
        <SectionHeading id='work-title'>Work</SectionHeading>
        <p className={styles.intro}>
          Here&apos;s a collection of projects I&apos;ve worked on -
          some professional, some personal.
        </p>
      </section>

      <Grid as='ul' className={styles.grid}>
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </Grid>
    </PageLayout>
  );
}

export default WorkPage;
