import clsx from 'clsx';
import styles from './Section.module.css';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';

function Section({ children, className }) {
  return (
    <section className={clsx(styles.section, className)}>
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </section>
  );
}

export default Section;
