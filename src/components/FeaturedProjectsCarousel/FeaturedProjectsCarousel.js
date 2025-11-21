'use client';

import React from 'react';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'react-feather';
import FeaturedProjectCard from '../FeaturedProjectCard';
import styles from './FeaturedProjectsCarousel.module.css';
import useHorizontalScrollControls from '@/hooks/useHorizontalScrollControls';

function FeaturedProjectsCarousel({ projects }) {
  const { trackRef, canScrollLeft, canScrollRight, scrollByAmount } =
    useHorizontalScrollControls();

  const trackClassName = clsx(
    styles.track,
    canScrollLeft && styles.fadeLeftActive,
    canScrollRight && styles.fadeRightActive
  );

  if (!projects.length) return null;

  return (
    <div className={styles.trackContainer}>
      {/* Track */}
      <div ref={trackRef} className={trackClassName}>
        {projects.map((project) => (
          <div key={project.slug} className={styles.cardSlot}>
            <FeaturedProjectCard project={project} />
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
        onClick={() => scrollByAmount('left')}
        aria-label='Scroll left'
      >
        <ChevronLeft />
      </button>

      {/* {Scroll right button} */}
      <button
        className={clsx(styles.scrollButton, styles.right)}
        disabled={!canScrollRight}
        onClick={() => scrollByAmount('right')}
        aria-label='Scroll right'
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default FeaturedProjectsCarousel;
