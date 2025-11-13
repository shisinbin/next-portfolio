import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import styles from './homepage.module.css';
import Link from 'next/link';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import { getAllProjects } from '@/lib/projects';

export default async function HomePage() {
  const projects = await getAllProjects();
  const featured = projects.filter((p) => p.featured);
  // console.log(featured);

  return (
    <>
      <Section className={styles.hero}>
        <h1 className={styles.title}>
          Hey, I&apos;m{' '}
          <span className={styles.accent}>shisinbin</span>.
        </h1>
        <p className={styles.subtitle}>
          I build thoughtful digital experiences - front-end focused,
          design-driven.
        </p>
        <Link href='/work' className={styles.cta}>
          View my work
        </Link>
      </Section>

      {featured && featured.length > 0 && (
        <Section>
          <SectionHeading>Featured Projects</SectionHeading>
          <FeaturedProjectsSection projects={featured} />
        </Section>
      )}

      {/* <Section>
        <SectionHeading>Latest Posts</SectionHeading>
      </Section> */}
    </>
  );
}
