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
            I am an aspiring web developer with a focus on building
            web apps using React and Next.js.
          </p>
          <p>
            I&apos;ve spent the past few years learning,
            experimenting, and trying to build things that are clean,
            efficient, and well-structured.
          </p>
          <p>
            I care about the details - how things are built, how they
            work together, and how they hold up over time.
          </p>
          <p>
            It hasn&apos;t been an easy path. Web development moves
            fast, and it&apos;s easy to get bogged down or feel
            behind. But I&apos;m still here, learning and improving.
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
