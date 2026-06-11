import './PixelButton.css';

// Renders an <a> when given href, otherwise a <button>.
// variant: cyan | blue | yellow | pink | red
export default function PixelButton({
  children,
  href,
  onClick,
  variant = 'cyan',
  type = 'button',
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = `px-btn px-btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
