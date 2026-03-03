import React from 'react';
function SectionTitle({ label, title, subtitle }) {
  return (
    <header>
      {label ? <span className="label">{label}</span> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  );
}

export default SectionTitle;
