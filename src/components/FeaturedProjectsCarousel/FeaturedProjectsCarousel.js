'use client';

import React from 'react';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'react-feather';
import FeaturedProjectCard from '../FeaturedProjectCard';
import SmartLink from '../SmartLink';
import styles from './FeaturedProjectsCarousel.module.css';

function FeaturedProjectsCarousel({ projects }) {
  const trackRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      // small epsilon to avoid flicker at boundaries
      const eps = 8;
      setCanScrollLeft(scrollLeft > eps);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - eps);
    };

    updateScrollState();

    track.addEventListener('scroll', updateScrollState, {
      passive: true,
    });
    // Update on resize too
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [projects]);

  const scrollByAmount = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.round(track.clientWidth * 0.8);
    track.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

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
