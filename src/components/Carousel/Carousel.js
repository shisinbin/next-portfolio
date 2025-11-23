'use client';

import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'react-feather';
import useHorizontalScrollControls from '@/hooks/useHorizontalScrollControls';
import styles from './Carousel.module.css';

const variants = {
  featured: {
    css: {
      '--carousel-snap': 'center',
      '--carousel-max-width': '380px',
      '--carousel-basis': '85%',
    },
    scrollFactor: 0.5,
  },
};

const DEFAULT_VARIANT = 'featured';

function Carousel({ items, variant = 'featured', className }) {
  const variantDef = variants[variant] ?? variants[DEFAULT_VARIANT];

  const { css: cssVars, scrollFactor } = variantDef;

  const { trackRef, canScrollLeft, canScrollRight, scroll } =
    useHorizontalScrollControls({ scrollFactor });

  const trackClassName = clsx(
    styles.track,
    canScrollLeft && styles.fadeLeftActive,
    canScrollRight && styles.fadeRightActive
  );

  return (
    <div
      className={clsx(styles.trackContainer, className)}
      style={cssVars}
    >
      {/* Scrollable track */}
      <div ref={trackRef} className={trackClassName}>
        {items.map((node, i) => (
          <div key={i} className={styles.slot}>
            {node}
          </div>
        ))}
      </div>

      {/* Fade left div */}
      <div
        className={clsx(
          styles.fade,
          styles.fadeLeft,
          canScrollLeft && styles.visible
        )}
      />

      {/* Fade right div */}
      <div
        className={clsx(
          styles.fade,
          styles.fadeRight,
          canScrollRight && styles.visible
        )}
      />

      {/* Scroll left button */}
      <button
        className={clsx(styles.scrollButton, styles.left)}
        disabled={!canScrollLeft}
        onClick={() => scroll('left')}
        aria-label='Scroll left'
      >
        <ChevronLeft />
      </button>

      {/* {Scroll right button} */}
      <button
        className={clsx(styles.scrollButton, styles.right)}
        disabled={!canScrollRight}
        onClick={() => scroll('right')}
        aria-label='Scroll right'
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default Carousel;
