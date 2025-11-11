import React from 'react';

function useScrollDirection({
  initialDirection = 'up',
  threshold = 0,
}) {
  const [scrollDir, setScrollDir] = React.useState(initialDirection);
  const [hasScrolled, setHasScrolled] = React.useState(false);

  const lastScrollY = React.useRef(0);
  const ticking = React.useRef(false);

  React.useEffect(() => {
    const updateScrollDir = () => {
      const currentY = window.scrollY;

      setHasScrolled(currentY > 10);

      if (Math.abs(currentY - lastScrollY.current) < threshold) {
        ticking.current = false;
        return;
      }

      const newDir = currentY > lastScrollY.current ? 'down' : 'up';

      if (newDir !== scrollDir) {
        setScrollDir(newDir);
      }

      lastScrollY.current = currentY > 0 ? currentY : 0;
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
  }, [scrollDir, threshold]);

  return { scrollDir, hasScrolled };
}

export default useScrollDirection;

/*
  Implentation below is mine, and easy to understand.
  However, this implementation updates state on EVERY scroll event,
  meaning potentially lots of re-renders.
  
  The implementation above avoids state updates when the scroll
  direction hasn't changed. It uses requestAnimationFrame to help with this.
  I don't really understand it, don't really want to invest lots of time
  to do so either, but I'll leave it in, with this note and my implementation below
  for reference.
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
//         // Scrolling down
//         setScrollDir('down');
//       } else if (currentScrollY < scrollY) {
//         // Scrolling up
//         setScrollDir('up');
//       }

//       setScrollY(currentScrollY);
//     };

//     // Use a passive event listener for performance
//     window.addEventListener('scroll', handleScroll, {
//       passive: true,
//     });

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrollY, threshold]);

//   return scrollDir;
// }
