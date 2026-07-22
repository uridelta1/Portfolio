export default function Panel({ open, fileTag, title, subtitle, onClose, children }) {
  return (
    <div className={`panel-overlay ${open ? "open" : ""}`}>
      <div className="panel-scrim" onClick={onClose} />
      <div className="panel" role="dialog" aria-modal="true" aria-hidden={!open}>
        <button className="panel-close" onClick={onClose} aria-label="Close panel">
          ✕
        </button>
        <div className="panel-file-tag">{fileTag}</div>
        <h2>{title}</h2>
        {subtitle && <p className="panel-sub">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
