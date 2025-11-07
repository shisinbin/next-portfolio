'use client';

import React from 'react';
import { ChevronRight } from 'react-feather';

import styles from './ExpandableSection.module.css';

function ExpandableSection({ children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const [height, setHeight] = React.useState(0);
  const contentRef = React.useRef(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  React.useEffect(() => {
    if (isOpen && contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(scrollHeight + 48);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <section className={styles.wrapper}>
      <button className={styles.header} onClick={toggleOpen}>
        <ChevronRight
          className={`${styles.icon} ${
            isOpen ? styles.iconOpen : ''
          }`}
        />
        <span>Extra info</span>
      </button>
      <div
        className={styles.contentWrapper}
        style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default ExpandableSection;
