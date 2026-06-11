import { PROFILE } from '../data/profile';
import PixelButton from '../pixel-system/components/PixelButton';

export default function Bio() {
  return (
    <section className="page home">
      <div className="hero">
        <p className="hero-kicker">// INCOMING TRANSMISSION</p>
        <h1 className="hero-title glitch" data-text="DANIEL RICE">
          DANIEL RICE
        </h1>
        <p className="hero-sub">{PROFILE.tags.join(' · ')}</p>
      </div>

      <div className="pixel-panel bio-panel">
        <h2 className="panel-heading">
          &gt; WHOAMI<span className="cursor">█</span>
        </h2>
        <p className="bio-text">{PROFILE.bio}</p>
        <div className="bio-links">
          <PixelButton href={PROFILE.links.github} variant="cyan">
            GITHUB
          </PixelButton>
          <PixelButton href={PROFILE.links.linkedin} variant="blue">
            LINKEDIN
          </PixelButton>
          <PixelButton href={PROFILE.links.resume} variant="yellow">
            CV.PDF
          </PixelButton>
        </div>
      </div>
    </section>
  );
}
