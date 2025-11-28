import PageLayout from '@/components/PageLayout';
import PageHeading from '@/components/PageHeading';
import ProjectCard from '@/components/ProjectCard';
import Grid from '@/components/Grid';
import { getAllProjects } from '@/lib/projects';
import styles from './workpage.module.css';
import SmartLink from '@/components/SmartLink';

export const metadata = {
  title: 'Work',
};

async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <PageLayout>
      <section aria-labelledby='work-title'>
        <PageHeading id='work-title'>Work</PageHeading>
        <p className={styles.intro}>
          Here's a collection of projects I've worked on. You can
          always visit my{' '}
          <SmartLink href={'https://github.com/shisinbin'}>
            Github profile
          </SmartLink>{' '}
          to see more.
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
