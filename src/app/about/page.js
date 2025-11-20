import PageLayout from '@/components/PageLayout';
import SectionHeading from '@/components/SectionHeading';
import SmartLink from '@/components/SmartLink';
import styles from './aboutpage.module.css';

export const metadata = {
  title: 'About Me',
};

function AboutPage() {
  return (
    <PageLayout>
      <section>
        <SectionHeading>About Me</SectionHeading>
        <div className={styles.content}>
          <p>
            I am an aspiring web developer focused on building web
            apps with React and Next.js.
          </p>
          <p>
            Over the past few years, I&apos;ve been learning,
            experimenting, and trying to build things that feel clean,
            efficient, and well-structured.
          </p>
          <p>
            I&apos;ve grown to really enjoy working in the React
            ecosystem - the component-driven approach just makes sense
            to me. I like how it encourages encapsulation, reuse, and
            small, meaningful pieces that come together to form
            something bigger.
          </p>
          <p>
            The path hasn&apos;t been easy. The web moves fast, and
            it&apos;s easy to feel stuck or behind. But I&apos;m still
            here, still learning, and still trying to get better
            project by project.
          </p>
          <p>
            You can see what I&apos;ve been working on in the{' '}
            <SmartLink href='/work'>Work</SmartLink> page or{' '}
            <SmartLink href='/contact'>get in touch</SmartLink> if
            you&apos;d like to connect.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

export default AboutPage;
