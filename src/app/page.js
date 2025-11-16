import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import SectionHeading from '@/components/SectionHeading';
import FeaturedProjectsCarousel from '@/components/FeaturedProjectsCarousel';
import SmartLink from '@/components/SmartLink';
import { getAllProjects } from '@/lib/projects';
import styles from './homepage.module.css';

export default async function HomePage() {
  const projects = await getAllProjects();
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <PageLayout>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Hey, I&apos;m{' '}
            <span className={styles.accent}>shisinbin</span>.
          </h1>
          <p className={styles.subtitle}>
            I build thoughtful digital experiences - front-end
            focused, design-driven.
          </p>
          <Link href='/work' className={styles.cta}>
            View my work
          </Link>
        </section>

        {featured && featured.length > 0 && (
          <>
            <section aria-labelledby='featured-projects-title'>
              <SectionHeading id='featured-projects-title'>
                Featured Projects
              </SectionHeading>
            </section>

            <FeaturedProjectsCarousel projects={featured} />

            <div className={styles.linkWrapper}>
              <SmartLink href='/work'>View all projects</SmartLink>
            </div>
          </>
        )}
      </PageLayout>

      {/* <section>Latest Blog Posts</section> */}
    </>
  );
}
