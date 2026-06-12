// Adapted from reactbits.dev "Star Border" — animated light orbiting a button edge.
export default function StarBorder({ as: Tag = 'a', children, color = '#00f0ff', className = '', ...rest }) {
  return (
    <Tag className={`star-border ${className}`} {...rest}>
      <span className="sb-glow sb-top" style={{ background: `radial-gradient(circle, ${color}, transparent 12%)` }} />
      <span className="sb-glow sb-bottom" style={{ background: `radial-gradient(circle, ${color}, transparent 12%)` }} />
      <span className="sb-inner">{children}</span>
    </Tag>
  );
}
