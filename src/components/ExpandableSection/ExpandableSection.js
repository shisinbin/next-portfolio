'use client';

import React from 'react';
import { ChevronRight } from 'react-feather';

import styles from './ExpandableSection.module.css';

function ExpandableSection({
  title = 'More info',
  children,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <section
      className={`${styles.wrapper} ${isOpen ? styles.open : ''}`}
    >
      <button
        className={styles.headerButton}
        onClick={() => setIsOpen((o) => !o)}
      >
        <ChevronRight
          className={`${styles.icon} ${
            isOpen ? styles.iconOpen : ''
          }`}
        />
        <span className={styles.headerButtonText}>{title}</span>
      </button>
      <div className={styles.animationWrapper}>
        <div className={styles.animation}>
          <div className={styles.transformWrapper}>
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpandableSection;

// 'use client';

// import React from 'react';
// import { ChevronRight } from 'react-feather';

// import styles from './ExpandableSection.module.css';

// function ExpandableSection({ children, defaultOpen = false }) {
//   const [isOpen, setIsOpen] = React.useState(defaultOpen);
//   const [height, setHeight] = React.useState(0);
//   const contentRef = React.useRef(null);

//   const calculateHeight = React.useCallback(() => {
//     if (isOpen && contentRef.current) {
//       const scrollHeight = contentRef.current.scrollHeight;
//       setHeight(scrollHeight + 48);
//     }
//   }, [isOpen]);

//   const toggleOpen = () => setIsOpen((prev) => !prev);

//   // Recalculate height when opened
//   React.useEffect(() => {
//     calculateHeight();
//   }, [isOpen, calculateHeight]);

//   // Recalculate height on window resize
//   React.useEffect(() => {
//     if (!isOpen) return;

//     let resizeFrame = null;

//     const handleResize = () => {
//       if (resizeFrame) {
//         cancelAnimationFrame(resizeFrame);
//       }
//       resizeFrame = requestAnimationFrame(() => {
//         calculateHeight();
//       });
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (resizeFrame) cancelAnimationFrame(resizeFrame);
//     };
//   });

//   return (
//     <section className={styles.wrapper}>
//       <button className={styles.headerButton} onClick={toggleOpen}>
//         <ChevronRight
//           className={`${styles.icon} ${
//             isOpen ? styles.iconOpen : ''
//           }`}
//         />
//         <span>Extra info</span>
//       </button>
//       <div
//         className={styles.contentWrapper}
//         style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
//       >
//         <div ref={contentRef} className={styles.content}>
//           {children}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ExpandableSection;
