import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const WIPE_DURATION = 380; // must match the wipe animations in index.css

// Plays a CRT "channel change" wipe whenever the route changes.
export default function ScreenWipe() {
  const { pathname } = useLocation();
  const [wiping, setWiping] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return undefined;
    }
    window.scrollTo(0, 0);
    setWiping(true);
    const timer = setTimeout(() => setWiping(false), WIPE_DURATION);
    return () => clearTimeout(timer);
  }, [pathname]);

  return wiping ? <div className="screen-wipe" aria-hidden="true" /> : null;
}
