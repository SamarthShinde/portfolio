// Adapted from reactbits.dev "Glitch Text" — RGB-split glitch headline.
// The visual work happens in CSS (.glitch[data-text]).
export default function GlitchText({ children, className = '' }) {
  return (
    <span className={`glitch ${className}`} data-text={children}>
      {children}
    </span>
  );
}
