import React from 'react';

function useScrollDirection({
  initialDirection = 'up',
  threshold = 0,
}) {
  const [scrollDir, setScrollDir] = React.useState(initialDirection);
  const [shadowActive, setShadowActive] = React.useState(false);

  const lastScrollY = React.useRef(0);
  const ticking = React.useRef(false);

  const shadowThreshold = 10;

  React.useEffect(() => {
    const updateScrollDir = () => {
      const currentY = window.scrollY;

      // Shadow threshold
      const scrolledPastTop = currentY > shadowThreshold;
      setShadowActive((prev) =>
        prev !== scrolledPastTop ? scrolledPastTop : prev
      );

      // Direction threshold
      const scrolledBeyondThreshold =
        Math.abs(currentY - lastScrollY.current) >= threshold;

      if (scrolledBeyondThreshold) {
        const newDir = currentY > lastScrollY.current ? 'down' : 'up';

        setScrollDir((prev) => (newDir !== prev ? newDir : prev));

        lastScrollY.current = currentY > 0 ? currentY : 0;
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDir);
        ticking.current = true;
      }
    };

    // Use a passive event listener for performance
    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { scrollDir, shadowActive };
}

export default useScrollDirection;

/*
  Early implementation is shared below, and easy to understand.
  However, this implementation updates state on EVERY scroll event,
  meaning potentially lots of re-renders, and it also has state in
  an effect's dependency array, meaning a lot of event listener's
  being removed and attached.

  Above solves both by using a ref to track scroll position,
  and leveraging requestAnimationFrame to help throttle state
  updates - meaning scroll updates aren't firing loads of times
  per second, and instead just once every frame change.

  I leave the old implementation for reference.
*/

// function useScrollDirection({
//   initialDirection = 'up',
//   threshold = 0,
// }) {
//   const [scrollDir, setScrollDir] = React.useState(initialDirection);
//   const [scrollY, setScrollY] = React.useState(0);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > scrollY && currentScrollY > threshold) {
//         setScrollDir('down');
//       } else if (currentScrollY < scrollY) {
//         setScrollDir('up');
//       }

//       setScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll, {
//       passive: true,
//     });

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrollY, threshold]);

//   return scrollDir;
// }
