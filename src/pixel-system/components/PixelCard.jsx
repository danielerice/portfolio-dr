import PixelButton from './PixelButton';
import './PixelCard.css';

// Project cartridge card. Expects an entry from src/data/projects.js.
export default function PixelCard({ project, index = 0 }) {
  const { title, tagline, blurb, image, accent = 'cyan', links = [], placeholder } = project;

  return (
    <article className={`px-card px-card--${accent}`} style={{ '--stagger': `${index * 130}ms` }}>
      <div className="px-card-screen">
        {image ? (
          <img className="px-card-img" src={image} alt={`${title} screenshot`} />
        ) : (
          <div className="px-card-placeholder">
            <span>{placeholder ?? title.slice(0, 2).toUpperCase()}</span>
          </div>
        )}
        <div className="px-card-scan" aria-hidden="true" />
      </div>
      <div className="px-card-body">
        <h3 className="px-card-title">{title}</h3>
        {tagline && <p className="px-card-tagline">{tagline}</p>}
        <p className="px-card-blurb">{blurb}</p>
        <div className="px-card-links">
          {links.map((link) => (
            <PixelButton key={link.label} href={link.href} variant={accent}>
              {link.label}
            </PixelButton>
          ))}
        </div>
      </div>
    </article>
  );
}
