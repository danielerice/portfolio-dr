import { useCallback, useEffect, useRef, useState } from 'react';
import { preloadAssets } from './preload';
import './SplashScreen.css';

const BOOT_LINES = [
  { text: 'DR-OS BIOS v2.6.0', status: '' },
  { text: 'CPU ............... MOS 6502', status: '1.02 MHZ' },
  { text: 'MEMORY CHECK ......', status: '64K OK' },
  { text: 'PIXEL ASSETS ......', status: 'LOADED' },
  { text: 'STARFIELD ENGINE ..', status: 'ONLINE' },
  { text: 'CRT CALIBRATION ...', status: 'DONE' },
];

const LINE_INTERVAL = 220; // ms between boot lines
const EXIT_DURATION = 450; // must match the crt-off animation in SplashScreen.css

export default function SplashScreen({ onDone }) {
  const [lineCount, setLineCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const doneRef = useRef(false);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setExiting(true);
    setTimeout(onDone, EXIT_DURATION);
  }, [onDone]);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    if (reduced) {
      preloadAssets().then(onDone, onDone);
      return undefined;
    }

    const lineTimer = setInterval(() => {
      setLineCount((count) => {
        if (count >= BOOT_LINES.length) {
          clearInterval(lineTimer);
          return count;
        }
        return count + 1;
      });
    }, LINE_INTERVAL);

    // The boot sequence is the loading screen: dismiss only once assets are
    // ready AND the sequence has had time to play out.
    const minTime = new Promise((resolve) =>
      setTimeout(resolve, BOOT_LINES.length * LINE_INTERVAL + 1100)
    );
    Promise.all([preloadAssets(), minTime]).then(finish, finish);

    const skip = () => finish();
    window.addEventListener('keydown', skip);
    return () => {
      clearInterval(lineTimer);
      window.removeEventListener('keydown', skip);
    };
  }, [finish, onDone]);

  return (
    <div
      className={`splash ${exiting ? 'splash-exit' : ''}`}
      onClick={finish}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="splash-screen">
        <div className="boot-log">
          {BOOT_LINES.slice(0, lineCount).map((line) => (
            <p key={line.text} className="boot-line">
              {line.text} <span className="boot-ok">{line.status}</span>
            </p>
          ))}
          {lineCount >= BOOT_LINES.length && (
            <>
              <div className="boot-progress" aria-hidden="true">
                <div className="boot-progress-fill" />
              </div>
              <p className="boot-line boot-launch">
                &gt; LAUNCHING PORTFOLIO.EXE<span className="cursor">█</span>
              </p>
            </>
          )}
        </div>
        <p className="splash-skip">PRESS ANY KEY TO SKIP</p>
      </div>
    </div>
  );
}
