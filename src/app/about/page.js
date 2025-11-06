import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import styles from './aboutpage.module.css';

export const metadata = {
  title: 'About Me',
};

function AboutPage() {
  return (
    <Section>
      <SectionHeading>About Me</SectionHeading>
      <div className={styles.content}>
        <p>
          I’m a front-end developer who enjoys bridging design and
          technology. I specialise in React and modern web tooling,
          crafting interfaces that balance aesthetics with
          accessibility and performance.
        </p>
        <p>
          When I’m not coding, you’ll probably find me sketching UI
          ideas or exploring new tech trends. I’m currently open to
          freelance and full-time opportunities.
        </p>
      </div>
    </Section>
  );
}

export default AboutPage;
