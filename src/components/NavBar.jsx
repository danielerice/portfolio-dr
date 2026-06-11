import { NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'HOME', end: true },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/contact', label: 'CONTACT' },
];

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="nav-brand">
        <span className="nav-led" aria-hidden="true" />
        <span className="nav-name">DANIEL&nbsp;RICE</span>
        <span className="nav-sub">SOFTWARE.DEV</span>
      </div>
      <nav className="nav-links" aria-label="Primary">
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
          >
            <span className="nav-caret" aria-hidden="true">
              ▸
            </span>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
