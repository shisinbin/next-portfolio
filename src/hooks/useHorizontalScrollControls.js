import React from 'react';

function useHorizontalScrollControls({
  eps = 8,
  scrollFactor = 0.8,
} = {}) {
  const trackRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;

      setCanScrollLeft(scrollLeft > eps);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - eps);
    };

    update();

    track.addEventListener('scroll', update, {
      passive: true,
    });
    window.addEventListener('resize', update);

    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [eps]);

  const scrollByAmount = (direction) => {
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
    scrollByAmount,
  };
}

export default useHorizontalScrollControls;
