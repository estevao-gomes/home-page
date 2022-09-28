import { useState, useEffect, RefObject } from "react";

// Checks if element from ref is on viewport using "IntersectionObserver" API. Returns state which is true when object is on viewport.
export function useIsInViewport(ref: RefObject<HTMLDivElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );

    observer.observe(ref?.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
