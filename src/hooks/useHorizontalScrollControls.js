import React from 'react';

function useHorizontalScrollControls({
  eps = 8,
  scrollFactor = 0.8,
} = {}) {
  const trackRef = React.useRef(null);

  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  // Update scroll boundaries state
  const updateScrollState = React.useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;

    // Epsilons used to prevent flickers when close to edge
    setCanScrollLeft(scrollLeft > eps);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - eps);
  }, [eps]);

  // Attach even listeners
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();

    track.addEventListener('scroll', updateScrollState, {
      passive: true,
    });
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const amount = Math.round(track.clientWidth * scrollFactor);

    track.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return {
    trackRef,
    canScrollLeft,
    canScrollRight,
    scroll,
  };
}

export default useHorizontalScrollControls;
